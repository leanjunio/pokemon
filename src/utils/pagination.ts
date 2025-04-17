export function getPageNumbers(currentPage: number, totalPages: number, maxVisiblePages: number): number[] {
  const start = Math.max(currentPage - 1, 1)
  const pageNumbers = []

  for (let i = 0; i < maxVisiblePages && start + i <= totalPages; i++) {
    pageNumbers.push(start + i)
  }

  return pageNumbers
}

export function getTotalPages<T>(items: T[] | undefined, itemsPerPage: number): number {
  const totalItems = items?.length ?? 0
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  return totalPages
}

export function getCurrentPageItems<T>(items: T[] | undefined, currentPage: number, itemsPerPage: number): T[] {
  const start = (currentPage - 1) * itemsPerPage
  const end = start + itemsPerPage
  const currentPageItems = items?.slice(start, end) ?? []

  return currentPageItems
}
