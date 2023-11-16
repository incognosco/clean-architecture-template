import BaseService from './BaseService'

export interface IErrorService {
  context?: any // TODO: define error context type
}

export default class ErrorService implements BaseService {
  context: any

  constructor({context = 'error'}: IErrorService) {
    this.context = context
  }

  async handle(error: any) {
    console.log(`error called in ${this.context}`)
    console.log(error)
    return
  }
}
