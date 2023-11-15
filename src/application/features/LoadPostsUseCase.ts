import BaseUseCase from '../../framework/usecases/BaseUseCase'
import ErrorService from '../../framework/services/ErrorService'
import PostRepository from '../../infrastructure/repositories/PostRepository'

export interface ILoadPostsUseCase {
  postRepository: PostRepository
  errorService: ErrorService
}

export default class LoadPostsUseCase implements BaseUseCase {
  postRepository: PostRepository
  errorService: ErrorService

  constructor({ postRepository, errorService }: ILoadPostsUseCase) {
    this.postRepository = postRepository
    this.errorService = errorService
  }

  async execute() {
    try {
      return await this.postRepository.getItems()
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}
