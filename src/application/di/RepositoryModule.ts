import { type DependencyContainer } from 'tsyringe'
//import { UserDataMapper } from '@/application/domain/mappers/UserDataMapper'
import { ProductRepository } from '@/infrastructure/repositories/ProductRepository'
import ApiService from '../../infrastructure/services/ApiServices'
import { type ProductRepositoryInterface } from '@/application/domain/contracts/ProductRepositoryInterface'
import ErrorService from '@/infrastructure/services/ErrorService'
import { type IGetProductUsecase, GetProductUsecase } from '../usecases/GetProductUsecase'



export class RepositoryModule {
  public static init(container: DependencyContainer) {
    container.register<ProductRepositoryInterface>(ProductRepository, {
      useFactory: (d) => {
        return new ProductRepository(
          d.resolve(ApiService)
        )
      },
    })
    container.register<IGetProductUsecase>(GetProductUsecase, {
      useFactory: (d) => {
        return new GetProductUsecase(
          d.resolve(ErrorService),
          d.resolve(ProductRepository)
        )
      },
    })
  }
}
