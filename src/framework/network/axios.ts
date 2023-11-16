import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

type HttpMethod = 'GET'

export const invoke = <R>(url: string, method: HttpMethod) => {
  const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:5017',
    url,
    method,
    timeout: 13000
  }
  return axios.request<R>(config)
}
