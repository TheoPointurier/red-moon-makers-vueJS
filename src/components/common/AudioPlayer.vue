<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Amplitude, { type Song } from 'amplitudejs';

const songs = ref<Song[]>([
  {
    name: 'Pray to the rain',
    artist: 'Red Moon Makers',
    url: '/music/pray_to_the_rain.mp3',
    cover_art_url: '/music/cover.png',
  },
  {
    name: 'Show me your Love',
    artist: 'Red Moon Makers',
    url: '/music/show_me_your_love.mp3',
    cover_art_url: '/music/cover.png',
  },
]);

const currentSongIndex = ref(0);
const isPlaying = ref(false);

onMounted(() => {
  Amplitude.init({
    songs: songs.value,
    callbacks: {
      play: () => (isPlaying.value = true),
      pause: () => (isPlaying.value = false),
      song_change: () => {
        currentSongIndex.value = Amplitude.getActiveIndex();
      },
    },
  });
});

const playSong = (index: number) => {
  Amplitude.playSongAtIndex(index);
  currentSongIndex.value = index;
};

const togglePlayPause = () => {
  isPlaying.value ? Amplitude.pause() : Amplitude.play();
};

const nextSong = () => Amplitude.next();
const prevSong = () => Amplitude.prev();

const currentSong = computed(() => songs.value[currentSongIndex.value]);
const currentCover = computed(() => currentSong.value.cover_art_url);

</script>

<template>
  <div class="player-container">
    <div class="album-info">
      <img :src="currentCover" class="album-cover" alt="Album Cover" />
      <div class="controls">
        <button @click="prevSong">⏮️</button>
        <button @click="togglePlayPause">{{ isPlaying ? '⏸️' : '▶️' }}</button>
        <button @click="nextSong">⏭️</button>
      </div>
      <div class="progress-bar">
        <input type="range" class="amplitude-song-slider" step=".1" />
      </div>
      <div class="current-song-info">
        <div>{{ currentSong.name }}</div>
        <div class="current-song-info_artist">{{ currentSong.artist }}</div>
      </div>
    </div>

    <div class="playlist">
      <div v-for="(song, index) in songs" :key="index" class="playlist-song"
        :class="{ active: currentSongIndex === index }" @click="playSong(index)">
        <span>{{ song.name }}</span>
        <span>{{ song.artist }}</span>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.player-container {
  grid-column: 2 / 5;
  grid-row: 1 / -1;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
}

.album-info {
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 0.5fr 0.5fr 1fr;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.album-cover {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  max-height: 250px;
  width: 100%;
  max-width: 250px;
  margin: 2rem auto;
  object-fit: contain;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 10px 0;
}

.controls button {
  border: none;
  background: #009fe3;
  color: white;
  font-size: 18px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.progress-bar {
  width: 100%;
  margin-top: 10px;
}

.amplitude-song-slider {
  width: 100%;
}

.current-song-info {
  margin-top: 10px;
  text-align: center;
  font-size: 2rem;

  &_artist {
    font-size: 1.2rem;
  }
}

.playlist {
  /* background: #fff; */
  overflow-y: auto;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.playlist-song {
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.playlist-song.active {
  background: #3d7d9c;
  border-radius: 5px;
  /* color: black; */
}

.playlist-song:hover {
  border-radius: 5px;
  background: rgb(240, 240, 240, 0.5);
}
</style>
