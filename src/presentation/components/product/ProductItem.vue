<script setup lang="ts" >

  defineProps<{
        title: String,
        description: String,
        price : Number,
        image: String
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