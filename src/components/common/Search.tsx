type SearchProps = {
  name: string
  placeholder: string
  onSearch: (search: string) => void
}

export default function Search({ name, placeholder, onSearch }: SearchProps) {
  return (
    <form role="search" className="my-5">
      <label className="visually-hidden" htmlFor={name}>
        {name}
      </label>
      <div className="input-group">
        <span className="input-group-text bg-white border-end-0 ps-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-search text-secondary opacity-50"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
        <input
          type="search"
          className="form-control border-start-0 fs-6 px-1 py-2"
          id={name}
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </form>
  )
}
