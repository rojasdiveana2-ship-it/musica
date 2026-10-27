// ----------------------------------------------------
// ANUEL AA DISCOGRAFÍA OFICIAL Y TRACKS CON PORTADAS
// ----------------------------------------------------
const albumsList = [
    { 
        id: "rhlm", 
        title: "Real Hasta La Muerte", 
        year: "2018", 
        cover: "https://m.media-amazon.com/images/I/81xUe6VmsxL._UF1000,1000_QL80_.jpg", 
        count: 2 
    },
    { 
        id: "emmanuel", 
        title: "Emmanuel", 
        year: "2020", 
        cover: "https://i.scdn.co/image/ab67616d0000b273b4009bbbe29c7882200be643", 
        count: 2 
    },
    { 
        id: "dioses", 
        title: "Los Dioses", 
        year: "2021", 
        cover: "https://i.scdn.co/image/ab67616d0000b273ef3fa2bf9bb3d9dc004d88e0", 
        count: 2 
    },
    { 
        id: "llnm", 
        title: "Las Leyendas Nunca Mueren", 
        year: "2021", 
        cover: "https://i.scdn.co/image/ab67616d0000b273b754e95d5ee13cdd22e69fb2", 
        count: 2 
    },
    { 
        id: "llnm2", 
        title: "LLNM2", 
        year: "2022", 
        cover: "https://i.scdn.co/image/ab67616d0000b27306fb01fb54256eb41a0279c6", 
        count: 2 
    }
];

const tracksList = [
    {
        id: 1,
        title: "Brindemos",
        artist: "Anuel AA ft. Ozuna",
        album: "Real Hasta La Muerte",
        albumId: "rhlm",
        cover: "https://m.media-amazon.com/images/I/81xUe6VmsxL._UF1000,1000_QL80_.jpg",
        src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
    },
    {
        id: 2,
        title: "Ella Quiere Beber",
        artist: "Anuel AA",
        album: "Real Hasta La Muerte",
        albumId: "rhlm",
        cover: "https://m.media-amazon.com/images/I/81xUe6VmsxL._UF1000,1000_QL80_.jpg",
        src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=lofi-chill-110820.mp3"
    },
    {
        id: 3,
        title: "China",
        artist: "Anuel AA, Daddy Yankee, Karol G, Ozuna",
        album: "Emmanuel",
        albumId: "emmanuel",
        cover: "https://i.scdn.co/image/ab67616d0000b273b4009bbbe29c7882200be643",
        src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=sweet-love-111221.mp3"
    },
    {
        id: 4,
        title: "Hasta Que Dios Diga",
        artist: "Anuel AA ft. Bad Bunny",
        album: "Emmanuel",
        albumId: "emmanuel",
        cover: "https://i.scdn.co/image/ab67616d0000b273b4009bbbe29c7882200be643",
        src: "https://cdn.pixabay.com/download/audio/2021/09/06/audio_8c227e3d81.mp3?filename=empty-mind-118973.mp3"
    },
    {
        id: 5,
        title: "Los Dioses",
        artist: "Anuel AA & Ozuna",
        album: "Los Dioses",
        albumId: "dioses",
        cover: "https://i.scdn.co/image/ab67616d0000b273ef3fa2bf9bb3d9dc004d88e0",
        src: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f37303.mp3?filename=good-night-160166.mp3"
    },
    {
        id: 6,
        title: "Antes",
        artist: "Anuel AA & Ozuna",
        album: "Los Dioses",
        albumId: "dioses",
        cover: "https://i.scdn.co/image/ab67616d0000b273ef3fa2bf9bb3d9dc004d88e0",
        src: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=soft-rain-111154.mp3"
    },
    {
        id: 7,
        title: "Dictadura",
        artist: "Anuel AA",
        album: "Las Leyendas Nunca Mueren",
        albumId: "llnm",
        cover: "https://i.scdn.co/image/ab67616d0000b273b754e95d5ee13cdd22e69fb2",
        src: "https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3?filename=relaxing-118251.mp3"
    },
    {
        id: 8,
        title: "Llorando en un Ferrari",
        artist: "Anuel AA",
        album: "Las Leyendas Nunca Mueren",
        albumId: "llnm",
        cover: "https://i.scdn.co/image/ab67616d0000b273b754e95d5ee13cdd22e69fb2",
        src: "https://cdn.pixabay.com/download/audio/2022/03/24/audio_3d1685a49d.mp3?filename=ambient-piano-10781.mp3"
    },
    {
        id: 9,
        title: "Más Rica Que Ayer",
        artist: "Anuel AA",
        album: "LLNM2",
        albumId: "llnm2",
        cover: "https://i.scdn.co/image/ab67616d0000b27306fb01fb54256eb41a0279c6",
        src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
    },
    {
        id: 10,
        title: "La 2bleA",
        artist: "Anuel AA",
        album: "LLNM2",
        albumId: "llnm2",
        cover: "https://i.scdn.co/image/ab67616d0000b27306fb01fb54256eb41a0279c6",
        src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=lofi-chill-110820.mp3"
    }
];

