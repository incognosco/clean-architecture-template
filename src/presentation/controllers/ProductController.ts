import { defineStore } from 'pinia'
import { container } from 'tsyringe'
import { computed, reactive } from 'vue'

import { type Product } from '@/application/domain/entities/Product'
import { ProductRepository } from '@/infrastructure/repositories/ProductRepository'

interface productState {
  products: Array<Product>
  isLoading: boolean
}

export const useProductStore = defineStore('products', () => {
  const state = reactive<productState>({
    isLoading: true,
    products: []
  })
  const productRepository = container.resolve(ProductRepository)
  const productLength = computed(() => state.products.length)
  const productList = computed(() => state.products)
  const isLoading = computed(() => state.isLoading)

  const getData = async (num: number) => {
    state.isLoading = true
    const data = await productRepository.getProductData(num)
    state.products = data.products
    state.isLoading = false
  }

  return {
    getData,
    productLength,
    productList,
    isLoading
  }
})