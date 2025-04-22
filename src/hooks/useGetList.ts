import { useQuery, UseQueryOptions } from '@tanstack/react-query'

/**
 * Hook to fetch a list of items from the API
 * @param listKey - The key to store the list in the cache
 * @param queryFn - The function to fetch the list
 * @param options - Optional query options to override defaults
 * @returns The list of items
 */
export function useGetList<T>(
  listKey: string,
  queryFn: () => Promise<T[]>,
  options?: Partial<UseQueryOptions<T[], Error>>,
) {
  return useQuery<T[]>({
    queryKey: [`${listKey}-list`],
    queryFn,
    staleTime: Infinity,
    ...options,
  })
}