// VARIABLES DE ESTADO
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: Sin repetición, 1: Repetir álbum, 2: Repetir canción
let currentAlbumFilter = 'all';
let filteredTracks = [...tracksList];
let favorites = [];

// Web Audio API & Ecualizador
let audioCtx = null;
let audioSource = null;
let eqBands = [];
let isEQActive = true;
let analyserNode = null;
const eqFrequencies = [60, 230, 910, 4000, 14000];

// Elementos del DOM
const audio = document.getElementById('audio-element');
const btnPlay = document.getElementById('btn-play');
const progressBar = document.getElementById('progress-bar');
const timeCurrent = document.getElementById('time-current');
const timeDuration = document.getElementById('time-duration');
const playerCover = document.getElementById('player-cover');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerAlbum = document.getElementById('player-album');
const heroCover = document.getElementById('hero-cover');
const canvas = document.getElementById('visualizer-canvas');
const canvasCtx = canvas.getContext('2d');

// INICIALIZACIÓN
window.addEventListener('load', () => {
    renderAlbums();
    renderPlaylist();
    loadTrack(0);
    setupAudioEventListeners();
    initVisualizerCanvas();
});

function setupAudioEventListeners() {
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => {
        timeDuration.innerText = formatTime(audio.duration);
    });
    audio.addEventListener('ended', handleTrackEnded);
    
    document.getElementById('search-input')?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filteredTracks = tracksList.filter(t => 
            t.title.toLowerCase().includes(query) || 
            t.artist.toLowerCase().includes(query) ||
            t.album.toLowerCase().includes(query)
        );
        renderPlaylist();
    });

    progressBar.addEventListener('input', (e) => {
        if (audio.duration) {
            const seekTime = (e.target.value / 100) * audio.duration;
            audio.currentTime = seekTime;
        }
    });
}

// WEB AUDIO API Y ECUALIZADOR STUDIO
function initWebAudio() {
    if (audioCtx) return;

    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();

        audioSource = audioCtx.createMediaElementSource(audio);

        analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 64;

        eqBands = eqFrequencies.map(freq => {
            const filter = audioCtx.createBiquadFilter();
            filter.type = freq <= 230 ? 'lowshelf' : (freq >= 4000 ? 'highshelf' : 'peaking');
            filter.frequency.value = freq;
            filter.gain.value = 0;
            return filter;
        });

        let nodeChain = audioSource;
        eqBands.forEach(filter => {
            nodeChain.connect(filter);
            nodeChain = filter;
        });

        nodeChain.connect(analyserNode);
        analyserNode.connect(audioCtx.destination);

        applyPreset('trap');
        drawVisualizer();
    } catch (err) {
        console.warn("WebAudio API Error:", err);
    }
}

function updateEQBand(index, value) {
    const gainVal = parseFloat(value);
    const freq = eqFrequencies[index];
    document.getElementById(`eq-val-${freq}`).innerText = `${gainVal > 0 ? '+' : ''}${gainVal} dB`;

    if (eqBands[index] && isEQActive) {
        eqBands[index].gain.value = gainVal;
    }
}

function toggleEQPower() {
    isEQActive = !isEQActive;
    const btn = document.getElementById('btn-eq-power');
    const text = document.getElementById('eq-status-text');

    if (isEQActive) {
        btn.className = "bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md red-glow";
        text.innerText = "ON";
        eqFrequencies.forEach((freq, idx) => {
            const val = parseFloat(document.getElementById(`eq-${freq}`).value);
            if (eqBands[idx]) eqBands[idx].gain.value = val;
        });
        showToast("Ecualizador Activado");
    } else {
        btn.className = "bg-slate-800 text-slate-400 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2";
        text.innerText = "OFF";
        eqBands.forEach(filter => filter.gain.value = 0);
        showToast("Ecualizador Desactivado");
    }
}

const presetsMap = {
    trap: [4, 3, -1, 2, 5],
    reggaeton: [6, 4, 0, 3, 4],
    bass: [8, 6, 1, 0, -1],
    flat: [0, 0, 0, 0, 0],
    vocal: [-2, 0, 5, 4, 2]
};

function applyPreset(presetName) {
    const values = presetsMap[presetName] || presetsMap.trap;
    eqFrequencies.forEach((freq, idx) => {
        const slider = document.getElementById(`eq-${freq}`);
        if (slider) {
            slider.value = values[idx];
            updateEQBand(idx, values[idx]);
        }
    });
    showToast(`Preset: ${presetName.toUpperCase()}`);
}

