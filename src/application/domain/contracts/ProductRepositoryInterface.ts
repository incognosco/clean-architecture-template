import type { ProductResponse } from '@/application/domain/entities/Product'

export interface ProductRepositoryInterface {
  getProductData(num: number): Promise<ProductResponse>
}