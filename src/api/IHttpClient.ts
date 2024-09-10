// src/api/IHttpClient.ts
export interface IHttpClient {
  get<T, P = Record<string, any>>(url: string, params?: P): Promise<T>;
  post<T, U>(url: string, data: U): Promise<T>;
  put<T, U>(url: string, data: U): Promise<T>;
  delete<T>(url: string): Promise<T>;
}