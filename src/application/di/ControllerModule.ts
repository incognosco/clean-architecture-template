// import { ProductRepository } from '@/infrastructure/repositories/ProductRepository'
// import { type ProductRepositoryInterface } from '@/application/domain/contracts/ProductRepositoryInterface'
// import { type DependencyContainer } from 'tsyringe'
// import { ProductController } from '@/presentation/controllers/ProductController'

// export class PresenterModule {
//   public static init(container: DependencyContainer) {
//     container.register<ProductRepositoryInterface>(ProductController, {
//       useFactory: (d) => {
//         return new ProductController(d.resolve(ProductRepository))
//       },
//     })
//   }
// }
