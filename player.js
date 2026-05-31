// Live TV by Rocky - Player Logic

let hls = null;
const video = document.getElementById('video-player');
const overlay = document.getElementById('overlay');
const channelGrid = document.getElementById('channel-grid');
const currentChannelName = document.getElementById('current-channel-name');
let retryCount = 0;
const MAX_RETRIES = 3;

// Initialize channel grid
function renderChannels(filter = 'all') {
    channelGrid.innerHTML = '';
    let filteredChannels = channels;
    
    if (filter !== 'all') {
        if (filter === 'bd') {
            filteredChannels = channels.filter(ch => ch.category.startsWith('bd'));
        } else if (filter === 'ind') {
            filteredChannels = channels.filter(ch => ch.category.startsWith('ind'));
        } else {
            filteredChannels = channels.filter(ch => ch.category === filter);
        }
    }
    
    if (filteredChannels.length === 0) {
        channelGrid.innerHTML = '<p style="color:#aaa; padding:1rem;">এই ক্যাটাগরিতে কোনো চ্যানেল নেই</p>';
        return;
    }
    
    filteredChannels.forEach(channel => {
        const card = document.createElement('div');
        card.className = 'channel-card';
        card.id = `channel-${channel.id}`;
        card.innerHTML = `
            <div class="channel-icon">${channel.icon}</div>
            <div class="channel-info">
                <h3>${channel.name}</h3>
                <p>${channel.description}</p>
            </div>
            <div class="channel-status"></div>
        `;
        card.addEventListener('click', () => playChannel(channel));
        channelGrid.appendChild(card);
    });
}

// Filter channels by category
function filterChannels(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    renderChannels(category);
}

// Play a channel
function playChannel(channel) {
    retryCount = 0;
    
    // Update UI
    document.querySelectorAll('.channel-card').forEach(card => card.classList.remove('active'));
    const activeCard = document.getElementById(`channel-${channel.id}`);
    if (activeCard) activeCard.classList.add('active');
    currentChannelName.textContent = `${channel.name} - সরাসরি সম্প্রচার`;
    
    // Show loading
    showLoading();
    
    // Play stream
    playStream(channel.url);
}

// Show loading state
function showLoading() {
    overlay.classList.remove('hidden');
    overlay.querySelector('.overlay-content').innerHTML = `
        <div style="width:50px;height:50px;border:4px solid rgba(255,215,0,0.3);border-top-color:#ffd700;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 1rem;"></div>
        <p>লোড হচ্ছে... অপেক্ষা করুন</p>
        <p style="font-size:0.75rem;color:#666;margin-top:0.5rem;">কিছু চ্যানেল লোড হতে ৫-১০ সেকেন্ড সময় নিতে পারে</p>
    `;
}

// Play HLS stream
function playStream(url) {
    // Destroy previous instance
    if (hls) {
        hls.destroy();
        hls = null;
    }

    // Reset video
    video.pause();
    video.removeAttribute('src');
    video.load();

    console.log('[Rocky TV] Loading stream:', url);

    if (Hls.isSupported()) {
        hls = new Hls({
            maxBufferLength: 30,
            maxMaxBufferLength: 120,
            maxBufferSize: 60 * 1000 * 1000,
            startLevel: -1,
            capLevelToPlayerSize: true,
            debug: false,
            enableWorker: true,
            lowLatencyMode: false,
            fragLoadingTimeOut: 20000,
            manifestLoadingTimeOut: 15000,
            levelLoadingTimeOut: 15000
        });
        
        hls.loadSource(url);
        hls.attachMedia(video);
        
        hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
            console.log('[Rocky TV] Stream loaded! Qualities:', data.levels.length);
            overlay.classList.add('hidden');
            video.play().catch(function(err) {
                console.log('[Rocky TV] Autoplay blocked, showing play button');
                overlay.classList.remove('hidden');
                overlay.querySelector('.overlay-content').innerHTML = `
                    <span style="font-size:4rem;cursor:pointer;display:block;">&#9654;</span>
                    <p style="margin-top:1rem;">ক্লিক করুন প্লে করতে</p>
                `;
                overlay.onclick = function() {
                    video.play();
                    overlay.classList.add('hidden');
                    overlay.onclick = null;
                };
            });
        });

        hls.on(Hls.Events.ERROR, function(event, data) {
            console.log('[Rocky TV] Error:', data.type, data.details, data.fatal);
            if (data.fatal) {
                switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        if (retryCount < MAX_RETRIES) {
                            retryCount++;
                            console.log('[Rocky TV] Retry ' + retryCount + '/' + MAX_RETRIES);
                            setTimeout(function() { 
                                hls.startLoad(); 
                            }, 3000);
                        } else {
                            showError('এই চ্যানেল এখন পাওয়া যাচ্ছে না। অন্য চ্যানেল ট্রাই করুন।');
                        }
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.log('[Rocky TV] Media error, recovering...');
                        hls.recoverMediaError();
                        break;
                    default:
                        showError('স্ট্রিম চালানো যাচ্ছে না। অন্য চ্যানেল ট্রাই করুন।');
                        break;
                }
            }
        });

        // Timeout
        setTimeout(function() {
            if (overlay && !overlay.classList.contains('hidden') && 
                overlay.querySelector('.overlay-content').innerHTML.includes('লোড হচ্ছে')) {
                showError('স্ট্রিম লোড হতে সময় বেশি নিচ্ছে। Al Jazeera, France 24, DW News ট্রাই করুন - এগুলো নিশ্চিত কাজ করে।');
            }
        }, 20000);

    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Safari / iOS
        video.src = url;
        video.addEventListener('loadedmetadata', function() {
            overlay.classList.add('hidden');
            video.play().catch(function(err) {
                console.log('[Rocky TV] Autoplay blocked (Safari)');
            });
        }, { once: true });
        video.addEventListener('error', function() {
            showError('এই চ্যানেল লোড হচ্ছে না। অন্য চ্যানেল ট্রাই করুন।');
        }, { once: true });
    } else {
        showError('আপনার ব্রাউজার HLS সাপোর্ট করে না। Chrome, Firefox বা Edge ব্যবহার করুন।');
    }
}

// Play custom stream
function playCustomStream() {
    var url = document.getElementById('custom-url').value.trim();
    if (!url) {
        alert('অনুগ্রহ করে একটি স্ট্রিম URL দিন');
        return;
    }
    
    retryCount = 0;
    document.querySelectorAll('.channel-card').forEach(function(card) { card.classList.remove('active'); });
    currentChannelName.textContent = 'কাস্টম স্ট্রিম - সরাসরি';
    showLoading();
    playStream(url);
}

// Show error message
function showError(message) {
    overlay.classList.remove('hidden');
    overlay.querySelector('.overlay-content').innerHTML = `
        <span style="font-size:3rem;display:block;margin-bottom:1rem;">&#9888;&#65039;</span>
        <p style="color:#ff6b6b;font-size:1rem;">${message}</p>
        <p style="margin-top:0.75rem;font-size:0.8rem;color:#888;">টিপ: International News চ্যানেলগুলো সবচেয়ে ভালো কাজ করে</p>
    `;
}

// Initialize
renderChannels();

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT') return;
    
    if (e.key === 'f' || e.key === 'F') {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.querySelector('.video-container').requestFullscreen().catch(function(err) { console.log(err); });
        }
    }
    if (e.key === ' ') {
        e.preventDefault();
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
});
