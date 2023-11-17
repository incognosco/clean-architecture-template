import { defineStore } from 'pinia'
import { container } from 'tsyringe'
import { computed, reactive, ref } from 'vue'

import { GetProductUsecase } from '@/application/usecases/GetProductUsecase'

interface productState  {
  isLoading: boolean
}

export const useProductStore = defineStore('products', () => {
  const state = reactive<productState>({
    isLoading: true
  })

  const products = ref()

  const productLength = computed(() => products.value.length)
  const productList = computed(() => products.value)
  const isLoading = computed(() => state.isLoading)

  const getData = async (num: number) => {
    state.isLoading = true
    const productUsecase = container.resolve(GetProductUsecase)
    const resp = await productUsecase.execute(num)
    products.value = resp?.products
    state.isLoading = false
  }

  return {
    getData,
    productLength,
    productList,
    isLoading
  }
})