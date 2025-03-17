<script setup lang="ts">
</script>
<template>
  <section class="music-page-container">
    <h2 class="music-page-title">Nos morceaux</h2>
    <div class="music-container">
      <div class="music">
        <h3>titre</h3>
        <p>description</p>
      </div>
      <div class="music">
        <h3>titre</h3>
        <p>description</p>
      </div>
      <div class="music">
        <h3>titre</h3>
        <p>description</p>
      </div>
      <div class="music">
        <h3>titre</h3>
        <p>description</p>
      </div>
      <div class="music">
        <h3>titre</h3>
        <p>description</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.music-page-container {
  height: 100vh;
  padding-top: 5rem;
}

.music-page-title {
  margin-left: 1rem;
  font-weight: 400;
  display: block;
  padding: 0.5rem;
}

.music-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
}

.music {
  display: flex;
  flex-direction: column;
  height: 40rem;
  justify-content: center;
  align-items: center;
}
</style>