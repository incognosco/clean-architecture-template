import { User } from '@/application/domain/entities/UserData'

export interface UserDataRepositoryInterface {
  getRandomUser(): Promise<User>
}
