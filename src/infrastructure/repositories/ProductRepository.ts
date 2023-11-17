import {inject, injectable} from 'tsyringe'
import type {Product} from '@/application/domain/entities/Product'
import type {ProductRepositoryInterface} from '@/application/domain/contracts/ProductRepositoryInterface'
import ApiService from '@/infrastructure/services/ApiServices'
import { Endpoints } from '@/presentation/router/Endpoints'

@injectable()
export class ProductRepository implements ProductRepositoryInterface {
    constructor(
        @inject('api') private service: ApiService, 
    ) {}

    public async getProductData(num: number): Promise<Product> {
        const dataResponse = await this.service.invoke('get', Endpoints.Route.PRODUCT_DATA, num)
        console.log(`Number ${num}`);
        return dataResponse.data;
    }

}