// VISUALIZADOR DE ESPECTRO CANVA
function initVisualizerCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}

function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    if (!analyserNode) return;

    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);

    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 1.5;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height;

        const gradient = canvasCtx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(0, '#e50914');
        gradient.addColorStop(1, '#ff6b6b');

        canvasCtx.fillStyle = gradient;
        canvasCtx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);

        x += barWidth;
    }
}

// MOTOR DE REPRODUCCIÓN
function loadTrack(index) {
    if (filteredTracks.length === 0) return;
    currentTrackIndex = index;
    const track = filteredTracks[currentTrackIndex];

    audio.src = track.src;
    playerCover.src = track.cover;
    heroCover.src = track.cover;
    playerTitle.innerText = track.title;
    playerArtist.innerText = track.artist;
    playerAlbum.innerText = track.album;

    updateFavoriteUI();
    renderPlaylist();
}

function togglePlay() {
    initWebAudio();
    
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        btnPlay.innerHTML = '<i class="fas fa-play text-2xl ml-1"></i>';
        document.getElementById('cover-play-icon').className = 'fas fa-play text-2xl ml-1';
        document.getElementById('vinyl-badge').classList.add('hidden');
    } else {
        audio.play();
        isPlaying = true;
        btnPlay.innerHTML = '<i class="fas fa-pause text-2xl"></i>';
        document.getElementById('cover-play-icon').className = 'fas fa-pause text-2xl';
        document.getElementById('vinyl-badge').classList.remove('hidden');
    }
}

function prevTrack() {
    let nextIndex = currentTrackIndex - 1;
    if (nextIndex < 0) nextIndex = filteredTracks.length - 1;
    loadTrack(nextIndex);
    if (isPlaying) audio.play();
}

function nextTrack() {
    if (isShuffle) {
        let randomIndex = Math.floor(Math.random() * filteredTracks.length);
        loadTrack(randomIndex);
    } else {
        let nextIndex = currentTrackIndex + 1;
        if (nextIndex >= filteredTracks.length) nextIndex = 0;
        loadTrack(nextIndex);
    }
    if (isPlaying) audio.play();
}

function handleTrackEnded() {
    if (repeatMode === 2) {
        audio.currentTime = 0;
        audio.play();
    } else if (repeatMode === 1 || currentTrackIndex < filteredTracks.length - 1) {
        nextTrack();
    } else {
        isPlaying = false;
        btnPlay.innerHTML = '<i class="fas fa-play text-2xl ml-1"></i>';
    }
}

function updateProgress() {
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.value = percent;
        timeCurrent.innerText = formatTime(audio.currentTime);
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    const btn = document.getElementById('btn-shuffle');
    if (isShuffle) {
        btn.classList.add('text-red-500');
        btn.classList.remove('text-slate-400');
        showToast("Modo Aleatorio Activado");
    } else {
        btn.classList.remove('text-red-500');
        btn.classList.add('text-slate-400');
        showToast("Modo Secuencial");
    }
}

function toggleRepeat() {
    repeatMode = (repeatMode + 1) % 3;
    const btn = document.getElementById('btn-repeat');
    const badge = document.getElementById('repeat-badge');

    if (repeatMode === 0) {
        btn.className = "p-3 text-slate-400 hover:text-white transition rounded-full relative";
        badge.classList.add('hidden');
        showToast("Sin Repetición");
    } else if (repeatMode === 1) {
        btn.className = "p-3 text-red-500 transition rounded-full relative";
        badge.classList.add('hidden');
        showToast("Repetir Lista");
    } else if (repeatMode === 2) {
        btn.className = "p-3 text-red-500 transition rounded-full relative";
        badge.classList.remove('hidden');
        showToast("Repetir Canción Actual");
    }
}

function setVolume(val) {
    audio.volume = val;
    document.getElementById('volume-val').innerText = `${Math.round(val * 100)}%`;
    const icon = document.getElementById('btn-volume').children[0];
    if (val == 0) icon.className = "fas fa-volume-mute text-base text-red-500";
    else if (val < 0.5) icon.className = "fas fa-volume-down text-base";
    else icon.className = "fas fa-volume-up text-base";
}

function toggleMute() {
    if (audio.volume > 0) {
        audio.volume = 0;
        document.getElementById('volume-bar').value = 0;
        setVolume(0);
    } else {
        audio.volume = 0.8;
        document.getElementById('volume-bar').value = 0.8;
        setVolume(0.8);
    }
}

