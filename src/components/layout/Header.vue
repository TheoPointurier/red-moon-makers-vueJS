<script setup lang="ts">

</script>
<template>

  <header class="header">
    <a href="#home-page">
      <img alt="Red Moon Makers logo" class="logo" src="../../assets/logo.svg" />
    </a>
    <nav class="nav">
      <ul class="nav-list">
        <a href="#band-page">
          <li class="nav-list_item">Band</li>
        </a>
        <a href="#music-page">
          <li class="nav-list_item">Music</li>
        </a>
        <li class="nav-list_item">Events</li>
        <li class="nav-list_item">Shop</li>
        <li class="nav-list_item">Contact</li>
      </ul>
    </nav>
  </header>

</template>
<style scoped>
.header {
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 1.5;
  z-index: 99;
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
}

.logo {
  display: block;
  padding-left: 1rem;
  text-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  height: 5rem;
  max-height: 100%;
}

.nav {
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  justify-content: space-around;
  gap: 1rem;
}

.nav-list_item {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}
</style>