<script setup lang="ts">
import AudioPlayer from '../components/common/AudioPlayer.vue';

</script>
<template>
  <section class="music-page-container">
    <h2 class="music-page-title">Nos morceaux</h2>
    <div class="music-container">
      <AudioPlayer />
    </div>
  </section>
</template>
<style scoped>
.music-page-container {
  height: 100vh;
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 4fr;

}

.music-page-title {
  margin: 1rem 0 0 1rem;
  font-weight: 400;
  display: block;
  padding: 0.5rem;
}

.music-container {
  grid-row: 2 / 6;
  /* max-height: 720px; */
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  /* grid-template-rows: 1fr 1fr; */
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 90%;
  margin: 0 auto;
}
</style>