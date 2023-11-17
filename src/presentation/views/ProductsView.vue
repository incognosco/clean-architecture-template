<script setup lang="ts">
import { onMounted } from 'vue'

import { useProductStore } from '@/presentation/controllers/ProductController'

import ProductItem from '../components/product/ProductItem.vue'

const productStore = useProductStore()

onMounted(async () => {
  await productStore.getData(100)
})
</script>

<template>
  <div v-if="productStore.isLoading">Loading Data</div>
  <div v-else class="w-full h-full overflow-y-scroll">
    <div v-if="!productStore.productLength">
      <span>Empty Data</span>
    </div>
    <div v-else v-for="i in productStore.productList" :key="i.id" class="m-4 p-2.5 rounded-md border flex space-between">

      <product-item :title="i.title" :description="i.description" :price="i.price" :image="i.images[0]" />

    </div>
  </div>
</template>