import { type DependencyContainer } from 'tsyringe'
import { UserDataMapper } from '@/application/domain/mappers/UserDataMapper'
import { UserDataApiRepository } from '@/infrastructure/repositories/UserApiRepository'
import ApiService from '../services/ApiServices'


export class RepositoryModule {
  public static init(container: DependencyContainer) {
    container.register<UserDataApiRepository>(UserDataApiRepository, {
      useFactory: (d) => {
        return new UserDataApiRepository(
          d.resolve(ApiService),
          d.resolve(UserDataMapper)
        )
      },
    })
  }
}
