type PaginationButtonProps = {
  isDisabled?: boolean
  onClick: () => void
  variant: 'previous' | 'last' | 'number'
  number?: number
  isActive?: boolean
}

export default function PaginationButton({
  isDisabled = false,
  onClick,
  variant,
  number,
  isActive = false,
}: PaginationButtonProps) {
  if (variant === 'number') {
    return (
      <li className={`page-item ${isActive ? 'active' : ''}`}>
        <a className="page-link" href="#" aria-label={`Page ${number}`} onClick={onClick}>
          {number}
        </a>
      </li>
    )
  }

  return (
    <li className={`page-item ${isDisabled ? 'disabled' : ''}`}>
      <a className="page-link" href="#" aria-label="Previous" onClick={onClick}>
        {variant === 'previous' && <span aria-hidden="true">&laquo;</span>}
        {variant === 'last' && <span aria-hidden="true">&raquo;</span>}
      </a>
    </li>
  )
}
