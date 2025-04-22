import SearchIcon from '@/assets/search.svg?react'

type SearchProps = {
  name: string
  placeholder: string
  onSearch: (search: string) => void
  isDisabled: boolean
}

/**
 * Renders a search input
 *
 * @param {string} name - The name of the search input
 * @param {string} placeholder - The placeholder text of the search input
 * @param {function} onSearch - The function to call when the search input changes
 */
export default function Search({ name, placeholder, onSearch, isDisabled }: SearchProps) {
  return (
    <form role="search" className="my-5">
      <label className="visually-hidden" htmlFor={name}>
        {name}
      </label>
      <div className="input-group">
        <span className="input-group-text bg-white border-end-0 ps-3">
          <SearchIcon className="text-secondary opacity-50" />
        </span>
        <input
          type="search"
          className="form-control border-start-0 fs-6 px-1 py-2"
          id={name}
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
          disabled={isDisabled}
        />
      </div>
    </form>
  )
}
