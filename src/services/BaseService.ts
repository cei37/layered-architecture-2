// src/services/BaseService.ts
import { AxiosHttpClient } from '../api/AxiosHttpClient';
import { IHttpClient } from '../api/IHttpClient';

export abstract class BaseService {
  protected client: IHttpClient;

  constructor() {
    this.client = new AxiosHttpClient('http://127.0.0.1:5000');
    console.log('conssssss');
  }

  protected get<T, P = Record<string, any>>(url: string, params?: P): Promise<T> {
    return this.client.get<T, P>(url, params);
  }

  protected post<T, U>(url: string, data: U): Promise<T> {
    return this.client.post<T, U>(url, data);
  }

  protected put<T, U>(url: string, data: U): Promise<T> {
    return this.client.put<T, U>(url, data);
  }

  protected delete<T>(url: string): Promise<T> {
    return this.client.delete<T>(url);
  }
}
