// Live TV by Rocky - Channel List
// Streams that support CORS (work from any website/GitHub Pages)
// Last updated: May 2026

const channels = [
    // ===== CORS-FRIENDLY OFFICIAL STREAMS =====

    // --- International News ---
    {
        id: 1,
        name: "Al Jazeera English",
        description: "আল জাজিরা ইংলিশ - ২৪/৭",
        icon: "🌍",
        url: "https://live-hls-web-aje.getaj.net/AJE/01.m3u8",
        category: "intl-news"
    },
    {
        id: 2,
        name: "Al Jazeera Arabic",
        description: "আল জাজিরা আরবি",
        icon: "🌍",
        url: "https://live-hls-web-aja.getaj.net/AJA/01.m3u8",
        category: "intl-news"
    },
    {
        id: 3,
        name: "France 24 English",
        description: "ফ্রান্স ২৪ ইংলিশ",
        icon: "🇫🇷",
        url: "https://stream.france24.com/f24/hls/f24_en.m3u8",
        category: "intl-news"
    },
    {
        id: 4,
        name: "France 24 French",
        description: "ফ্রান্স ২৪ ফ্রেঞ্চ",
        icon: "🇫🇷",
        url: "https://stream.france24.com/f24/hls/f24_fr.m3u8",
        category: "intl-news"
    },
    {
        id: 5,
        name: "France 24 Arabic",
        description: "ফ্রান্স ২৪ আরবি",
        icon: "🇫🇷",
        url: "https://stream.france24.com/f24/hls/f24_ar.m3u8",
        category: "intl-news"
    },
    {
        id: 6,
        name: "France 24 Spanish",
        description: "ফ্রান্স ২৪ স্প্যানিশ",
        icon: "🇫🇷",
        url: "https://stream.france24.com/f24/hls/f24_es.m3u8",
        category: "intl-news"
    },
    {
        id: 7,
        name: "DW News English",
        description: "ডয়চে ভেলে ইংলিশ",
        icon: "🇩🇪",
        url: "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8",
        category: "intl-news"
    },
    {
        id: 8,
        name: "TRT World",
        description: "টিআরটি ওয়ার্ল্ড তুরস্ক",
        icon: "🇹🇷",
        url: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
        category: "intl-news"
    },
    {
        id: 9,
        name: "CGTN English",
        description: "সিজিটিএন ইংলিশ চীন",
        icon: "🇨🇳",
        url: "https://news.cgtn.com/resource/live/english/cgtn-news.m3u8",
        category: "intl-news"
    },
    {
        id: 10,
        name: "CGTN Documentary",
        description: "সিজিটিএন ডকুমেন্টারি",
        icon: "🎬",
        url: "https://news.cgtn.com/resource/live/document/cgtn-doc.m3u8",
        category: "intl-entertainment"
    },
    {
        id: 11,
        name: "CGTN French",
        description: "সিজিটিএন ফ্রেঞ্চ",
        icon: "🇨🇳",
        url: "https://news.cgtn.com/resource/live/french/cgtn-f.m3u8",
        category: "intl-news"
    },
    {
        id: 12,
        name: "CGTN Arabic",
        description: "সিজিটিএন আরবি",
        icon: "🇨🇳",
        url: "https://news.cgtn.com/resource/live/arabic/cgtn-a.m3u8",
        category: "intl-news"
    },
    {
        id: 13,
        name: "CGTN Russian",
        description: "সিজিটিএন রাশিয়ান",
        icon: "🇨🇳",
        url: "https://news.cgtn.com/resource/live/russian/cgtn-r.m3u8",
        category: "intl-news"
    },
    {
        id: 14,
        name: "CGTN Spanish",
        description: "সিজিটিএন স্প্যানিশ",
        icon: "🇨🇳",
        url: "https://news.cgtn.com/resource/live/spanish/cgtn-e.m3u8",
        category: "intl-news"
    },
    {
        id: 15,
        name: "NHK World Japan",
        description: "এনএইচকে ওয়ার্ল্ড জাপান",
        icon: "🇯🇵",
        url: "https://nhkworld.webcdn.stream.ne.jp/www11/nhkworld-tv/domestic/263942/live_wa_s.m3u8",
        category: "intl-news"
    },
    {
        id: 16,
        name: "Arirang TV Korea",
        description: "আরিরাং টিভি কোরিয়া",
        icon: "🇰🇷",
        url: "https://amdlive-ch01.ctnd.com.edgesuite.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8",
        category: "intl-news"
    },
    {
        id: 17,
        name: "RT News English",
        description: "আরটি নিউজ ইংলিশ",
        icon: "🇷🇺",
        url: "https://rt-news.secure.footprint.net/1103-inadv-qidx-1k_v5.m3u8",
        category: "intl-news"
    },
    {
        id: 18,
        name: "ABC News Australia",
        description: "এবিসি নিউজ অস্ট্রেলিয়া",
        icon: "🇦🇺",
        url: "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8",
        category: "intl-news"
    },

    // --- Sports ---
    {
        id: 19,
        name: "Red Bull TV",
        description: "রেড বুল টিভি - এক্সট্রিম স্পোর্টস",
        icon: "🏎️",
        url: "https://rbmn-live.akamaized.net/hls/live/590964/BossTV/master.m3u8",
        category: "intl-sports"
    },
    {
        id: 20,
        name: "SportsGrid",
        description: "স্পোর্টসগ্রিড - ২৪/৭ স্পোর্টস",
        icon: "🏈",
        url: "https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxsportsgrid/CDN/master.m3u8",
        category: "intl-sports"
    },

    // --- NASA / Science ---
    {
        id: 21,
        name: "NASA TV Public",
        description: "নাসা টিভি - মহাকাশ লাইভ",
        icon: "🚀",
        url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8",
        category: "intl-entertainment"
    },
    {
        id: 22,
        name: "NASA TV Media",
        description: "নাসা মিডিয়া চ্যানেল",
        icon: "🚀",
        url: "https://ntv2.akamaized.net/hls/live/2013923/NASA-NTV2-HLS/master.m3u8",
        category: "intl-entertainment"
    },

    // --- Pakistan ---
    {
        id: 23,
        name: "Geo News",
        description: "জিও নিউজ পাকিস্তান",
        icon: "🇵🇰",
        url: "https://jk3lz82elw79-hls-live.5centscdn.com/GEONEWS/3500ba09d0538297440498d8e0f703fc.sdp/playlist.m3u8",
        category: "pak"
    },
    {
        id: 24,
        name: "ARY News",
        description: "এআরওয়াই নিউজ",
        icon: "🇵🇰",
        url: "https://jk3lz82elw79-hls-live.5centscdn.com/ARYNEWS/3500ba09d0538297440498d8e0f703fc.sdp/playlist.m3u8",
        category: "pak"
    },
    {
        id: 25,
        name: "Express News",
        description: "এক্সপ্রেস নিউজ পাকিস্তান",
        icon: "🇵🇰",
        url: "https://jk3lz82elw79-hls-live.5centscdn.com/EXPRESS/3500ba09d0538297440498d8e0f703fc.sdp/playlist.m3u8",
        category: "pak"
    },
    {
        id: 26,
        name: "Samaa TV",
        description: "সামা টিভি পাকিস্তান",
        icon: "🇵🇰",
        url: "https://jk3lz82elw79-hls-live.5centscdn.com/SAMAA/3500ba09d0538297440498d8e0f703fc.sdp/playlist.m3u8",
        category: "pak"
    },
    {
        id: 27,
        name: "Hum News",
        description: "হাম নিউজ",
        icon: "🇵🇰",
        url: "https://jk3lz82elw79-hls-live.5centscdn.com/HUMNEWS/3500ba09d0538297440498d8e0f703fc.sdp/playlist.m3u8",
        category: "pak"
    },

    // --- Bangladesh ---
    {
        id: 28,
        name: "Somoy TV",
        description: "সময় টিভি নিউজ",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/somoytv-flv/playlist.m3u8",
        category: "bd-news"
    },
    {
        id: 29,
        name: "Independent TV",
        description: "ইনডিপেনডেন্ট টিভি",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/independenttv-flv/playlist.m3u8",
        category: "bd-news"
    },
    {
        id: 30,
        name: "Jamuna TV",
        description: "যমুনা টিভি",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/jamunatv-flv/playlist.m3u8",
        category: "bd-news"
    },
    {
        id: 31,
        name: "NTV Bangladesh",
        description: "এনটিভি বাংলাদেশ",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/ntv-flv/playlist.m3u8",
        category: "bd-tv"
    },
    {
        id: 32,
        name: "Channel 24",
        description: "চ্যানেল ২৪",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/channel24-flv/playlist.m3u8",
        category: "bd-news"
    },
    {
        id: 33,
        name: "ATN Bangla",
        description: "এটিএন বাংলা",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/atnbangla-flv/playlist.m3u8",
        category: "bd-tv"
    },
    {
        id: 34,
        name: "RTV",
        description: "আরটিভি বাংলাদেশ",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/rtv-flv/playlist.m3u8",
        category: "bd-tv"
    },
    {
        id: 35,
        name: "DBC News",
        description: "ডিবিসি নিউজ",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/dbcnews-flv/playlist.m3u8",
        category: "bd-news"
    },
    {
        id: 36,
        name: "Banglavision",
        description: "বাংলাভিশন",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/banglavision-flv/playlist.m3u8",
        category: "bd-tv"
    },
    {
        id: 37,
        name: "Ekhon TV",
        description: "একনন টিভি",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/ekhontv-flv/playlist.m3u8",
        category: "bd-tv"
    },
    {
        id: 38,
        name: "SA TV",
        description: "এসএ টিভি",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/satv-flv/playlist.m3u8",
        category: "bd-tv"
    },
    {
        id: 39,
        name: "BTV National",
        description: "বাংলাদেশ টেলিভিশন",
        icon: "🇧🇩",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/btv-flv/playlist.m3u8",
        category: "bd-tv"
    },
    {
        id: 40,
        name: "T Sports",
        description: "টি স্পোর্টস - ক্রিকেট",
        icon: "🏏",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/tsports-flv/playlist.m3u8",
        category: "bd-sports"
    },
    {
        id: 41,
        name: "GTV",
        description: "গাজী টিভি",
        icon: "🏏",
        url: "https://us170.jagobd.com.bd:447/c3VydmVyX8teleaborVideo.stream_live/gtv-flv/playlist.m3u8",
        category: "bd-sports"
    },

    // --- India ---
    {
        id: 42,
        name: "DD News",
        description: "দূরদর্শন নিউজ",
        icon: "🇮🇳",
        url: "https://ddnews.liveworkshop.in/DDNewsLive/index.m3u8",
        category: "ind-news"
    },
    {
        id: 43,
        name: "DD National",
        description: "দূরদর্শন ন্যাশনাল",
        icon: "🇮🇳",
        url: "https://ddnational.liveworkshop.in/DDNationalLive/index.m3u8",
        category: "ind-news"
    },
    {
        id: 44,
        name: "NDTV 24x7",
        description: "এনডিটিভি ২৪x৭",
        icon: "🇮🇳",
        url: "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8",
        category: "ind-news"
    },

    // --- Religious ---
    {
        id: 45,
        name: "Makkah Live",
        description: "মক্কা হারাম শরীফ লাইভ",
        icon: "🕋",
        url: "https://edge.taghtia.com/sa/14.m3u8",
        category: "religious"
    },
    {
        id: 46,
        name: "Madina Live",
        description: "মদিনা মসজিদে নববী লাইভ",
        icon: "🕌",
        url: "https://edge.taghtia.com/sa/15.m3u8",
        category: "religious"
    },
    {
        id: 47,
        name: "Quran Kareem TV",
        description: "কুরআন করীম টিভি ২৪/৭",
        icon: "📖",
        url: "https://edge.taghtia.com/sa/16.m3u8",
        category: "religious"
    },
    {
        id: 48,
        name: "Peace TV English",
        description: "পিস টিভি ইংলিশ",
        icon: "☪️",
        url: "https://mn-nl.mncdn.com/peacetv_peacetv/peacetv/playlist.m3u8",
        category: "religious"
    },

    // --- Music ---
    {
        id: 49,
        name: "MTV Music 24/7",
        description: "এমটিভি মিউজিক",
        icon: "🎵",
        url: "https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxmtv/CDN/master.m3u8",
        category: "music"
    },
    {
        id: 50,
        name: "Hits Radio TV",
        description: "হিটস রেডিও টিভি",
        icon: "🎵",
        url: "https://dp-brs01-lnk03.bfrplayer.com/bfrtvstream_1/stream.m3u8",
        category: "music"
    }
];
