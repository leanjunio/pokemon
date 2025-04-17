import { useQuery } from '@tanstack/react-query'

/**
 * Hook to fetch a list of items from the API
 * @param listKey - The key to store the list in the cache
 * @param queryFn - The function to fetch the list
 * @param staleTime - The time to keep the list in the cache
 * @returns The list of items
 */
export function useGetList<T>(listKey: string, queryFn: () => Promise<T[]>, staleTime: number = Infinity) {
  return useQuery<T[]>({
    queryKey: [`${listKey}-list`],
    queryFn,
    staleTime,
  })
}
