// Live TV by Rocky - Player Logic

let hls = null;
const video = document.getElementById('video-player');
const overlay = document.getElementById('overlay');
const channelGrid = document.getElementById('channel-grid');
const currentChannelName = document.getElementById('current-channel-name');
let retryCount = 0;
const MAX_RETRIES = 2;

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
        <div class="spinner" style="width:50px;height:50px;border:4px solid rgba(255,215,0,0.3);border-top-color:#ffd700;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 1rem;"></div>
        <p>স্ট্রিম লোড হচ্ছে...</p>
        <p style="font-size:0.8rem;color:#888;margin-top:0.5rem;">অনুগ্রহ করে অপেক্ষা করুন</p>
    `;
}

// Play HLS stream
function playStream(url) {
    // Destroy previous instance
    if (hls) {
        hls.destroy();
        hls = null;
    }

    if (Hls.isSupported()) {
        hls = new Hls({
            maxBufferLength: 30,
            maxMaxBufferLength: 60,
            startLevel: -1,
            capLevelToPlayerSize: true,
            debug: false,
            enableWorker: true,
            lowLatencyMode: false,
            xhrSetup: function(xhr, url) {
                xhr.withCredentials = false;
            }
        });
        
        hls.loadSource(url);
        hls.attachMedia(video);
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            overlay.classList.add('hidden');
            video.play().catch(err => {
                console.log('Autoplay blocked, click to play:', err);
                overlay.classList.remove('hidden');
                overlay.querySelector('.overlay-content').innerHTML = `
                    <span class="play-icon" style="cursor:pointer;">&#9654;</span>
                    <p>ক্লিক করুন প্লে করতে</p>
                `;
                overlay.onclick = () => {
                    video.play();
                    overlay.classList.add('hidden');
                    overlay.onclick = null;
                };
            });
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
            if (data.fatal) {
                switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        if (retryCount < MAX_RETRIES) {
                            retryCount++;
                            console.log(`Network error, retry ${retryCount}/${MAX_RETRIES}...`);
                            setTimeout(() => hls.startLoad(), 2000);
                        } else {
                            showError('নেটওয়ার্ক সমস্যা - এই চ্যানেল এখন পাওয়া যাচ্ছে না। অন্য চ্যানেল ট্রাই করুন।');
                        }
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.error('Media error, trying to recover...');
                        hls.recoverMediaError();
                        break;
                    default:
                        showError('স্ট্রিম লোড করতে সমস্যা হচ্ছে। অনুগ্রহ করে অন্য চ্যানেল ট্রাই করুন।');
                        break;
                }
            }
        });

        // Timeout - if not loaded in 15 seconds, show error
        setTimeout(() => {
            if (!overlay.classList.contains('hidden')) {
                showError('স্ট্রিম লোড হতে বেশি সময় নিচ্ছে। অন্য চ্যানেল ট্রাই করুন।');
            }
        }, 15000);

    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari / iOS native HLS support
        video.src = url;
        video.addEventListener('loadedmetadata', () => {
            overlay.classList.add('hidden');
            video.play().catch(err => {
                console.log('Autoplay blocked:', err);
            });
        });
    } else {
        showError('আপনার ব্রাউজার HLS সাপোর্ট করে না। Chrome বা Firefox ব্যবহার করুন।');
    }
}

// Play custom stream
function playCustomStream() {
    const url = document.getElementById('custom-url').value.trim();
    if (!url) {
        alert('অনুগ্রহ করে একটি স্ট্রিম URL দিন');
        return;
    }
    
    retryCount = 0;
    // Update UI
    document.querySelectorAll('.channel-card').forEach(card => card.classList.remove('active'));
    currentChannelName.textContent = 'কাস্টম স্ট্রিম - সরাসরি';
    showLoading();
    
    playStream(url);
}

// Show error message
function showError(message) {
    overlay.classList.remove('hidden');
    overlay.querySelector('.overlay-content').innerHTML = `
        <span style="font-size: 3rem; display:block; margin-bottom:1rem;">&#9888;</span>
        <p style="color: #ff6b6b;">${message}</p>
        <p style="margin-top: 0.5rem; font-size: 0.85rem; color:#888;">অন্য একটি চ্যানেল ট্রাই করুন</p>
    `;
}

// Initialize
renderChannels();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    
    if (e.key === 'f' || e.key === 'F') {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            const container = document.querySelector('.video-container');
            container.requestFullscreen().catch(err => console.log(err));
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
