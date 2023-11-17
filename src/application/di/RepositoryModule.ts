import { type DependencyContainer } from 'tsyringe'
//import { UserDataMapper } from '@/application/domain/mappers/UserDataMapper'
import { ProductRepository } from '@/infrastructure/repositories/ProductRepository'
import ApiService from '../../infrastructure/services/ApiServices'
import { type ProductRepositoryInterface } from '@/application/domain/contracts/ProductRepositoryInterface'



export class RepositoryModule {
  public static init(container: DependencyContainer) {
    container.register<ProductRepositoryInterface>(ProductRepository, {
      useFactory: (d) => {
        return new ProductRepository(
          d.resolve(ApiService)
        )
      },
    })
  }
}
