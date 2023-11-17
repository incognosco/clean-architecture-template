import type { Product } from '@/application/domain/entities/Product'

export interface ProductRepositoryInterface {
  getProductData(num: number): Promise<Product>
}