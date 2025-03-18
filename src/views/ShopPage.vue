<script setup lang="ts">

import { ref } from 'vue';

const products = ref([
  {
    id: 1,
    name: 'Produit 1',
    description: 'Description du produit 1',
    price: 10.0
  },
  {
    id: 2,
    name: 'Produit 2',
    description: 'Description du produit 2',
    price: 20.0
  },
  {
    id: 3,
    name: 'Produit 3',
    description: 'Description du produit 3',
    price: 30.0
  }
]);

</script>

<template>
  <div class="shop-page">
    <h1>Shop</h1>
    <p>Vous pouvez acheter nos produits sur notre boutique en ligne :</p>
    <div class="products">
      <div v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} €</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shop-page {
  height: 100vh;
  padding-top: 5rem;
}
</style>