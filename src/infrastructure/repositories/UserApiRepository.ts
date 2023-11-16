import ApiService from '@/framework/services/ApiServices'
import { Endpoints } from '@/framework/misc/Endpoints'
import { type UserDataRepositoryInterface } from '@/application/domain/contracts/UserDataRepositoryInterface'
import { User } from '@/application/domain/entities/UserData'
import { UserDataMapper } from '@/application/domain/mappers/UserDataMapper'

export class UserDataApiRepository implements UserDataRepositoryInterface {
  private service: ApiService
  private mapper: UserDataMapper

  constructor(service: ApiService, mapper: UserDataMapper) {
    this.service = service
    this.mapper = mapper
  }

  public async getAllUser(): Promise<User> {
    const dataResponse = await this.service.invoke('get', Endpoints.Route.USER_DATA)
    return this.mapper.convertUserDataFromApi(dataResponse)
  }
}
