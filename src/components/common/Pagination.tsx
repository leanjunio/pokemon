type PaginationProps = {
  currentPage: number
  onPageChange: (page: number) => void
  navigation: {
    goToFirstPage: () => void
    goToLastPage: () => void
    pageNumbers: number[]
  }
}

export default function Pagination({ currentPage, onPageChange, navigation }: PaginationProps) {
  return (
    <nav className="d-flex justify-content-center" aria-label="Page navigation example">
      <ul className="pagination bg-transparent">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous" onClick={navigation.goToFirstPage}>
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {navigation.pageNumbers.map((pageNumber) => (
          <li className={`page-item ${currentPage === pageNumber ? 'active' : ''}`} key={pageNumber}>
            <a className="page-link" href="#" onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next" onClick={navigation.goToLastPage}>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
