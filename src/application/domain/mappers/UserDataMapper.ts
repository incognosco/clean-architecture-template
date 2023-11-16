import { BaseResponseMapper } from './Base'
import { User} from '@/application/domain/entities/UserData'
import { type AxiosResponse } from 'axios'

export class UserDataMapper extends BaseResponseMapper {
  public convertUserDataFromApi(result: AxiosResponse<any>): User {
    const { data } = result
    return new User(
      data.success,
      data.message,
      data.data
    )
  }
}
