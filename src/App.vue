<script setup lang="ts">
import HomePage from './views/HomePage.vue'
import BandPage from './views/BandPage.vue'
import Header from './components/layout/Header.vue'
import MusicPage from './views/MusicPage.vue'
</script>

<template>
  <div class="video-container" id="home-page">
    <video autoplay loop muted class="background-video">
      <source src="/band-music.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas les vidéos HTML5.
    </video>
  </div>
  <Header />
  <main class="wrapper">
    <HomePage />
    <BandPage id="band-page" />
    <MusicPage id="music-page" />
  </main>
</template>

<style scoped>
.wrapper {
  grid-column: 1 / -1;
  display: grid;
  grid-row: 1 / -1;
}

.video-container {
  /* position: absolute; */
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  overflow: hidden;
  height: 100vh;
  height: 100dvh;

}

.background-video {
  background-size: cover;
  width: 100%;
  /* overflow: hidden; */
  /* min-width: 100%; */
  z-index: -1;
}

@media (min-width: 1024px) {

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
