import { HTTPMethod } from './HttpMethod';
import { APIResponse } from './APIResponse';

export type APIRequest<R extends APIResponse> = {
  response: R;
  path: string;
  method: HTTPMethod;
  params?: any;
  baseURL?: string;
  parse?: (data: any) => R;
};