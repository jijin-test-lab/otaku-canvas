/* ==========================================================================
   OTAKU CANVAS — WALLPAPER CATALOG (js/data.js)
   ==========================================================================
   HOW TO ADD MORE WALLPAPERS LATER:
   1. Put your image file inside assets/images/
   2. Copy the first wallpaper block below (from { to },) and paste it above it.
   3. Give it a new id (like "oc-036") and change the title, series, character,
      category, and image filename (matching capital letters exactly!).
   ========================================================================== */

const WALLPAPERS = [
  {
    id: "oc-035",
    title: "Monkey D. Luffy — Future Pirate King",
    series: "One Piece",
    character: "Monkey D. Luffy",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Monkey D. Luffy from One Piece anime wallpaper",
    tags: ["one piece", "luffy", "monkey d luffy", "pirate king", "shonen"],
    popularity: 99,
    dateAdded: "2026-11-26",
    image: "assets/images/luffy-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/luffy-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-034",
    title: "Roronoa Zoro — King of Hell",
    series: "One Piece",
    character: "Roronoa Zoro",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Roronoa Zoro from One Piece anime wallpaper",
    tags: ["one piece", "zoro", "roronoa zoro", "swordsman", "shonen"],
    popularity: 99,
    dateAdded: "2026-11-26",
    image: "assets/images/zoro-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/zoro-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-033",
    title: "Shanks — Red-Haired Emperor",
    series: "One Piece",
    character: "Red-Haired Shanks",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Red-Haired Shanks from One Piece anime wallpaper",
    tags: ["one piece", "shanks", "red hair", "yonko", "shonen"],
    popularity: 98,
    dateAdded: "2026-11-26",
    image: "assets/images/shanks.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/shanks.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-032",
    title: "One Piece — Conqueror's Gaze",
    series: "One Piece",
    character: "One Piece Crew Gaze",
    category: "Anime Eyes",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "One Piece intense anime eyes close-up wallpaper",
    tags: ["one piece", "anime eyes", "haki", "gaze", "close-up"],
    popularity: 98,
    dateAdded: "2026-11-26",
    image: "assets/images/onepiece-eyes.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/onepiece-eyes.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-031",
    title: "Demon Slayer — Crimson Gaze",
    series: "Demon Slayer",
    character: "Demon Slayer Close-Up",
    category: "Anime Eyes",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Demon Slayer intense anime eyes close-up wallpaper",
    tags: ["demon slayer", "kimetsu no yaiba", "anime eyes", "gaze", "shonen"],
    popularity: 97,
    dateAdded: "2026-11-26",
    image: "assets/images/demonslayer-eyes.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/demonslayer-eyes.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-030",
    title: "Naruto — Shinobi Gaze I",
    series: "Naruto",
    character: "Naruto Shinobi Gaze",
    category: "Anime Eyes",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Naruto shinobi anime eyes close-up wallpaper",
    tags: ["naruto", "anime eyes", "shinobi", "gaze", "shonen"],
    popularity: 97,
    dateAdded: "2026-11-26",
    image: "assets/images/naruto-eyes.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/naruto-eyes.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-029",
    title: "Naruto — Shinobi Gaze II",
    series: "Naruto",
    character: "Naruto Shinobi Gaze",
    category: "Anime Eyes",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Naruto shinobi anime eyes alternate close-up wallpaper",
    tags: ["naruto", "anime eyes", "shinobi", "gaze", "shonen"],
    popularity: 96,
    dateAdded: "2026-11-26",
    image: "assets/images/naruto-eyes1.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/naruto-eyes1.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-028",
    title: "Naruto — Shinobi Gaze III",
    series: "Naruto",
    character: "Naruto Shinobi Gaze",
    category: "Anime Eyes",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Naruto shinobi anime eyes third close-up wallpaper",
    tags: ["naruto", "anime eyes", "shinobi", "gaze", "shonen"],
    popularity: 95,
    dateAdded: "2026-11-26",
    image: "assets/images/naruto-eyes2.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/naruto-eyes2.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-027",
    title: "Hunter x Hunter — Fierce Gaze",
    series: "Hunter x Hunter",
    character: "Hunter x Hunter Close-Up",
    category: "Anime Eyes",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Hunter x Hunter anime eyes close-up wallpaper",
    tags: ["hunter x hunter", "hxh", "anime eyes", "gaze", "shonen"],
    popularity: 96,
    dateAdded: "2026-11-26",
    image: "assets/images/hunterxhunter-eyes.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/hunterxhunter-eyes.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-026",
    title: "Trafalgar Law — Surgeon of Death",
    series: "One Piece",
    character: "Trafalgar D. Water Law",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Trafalgar D. Water Law from One Piece anime wallpaper",
    tags: ["one piece", "law", "trafalgar law", "heart pirates", "shonen"],
    popularity: 96,
    dateAdded: "2026-11-26",
    image: "assets/images/law-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/law-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-025",
    title: "Trafalgar Law — Room Ope",
    series: "One Piece",
    character: "Trafalgar D. Water Law",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Trafalgar Law Room ability One Piece anime wallpaper",
    tags: ["one piece", "law", "trafalgar law", "ope ope no mi", "shonen"],
    popularity: 95,
    dateAdded: "2026-11-26",
    image: "assets/images/law-onpiece1.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/law-onpiece1.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-024",
    title: "Dracule Mihawk — Hawk Eyes",
    series: "One Piece",
    character: "Dracule Mihawk",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Dracule Mihawk from One Piece anime wallpaper",
    tags: ["one piece", "mihawk", "dracule mihawk", "hawk eyes", "swordsman"],
    popularity: 96,
    dateAdded: "2026-11-26",
    image: "assets/images/mihawk-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/mihawk-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-023",
    title: "Dracule Mihawk — Black Blade Yoru",
    series: "One Piece",
    character: "Dracule Mihawk",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Dracule Mihawk portrait One Piece anime wallpaper",
    tags: ["one piece", "mihawk", "yoru", "warlord", "shonen"],
    popularity: 94,
    dateAdded: "2026-11-26",
    image: "assets/images/mihawk.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/mihawk.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-022",
    title: "Monkey D. Luffy — Gear Spotlight",
    series: "One Piece",
    character: "Monkey D. Luffy",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Monkey D. Luffy portrait One Piece anime wallpaper",
    tags: ["one piece", "luffy", "straw hat", "shonen"],
    popularity: 96,
    dateAdded: "2026-11-26",
    image: "assets/images/luffy.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/luffy.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-021",
    title: "Roronoa Zoro — Three Sword Style",
    series: "One Piece",
    character: "Roronoa Zoro",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Roronoa Zoro Three Sword Style One Piece anime wallpaper",
    tags: ["one piece", "zoro", "santoryu", "straw hat", "shonen"],
    popularity: 96,
    dateAdded: "2026-11-26",
    image: "assets/images/zoro.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/zoro.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-020",
    title: "Sanji — Black Leg",
    series: "One Piece",
    character: "Vinsmoke Sanji",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Vinsmoke Sanji from One Piece anime wallpaper",
    tags: ["one piece", "sanji", "black leg", "straw hat", "shonen"],
    popularity: 95,
    dateAdded: "2026-11-26",
    image: "assets/images/sanji.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/sanji.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-019",
    title: "Whitebeard — Strongest Man",
    series: "One Piece",
    character: "Edward Newgate (Whitebeard)",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Edward Newgate Whitebeard from One Piece anime wallpaper",
    tags: ["one piece", "whitebeard", "edward newgate", "yonko", "shonen"],
    popularity: 96,
    dateAdded: "2026-11-26",
    image: "assets/images/whitebeard-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/whitebeard-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-018",
    title: "Blackbeard — Dark Emperor",
    series: "One Piece",
    character: "Marshall D. Teach (Blackbeard)",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Marshall D. Teach Blackbeard from One Piece anime wallpaper",
    tags: ["one piece", "blackbeard", "teach", "yonko", "shonen"],
    popularity: 94,
    dateAdded: "2026-11-26",
    image: "assets/images/blackbeard-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/blackbeard-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-017",
    title: "Doflamingo — Heavenly Demon",
    series: "One Piece",
    character: "Donquixote Doflamingo",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Donquixote Doflamingo from One Piece anime wallpaper",
    tags: ["one piece", "doflamingo", "joker", "warlord", "shonen"],
    popularity: 95,
    dateAdded: "2026-11-26",
    image: "assets/images/doflamingo-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/doflamingo-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-016",
    title: "Crocodile — Desert Warlord",
    series: "One Piece",
    character: "Sir Crocodile",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Sir Crocodile from One Piece anime wallpaper",
    tags: ["one piece", "crocodile", "alabasta", "warlord", "shonen"],
    popularity: 94,
    dateAdded: "2026-11-26",
    image: "assets/images/crocodile-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/crocodile-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-015",
    title: "Brook — Soul King",
    series: "One Piece",
    character: "Brook",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Brook Soul King from One Piece anime wallpaper",
    tags: ["one piece", "brook", "soul king", "straw hat", "shonen"],
    popularity: 94,
    dateAdded: "2026-11-26",
    image: "assets/images/brook-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/brook-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-014",
    title: "Portgas D. Ace — Fire Fist",
    series: "One Piece",
    character: "Portgas D. Ace",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Portgas D. Ace from One Piece anime wallpaper",
    tags: ["one piece", "ace", "portgas d ace", "fire fist", "shonen", "anime"],
    popularity: 97,
    dateAdded: "2026-11-25",
    image: "assets/images/ace-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/ace-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-013",
    title: "Boa Hancock — Pirate Empress",
    series: "One Piece",
    character: "Boa Hancock",
    category: "Shonen",
    artist: "Add Artist / Source Name",
    license: "Verify License Before Public Launch",
    alt: "Boa Hancock from One Piece anime wallpaper",
    tags: ["one piece", "boa hancock", "shonen", "anime", "pirate empress"],
    popularity: 96,
    dateAdded: "2026-11-25",
    image: "assets/images/Boa-Hancock-onepiece.jpg",
    resolutions: [
      {
        label: "HD Original",
        width: 1920,
        height: 1080,
        url: "assets/images/Boa-Hancock-onepiece.jpg"
      }
    ],
    placeholder: null
  },
  {
    id: "oc-001",
    title: "Neon Shibuya After Rain",
    series: "Neo-Tokyo Drift",
    character: "Ren Takahashi",
    category: "Cyberpunk",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Dark purple cyberpunk skyline over rain-slicked neon towers with glowing violet and magenta reflections",
    tags: ["neon", "cyberpunk", "city", "rain", "purple", "night"],
    popularity: 93,
    dateAdded: "2026-11-22",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "cyberpunk",
      skyTop: "#09061a",
      skyMid: "#1c1042",
      skyBottom: "#4c1d95",
      glow: "#ec4899",
      accent: "#38bdf8",
      silhouette: "#070512"
    }
  },
  {
    id: "oc-002",
    title: "Crimson Eclipse Ronin",
    series: "Eclipse Blade",
    character: "Akira Kurogane",
    category: "Dark Fantasy",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Lone samurai silhouette standing on a jagged cliff beneath a massive glowing crimson blood moon",
    tags: ["samurai", "moon", "crimson", "katana", "dark", "epic"],
    popularity: 92,
    dateAdded: "2026-11-20",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "crimsonMoon",
      skyTop: "#0c0512",
      skyMid: "#2b0a22",
      skyBottom: "#7f1d1d",
      glow: "#fb7185",
      accent: "#f43f5e",
      silhouette: "#09040c"
    }
  },
  {
    id: "oc-003",
    title: "Astral Torii at Midnight",
    series: "Starlight Shrine",
    character: "Yuki Hoshino",
    category: "Slice of Life",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Traditional Japanese torii gate framed against a starry violet night sky with drifting sakura petals",
    tags: ["torii", "shrine", "stars", "sakura", "calm", "aesthetic"],
    popularity: 91,
    dateAdded: "2026-11-24",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "shrine",
      skyTop: "#08081c",
      skyMid: "#1e1b4b",
      skyBottom: "#581c87",
      glow: "#c084fc",
      accent: "#f472b6",
      silhouette: "#0b0817"
    }
  },
  {
    id: "oc-004",
    title: "Lightning Breaker Stance",
    series: "Thunder Vanguard",
    character: "Sora Kisaragi",
    category: "Shonen",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Dynamic shonen energy arcs cracking across a stormy indigo horizon with electric violet lightning",
    tags: ["shonen", "lightning", "action", "energy", "storm", "warrior"],
    popularity: 90,
    dateAdded: "2026-11-23",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "shonenStorm",
      skyTop: "#07091c",
      skyMid: "#172554",
      skyBottom: "#6d28d9",
      glow: "#38bdf8",
      accent: "#c084fc",
      silhouette: "#060814"
    }
  },
  {
    id: "oc-005",
    title: "Orbital Mecha Hangar 09",
    series: "Mecha Horizon",
    character: "Zero-09 Unit",
    category: "Sci-Fi",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Colossal futuristic mecha silhouette illuminated by cyan orbital rings and distant starlight",
    tags: ["mecha", "sci-fi", "space", "robot", "futuristic", "cyan"],
    popularity: 89,
    dateAdded: "2026-11-21",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "mecha",
      skyTop: "#040814",
      skyMid: "#0f172a",
      skyBottom: "#312e81",
      glow: "#22d3ee",
      accent: "#818cf8",
      silhouette: "#05070f"
    }
  },
  {
    id: "oc-006",
    title: "Violet Rooftop Overlook",
    series: "Neo-Tokyo Drift",
    character: "Kaito Vance",
    category: "Cyberpunk",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Futuristic megacity bathed in electric violet fog and glowing holographic billboards at night",
    tags: ["cyberpunk", "rooftop", "violet", "skyline", "futuristic"],
    popularity: 88,
    dateAdded: "2026-11-18",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "cyberpunk",
      skyTop: "#0d061c",
      skyMid: "#2e1065",
      skyBottom: "#701a75",
      glow: "#a855f7",
      accent: "#f472b6",
      silhouette: "#090412"
    }
  },
  {
    id: "oc-007",
    title: "Citadel of the Hollow King",
    series: "Eclipse Blade",
    character: "Rei Shimizu",
    category: "Dark Fantasy",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Ancient gothic spires rising through misty purple clouds under a haunting silver-violet eclipse",
    tags: ["castle", "dark fantasy", "eclipse", "gothic", "mist"],
    popularity: 90,
    dateAdded: "2026-11-19",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "voidPortal",
      skyTop: "#070612",
      skyMid: "#1e1038",
      skyBottom: "#4c1d95",
      glow: "#d8b4fe",
      accent: "#a855f7",
      silhouette: "#06040d"
    }
  },
  {
    id: "oc-008",
    title: "Sakura Sunset Train Crossing",
    series: "Starlight Shrine",
    character: "Hana Mizuki",
    category: "Slice of Life",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Warm twilight anime sky fading from deep indigo to rose pink with floating cherry blossom petals",
    tags: ["sakura", "sunset", "chill", "lofi", "pink", "calm"],
    popularity: 89,
    dateAdded: "2026-11-17",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "shrine",
      skyTop: "#130b29",
      skyMid: "#4a1d6e",
      skyBottom: "#be185d",
      glow: "#fbcfe8",
      accent: "#fb7185",
      silhouette: "#12081c"
    }
  },
  {
    id: "oc-009",
    title: "Azure Comet Ascension",
    series: "Thunder Vanguard",
    character: "Sora Kisaragi",
    category: "Shonen",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Blazing azure comet tearing across a starry midnight valley above jagged mountain peaks",
    tags: ["comet", "shonen", "blue", "mountains", "power", "night"],
    popularity: 85,
    dateAdded: "2026-11-15",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "shonenStorm",
      skyTop: "#050a18",
      skyMid: "#0c2d57",
      skyBottom: "#2563eb",
      glow: "#67e8f9",
      accent: "#60a5fa",
      silhouette: "#040812"
    }
  },
  {
    id: "oc-010",
    title: "Nebula Drifter Station",
    series: "Mecha Horizon",
    character: "Aoi Fujimoto",
    category: "Sci-Fi",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Deep-space observation deck gazing into a luminous magenta and violet cosmic nebula",
    tags: ["space", "nebula", "cosmos", "sci-fi", "stars", "purple"],
    popularity: 87,
    dateAdded: "2026-11-16",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "mecha",
      skyTop: "#090514",
      skyMid: "#2b0b42",
      skyBottom: "#6b21a8",
      glow: "#e879f9",
      accent: "#38bdf8",
      silhouette: "#080410"
    }
  },
  {
    id: "oc-011",
    title: "Midnight Rain Arcade",
    series: "Neo-Tokyo Drift",
    character: "Ren Takahashi",
    category: "Cyberpunk",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Moody cyberpunk alleyway glowing with electric teal and violet neon lights under midnight rain",
    tags: ["arcade", "rain", "cyberpunk", "teal", "night", "urban"],
    popularity: 84,
    dateAdded: "2026-11-14",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "cyberpunk",
      skyTop: "#040b14",
      skyMid: "#0f2942",
      skyBottom: "#3b0764",
      glow: "#2dd4bf",
      accent: "#a855f7",
      silhouette: "#050912"
    }
  },
  {
    id: "oc-012",
    title: "Void Alchemist's Gate",
    series: "Eclipse Blade",
    character: "Akira Kurogane",
    category: "Dark Fantasy",
    artist: "Otaku Canvas Studio (Placeholder)",
    license: "CC0 — Free Starter Artwork",
    alt: "Glowing arcane runes orbiting a swirling indigo portal floating above an obsidian valley",
    tags: ["magic", "portal", "dark fantasy", "runes", "obsidian", "violet"],
    popularity: 91,
    dateAdded: "2026-11-23",
    image: "",
    resolutions: [
      { label: "4K UHD", width: 3840, height: 2160, url: "" },
      { label: "2K QHD", width: 2560, height: 1440, url: "" },
      { label: "Full HD", width: 1920, height: 1080, url: "" }
    ],
    placeholder: {
      scene: "voidPortal",
      skyTop: "#060510",
      skyMid: "#1e1b4b",
      skyBottom: "#5b21b6",
      glow: "#a855f7",
      accent: "#38bdf8",
      silhouette: "#05040c"
    }
  }
];

