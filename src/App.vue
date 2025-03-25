<script setup lang="ts">
import HomePage from './views/HomePage.vue'
import BandPage from './views/BandPage.vue'
import HeaderComp from './components/layout/Header.vue'
import FooterComp from './components/layout/Footer.vue'
import MusicPage from './views/MusicPage.vue'
import ContactPage from './views/ContactPage.vue'
import EventsPage from './views/EventsPage.vue'
import ShopPage from './views/ShopPage.vue'
import { onMounted, ref } from 'vue'

const showVideo = ref(false)
const showRest = ref(false)

onMounted(() => {

  setTimeout(() => {
    showVideo.value = true
  }, 1000)


  setTimeout(() => {
    showRest.value = true
  }, 3000)
})
</script>

<template>

  <div class="rest-container" :class="{ 'fade-in': showRest }">
    <HeaderComp />
  </div>
  <main class="wrapper">
    <div class="video-container" :class="{ 'fade-in': showVideo }" id="home-page">
      <HomePage id="home" />
    </div>
    <BandPage id="band" />
    <MusicPage id="music" />
    <EventsPage id="events" />
    <ShopPage id="shop" />
    <ContactPage id="contact" />
  </main>
  <FooterComp />

</template>


<style scoped lang="scss">
.video-container,
.rest-container {
  /* De base : invisible (opacité 0) */
  opacity: 0;
  transition: opacity 1s ease;
  /* éventuellement pointer-events: none; pour bloquer l’interaction avant l’anim */
}

/* Lorsqu'on ajoute la classe .fade-in, on met opacité à 1 */
.fade-in {
  opacity: 1 !important;
}

.header-wrapper {
  opacity: 0;
}

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
  // z-index: 0;
}

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
</style>
