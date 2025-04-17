type ListProps<T extends { id: number }> = {
  items: T[]
  listItem: (item: T) => React.ReactNode
}

export default function List<T extends { id: number }>({ items, listItem }: ListProps<T>) {
  return (
    <ul className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 list-unstyled">
      {items.map((item) => (
        <li key={item.id}>{listItem(item)}</li>
      ))}
    </ul>
  )
}
