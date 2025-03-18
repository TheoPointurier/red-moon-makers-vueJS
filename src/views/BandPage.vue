<script setup lang="ts">
</script>
<template>
  <section class="band-page-container">
    <h2 class="band-page-title">Composition du groupe</h2>
    <div class="band-members-container">
      <div class="band-member">
        <h3>musicien</h3>
        <p>description</p>
      </div>
      <div class="band-member">
        <h3>musicien</h3>
        <p>description</p>
      </div>
      <div class="band-member">
        <h3>musicien</h3>
        <p>description</p>
      </div>
      <div class="band-member">
        <h3>musicien</h3>
        <p>description</p>
      </div>
      <div class="band-member">
        <h3>musicien</h3>
        <p>description</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.band-page-container {
  height: 100vh;
  padding-top: 5rem;
}

.band-page-title {
  margin-left: 1rem;
  font-weight: 400;
  display: block;
  padding: 0.5rem;
}

.band-members-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
}

.band-member {
  display: flex;
  flex-direction: column;
  height: 40rem;
  justify-content: center;
  align-items: center;
}
</style>