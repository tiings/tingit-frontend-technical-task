import Axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const axios = Axios.create({
  baseURL: "https://dummyjson.com"
})

const unwrapResponse = <T>({ data }: AxiosResponse<T>) => (data as { data?: T }).data ?? data

axios.interceptors.response.use(unwrapResponse)

export const client = {
  get: async <Response, Params = undefined>(url: string, params?: Params) =>
    axios.get<Response>(url, { params }) as Promise<Response>,
  post: async <Data, Response = undefined>(url: string, data?: Data) =>
    axios.post<Response>(url, data) as Promise<Response>,
  put: async <Data, Response>(url: string, data?: Data, config?: AxiosRequestConfig) =>
    axios.put<Response>(url, data, config) as Promise<Response>,
  patch: async <Data, Response>(url: string, data?: Data) => axios.patch<Response>(url, data) as Promise<Response>,
  delete: async <Data, Response = undefined>(url: string, data?: Data) =>
    axios.delete<Response>(url, { data }) as Promise<Response>
}
