// Live TV by Rocky - Channel List
// Using verified working streams from iptv-org and other public sources
// Last updated: May 2026

const channels = [
    // ===== বাংলাদেশ =====
    {
        id: 1,
        name: "Somoy TV",
        description: "সময় টিভি - ২৪ ঘন্টা নিউজ",
        icon: "📰",
        url: "https://ythls.armelin.one/channel/UCkvaEBSaFx0oqEBGvRduFIg.m3u8",
        category: "bd-news"
    },
    {
        id: 2,
        name: "Independent TV",
        description: "ইনডিপেনডেন্ট টিভি",
        icon: "📰",
        url: "https://ythls.armelin.one/channel/UCATnMbzne5GI6V9LPkn8Fww.m3u8",
        category: "bd-news"
    },
    {
        id: 3,
        name: "Jamuna TV",
        description: "যমুনা টিভি",
        icon: "📰",
        url: "https://ythls.armelin.one/channel/UCCbMhFjhDUTxlSB2VCMl8Kg.m3u8",
        category: "bd-news"
    },
    {
        id: 4,
        name: "Channel 24",
        description: "চ্যানেল ২৪",
        icon: "📰",
        url: "https://ythls.armelin.one/channel/UCRiGnWfBTQxCnQCag6uf0EQ.m3u8",
        category: "bd-news"
    },
    {
        id: 5,
        name: "NTV Bangladesh",
        description: "এনটিভি বাংলাদেশ",
        icon: "📺",
        url: "https://ythls.armelin.one/channel/UC2FYDXPqIjBXGxLe0E1xMYA.m3u8",
        category: "bd-tv"
    },
    {
        id: 6,
        name: "ATN News",
        description: "এটিএন নিউজ",
        icon: "📰",
        url: "https://ythls.armelin.one/channel/UC08nGxkSsqxknOVPXlnlWnQ.m3u8",
        category: "bd-news"
    },
    {
        id: 7,
        name: "Ekhon TV",
        description: "একনন টিভি",
        icon: "📺",
        url: "https://ythls.armelin.one/channel/UCdXVIlGMuXMVNjh5V_fMo5A.m3u8",
        category: "bd-tv"
    },
    {
        id: 8,
        name: "DBC News",
        description: "ডিবিসি নিউজ",
        icon: "📰",
        url: "https://ythls.armelin.one/channel/UCMYwsDhIZbQbDxMPFgtaFcQ.m3u8",
        category: "bd-news"
    },
    {
        id: 9,
        name: "Bangla TV",
        description: "বাংলা টিভি UK",
        icon: "📺",
        url: "https://ythls.armelin.one/channel/UCCw7hu1FubBK9klINegVWKA.m3u8",
        category: "bd-tv"
    },
    {
        id: 10,
        name: "RTV",
        description: "আরটিভি",
        icon: "📺",
        url: "https://ythls.armelin.one/channel/UCpMlYEabgXGBsNBjjWJhjjA.m3u8",
        category: "bd-tv"
    },
    {
        id: 11,
        name: "SA TV",
        description: "এসএ টিভি",
        icon: "📺",
        url: "https://ythls.armelin.one/channel/UCXrH3VmZRPCDo1VaE2oNl8A.m3u8",
        category: "bd-tv"
    },
    {
        id: 12,
        name: "Banglavision",
        description: "বাংলাভিশন",
        icon: "📺",
        url: "https://ythls.armelin.one/channel/UCb2O-IActKJIS0Q0I4YJnMg.m3u8",
        category: "bd-tv"
    },
    {
        id: 13,
        name: "News24 BD",
        description: "নিউজ২৪ বিডি",
        icon: "📰",
        url: "https://ythls.armelin.one/channel/UC2mErk73untURoVcHYnrodA.m3u8",
        category: "bd-news"
    },
    {
        id: 14,
        name: "Gaan Bangla",
        description: "গান বাংলা মিউজিক",
        icon: "🎵",
        url: "https://ythls.armelin.one/channel/UCXPSbLEYR8MG07IfPKbO8SA.m3u8",
        category: "music"
    },

    // ===== ইন্ডিয়ান নিউজ =====
    {
        id: 15,
        name: "Aaj Tak",
        description: "আজ তক - ভারতের #১ নিউজ",
        icon: "🇮🇳",
        url: "https://ythls.armelin.one/channel/UCt4t-jeY85JegMlZ-E5UXtA.m3u8",
        category: "ind-news"
    },
    {
        id: 16,
        name: "NDTV India",
        description: "এনডিটিভি ইন্ডিয়া হিন্দি",
        icon: "🇮🇳",
        url: "https://ythls.armelin.one/channel/UCwqusr8YDwM-0ARiCJMbv0g.m3u8",
        category: "ind-news"
    },
    {
        id: 17,
        name: "India Today",
        description: "ইন্ডিয়া টুডে ইংলিশ",
        icon: "🇮🇳",
        url: "https://ythls.armelin.one/channel/UCYPvAwZP8pZhSMW8qs7cVCw.m3u8",
        category: "ind-news"
    },
    {
        id: 18,
        name: "Republic TV",
        description: "রিপাবলিক টিভি",
        icon: "🇮🇳",
        url: "https://ythls.armelin.one/channel/UCwouCIpGvensjVSVT_gIJBw.m3u8",
        category: "ind-news"
    },
    {
        id: 19,
        name: "NDTV 24x7",
        description: "এনডিটিভি ২৪x৭ ইংলিশ",
        icon: "🇮🇳",
        url: "https://ythls.armelin.one/channel/UCBi2mrWuNuyYy4gbM6fU18Q.m3u8",
        category: "ind-news"
    },
    {
        id: 20,
        name: "ABP Ananda",
        description: "এবিপি আনন্দ - বাংলা",
        icon: "🇮🇳",
        url: "https://ythls.armelin.one/channel/UC73TJFDBMjFnHOxB3LiRGIw.m3u8",
        category: "ind-news"
    },
    {
        id: 21,
        name: "TV9 Bangla",
        description: "টিভি৯ বাংলা",
        icon: "🇮🇳",
        url: "https://ythls.armelin.one/channel/UCwH_dDGMlYGz3UjEYOQ_vVQ.m3u8",
        category: "ind-news"
    },
    {
        id: 22,
        name: "Zee 24 Ghanta",
        description: "জি ২৪ ঘন্টা - বাংলা",
        icon: "🇮🇳",
        url: "https://ythls.armelin.one/channel/UCfZ_hNB_XQrh_GaDJE3GFNA.m3u8",
        category: "ind-news"
    },
    {
        id: 23,
        name: "Republic Bangla",
        description: "রিপাবলিক বাংলা",
        icon: "🇮🇳",
        url: "https://ythls.armelin.one/channel/UCiENsUx3vFj7jOEMwjA9j5w.m3u8",
        category: "ind-news"
    },
    {
        id: 24,
        name: "Times Now",
        description: "টাইমস নাও",
        icon: "🇮🇳",
        url: "https://ythls.armelin.one/channel/UCwHBJVAIAN1yAONaZ-GAmGA.m3u8",
        category: "ind-news"
    },

    // ===== ইন্ডিয়ান স্পোর্টস / এন্টারটেইনমেন্ট =====
    {
        id: 25,
        name: "Sports Tak",
        description: "স্পোর্টস তক - ক্রিকেট",
        icon: "🏏",
        url: "https://ythls.armelin.one/channel/UCLq7LXaETLwNeFbrDEht-SA.m3u8",
        category: "ind-sports"
    },
    {
        id: 26,
        name: "CricTracker",
        description: "ক্রিকট্র্যাকার",
        icon: "🏏",
        url: "https://ythls.armelin.one/channel/UC2pHhnFPJNFaGluYAhTEvjQ.m3u8",
        category: "ind-sports"
    },

    // ===== পাকিস্তান =====
    {
        id: 27,
        name: "Geo News",
        description: "জিও নিউজ পাকিস্তান",
        icon: "🇵🇰",
        url: "https://ythls.armelin.one/channel/UCnMgODpFjTYAXFNaJjitORQ.m3u8",
        category: "pak"
    },
    {
        id: 28,
        name: "ARY News",
        description: "এআরওয়াই নিউজ",
        icon: "🇵🇰",
        url: "https://ythls.armelin.one/channel/UCMmpLL2ucRHAXbNHiCPyIyg.m3u8",
        category: "pak"
    },
    {
        id: 29,
        name: "Express News",
        description: "এক্সপ্রেস নিউজ",
        icon: "🇵🇰",
        url: "https://ythls.armelin.one/channel/UCTob50mmhRkWNOxI-lJAi_g.m3u8",
        category: "pak"
    },
    {
        id: 30,
        name: "Samaa TV",
        description: "সামা টিভি",
        icon: "🇵🇰",
        url: "https://ythls.armelin.one/channel/UC2G5MZRl_esmj-tNfHlTtbA.m3u8",
        category: "pak"
    },
    {
        id: 31,
        name: "Dunya News",
        description: "দুনিয়া নিউজ",
        icon: "🇵🇰",
        url: "https://ythls.armelin.one/channel/UCnMBBzv0yGk7PTUMJsIHqqQ.m3u8",
        category: "pak"
    },

    // ===== ইন্টারন্যাশনাল নিউজ =====
    {
        id: 32,
        name: "Al Jazeera English",
        description: "আল জাজিরা ইংলিশ",
        icon: "🌍",
        url: "https://live-hls-web-aje.getaj.net/AJE/01.m3u8",
        category: "intl-news"
    },
    {
        id: 33,
        name: "France 24 English",
        description: "ফ্রান্স ২৪ ইংলিশ",
        icon: "🌍",
        url: "https://ythls.armelin.one/channel/UCQfwfsi5VrQ8yKZ-UWmAEFg.m3u8",
        category: "intl-news"
    },
    {
        id: 34,
        name: "DW News",
        description: "ডয়চে ভেলে নিউজ",
        icon: "🌍",
        url: "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8",
        category: "intl-news"
    },
    {
        id: 35,
        name: "Sky News",
        description: "স্কাই নিউজ UK",
        icon: "🌍",
        url: "https://ythls.armelin.one/channel/UCoMdktPbSTixAyNGwb-UYkQ.m3u8",
        category: "intl-news"
    },
    {
        id: 36,
        name: "TRT World",
        description: "টিআরটি ওয়ার্ল্ড তুরস্ক",
        icon: "🌍",
        url: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
        category: "intl-news"
    },
    {
        id: 37,
        name: "CGTN",
        description: "সিজিটিএন চীন",
        icon: "🌍",
        url: "https://news.cgtn.com/resource/live/english/cgtn-news.m3u8",
        category: "intl-news"
    },
    {
        id: 38,
        name: "Euronews English",
        description: "ইউরোনিউজ ইংলিশ",
        icon: "🌍",
        url: "https://ythls.armelin.one/channel/UCW2QcKZiU8aUGg4yxCIditg.m3u8",
        category: "intl-news"
    },
    {
        id: 39,
        name: "ABC News Live",
        description: "এবিসি নিউজ USA",
        icon: "🇺🇸",
        url: "https://ythls.armelin.one/channel/UCBi2mrWuNuyYy4gbM6fU18Q.m3u8",
        category: "intl-news"
    },
    {
        id: 40,
        name: "NBC News",
        description: "এনবিসি নিউজ USA",
        icon: "🇺🇸",
        url: "https://ythls.armelin.one/channel/UCeY0bbntWzzVIaj2z3QigXg.m3u8",
        category: "intl-news"
    },
    {
        id: 41,
        name: "WION",
        description: "উইঅন - ওয়ার্ল্ড ইজ ওয়ান",
        icon: "🌍",
        url: "https://ythls.armelin.one/channel/UC_gUM8rL-Lrg6O3adPW9K1g.m3u8",
        category: "intl-news"
    },

    // ===== ইন্টারন্যাশনাল স্পোর্টস =====
    {
        id: 42,
        name: "Eurosport",
        description: "ইউরোস্পোর্ট",
        icon: "⚽",
        url: "https://ythls.armelin.one/channel/UCnuPjCWqb-MnhRHRZFJtfqw.m3u8",
        category: "intl-sports"
    },
    {
        id: 43,
        name: "beIN Sports",
        description: "বিইন স্পোর্টস",
        icon: "⚽",
        url: "https://ythls.armelin.one/channel/UCB5yzUOrx5AtbnA-yAO6qcA.m3u8",
        category: "intl-sports"
    },
    {
        id: 44,
        name: "DAZN Football",
        description: "ডাজন ফুটবল",
        icon: "⚽",
        url: "https://ythls.armelin.one/channel/UCJTbGc_OMsLEk5oq-TaLvPg.m3u8",
        category: "intl-sports"
    },
    {
        id: 45,
        name: "ICC Cricket",
        description: "আইসিসি ক্রিকেট অফিসিয়াল",
        icon: "🏏",
        url: "https://ythls.armelin.one/channel/UCa35o1eIC1tbIvtNwR0Hkqw.m3u8",
        category: "intl-sports"
    },
    {
        id: 46,
        name: "WWE",
        description: "ডব্লিউডব্লিউই রেসলিং",
        icon: "🤼",
        url: "https://ythls.armelin.one/channel/UCJ5v_MCY6GNUBTO8-D3XoAg.m3u8",
        category: "intl-sports"
    },
    {
        id: 47,
        name: "NBA",
        description: "এনবিএ বাস্কেটবল",
        icon: "🏀",
        url: "https://ythls.armelin.one/channel/UCWJ2lWNubArHWmf3FIHbfcQ.m3u8",
        category: "intl-sports"
    },
    {
        id: 48,
        name: "Real Madrid TV",
        description: "রিয়াল মাদ্রিদ টিভি",
        icon: "⚽",
        url: "https://ythls.armelin.one/channel/UCWV3obpZVGgJ3j9FVhEjhPQ.m3u8",
        category: "intl-sports"
    },

    // ===== এন্টারটেইনমেন্ট / ডকুমেন্টারি =====
    {
        id: 49,
        name: "Nat Geo Wild",
        description: "ন্যাশনাল জিওগ্রাফিক ওয়াইল্ড",
        icon: "🦁",
        url: "https://ythls.armelin.one/channel/UCHs0d2GehbICFQuNon9MxaQ.m3u8",
        category: "intl-entertainment"
    },
    {
        id: 50,
        name: "Discovery Adventure",
        description: "ডিসকভারি অ্যাডভেঞ্চার",
        icon: "🌏",
        url: "https://ythls.armelin.one/channel/UCB_UrE_KqYOyNt3pYNREqtg.m3u8",
        category: "intl-entertainment"
    },
    {
        id: 51,
        name: "NASA TV",
        description: "নাসা টিভি - মহাকাশ",
        icon: "🚀",
        url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8",
        category: "intl-entertainment"
    },
    {
        id: 52,
        name: "Zee Bangla",
        description: "জি বাংলা সিনেমা",
        icon: "🎬",
        url: "https://ythls.armelin.one/channel/UCaiSMID-VLy3_9KHE0xGIew.m3u8",
        category: "ind-entertainment"
    },
    {
        id: 53,
        name: "Sony SAB",
        description: "সনি স্যাব কমেডি",
        icon: "😂",
        url: "https://ythls.armelin.one/channel/UCo75s4Xe4U8DdIKC1R66cJA.m3u8",
        category: "ind-entertainment"
    },

    // ===== কিডস =====
    {
        id: 54,
        name: "Cartoon Network BD",
        description: "কার্টুন নেটওয়ার্ক",
        icon: "🎮",
        url: "https://ythls.armelin.one/channel/UCZ7gUbSr-dkw6_fWBKccV4A.m3u8",
        category: "kids"
    },
    {
        id: 55,
        name: "ChuChu TV",
        description: "চুচু টিভি - বাচ্চাদের",
        icon: "👶",
        url: "https://ythls.armelin.one/channel/UCBnZ16ahKA2DZ_IpM0Ie-Yg.m3u8",
        category: "kids"
    },

    // ===== মিউজিক =====
    {
        id: 56,
        name: "MTV Live",
        description: "এমটিভি মিউজিক",
        icon: "🎵",
        url: "https://ythls.armelin.one/channel/UCN2XePorRokPB9TEgRZpddg.m3u8",
        category: "music"
    },
    {
        id: 57,
        name: "Colors Bangla",
        description: "কালার্স বাংলা",
        icon: "🎵",
        url: "https://ythls.armelin.one/channel/UCwjB4jklGQP0g9QYkNhYGGQ.m3u8",
        category: "music"
    },

    // ===== ধর্মীয় =====
    {
        id: 58,
        name: "Peace TV Bangla",
        description: "পিস টিভি বাংলা",
        icon: "☪️",
        url: "https://ythls.armelin.one/channel/UCYjJOm0pPGgvxHFjf6OUYpw.m3u8",
        category: "religious"
    },
    {
        id: 59,
        name: "Madani Channel",
        description: "মাদানী চ্যানেল",
        icon: "☪️",
        url: "https://ythls.armelin.one/channel/UCqiPa5nDz7_LvFQoJ0bXFeg.m3u8",
        category: "religious"
    },
    {
        id: 60,
        name: "Quran TV",
        description: "কুরআন টিভি - মক্কা লাইভ",
        icon: "🕋",
        url: "https://ythls.armelin.one/channel/UClIIopOeuwL8KEK0wnFcodw.m3u8",
        category: "religious"
    }
];
