import { BaseResponse } from '@/application/domain/entities/BaseResponse'
import { type AxiosResponse } from 'axios'

export class BaseResponseMapper {
  public convertBaseResponseFromApi(result: AxiosResponse<any>): BaseResponse {
    const { data } = result
    return new BaseResponse(data.success, data.message)
  }
}
