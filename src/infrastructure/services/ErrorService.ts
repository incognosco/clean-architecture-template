import { injectable } from 'tsyringe'
import {type  BaseServiceInterface} from '../contracts/BaseServiceInterface'

@injectable()
export default class ErrorService implements BaseServiceInterface {
    context: any

    constructor() {
      this.context = ''
    }

    async handle(error: any) {
        console.log(`error called in ${this.context}`)
        console.log(error)
        return
      }
}