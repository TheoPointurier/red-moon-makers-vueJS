<script setup lang="ts">
import HomePage from './views/HomePage.vue'
import BandPage from './views/BandPage.vue'
import HeaderComp from './components/layout/Header.vue'
import FooterComp from './components/layout/Footer.vue'
import MusicPage from './views/MusicPage.vue'
import ContactPage from './views/ContactPage.vue'
import EventsPage from './views/EventsPage.vue'
import ShopPage from './views/ShopPage.vue'
</script>

<template>
  <div class="video-container" id="home-page">
    <video autoplay loop muted class="background-video">
      <source src="/band-music.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas les vidéos HTML5.
    </video>
  </div>
  <HeaderComp />
  <main class="wrapper">
    <HomePage id="home" />
    <BandPage id="band" />
    <MusicPage id="music" />
    <EventsPage id="events" />
    <ShopPage id="shop" />
    <ContactPage id="contact" />
  </main>
  <FooterComp />
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
