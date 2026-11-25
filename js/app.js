/* ==========================================================================
   OTAKU CANVAS — MAIN INTERACTIVE ENGINE (js/app.js)
   Powers gallery rendering, blurred ambient backdrop fill, search, filters,
   favourites, preview modal, multi-resolution downloads & notifications.
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "otaku_canvas_favourites_v1";
  const wallpapers = Array.isArray(window.OTAKU_WALLPAPERS)
    ? window.OTAKU_WALLPAPERS
    : [];

  // Shared application state
  const state = {
    search: "",
    category: "All",
    series: "all",
    character: "all",
    sort: "featured",
    favouritesOnly: false,
    favourites: loadFavourites(),
    activeWallpaper: null,
    selectedResolutionIndex: 0
  };

  // ========================================================================
  // 1. HELPER UTILITIES
  // ========================================================================
  function loadFavourites() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      return [];
    }
  }

  function saveFavourites() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favourites));
    } catch (err) {
      showToast("Could not save favourites in this browser mode.");
    }
  }

  function isFavourite(id) {
    return state.favourites.includes(id);
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function safeCssUrl(url) {
    return String(url || "").replace(/"/g, "%22").replace(/'/g, "%27");
  }

  function slugify(text) {
    return String(text)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("toast-hiding");
      toast.addEventListener("animationend", () => toast.remove(), {
        once: true
      });
    }, 2600);
  }

  function updateFavouriteCounters() {
    const count = state.favourites.length;
    const navBadge = document.getElementById("fav-count-badge");
    const mobileBadge = document.getElementById("mobile-fav-count");

    if (navBadge) navBadge.textContent = String(count);
    if (mobileBadge) mobileBadge.textContent = String(count);
  }

  // ========================================================================
  // 2. SHARED SITE FEATURES (Works on Home, About, Contact & 404 pages)
  // ========================================================================
  function initSharedFeatures() {
    document.body.classList.add("js-ready");

    // Set footer copyright year automatically
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    updateFavouriteCounters();

    // Sticky navbar scrolled glass effect + Back-to-top button visibility
    const navbar = document.getElementById("navbar");
    const scrollTopBtn = document.getElementById("scroll-top-btn");

    function handleScroll() {
      const y = window.scrollY || window.pageYOffset;
      if (navbar) {
        navbar.classList.toggle("scrolled", y > 24);
      }
      if (scrollTopBtn) {
        scrollTopBtn.hidden = y < 360;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Mobile slide-out navigation drawer
    const menuBtn = document.getElementById("mobile-menu-btn");
    const drawer = document.getElementById("mobile-drawer");
    const drawerOverlay = document.getElementById("mobile-drawer-overlay");
    const drawerClose = document.getElementById("mobile-drawer-close");

    function openDrawer() {
      if (!drawer || !drawerOverlay) return;
      drawerOverlay.hidden = false;
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
      if (!drawer || !drawerOverlay) return;
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      drawerOverlay.hidden = true;
      if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
      if (!state.activeWallpaper) {
        document.body.style.overflow = "";
      }
    }

    if (menuBtn) menuBtn.addEventListener("click", openDrawer);
    if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

    document.querySelectorAll(".mobile-link").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    // Scroll reveal observer for smooth section entrances
    const revealItems = document.querySelectorAll(".section .reveal-up");
    if (revealItems.length > 0) {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12 }
        );

        revealItems.forEach((el) => observer.observe(el));
      } else {
        revealItems.forEach((el) => el.classList.add("is-visible"));
      }
    }

    // Escape key closes modal or mobile drawer
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (state.activeWallpaper) {
          closeModal();
        } else if (drawer && drawer.classList.contains("is-open")) {
          closeDrawer();
        }
      }
    });

    // If on About/Contact/404 page, Favourites button sends user to Home Favourites
    const galleryGrid = document.getElementById("wallpaper-grid");
    if (!galleryGrid) {
      const navFavBtn = document.getElementById("nav-fav-btn");
      const mobileFavBtn = document.getElementById("mobile-fav-btn");
      const goToFavourites = () => {
        window.location.href = "index.html#favourites";
      };
      if (navFavBtn) navFavBtn.addEventListener("click", goToFavourites);
      if (mobileFavBtn) mobileFavBtn.addEventListener("click", goToFavourites);
    }
  }

  // ========================================================================
  // 3. WALLPAPER CARD & SKELETON BUILDERS
  // ========================================================================
  function createSkeletonMarkup(count) {
    let html = "";
    for (let i = 0; i < count; i++) {
      html += `
        <div class="skeleton-card" aria-hidden="true">
          <div class="skeleton-media"></div>
          <div class="skeleton-body">
            <div class="skeleton-line"></div>
            <div class="skeleton-line short"></div>
          </div>
        </div>
      `;
    }
    return html;
  }

  function createWallpaperCard(item, index) {
    const saved = isFavourite(item.id);
    const topRes =
      item.resolutions && item.resolutions.length > 0
        ? item.resolutions[0].label.split(" ")[0]
        : "HD";

    const card = document.createElement("article");
    card.className = "wallpaper-card card-enter";
    card.style.animationDelay = `${Math.min(index * 55, 380)}ms`;
    card.dataset.id = item.id;

    card.innerHTML = `
      <div class="card-media" tabindex="0" role="button" aria-label="Preview ${escapeHtml(item.title)}">
        <div class="card-blur-bg" style="background-image: url('${safeCssUrl(item.image)}')" aria-hidden="true"></div>
        <img
          class="card-img"
          src="${item.image}"
          alt="${escapeHtml(item.alt || item.title)}"
          loading="lazy"
        />
        <span class="card-res-badge">${escapeHtml(topRes)}</span>
        <button
          type="button"
          class="card-fav-btn ${saved ? "is-fav" : ""}"
          data-fav-id="${escapeHtml(item.id)}"
          aria-label="${saved ? "Remove from favourites" : "Save to favourites"}"
          aria-pressed="${saved ? "true" : "false"}"
        >
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <div class="card-overlay">
          <span class="card-preview-btn">Preview &amp; Download</span>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <div class="card-meta">
          <span class="card-series">${escapeHtml(item.series)} • ${escapeHtml(item.character)}</span>
          <span class="card-tag">${escapeHtml(item.category)}</span>
        </div>
      </div>
    `;

    // Clicking artwork opens preview modal
    const mediaEl = card.querySelector(".card-media");
    mediaEl.addEventListener("click", () => openModal(item.id));
    mediaEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(item.id);
      }
    });

    // Clicking heart saves/removes favourite without opening modal
    const favBtn = card.querySelector(".card-fav-btn");
    favBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavourite(item.id, favBtn);
    });

    return card;
  }

  // ========================================================================
  // 4. FAVOURITES TOGGLE & SYNC
  // ========================================================================
  function toggleFavourite(id, triggerButton) {
    const item = wallpapers.find((w) => w.id === id);
    if (!item) return;

    const alreadySaved = isFavourite(id);
    if (alreadySaved) {
      state.favourites = state.favourites.filter((favId) => favId !== id);
      showToast(`Removed "${item.title}" from Favourites`);
    } else {
      state.favourites.push(id);
      showToast(`Saved "${item.title}" to Favourites ♥`);
    }

    saveFavourites();
    updateFavouriteCounters();
    syncHeartButtons(id);

    if (triggerButton) {
      triggerButton.classList.remove("animate-pop");
      void triggerButton.offsetWidth; // Restart animation cleanly
      triggerButton.classList.add("animate-pop");
    }

    // If user is currently viewing Favourites-only mode, refresh grid immediately
    if (state.favouritesOnly) {
      renderMainGallery(false);
    }
  }

  function syncHeartButtons(id) {
    const saved = isFavourite(id);

    // Update all matching cards (Popular, Recent, and Main Gallery)
    document
      .querySelectorAll(`.card-fav-btn[data-fav-id="${id}"]`)
      .forEach((btn) => {
        btn.classList.toggle("is-fav", saved);
        btn.setAttribute("aria-pressed", saved ? "true" : "false");
        btn.setAttribute(
          "aria-label",
          saved ? "Remove from favourites" : "Save to favourites"
        );
      });

    // Update preview modal button if this wallpaper is open
    if (state.activeWallpaper && state.activeWallpaper.id === id) {
      const modalFavBtn = document.getElementById("modal-fav-btn");
      const modalFavText = document.getElementById("modal-fav-text");
      if (modalFavBtn) {
        modalFavBtn.classList.toggle("is-fav", saved);
        modalFavBtn.setAttribute("aria-pressed", saved ? "true" : "false");
      }
      if (modalFavText) {
        modalFavText.textContent = saved ? "Saved" : "Save";
      }
    }
  }

  // ========================================================================
  // 5. FILTERING, SORTING & GALLERY RENDERING
  // ========================================================================
  function getFilteredWallpapers() {
    const query = state.search.trim().toLowerCase();

    const filtered = wallpapers.filter((item) => {
      if (state.favouritesOnly && !isFavourite(item.id)) return false;
      if (state.category !== "All" && item.category !== state.category) {
        return false;
      }
      if (state.series !== "all" && item.series !== state.series) return false;
      if (state.character !== "all" && item.character !== state.character) {
        return false;
      }

      if (query) {
        const searchable = [
          item.title,
          item.series,
          item.character,
          item.category,
          ...(item.tags || [])
        ]
          .join(" ")
          .toLowerCase();
        if (!searchable.includes(query)) return false;
      }

      return true;
    });

    const sorted = [...filtered];
    if (state.sort === "popular") {
      sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    } else if (state.sort === "recent") {
      sorted.sort(
        (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    } else if (state.sort === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sorted;
  }

  function renderShowcases() {
    const popularGrid = document.getElementById("popular-grid");
    const recentGrid = document.getElementById("recent-grid");

    if (popularGrid) {
      const topPopular = [...wallpapers]
        .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        .slice(0, 4);
      popularGrid.innerHTML = "";
      topPopular.forEach((item, idx) => {
        popularGrid.appendChild(createWallpaperCard(item, idx));
      });
    }

    if (recentGrid) {
      const latestAdded = [...wallpapers]
        .sort(
          (a, b) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        )
        .slice(0, 4);
      recentGrid.innerHTML = "";
      latestAdded.forEach((item, idx) => {
        recentGrid.appendChild(createWallpaperCard(item, idx));
      });
    }
  }

  function renderMainGallery(showShimmer) {
    const grid = document.getElementById("wallpaper-grid");
    const emptyState = document.getElementById("empty-state");
    const emptyTitle = document.getElementById("empty-state-title");
    const emptyText = document.getElementById("empty-state-text");
    const resultsCount = document.getElementById("results-count");

    if (!grid) return;

    const executeRender = () => {
      const list = getFilteredWallpapers();
      grid.innerHTML = "";

      if (resultsCount) {
        if (state.favouritesOnly) {
          resultsCount.textContent = `Showing ${list.length} saved favourite${
            list.length === 1 ? "" : "s"
          }`;
        } else {
          resultsCount.textContent = `Showing ${list.length} of ${wallpapers.length} wallpapers`;
        }
      }

      if (list.length === 0) {
        if (emptyState) {
          emptyState.hidden = false;
          if (state.favouritesOnly && state.favourites.length === 0) {
            if (emptyTitle) emptyTitle.textContent = "No saved favourites yet";
            if (emptyText) {
              emptyText.textContent =
                "Tap the heart icon on any wallpaper you love to save it here for quick access anytime.";
            }
          } else {
            if (emptyTitle) emptyTitle.textContent = "No matching wallpapers found";
            if (emptyText) {
              emptyText.textContent =
                "Try a different keyword or reset your filters to explore the full Otaku Canvas collection.";
            }
          }
        }
        return;
      }

      if (emptyState) emptyState.hidden = true;

      list.forEach((item, idx) => {
        grid.appendChild(createWallpaperCard(item, idx));
      });
    };

    if (showShimmer) {
      if (emptyState) emptyState.hidden = true;
      grid.innerHTML = createSkeletonMarkup(6);
      setTimeout(executeRender, 320);
    } else {
      executeRender();
    }
  }

  function populateFilterControls() {
    const statTotal = document.getElementById("stat-total-wallpapers");
    if (statTotal) {
      statTotal.textContent = `${wallpapers.length}+`;
    }

    // 1. Category Pills
    const pillsWrap = document.getElementById("category-pills");
    if (pillsWrap) {
      const categories = [
        "All",
        ...new Set(wallpapers.map((w) => w.category).filter(Boolean))
      ];
      pillsWrap.innerHTML = "";
      categories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `category-pill ${cat === state.category ? "active" : ""}`;
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", cat === state.category ? "true" : "false");
        btn.dataset.category = cat;
        btn.textContent = cat;
        btn.addEventListener("click", () => {
          state.category = cat;
          updateCategoryPillsUI();
          renderMainGallery(false);
        });
        pillsWrap.appendChild(btn);
      });
    }

    // 2. Anime Series Dropdown
    const seriesSelect = document.getElementById("series-filter");
    if (seriesSelect) {
      const seriesList = [...new Set(wallpapers.map((w) => w.series))].sort();
      seriesList.forEach((series) => {
        const option = document.createElement("option");
        option.value = series;
        option.textContent = series;
        seriesSelect.appendChild(option);
      });
    }

    // 3. Character Dropdown
    const characterSelect = document.getElementById("character-filter");
    if (characterSelect) {
      const characters = [...new Set(wallpapers.map((w) => w.character))].sort();
      characters.forEach((charName) => {
        const option = document.createElement("option");
        option.value = charName;
        option.textContent = charName;
        characterSelect.appendChild(option);
      });
    }
  }

  function updateCategoryPillsUI() {
    document.querySelectorAll(".category-pill").forEach((pill) => {
      const isActive = pill.dataset.category === state.category;
      pill.classList.toggle("active", isActive);
      pill.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function updateFavouriteModeUI() {
    const favToggleBtn = document.getElementById("fav-toggle-btn");
    const navFavBtn = document.getElementById("nav-fav-btn");

    if (favToggleBtn) {
      favToggleBtn.classList.toggle("active", state.favouritesOnly);
      favToggleBtn.setAttribute(
        "aria-pressed",
        state.favouritesOnly ? "true" : "false"
      );
    }
    if (navFavBtn) {
      navFavBtn.classList.toggle("active", state.favouritesOnly);
    }
  }

  function resetAllFilters() {
    state.search = "";
    state.category = "All";
    state.series = "all";
    state.character = "all";
    state.sort = "featured";
    state.favouritesOnly = false;

    const heroInput = document.getElementById("hero-search-input");
    const galleryInput = document.getElementById("gallery-search");
    const seriesSelect = document.getElementById("series-filter");
    const charSelect = document.getElementById("character-filter");
    const sortSelect = document.getElementById("sort-filter");

    if (heroInput) heroInput.value = "";
    if (galleryInput) galleryInput.value = "";
    if (seriesSelect) seriesSelect.value = "all";
    if (charSelect) charSelect.value = "all";
    if (sortSelect) sortSelect.value = "featured";

    updateCategoryPillsUI();
    updateFavouriteModeUI();
    renderMainGallery(false);
  }

  function scrollToGallery() {
    const galleryEl = document.getElementById("gallery");
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // ========================================================================
  // 6. CINEMATIC PREVIEW MODAL & REAL MULTI-RESOLUTION DOWNLOAD
  // ========================================================================
  function openModal(id) {
    const item = wallpapers.find((w) => w.id === id);
    const modal = document.getElementById("preview-modal");
    if (!item || !modal) return;

    state.activeWallpaper = item;
    state.selectedResolutionIndex = 0;

    const modalImg = document.getElementById("modal-image");
    const modalBlurBg = document.getElementById("modal-blur-bg");
    const imgLoader = document.getElementById("modal-img-loader");
    const modalTitle = document.getElementById("modal-title");
    const modalCategory = document.getElementById("modal-category");
    const modalPop = document.getElementById("modal-popularity");
    const modalSeries = document.getElementById("modal-series");
    const modalCharacter = document.getElementById("modal-character");
    const modalArtist = document.getElementById("modal-artist");
    const modalLicense = document.getElementById("modal-license");
    const modalTags = document.getElementById("modal-tags");
    const modalResolutions = document.getElementById("modal-resolutions");
    const modalMoreInfo = document.getElementById("modal-more-info");

    if (modalMoreInfo) {
      modalMoreInfo.removeAttribute("open");
    }

    if (modalBlurBg) {
      modalBlurBg.style.backgroundImage = `url("${safeCssUrl(item.image)}")`;
    }

    if (modalImg) {
      if (imgLoader) imgLoader.classList.add("is-loading");
      modalImg.onload = () => {
        if (imgLoader) imgLoader.classList.remove("is-loading");
      };
      modalImg.onerror = () => {
        if (imgLoader) imgLoader.classList.remove("is-loading");
      };
      modalImg.src = item.image;
      modalImg.alt = item.alt || item.title;
    }

    if (modalTitle) modalTitle.textContent = item.title;
    if (modalCategory) modalCategory.textContent = item.category;
    if (modalPop) modalPop.textContent = `${item.popularity || 90}% Rating`;
    if (modalSeries) modalSeries.textContent = item.series;
    if (modalCharacter) modalCharacter.textContent = item.character;
    if (modalArtist) modalArtist.textContent = item.artist || "Otaku Canvas";
    if (modalLicense) modalLicense.textContent = item.license || "Free Personal Use";

    if (modalTags) {
      modalTags.innerHTML = (item.tags || [])
        .map((tag) => `<span class="modal-tag">#${escapeHtml(tag)}</span>`)
        .join("");
    }

    // Build Resolution Buttons
    if (modalResolutions) {
      modalResolutions.innerHTML = "";
      const resolutions =
        item.resolutions && item.resolutions.length > 0
          ? item.resolutions
          : [{ label: "Full HD", width: 1920, height: 1080, url: "" }];

      resolutions.forEach((res, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `res-option ${idx === 0 ? "active" : ""}`;
        btn.textContent = `${res.label} (${res.width}×${res.height})`;
        btn.addEventListener("click", () => {
          state.selectedResolutionIndex = idx;
          modalResolutions
            .querySelectorAll(".res-option")
            .forEach((b, i) => b.classList.toggle("active", i === idx));
          updateSelectedResolutionUI();
        });
        modalResolutions.appendChild(btn);
      });
    }

    updateSelectedResolutionUI();
    syncHeartButtons(item.id);

    modal.hidden = false;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function updateSelectedResolutionUI() {
    const item = state.activeWallpaper;
    if (!item) return;

    const resolutions = item.resolutions || [
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ];
    const current = resolutions[state.selectedResolutionIndex] || resolutions[0];

    const dimBadge = document.getElementById("modal-dimensions");
    const downloadLabel = document.getElementById("modal-download-label");

    if (dimBadge) {
      dimBadge.textContent = `${current.width} × ${current.height}`;
    }
    if (downloadLabel) {
      downloadLabel.textContent = `Download ${current.label}`;
    }
  }

  function closeModal() {
    const modal = document.getElementById("preview-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.hidden = true;
    state.activeWallpaper = null;
    document.body.style.overflow = "";
  }

  function triggerFileDownload(href, filename) {
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function downloadActiveWallpaper() {
    const item = state.activeWallpaper;
    if (!item) return;

    const resolutions = item.resolutions || [
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ];
    const chosen = resolutions[state.selectedResolutionIndex] || resolutions[0];
    const safeName = `otaku-canvas-${slugify(item.title)}-${chosen.width}x${chosen.height}`;

    // Case 1: Real custom image file provided for this resolution
    if (chosen.url) {
      const extMatch = chosen.url.match(/\.(webp|png|jpe?g)$/i);
      const ext = extMatch ? extMatch[0].toLowerCase() : ".jpg";
      triggerFileDownload(chosen.url, `${safeName}${ext}`);
      showToast(`Downloading ${item.title} (${chosen.label})...`);
      return;
    }

    // Case 2: Built-in SVG starter artwork -> export crisp PNG at exact resolution
    if (item.image && item.image.startsWith("data:image/svg+xml")) {
      showToast(`Preparing ${chosen.label} PNG (${chosen.width}×${chosen.height})...`);
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = chosen.width;
          canvas.height = chosen.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, chosen.width, chosen.height);
          const pngUrl = canvas.toDataURL("image/png");
          triggerFileDownload(pngUrl, `${safeName}.png`);
          showToast(`Downloaded "${item.title}" in ${chosen.label}!`);
        } catch (err) {
          triggerFileDownload(item.image, `${safeName}.svg`);
          showToast(`Downloaded "${item.title}"!`);
        }
      };
      img.src = item.image;
      return;
    }

    // Case 3: Real single image file stored in item.image
    if (item.image) {
      const extMatch = item.image.match(/\.(webp|png|jpe?g)$/i);
      const ext = extMatch ? extMatch[0].toLowerCase() : ".jpg";
      triggerFileDownload(item.image, `${safeName}${ext}`);
      showToast(`Downloading "${item.title}"...`);
    }
  }

  // ========================================================================
  // 7. WIRE UP HOMEPAGE INTERACTIONS
  // ========================================================================
  function initGalleryPage() {
    const galleryGrid = document.getElementById("wallpaper-grid");
    if (!galleryGrid) return;

    populateFilterControls();
    renderShowcases();

    // Check if user arrived from another page clicking "Favourites"
    if (window.location.hash === "#favourites") {
      state.favouritesOnly = true;
      updateFavouriteModeUI();
      setTimeout(scrollToGallery, 250);
    }

    // Initial render with smooth skeleton shimmer loading state
    renderMainGallery(true);

    // Hero Search Form
    const heroSearchForm = document.getElementById("hero-search-form");
    const heroSearchInput = document.getElementById("hero-search-input");
    const gallerySearchInput = document.getElementById("gallery-search");

    if (heroSearchForm && heroSearchInput) {
      heroSearchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        state.search = heroSearchInput.value;
        state.favouritesOnly = false;
        if (gallerySearchInput) gallerySearchInput.value = state.search;
        updateFavouriteModeUI();
        renderMainGallery(false);
        scrollToGallery();
      });
    }

    // Quick Category Tags in Hero
    document.querySelectorAll(".quick-tag").forEach((tagBtn) => {
      tagBtn.addEventListener("click", () => {
        state.category = tagBtn.dataset.category || "All";
        state.favouritesOnly = false;
        updateCategoryPillsUI();
        updateFavouriteModeUI();
        renderMainGallery(false);
        scrollToGallery();
      });
    });

    // Popular & Recent Showcase "View All" buttons
    const viewAllPopular = document.getElementById("view-all-popular-btn");
    const viewAllRecent = document.getElementById("view-all-recent-btn");
    const sortSelect = document.getElementById("sort-filter");

    if (viewAllPopular) {
      viewAllPopular.addEventListener("click", () => {
        state.sort = "popular";
        state.favouritesOnly = false;
        if (sortSelect) sortSelect.value = "popular";
        updateFavouriteModeUI();
        renderMainGallery(false);
        scrollToGallery();
      });
    }

    if (viewAllRecent) {
      viewAllRecent.addEventListener("click", () => {
        state.sort = "recent";
        state.favouritesOnly = false;
        if (sortSelect) sortSelect.value = "recent";
        updateFavouriteModeUI();
        renderMainGallery(false);
        scrollToGallery();
      });
    }

    // Gallery Live Search & Filter Dropdowns
    if (gallerySearchInput) {
      gallerySearchInput.addEventListener("input", (event) => {
        state.search = event.target.value;
        if (heroSearchInput) heroSearchInput.value = state.search;
        renderMainGallery(false);
      });
    }

    const seriesSelect = document.getElementById("series-filter");
    if (seriesSelect) {
      seriesSelect.addEventListener("change", (event) => {
        state.series = event.target.value;
        renderMainGallery(false);
      });
    }

    const charSelect = document.getElementById("character-filter");
    if (charSelect) {
      charSelect.addEventListener("change", (event) => {
        state.character = event.target.value;
        renderMainGallery(false);
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", (event) => {
        state.sort = event.target.value;
        renderMainGallery(false);
      });
    }

    // Favourites Filter Buttons (Gallery bar, Top Navbar, Mobile Drawer)
    const favToggleBtn = document.getElementById("fav-toggle-btn");
    const navFavBtn = document.getElementById("nav-fav-btn");
    const mobileFavBtn = document.getElementById("mobile-fav-btn");

    if (favToggleBtn) {
      favToggleBtn.addEventListener("click", () => {
        state.favouritesOnly = !state.favouritesOnly;
        updateFavouriteModeUI();
        renderMainGallery(false);
      });
    }

    const openFavouritesView = () => {
      state.favouritesOnly = true;
      updateFavouriteModeUI();
      renderMainGallery(false);
      scrollToGallery();
    };

    if (navFavBtn) navFavBtn.addEventListener("click", openFavouritesView);
    if (mobileFavBtn) mobileFavBtn.addEventListener("click", openFavouritesView);

    // Reset Buttons
    const resetBtn = document.getElementById("reset-filters-btn");
    const emptyResetBtn = document.getElementById("empty-reset-btn");

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        resetAllFilters();
        showToast("All filters reset");
      });
    }
    if (emptyResetBtn) {
      emptyResetBtn.addEventListener("click", resetAllFilters);
    }

    // Preview Modal Controls
    const modal = document.getElementById("preview-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalFavBtn = document.getElementById("modal-fav-btn");
    const modalDownloadBtn = document.getElementById("modal-download-btn");

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    if (modal) {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
      });
    }
    if (modalFavBtn) {
      modalFavBtn.addEventListener("click", () => {
        if (state.activeWallpaper) {
          toggleFavourite(state.activeWallpaper.id, modalFavBtn);
        }
      });
    }
    if (modalDownloadBtn) {
      modalDownloadBtn.addEventListener("click", downloadActiveWallpaper);
    }
  }

  // Start everything once the page HTML is ready
  document.addEventListener("DOMContentLoaded", () => {
    initSharedFeatures();
    initGalleryPage();
  });
})();