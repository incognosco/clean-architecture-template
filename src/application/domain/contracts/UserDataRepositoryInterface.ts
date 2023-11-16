import { User } from '@/application/domain/entities/UserData'

export interface UserDataRepositoryInterface {
  getAllUser(): Promise<User>
}
