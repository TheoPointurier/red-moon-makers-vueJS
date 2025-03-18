<script setup lang="ts">

</script>
<template>

  <header class="header">
    <router-link to="/#home-page">
      <img alt="Red Moon Makers logo" class="logo" src="../../assets/logo.svg" />
    </router-link>
    <nav class="nav">
      <ul class="nav-list">
        <router-link to="/#home-page">
          <li class="nav-list_item">Home</li>
        </router-link>
        <router-link to="/band#band-page">
          <li class="nav-list_item">Band</li>
        </router-link>
        <router-link to="/music#music-page">
          <li class="nav-list_item">Music</li>
        </router-link>
        <router-link to="/events#events-page">
          <li class="nav-list_item">Events</li>
        </router-link>
        <router-link to="/shop#shop-page">
          <li class="nav-list_item">Shop</li>
        </router-link>
        <router-link to="/contact#contact-page">
          <li class="nav-list_item">Contact</li>
        </router-link>
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