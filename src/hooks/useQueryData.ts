import { useQueryClient } from '@tanstack/react-query'

/**
 * Use this hook to get data from the query client.
 * @param queryKey - The key of the query.
 * @param uniqueString - The unique string of the query.
 * @returns The data from the query.
 */
export function useQueryData<T>(queryKey: string, uniqueString: string) {
  const client = useQueryClient()
  return client.getQueryData<T>([queryKey, uniqueString])
}
