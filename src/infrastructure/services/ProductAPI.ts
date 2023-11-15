import { AxiosResponse } from 'axios'
import { APIRequest } from '../../framework/network/APIRequest';
import { HTTPMethod } from '../../framework/network/HttpMethod';
import { IProduct, IProductsCriteria } from '../../domain/model/Product';

export namespace ProductAPI {
  // List products
  export class GetProducts implements APIRequest<List<IProduct>> {
    response: List<IProduct>;
    path = '/api/products';
    method = HTTPMethod.GET;
    parse = (data: AxiosResponse) => data.data
    constructor(public params: PaginationRequest<IProductsCriteria>) {}
  }

  // fetch product
  export class GetProduct implements APIRequest<IProduct> {
    response: IProduct;
    path: string;
    method = HTTPMethod.GET;
    parse = (data: AxiosResponse) => data.data
    constructor(id: number) {
      this.path = `/api/products/${id}`;
    }
  }
}