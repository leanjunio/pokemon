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
  return (
    <div className="min-vh-100">
      {items.length === 0 ? (
        <p className="text-center">No items found</p>
      ) : (
        <ul className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 list-unstyled">
          {items.map((item) => (
            <li key={item.id}>{listItem(item)}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
