import { UserDataApiRepository } from '@/infrastructure/repositories/UserApiRepository'
import { UserDataPresenter } from '@/presentation/presenters/UserDataPresenter'
import { type DependencyContainer } from 'tsyringe'


export class PresenterModule {
  public static init(container: DependencyContainer) {
    container.register<UserDataPresenter>(UserDataPresenter, {
      useFactory: (d) => {
        return new UserDataPresenter(d.resolve(UserDataApiRepository))
      },
    })
  }
}
