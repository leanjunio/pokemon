import { useMemo } from 'react'
import { getCurrentPageItems, getPageNumbers, getTotalPages } from '../utils/pagination'

const DEFAULT_CURRENT_PAGE = 1

/**
 * Hook to handle pagination of a list of items
 *
 * @param items - The list of items to paginate
 * @param currentPage - The current page number
 * @param setCurrentPage - sets the current page number
 * @param maxVisiblePages - The maximum number of pages to display
 * @param itemsPerPage - The number of items to display per page
 */
export function usePagination<T>(
  items: T[] | undefined,
  currentPage = DEFAULT_CURRENT_PAGE,
  setCurrentPage: (page: number) => void,
  maxVisiblePages: number,
  itemsPerPage: number,
) {
  const currentPageItems = useMemo(
    () => getCurrentPageItems(items, currentPage, itemsPerPage),
    [items, currentPage, itemsPerPage],
  )
  const totalPages = useMemo(() => getTotalPages(items, itemsPerPage), [items, itemsPerPage])
  const pageNumbers = useMemo(
    () => getPageNumbers(currentPage, totalPages, maxVisiblePages),
    [currentPage, totalPages, maxVisiblePages],
  )

  return {
    currentPageItems,
    totalPages,
    pageNumbers,
    currentPage,
    setCurrentPage,
  }
}
