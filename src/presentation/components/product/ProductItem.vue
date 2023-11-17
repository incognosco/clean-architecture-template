<script setup lang="ts" >

  defineProps<{
        title: string,
        description: string,
        price : number,
        image: string
  }>();

</script>
<template>
    <div class="flex flex-col w-full">
        <span>{{ title }}</span>
        <span>{{ description }}</span>
        <span>${{ price }}</span>
      </div>
      <div>
        <img :src="image" />
      </div>
</template>