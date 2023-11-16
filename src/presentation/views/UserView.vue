<script setup lang="ts">
    import ShowUser from '@/presentation/components/user/ShowUser.vue'

</script>

<template>
    <div class="about">
      <ShowUser />
      
      <ShowUser />


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

<!-- <template>
    <ShowUser />
    <h1> Hello Random User</h1>
</template> -->