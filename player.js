// World Cup Live TV - Player Logic

let hls = null;
const video = document.getElementById('video-player');
const overlay = document.getElementById('overlay');
const channelGrid = document.getElementById('channel-grid');
const currentChannelName = document.getElementById('current-channel-name');

// Initialize channel grid
function renderChannels() {
    channelGrid.innerHTML = '';
    channels.forEach(channel => {
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

// Play a channel
function playChannel(channel) {
    // Update UI
    document.querySelectorAll('.channel-card').forEach(card => card.classList.remove('active'));
    document.getElementById(`channel-${channel.id}`).classList.add('active');
    currentChannelName.textContent = `${channel.name} - সরাসরি সম্প্রচার`;
    
    // Hide overlay
    overlay.classList.add('hidden');
    
    // Play stream
    playStream(channel.url);
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
            debug: false
        });
        
        hls.loadSource(url);
        hls.attachMedia(video);
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(err => {
                console.log('Autoplay blocked:', err);
            });
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
            if (data.fatal) {
                switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        console.error('Network error, trying to recover...');
                        hls.startLoad();
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.error('Media error, trying to recover...');
                        hls.recoverMediaError();
                        break;
                    default:
                        console.error('Fatal error, cannot recover');
                        showError('স্ট্রিম লোড করতে সমস্যা হচ্ছে। অনুগ্রহ করে অন্য চ্যানেল ট্রাই করুন।');
                        break;
                }
            }
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari / iOS native HLS support
        video.src = url;
        video.addEventListener('loadedmetadata', () => {
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
    
    // Update UI
    document.querySelectorAll('.channel-card').forEach(card => card.classList.remove('active'));
    currentChannelName.textContent = 'কাস্টম স্ট্রিম - সরাসরি';
    overlay.classList.add('hidden');
    
    playStream(url);
}

// Show error message
function showError(message) {
    overlay.classList.remove('hidden');
    overlay.querySelector('.overlay-content').innerHTML = `
        <span style="font-size: 3rem;">&#9888;</span>
        <p style="color: #ff6b6b; margin-top: 1rem;">${message}</p>
        <p style="margin-top: 0.5rem; font-size: 0.9rem;">অন্য একটি চ্যানেল ট্রাই করুন</p>
    `;
}

// Initialize
renderChannels();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            video.requestFullscreen().catch(err => console.log(err));
        }
    }
    if (e.key === ' ' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
});
