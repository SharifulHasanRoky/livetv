// Live TV by Rocky - Channel List
// Deshi + Bideshi all channels

const channels = [
    // ===== বাংলাদেশ স্পোর্টস =====
    {
        id: 1,
        name: "T Sports",
        description: "বাংলাদেশ স্পোর্টস চ্যানেল",
        icon: "🏏",
        url: "https://bfrfreetv.web.app/tsports/index.m3u8",
        category: "bd-sports"
    },
    {
        id: 2,
        name: "GTV (Gazi TV)",
        description: "গাজী টিভি - ক্রিকেট লাইভ",
        icon: "🏏",
        url: "https://bfrfreetv.web.app/gtv/index.m3u8",
        category: "bd-sports"
    },
    {
        id: 3,
        name: "BTV National",
        description: "বাংলাদেশ টেলিভিশন",
        icon: "🇧🇩",
        url: "https://bfrfreetv.web.app/btv/index.m3u8",
        category: "bd-tv"
    },
    {
        id: 4,
        name: "Nagorik TV",
        description: "নাগরিক টিভি",
        icon: "📺",
        url: "https://bfrfreetv.web.app/nagoriktv/index.m3u8",
        category: "bd-tv"
    },
    {
        id: 5,
        name: "Somoy TV",
        description: "সময় টিভি - ২৪ ঘন্টা নিউজ",
        icon: "📰",
        url: "https://bfrfreetv.web.app/somoytv/index.m3u8",
        category: "bd-news"
    },
    {
        id: 6,
        name: "Independent TV",
        description: "ইনডিপেনডেন্ট টিভি",
        icon: "📰",
        url: "https://bfrfreetv.web.app/independenttv/index.m3u8",
        category: "bd-news"
    },
    {
        id: 7,
        name: "Jamuna TV",
        description: "যমুনা টিভি",
        icon: "📰",
        url: "https://bfrfreetv.web.app/jamunatv/index.m3u8",
        category: "bd-news"
    },
    {
        id: 8,
        name: "Channel 24",
        description: "চ্যানেল ২৪",
        icon: "📰",
        url: "https://bfrfreetv.web.app/channel24/index.m3u8",
        category: "bd-news"
    },
    {
        id: 9,
        name: "NTV",
        description: "এনটিভি বাংলাদেশ",
        icon: "📺",
        url: "https://bfrfreetv.web.app/ntv/index.m3u8",
        category: "bd-tv"
    },
    {
        id: 10,
        name: "RTV",
        description: "আরটিভি",
        icon: "📺",
        url: "https://bfrfreetv.web.app/rtv/index.m3u8",
        category: "bd-tv"
    },
    {
        id: 11,
        name: "ATN Bangla",
        description: "এটিএন বাংলা",
        icon: "📺",
        url: "https://bfrfreetv.web.app/atnbangla/index.m3u8",
        category: "bd-tv"
    },
    {
        id: 12,
        name: "Ekhon TV",
        description: "একুশে টিভি",
        icon: "📺",
        url: "https://bfrfreetv.web.app/ekhontv/index.m3u8",
        category: "bd-tv"
    },
    {
        id: 13,
        name: "DBC News",
        description: "ডিবিসি নিউজ",
        icon: "📰",
        url: "https://bfrfreetv.web.app/dbcnews/index.m3u8",
        category: "bd-news"
    },
    {
        id: 14,
        name: "News24",
        description: "নিউজ ২৪",
        icon: "📰",
        url: "https://bfrfreetv.web.app/news24/index.m3u8",
        category: "bd-news"
    },
    {
        id: 15,
        name: "Banglavision",
        description: "বাংলাভিশন",
        icon: "📺",
        url: "https://bfrfreetv.web.app/banglavision/index.m3u8",
        category: "bd-tv"
    },

    // ===== ইন্ডিয়ান স্পোর্টস =====
    {
        id: 16,
        name: "Star Sports 1",
        description: "স্টার স্পোর্টস HD",
        icon: "⭐",
        url: "https://bfrfreetv.web.app/starsports1/index.m3u8",
        category: "ind-sports"
    },
    {
        id: 17,
        name: "Star Sports 1 Hindi",
        description: "স্টার স্পোর্টস হিন্দি",
        icon: "⭐",
        url: "https://bfrfreetv.web.app/starsports1hindi/index.m3u8",
        category: "ind-sports"
    },
    {
        id: 18,
        name: "Star Sports 2",
        description: "স্টার স্পোর্টস ২",
        icon: "⭐",
        url: "https://bfrfreetv.web.app/starsports2/index.m3u8",
        category: "ind-sports"
    },
    {
        id: 19,
        name: "Star Sports 3",
        description: "স্টার স্পোর্টস ৩",
        icon: "⭐",
        url: "https://bfrfreetv.web.app/starsports3/index.m3u8",
        category: "ind-sports"
    },
    {
        id: 20,
        name: "Sony Six",
        description: "সনি সিক্স HD",
        icon: "🎬",
        url: "https://bfrfreetv.web.app/sonysix/index.m3u8",
        category: "ind-sports"
    },
    {
        id: 21,
        name: "Sony Ten 1",
        description: "সনি টেন ওয়ান",
        icon: "🎬",
        url: "https://bfrfreetv.web.app/sonyten1/index.m3u8",
        category: "ind-sports"
    },
    {
        id: 22,
        name: "Sony Ten 2",
        description: "সনি টেন টু",
        icon: "🎬",
        url: "https://bfrfreetv.web.app/sonyten2/index.m3u8",
        category: "ind-sports"
    },
    {
        id: 23,
        name: "Sony Ten 3",
        description: "সনি টেন থ্রি",
        icon: "🎬",
        url: "https://bfrfreetv.web.app/sonyten3/index.m3u8",
        category: "ind-sports"
    },
    {
        id: 24,
        name: "Sony Ten 5",
        description: "সনি টেন ৫ HD",
        icon: "🎬",
        url: "https://bfrfreetv.web.app/sonyten5/index.m3u8",
        category: "ind-sports"
    },

    // ===== ইন্ডিয়ান এন্টারটেইনমেন্ট =====
    {
        id: 25,
        name: "Star Plus",
        description: "স্টার প্লাস",
        icon: "🌟",
        url: "https://bfrfreetv.web.app/starplus/index.m3u8",
        category: "ind-entertainment"
    },
    {
        id: 26,
        name: "Colors TV",
        description: "কালার্স টিভি",
        icon: "🎨",
        url: "https://bfrfreetv.web.app/colorstv/index.m3u8",
        category: "ind-entertainment"
    },
    {
        id: 27,
        name: "Zee TV",
        description: "জি টিভি",
        icon: "📺",
        url: "https://bfrfreetv.web.app/zeetv/index.m3u8",
        category: "ind-entertainment"
    },
    {
        id: 28,
        name: "Sony TV",
        description: "সনি টিভি",
        icon: "📺",
        url: "https://bfrfreetv.web.app/sonytv/index.m3u8",
        category: "ind-entertainment"
    },
    {
        id: 29,
        name: "Star Jalsha",
        description: "স্টার জলসা - বাংলা",
        icon: "🌟",
        url: "https://bfrfreetv.web.app/starjalsha/index.m3u8",
        category: "ind-entertainment"
    },
    {
        id: 30,
        name: "Zee Bangla",
        description: "জি বাংলা",
        icon: "📺",
        url: "https://bfrfreetv.web.app/zeebangla/index.m3u8",
        category: "ind-entertainment"
    },
    {
        id: 31,
        name: "Colors Bangla",
        description: "কালার্স বাংলা",
        icon: "🎨",
        url: "https://bfrfreetv.web.app/colorsbangla/index.m3u8",
        category: "ind-entertainment"
    },
    {
        id: 32,
        name: "Star Gold",
        description: "স্টার গোল্ড - মুভি",
        icon: "🎬",
        url: "https://bfrfreetv.web.app/stargold/index.m3u8",
        category: "ind-entertainment"
    },
    {
        id: 33,
        name: "Zee Cinema",
        description: "জি সিনেমা - মুভি",
        icon: "🎬",
        url: "https://bfrfreetv.web.app/zeecinema/index.m3u8",
        category: "ind-entertainment"
    },
    {
        id: 34,
        name: "Sony Max",
        description: "সনি ম্যাক্স - মুভি",
        icon: "🎬",
        url: "https://bfrfreetv.web.app/sonymax/index.m3u8",
        category: "ind-entertainment"
    },

    // ===== ইন্ডিয়ান নিউজ =====
    {
        id: 35,
        name: "Aaj Tak",
        description: "আজ তক - হিন্দি নিউজ",
        icon: "📰",
        url: "https://bfrfreetv.web.app/aajtak/index.m3u8",
        category: "ind-news"
    },
    {
        id: 36,
        name: "NDTV India",
        description: "এনডিটিভি ইন্ডিয়া",
        icon: "📰",
        url: "https://bfrfreetv.web.app/ndtvindia/index.m3u8",
        category: "ind-news"
    },
    {
        id: 37,
        name: "Republic TV",
        description: "রিপাবলিক টিভি",
        icon: "📰",
        url: "https://bfrfreetv.web.app/republictv/index.m3u8",
        category: "ind-news"
    },
    {
        id: 38,
        name: "India Today",
        description: "ইন্ডিয়া টুডে",
        icon: "📰",
        url: "https://bfrfreetv.web.app/indiatoday/index.m3u8",
        category: "ind-news"
    },
    {
        id: 39,
        name: "ABP Ananda",
        description: "এবিপি আনন্দ - বাংলা নিউজ",
        icon: "📰",
        url: "https://bfrfreetv.web.app/abpananda/index.m3u8",
        category: "ind-news"
    },

    // ===== পাকিস্তান =====
    {
        id: 40,
        name: "PTV Sports",
        description: "পিটিভি স্পোর্টস",
        icon: "🇵🇰",
        url: "https://bfrfreetv.web.app/ptvsports/index.m3u8",
        category: "pak"
    },
    {
        id: 41,
        name: "A Sports",
        description: "এ স্পোর্টস পাকিস্তান",
        icon: "🇵🇰",
        url: "https://bfrfreetv.web.app/asports/index.m3u8",
        category: "pak"
    },
    {
        id: 42,
        name: "Geo Super",
        description: "জিও সুপার",
        icon: "🇵🇰",
        url: "https://bfrfreetv.web.app/geosuper/index.m3u8",
        category: "pak"
    },
    {
        id: 43,
        name: "ARY News",
        description: "এআরওয়াই নিউজ",
        icon: "🇵🇰",
        url: "https://bfrfreetv.web.app/arynews/index.m3u8",
        category: "pak"
    },
    {
        id: 44,
        name: "Geo News",
        description: "জিও নিউজ",
        icon: "🇵🇰",
        url: "https://bfrfreetv.web.app/geonews/index.m3u8",
        category: "pak"
    },

    // ===== ইন্টারন্যাশনাল স্পোর্টস =====
    {
        id: 45,
        name: "Willow Cricket",
        description: "উইলো ক্রিকেট HD",
        icon: "🏏",
        url: "https://bfrfreetv.web.app/willow/index.m3u8",
        category: "intl-sports"
    },
    {
        id: 46,
        name: "Sky Sports Cricket",
        description: "স্কাই স্পোর্টস ক্রিকেট",
        icon: "🏏",
        url: "https://bfrfreetv.web.app/skysportscricket/index.m3u8",
        category: "intl-sports"
    },
    {
        id: 47,
        name: "Sky Sports Football",
        description: "স্কাই স্পোর্টস ফুটবল",
        icon: "⚽",
        url: "https://bfrfreetv.web.app/skysportsfootball/index.m3u8",
        category: "intl-sports"
    },
    {
        id: 48,
        name: "BT Sport 1",
        description: "বিটি স্পোর্ট ১",
        icon: "⚽",
        url: "https://bfrfreetv.web.app/btsport1/index.m3u8",
        category: "intl-sports"
    },
    {
        id: 49,
        name: "BT Sport 2",
        description: "বিটি স্পোর্ট ২",
        icon: "⚽",
        url: "https://bfrfreetv.web.app/btsport2/index.m3u8",
        category: "intl-sports"
    },
    {
        id: 50,
        name: "ESPN",
        description: "ইএসপিএন USA",
        icon: "🏈",
        url: "https://bfrfreetv.web.app/espn/index.m3u8",
        category: "intl-sports"
    },
    {
        id: 51,
        name: "ESPN 2",
        description: "ইএসপিএন ২",
        icon: "🏈",
        url: "https://bfrfreetv.web.app/espn2/index.m3u8",
        category: "intl-sports"
    },
    {
        id: 52,
        name: "Fox Sports 1",
        description: "ফক্স স্পোর্টস ১",
        icon: "🏀",
        url: "https://bfrfreetv.web.app/foxsports1/index.m3u8",
        category: "intl-sports"
    },
    {
        id: 53,
        name: "beIN Sports 1",
        description: "বিইন স্পোর্টস ১",
        icon: "⚽",
        url: "https://bfrfreetv.web.app/beinsports1/index.m3u8",
        category: "intl-sports"
    },
    {
        id: 54,
        name: "beIN Sports 2",
        description: "বিইন স্পোর্টস ২",
        icon: "⚽",
        url: "https://bfrfreetv.web.app/beinsports2/index.m3u8",
        category: "intl-sports"
    },
    {
        id: 55,
        name: "SuperSport Cricket",
        description: "সুপারস্পোর্ট ক্রিকেট",
        icon: "🏏",
        url: "https://bfrfreetv.web.app/supersportcricket/index.m3u8",
        category: "intl-sports"
    },

    // ===== ইন্টারন্যাশনাল নিউজ =====
    {
        id: 56,
        name: "Al Jazeera English",
        description: "আল জাজিরা ইংলিশ",
        icon: "🌍",
        url: "https://bfrfreetv.web.app/aljazeera/index.m3u8",
        category: "intl-news"
    },
    {
        id: 57,
        name: "BBC World News",
        description: "বিবিসি ওয়ার্ল্ড নিউজ",
        icon: "🌍",
        url: "https://bfrfreetv.web.app/bbcworld/index.m3u8",
        category: "intl-news"
    },
    {
        id: 58,
        name: "CNN International",
        description: "সিএনএন ইন্টারন্যাশনাল",
        icon: "🌍",
        url: "https://bfrfreetv.web.app/cnn/index.m3u8",
        category: "intl-news"
    },
    {
        id: 59,
        name: "Sky News",
        description: "স্কাই নিউজ UK",
        icon: "🌍",
        url: "https://bfrfreetv.web.app/skynews/index.m3u8",
        category: "intl-news"
    },
    {
        id: 60,
        name: "France 24 English",
        description: "ফ্রান্স ২৪ ইংলিশ",
        icon: "🌍",
        url: "https://bfrfreetv.web.app/france24/index.m3u8",
        category: "intl-news"
    },
    {
        id: 61,
        name: "DW News",
        description: "ডয়চে ভেলে নিউজ",
        icon: "🌍",
        url: "https://bfrfreetv.web.app/dwnews/index.m3u8",
        category: "intl-news"
    },
    {
        id: 62,
        name: "TRT World",
        description: "টিআরটি ওয়ার্ল্ড",
        icon: "🌍",
        url: "https://bfrfreetv.web.app/trtworld/index.m3u8",
        category: "intl-news"
    },

    // ===== এন্টারটেইনমেন্ট / মুভি ইন্টারন্যাশনাল =====
    {
        id: 63,
        name: "HBO",
        description: "এইচবিও - মুভি ও সিরিজ",
        icon: "🎬",
        url: "https://bfrfreetv.web.app/hbo/index.m3u8",
        category: "intl-entertainment"
    },
    {
        id: 64,
        name: "Discovery Channel",
        description: "ডিসকভারি চ্যানেল",
        icon: "🌏",
        url: "https://bfrfreetv.web.app/discovery/index.m3u8",
        category: "intl-entertainment"
    },
    {
        id: 65,
        name: "National Geographic",
        description: "ন্যাশনাল জিওগ্রাফিক",
        icon: "🌏",
        url: "https://bfrfreetv.web.app/natgeo/index.m3u8",
        category: "intl-entertainment"
    },
    {
        id: 66,
        name: "Animal Planet",
        description: "অ্যানিমেল প্ল্যানেট",
        icon: "🦁",
        url: "https://bfrfreetv.web.app/animalplanet/index.m3u8",
        category: "intl-entertainment"
    },
    {
        id: 67,
        name: "History Channel",
        description: "হিস্ট্রি চ্যানেল",
        icon: "📜",
        url: "https://bfrfreetv.web.app/historychannel/index.m3u8",
        category: "intl-entertainment"
    },
    {
        id: 68,
        name: "Cartoon Network",
        description: "কার্টুন নেটওয়ার্ক",
        icon: "🎮",
        url: "https://bfrfreetv.web.app/cartoonnetwork/index.m3u8",
        category: "kids"
    },
    {
        id: 69,
        name: "Nick (Nickelodeon)",
        description: "নিকেলোডিয়ন",
        icon: "🎮",
        url: "https://bfrfreetv.web.app/nick/index.m3u8",
        category: "kids"
    },
    {
        id: 70,
        name: "Disney Channel",
        description: "ডিজনি চ্যানেল",
        icon: "🏰",
        url: "https://bfrfreetv.web.app/disney/index.m3u8",
        category: "kids"
    },

    // ===== মিউজিক =====
    {
        id: 71,
        name: "MTV",
        description: "এমটিভি মিউজিক",
        icon: "🎵",
        url: "https://bfrfreetv.web.app/mtv/index.m3u8",
        category: "music"
    },
    {
        id: 72,
        name: "VH1",
        description: "ভিএইচ ওয়ান",
        icon: "🎵",
        url: "https://bfrfreetv.web.app/vh1/index.m3u8",
        category: "music"
    },
    {
        id: 73,
        name: "Gaan Bangla",
        description: "গান বাংলা",
        icon: "🎵",
        url: "https://bfrfreetv.web.app/gaanbangla/index.m3u8",
        category: "music"
    },

    // ===== ধর্মীয় =====
    {
        id: 74,
        name: "Peace TV Bangla",
        description: "পিস টিভি বাংলা",
        icon: "☪️",
        url: "https://bfrfreetv.web.app/peacetvbangla/index.m3u8",
        category: "religious"
    },
    {
        id: 75,
        name: "Madani Channel",
        description: "মাদানী চ্যানেল",
        icon: "☪️",
        url: "https://bfrfreetv.web.app/madanichannel/index.m3u8",
        category: "religious"
    }
];
