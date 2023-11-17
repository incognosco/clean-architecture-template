import { ProductRepository } from '@/infrastructure/repositories/ProductRepository'
import type ErrorService from '@/infrastructure/services/ErrorService'
import { inject, injectable } from 'tsyringe'
import { container } from 'tsyringe'
import type { Product } from '../domain/entities/Product'


export interface IGetProductUsecase  {
  productRepository: ProductRepository
  errorService: ErrorService
}

@injectable()
export class GetProductUsecase implements IGetProductUsecase {
    constructor(
        @inject('error') public errorService: ErrorService,
        @inject('product') public productRepository: ProductRepository
    ) {}
  

  async execute(num: number) {
    try {
        const productRepository = container.resolve(ProductRepository)
        const resp = await productRepository.getProductData(num)
        return new GetProductUsecaseResponse(resp.data)
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}

export class GetProductUsecaseResponse {
   public products: Product[]
    constructor(products: Product[]) {
        this.products = products
    }
}