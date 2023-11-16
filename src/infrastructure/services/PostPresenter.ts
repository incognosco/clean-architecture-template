import { IPost, IEntries } from '../../domain/model/Post';
import { invoke } from '../../framework/network/axios'
import { APIResponse } from '../../framework/network/APIResponse'
import type { AxiosError } from 'axios'


class PostPresenter {
  async getAllCategory(): Promise<APIResponse<Array<IPost>>> {
    try {
      const res = await invoke<APIResponse<Array<IPost>>>('/entries', 'GET')
      return {
        data: res.data.entries,
        error: '',
        message: 'success'
      }
    } catch (e) {
      const error = e as AxiosError
      return {
        data: [],
        error: error.message,
        message: 'fail'
      }
    }
  }
  async getEntries(): Promise<APIResponse<Array<IPost>>> {
    try {
      const res = await invoke<APIResponse<Array<IPost>>>('/entries', 'GET')
      return {
        data: res.data,
        error: '',
        message: 'success'
      }
    } catch (e) {
      const error = e as AxiosError
      return {
        data: [],
        error: error.message,
        message: 'fail'
      }
    }
  }
  async getForecast(): Promise<APIResponse<Array<IPost>>> {
    try {
      const res = await invoke<APIResponse<Array<IPost>>>('/weatherforecast/get', 'GET')
      return {
        data: res.data,
        error: '',
        message: 'success'
      }
    } catch (e) {
      const error = e as AxiosError
      console.log(error);
      return {
        data: [],
        error: error.message,
        message: 'fail'
      }
    }
  }
}

export default PostPresenter