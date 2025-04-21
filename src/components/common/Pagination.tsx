import PaginationButton from './Pagination/PaginationButton'

type PaginationProps = {
  currentPage: number
  onPageChange: (page: number) => void
  navigation: {
    goToFirstPage: () => void
    goToLastPage: () => void
    pageNumbers: number[]
  }
  isDisabled: boolean
}

export default function Pagination({ currentPage, onPageChange, navigation, isDisabled }: PaginationProps) {
  return (
    <nav className="d-flex justify-content-center" aria-label="Page navigation example">
      <ul className="pagination bg-transparent">
        <PaginationButton isDisabled={isDisabled} onClick={navigation.goToFirstPage} variant="previous" />
        {navigation.pageNumbers.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            variant="number"
            number={pageNumber}
            isActive={currentPage === pageNumber}
          />
        ))}
        <PaginationButton isDisabled={isDisabled} onClick={navigation.goToLastPage} variant="last" />
      </ul>
    </nav>
  )
}
