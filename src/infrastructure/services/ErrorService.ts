import { injectable } from 'tsyringe'
import {type  BaseServiceInterface} from '../contracts/BaseServiceInterface'

@injectable()
export default class ErrorService implements BaseServiceInterface {
    

    constructor() {
    //  this.context = ''
    }

    async handle(context: string, error: any) {
        console.log(`error called in ${context}`)
        console.log(error)
        return
      }
}