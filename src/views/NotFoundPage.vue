<script setup lang="ts">
</script>
<template>
  <section class="not-found-page-container">
    <h1 class="not-found-page-container__title">404 - Page not found</h1>
  </section>
</template>
<style scoped lang="scss">
.not-found-page-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  color: white;
}

.not-found-page-container__title {
  font-size: 2rem;
  font-weight: 400;
  display: block;
  padding: 0.5rem;
  transition: opacity 0.8s ease-out;
  opacity: 1;
}
</style>