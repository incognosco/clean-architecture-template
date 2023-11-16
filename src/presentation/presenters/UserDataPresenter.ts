import { injectable } from 'tsyringe'
import { UserDataApiRepository } from '@/infrastructure/repositories/UserApiRepository'
import { User } from '@/application/domain/entities/UserData'

@injectable()
export class UserDataPresenter {
  private repository: UserDataApiRepository

  constructor(repository: UserDataApiRepository) {
    this.repository = repository
  }

  public loadUserData(): Promise<User> {
    return this.repository.getAllUser()
  }
}
