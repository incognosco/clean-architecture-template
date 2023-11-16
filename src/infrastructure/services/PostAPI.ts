import { APIResponse } from '../../framework/network/APIResponse'
import { APIRequest } from '../../framework/network/APIRequest'
import {HTTPMethod} from '../../framework/network/HttpMethod'
import { AxiosResponse } from 'axios'

import { IPost } from '../../domain/model/Post';


export namespace PostAPI {
  // List products
  export class GetPosts implements APIRequest<APIResponse<IPost>> {
    response: APIResponse<IPost>;
    path = '/entries'
    //'/typicode/demo/comments'; 
    method = HTTPMethod.GET;
    parse = (data: AxiosResponse) => data.data.entries
  }

}
