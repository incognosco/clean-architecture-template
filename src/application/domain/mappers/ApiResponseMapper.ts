import { ApiResponse } from '@/application/domain/entities/ApiResponse'
import { type AxiosResponse } from 'axios'

export class ApiResponseMapper {
  public parse<T>(result: AxiosResponse<any>): ApiResponse<T> {
    const { data } = result
    return new ApiResponse<T>(data.success, data.message,data.data)
  }
}
