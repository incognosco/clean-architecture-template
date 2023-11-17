import { defineStore } from 'pinia'
import { container } from 'tsyringe'
import { computed, reactive } from 'vue'

import { type Product } from '@/application/domain/entities/Product'
import { GetProductUsecase } from '@/application/usecases/GetProductUsecase'

interface productState {
  products: Product[]
  isLoading: boolean
}

export const useProductUsecaseStore = defineStore('products', () => {
  const state = reactive<productState>({
    isLoading: true,
    products: []
  })

  const productLength = computed(() => state.products.length)
  const productList = computed(() => state.products)
  const isLoading = computed(() => state.isLoading)

  const getData = async () => {
    state.isLoading = true
    const productUsecase = container.resolve(GetProductUsecase)
    const data = await productUsecase.execute(100)
    state.products = data?.products
    state.isLoading = false
  }

  return {
    getData,
    productLength,
    productList,
    isLoading
  }
})