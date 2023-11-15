import { IPost } from '../../domain/model/Post';
import { invoke } from '../../framework/network/axios'
import { APIResponse } from '../../framework/network/APIResponse'
import type { AxiosError } from 'axios'


class PostPresenter {
  async getAllCategory(): Promise<APIResponse<Array<IPost>>> {
    try {
      const res = await invoke<APIResponse<Array<IPost>>>('/typicode/demo/posts', 'GET')
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
}

export default PostPresenter