/* ==========================================================================
   DO NOT EDIT BELOW THIS LINE — Starter Placeholder Art Generator
   (Automatically draws crisp 16:9 anime-style artwork whenever image is "")
   ========================================================================== */
(function buildStarterArtwork() {
  function generateStars(seedOffset) {
    let stars = "";
    for (let i = 0; i < 42; i++) {
      const x = ((i * 197 + seedOffset * 83) % 1240) + 20;
      const y = ((i * 113 + seedOffset * 59) % 340) + 20;
      const r = (i % 3) * 0.7 + 0.9;
      const op = ((i % 5) * 0.14 + 0.25).toFixed(2);
      stars += `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" opacity="${op}"/>`;
    }
    return stars;
  }

  function buildScene(cfg, idx) {
    const stars = generateStars(idx + 1);
    let fg = "";

    if (cfg.scene === "cyberpunk") {
      fg = `
        <circle cx="940" cy="210" r="110" fill="${cfg.glow}" opacity="0.22"/>
        <circle cx="940" cy="210" r="64" fill="${cfg.glow}" opacity="0.82"/>
        <g fill="${cfg.silhouette}" opacity="0.92">
          <rect x="40" y="340" width="90" height="380"/>
          <rect x="145" y="260" width="110" height="460"/>
          <rect x="275" y="310" width="85" height="410"/>
          <rect x="380" y="210" width="130" height="510"/>
          <rect x="530" y="290" width="95" height="430"/>
          <rect x="645" y="235" width="120" height="485"/>
          <rect x="785" y="325" width="105" height="395"/>
          <rect x="910" y="265" width="135" height="455"/>
          <rect x="1065" y="310" width="110" height="410"/>
          <rect x="1190" y="245" width="90" height="475"/>
        </g>
        <g stroke="${cfg.accent}" stroke-width="3" opacity="0.72">
          <line x1="170" y1="310" x2="230" y2="310"/>
          <line x1="170" y1="335" x2="215" y2="335"/>
          <line x1="405" y1="265" x2="485" y2="265"/>
          <line x1="405" y1="292" x2="465" y2="292"/>
          <line x1="670" y1="285" x2="740" y2="285"/>
          <line x1="940" y1="320" x2="1015" y2="320"/>
        </g>
        <g stroke="${cfg.glow}" stroke-width="2" opacity="0.45">
          <line x1="120" y1="0" x2="70" y2="720"/>
          <line x1="340" y1="0" x2="290" y2="720"/>
          <line x1="590" y1="0" x2="540" y2="720"/>
          <line x1="860" y1="0" x2="810" y2="720"/>
          <line x1="1120" y1="0" x2="1070" y2="720"/>
        </g>
        <rect x="0" y="610" width="1280" height="110" fill="${cfg.glow}" opacity="0.16"/>
      `;
    } else if (cfg.scene === "crimsonMoon") {
      fg = `
        <circle cx="640" cy="275" r="190" fill="${cfg.glow}" opacity="0.18"/>
        <circle cx="640" cy="275" r="138" fill="${cfg.accent}"/>
        <circle cx="688" cy="252" r="126" fill="${cfg.skyMid}" opacity="0.65"/>
        <path d="M0 575 L220 470 L420 535 L620 430 L860 520 L1080 455 L1280 545 L1280 720 L0 720 Z" fill="#18081a" opacity="0.72"/>
        <path d="M0 645 L260 555 L490 610 L650 495 L765 565 L1030 580 L1280 650 L1280 720 L0 720 Z" fill="${cfg.silhouette}"/>
        <g fill="${cfg.silhouette}">
          <circle cx="642" cy="458" r="12"/>
          <path d="M626 510 L642 470 L658 510 Z"/>
          <line x1="646" y1="485" x2="722" y2="438" stroke="${cfg.glow}" stroke-width="4" stroke-linecap="round"/>
        </g>
      `;
    } else if (cfg.scene === "shrine") {
      fg = `
        <circle cx="640" cy="290" r="145" fill="${cfg.glow}" opacity="0.22"/>
        <circle cx="640" cy="290" r="88" fill="${cfg.glow}" opacity="0.88"/>
        <path d="M0 530 Q320 440 640 500 T1280 480 L1280 720 L0 720 Z" fill="#181030" opacity="0.75"/>
        <path d="M0 605 Q360 565 640 595 T1280 580 L1280 720 L0 720 Z" fill="${cfg.silhouette}"/>
        <g fill="${cfg.silhouette}">
          <path d="M410 340 Q640 315 870 340 L858 366 Q640 344 422 366 Z"/>
          <rect x="455" y="388" width="370" height="22" rx="4"/>
          <rect x="505" y="355" width="28" height="255"/>
          <rect x="747" y="355" width="28" height="255"/>
          <rect x="626" y="355" width="28" height="48"/>
        </g>
        <g fill="${cfg.accent}" opacity="0.85">
          <ellipse cx="220" cy="210" rx="8" ry="4" transform="rotate(-25 220 210)"/>
          <ellipse cx="360" cy="290" rx="7" ry="3.5" transform="rotate(20 360 290)"/>
          <ellipse cx="940" cy="220" rx="9" ry="4.5" transform="rotate(-35 940 220)"/>
          <ellipse cx="1050" cy="340" rx="8" ry="4" transform="rotate(15 1050 340)"/>
          <ellipse cx="830" cy="460" rx="7" ry="3.5" transform="rotate(-20 830 460)"/>
          <ellipse cx="310" cy="450" rx="8" ry="4" transform="rotate(30 310 450)"/>
        </g>
      `;
    } else if (cfg.scene === "shonenStorm") {
      fg = `
        <circle cx="640" cy="360" r="240" fill="${cfg.glow}" opacity="0.16"/>
        <path d="M890 40 L710 265 L780 275 L590 520 L650 325 L575 315 Z" fill="${cfg.glow}" opacity="0.92"/>
        <path d="M360 75 L465 255 L415 262 L520 440 L440 290 L488 282 Z" fill="${cfg.accent}" opacity="0.72"/>
        <path d="M0 595 L230 460 L440 560 L640 420 L850 545 L1085 445 L1280 570 L1280 720 L0 720 Z" fill="${cfg.silhouette}"/>
        <line x1="180" y1="620" x2="1100" y2="210" stroke="${cfg.glow}" stroke-width="3" opacity="0.5"/>
        <line x1="250" y1="660" x2="1160" y2="290" stroke="${cfg.accent}" stroke-width="2" opacity="0.45"/>
      `;
    } else if (cfg.scene === "mecha") {
      fg = `
        <ellipse cx="640" cy="330" rx="340" ry="95" fill="none" stroke="${cfg.glow}" stroke-width="3" opacity="0.45" transform="rotate(-14 640 330)"/>
        <ellipse cx="640" cy="330" rx="235" ry="65" fill="none" stroke="${cfg.accent}" stroke-width="2" opacity="0.55" transform="rotate(12 640 330)"/>
        <circle cx="640" cy="315" r="105" fill="${cfg.glow}" opacity="0.18"/>
        <g fill="${cfg.silhouette}">
          <polygon points="565,245 715,245 760,360 725,640 555,640 520,360"/>
          <polygon points="595,180 685,180 705,245 575,245"/>
          <polygon points="460,295 555,255 535,445 430,415"/>
          <polygon points="820,295 725,255 745,445 850,415"/>
        </g>
        <rect x="614" y="206" width="52" height="10" rx="5" fill="${cfg.glow}"/>
        <circle cx="640" cy="340" r="18" fill="${cfg.glow}" opacity="0.9"/>
        <rect x="0" y="615" width="1280" height="105" fill="${cfg.silhouette}"/>
      `;
    } else {
      fg = `
        <circle cx="640" cy="310" r="175" fill="${cfg.glow}" opacity="0.16"/>
        <circle cx="640" cy="310" r="126" fill="none" stroke="${cfg.glow}" stroke-width="5" stroke-dasharray="18 10" opacity="0.88"/>
        <circle cx="640" cy="310" r="92" fill="none" stroke="${cfg.accent}" stroke-width="3" opacity="0.82"/>
        <circle cx="640" cy="310" r="56" fill="${cfg.skyTop}"/>
        <circle cx="640" cy="310" r="32" fill="${cfg.glow}" opacity="0.72"/>
        <path d="M0 570 L180 480 L235 370 L285 480 L450 560 L640 505 L845 555 L985 360 L1040 475 L1280 565 L1280 720 L0 720 Z" fill="${cfg.silhouette}"/>
      `;
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${cfg.skyTop}"/>
          <stop offset="58%" stop-color="${cfg.skyMid}"/>
          <stop offset="100%" stop-color="${cfg.skyBottom}"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#sky)"/>
      ${stars}
      ${fg}
    </svg>`;

    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  WALLPAPERS.forEach((item, index) => {
    if (!item.image && item.placeholder) {
      item.image = buildScene(item.placeholder, index);
    }
  });

  window.OTAKU_WALLPAPERS = WALLPAPERS;
})();