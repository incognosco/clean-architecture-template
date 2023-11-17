import type { Product } from '@/application/domain/entities/Product'
import type { ApiResponse } from '../entities/ApiResponse'

export interface ProductRepositoryInterface {
  getProductData(num: number): Promise<ApiResponse<Product[]>>
}