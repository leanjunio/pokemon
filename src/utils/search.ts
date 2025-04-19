/**
 * Filter the list based on the search term mapped to the name field
 * @param list - The list of items to filter
 * @param search - The search term
 * @returns The filtered list of items
 */
export function filterBySearchedName<T extends { name: string }>(list: T[], search: string) {
  return list.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
}
