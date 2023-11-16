import { injectable } from 'tsyringe'
import { UserDataApiRepository } from '@/infrastructure/repositories/UserApiRepository'
import { User } from '@/application/domain/entities/UserData'

interface UserDataPresenterInterface {
  loadUserData(): Promise<User>
}

@injectable()
export class UserDataPresenter implements UserDataPresenterInterface {
  private repository: UserDataApiRepository

  constructor(repository: UserDataApiRepository) {
    this.repository = repository
  }

  public loadUserData(): Promise<User> {
    return this.repository.getRandomUser()
  }
}
