import axios, { AxiosResponse, Method } from 'axios'
import { API_CONFIG } from '@/lib/constants'

export const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
})

export const handleResponse = <T>(response: AxiosResponse<T>) => {
  return response.data
}

export const createApiRequest = async <TResponse, TData = unknown>(
  url: string,
  method: Method,
  params?: Record<string, unknown>,
  data?: TData,
) => {
  const response: AxiosResponse<TResponse> = await apiClient({
    method,
    url,
    params,
    data,
  })

  return handleResponse<TResponse>(response)
}
