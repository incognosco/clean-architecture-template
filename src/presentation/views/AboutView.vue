<template>
  <div class="about">
    <h1>This page is hosted on {{ env }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup>
    const env = import.meta.env.VITE_BASE_URL;
</script>