// RENDERIZADO DE ÁLBUMES Y PLAYLIST
function renderAlbums() {
    const container = document.getElementById('albums-container');
    container.innerHTML = '';

    albumsList.forEach(album => {
        const card = document.createElement('div');
        card.className = `spotify-card flex-shrink-0 w-36 lg:w-auto p-3 rounded-2xl border ${currentAlbumFilter === album.id ? 'border-red-600 bg-red-950/20' : 'border-white/5'} cursor-pointer group flex flex-col items-center text-center`;
        card.onclick = () => filterAlbum(album.id);
        card.innerHTML = `
            <div class="w-full aspect-square rounded-xl overflow-hidden mb-2.5 relative shadow-lg">
                <img src="${album.cover}" alt="${album.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg red-glow">
                        <i class="fas fa-play text-sm ml-0.5"></i>
                    </div>
                </div>
            </div>
            <h3 class="font-bold text-xs truncate w-full text-white">${album.title}</h3>
            <p class="text-[10px] text-red-400 font-mono font-semibold">${album.year}</p>
        `;
        container.appendChild(card);
    });
}

function filterAlbum(albumId) {
    currentAlbumFilter = albumId;
    const titleEl = document.getElementById('playlist-title');

    if (albumId === 'all') {
        filteredTracks = [...tracksList];
        titleEl.innerText = "Todas las Canciones";
    } else {
        filteredTracks = tracksList.filter(t => t.albumId === albumId);
        const albumObj = albumsList.find(a => a.id === albumId);
        titleEl.innerText = albumObj ? `Álbum: ${albumObj.title}` : "Álbum";
    }

    renderAlbums();
    renderPlaylist();
    if (filteredTracks.length > 0) {
        loadTrack(0);
    }
}

function renderPlaylist() {
    const container = document.getElementById('playlist-container');
    container.innerHTML = '';

    if (filteredTracks.length === 0) {
        container.innerHTML = '<p class="text-center text-slate-500 text-xs py-8">No se encontraron pistas</p>';
        return;
    }

    filteredTracks.forEach((track, idx) => {
        const isCurrent = (idx === currentTrackIndex);
        const item = document.createElement('div');
        item.className = `p-2.5 rounded-2xl flex items-center justify-between gap-3 cursor-pointer transition border ${isCurrent ? 'bg-red-950/40 border-red-600/50 text-white' : 'hover:bg-white/5 border-transparent text-slate-300'}`;
        item.onclick = () => {
            loadTrack(idx);
            if (!isPlaying) togglePlay();
            else audio.play();
        };

        item.innerHTML = `
            <div class="flex items-center gap-3 overflow-hidden">
                <span class="text-xs font-mono w-4 text-center ${isCurrent ? 'text-red-500 font-bold' : 'text-slate-500'}">
                    ${isCurrent && isPlaying ? '<i class="fas fa-volume-high text-red-500 animate-pulse"></i>' : idx + 1}
                </span>
                <img src="${track.cover}" class="w-11 h-11 rounded-xl object-cover flex-shrink-0 border border-white/10 shadow-md">
                <div class="truncate">
                    <h4 class="font-bold text-xs truncate ${isCurrent ? 'text-red-400' : 'text-slate-100'}">${track.title}</h4>
                    <p class="text-[10px] text-slate-400 truncate">${track.artist}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
                <button onclick="event.stopPropagation(); downloadTrack(${track.id})" class="p-2 text-slate-400 hover:text-red-500 transition" title="Descargar MP3">
                    <i class="fas fa-download text-xs"></i>
                </button>
            </div>
        `;
        container.appendChild(item);
    });
}

// FAVORITOS Y DESCARGAS MP3
function toggleFavorite() {
    const track = filteredTracks[currentTrackIndex];
    const idx = favorites.indexOf(track.id);

    if (idx >= 0) {
        favorites.splice(idx, 1);
        showToast("Removido de Favoritos");
    } else {
        favorites.push(track.id);
        showToast("❤️ Agregado a tus Favoritos");
    }
    updateFavoriteUI();
}

function updateFavoriteUI() {
    const track = filteredTracks[currentTrackIndex];
    const btn = document.getElementById('btn-favorite');
    if (track && favorites.includes(track.id)) {
        btn.innerHTML = '<i class="fas fa-heart text-2xl text-red-500"></i>';
    } else {
        btn.innerHTML = '<i class="far fa-heart text-2xl text-slate-400"></i>';
    }
}

function downloadCurrentTrack() {
    const track = filteredTracks[currentTrackIndex];
    if (track) downloadTrack(track.id);
}

function downloadTrack(id) {
    const track = tracksList.find(t => t.id === id);
    if (!track) return;

    const link = document.createElement('a');
    link.href = track.src;
    link.download = `${track.artist} - ${track.title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Descargando: ${track.title}`);
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').innerText = msg;
    toast.classList.remove('translate-y-24', 'opacity-0');

    setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
    }, 2500);
}