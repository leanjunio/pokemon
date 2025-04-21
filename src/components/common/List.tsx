type ListProps<T extends { id: number }> = {
  items: T[]
  listItem: (item: T) => React.ReactNode
}

/**
 * A list component that renders a list of items
 *
 * @param {T[]} items - The items to render
 * @param {function} listItem - The component to render the mapped item
 * @returns {React.ReactNode} The rendered list
 */
export default function List<T extends { id: number }>({ items, listItem }: ListProps<T>) {
  if (items.length === 0) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <p className="text-center">No items found</p>
      </div>
    )
  }

  return (
    <ul className="min-vh-100 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 list-unstyled">
      {items.map((item) => (
        <li key={item.id}>{listItem(item)}</li>
      ))}
    </ul>
  )
}
