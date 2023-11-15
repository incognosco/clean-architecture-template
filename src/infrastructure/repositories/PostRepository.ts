import BaseRepository from '../../framework/repositories/BaseRepository'
import { APIClient } from '../../framework/network/APIClient'
import { PostAPI } from '../../infrastructure/services/PostAPI'
import { APIResponse } from '../../framework/network/APIResponse'
import { IPost } from '../../domain/model/Post'

export default class PostRepository implements BaseRepository {

  constructor() {}

  async getItems(): Promise<APIResponse<IPost>> {
    return await APIClient.shared.request(new PostAPI.GetPosts())
  }

}
