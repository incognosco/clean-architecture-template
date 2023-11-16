import { UserDataMapper } from '@/application/domain/mappers/UserDataMapper'
import { type DependencyContainer } from 'tsyringe'


export class MapperModule {
  public static init(container: DependencyContainer) {
    container.register<UserDataMapper>(UserDataMapper, {
      useClass: UserDataMapper,
    })
  }
}
