# World Cup Live TV - বিশ্বকাপ লাইভ টিভি &#9917;

একটি লাইভ টিভি স্ট্রিমিং ওয়েবসাইট যেখানে আপনি বিশ্বকাপসহ বিভিন্ন স্পোর্টস চ্যানেল সরাসরি দেখতে পারবেন।

## Features

- **HLS Video Player** - লাইভ স্ট্রিম দেখার জন্য
- **Multiple Channels** - T Sports, GTV, Star Sports, Sony Ten, এবং আরো
- **Custom Stream URL** - নিজের M3U8 লিংক দিয়ে যেকোনো স্ট্রিম দেখুন
- **Responsive Design** - মোবাইল এবং ডেস্কটপ দুইখানেই কাজ করে
- **Keyboard Shortcuts** - F = Fullscreen, Space = Play/Pause

## How to Use

1. ওয়েবসাইটে যান
2. চ্যানেল লিস্ট থেকে একটি চ্যানেল ক্লিক করুন
3. ভিডিও প্লেয়ারে লাইভ স্ট্রিম শুরু হবে

## Deploy on GitHub Pages

1. এই repository তে যান Settings > Pages
2. Source: Deploy from a branch
3. Branch: `main` (root `/`)
4. Save করুন

কিছুক্ষণ পর আপনার সাইট লাইভ হয়ে যাবে: `https://your-username.github.io/worldcup-live-tv/`

## Add Your Own Channels

`channels.js` ফাইলে নতুন চ্যানেল যোগ করুন:

```javascript
{
    id: 13,
    name: "Your Channel",
    description: "Channel Description",
    icon: "&#128250;",
    url: "https://your-stream-url/stream.m3u8",
    category: "sports"
}
```

## Disclaimer

এই প্রজেক্ট শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে তৈরি। সমস্ত স্ট্রিম পাবলিকলি অ্যাভেইলেবল সোর্স থেকে নেওয়া।
