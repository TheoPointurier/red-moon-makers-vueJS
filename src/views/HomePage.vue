<script setup lang="ts">
</script>
<template>
  <section class="home-page-container">
    <video autoplay loop muted class="background-video">
      <source src="/band-music.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas les vidéos HTML5.
    </video>
  </section>

</template>
<style scoped>
.home-page-container {
  height: 100vh;
  z-index: -1;
}

.background-video {
  width: 100%;
  /* height: 100vh; */
  z-index: -1;

}

@media screen and (max-width: 768px) {
  .background-video {
    height: 100vh;
    width: auto;
  }


}
</style>
