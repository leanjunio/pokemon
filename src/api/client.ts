import axios, { AxiosResponse, Method } from 'axios'
import { API_CONFIG } from '@/lib/constants'
import { NotFoundError } from '@/errors/api'

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
  try {
    const response: AxiosResponse<TResponse> = await apiClient({
      method,
      url,
      params,
      data,
    })

    return handleResponse<TResponse>(response)
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404 && error.code === 'ERR_BAD_REQUEST') {
      throw new NotFoundError(`API endpoint not found: ${url}`)
    }

    throw error
  }
}
