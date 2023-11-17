import { type DependencyContainer } from 'tsyringe'
import ApiService from '../../infrastructure/services/ApiServices'

export class RootModule {
  public static init(container: DependencyContainer) {
    container.register<ApiService>(ApiService, { useClass: ApiService })
  }
}
