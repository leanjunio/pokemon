import { useFilteredPokemon } from "../hooks/useFilteredPokemon";

type PaginationProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
  pageNumbers: number[];
};

export default function Pagination({
  currentPage,
  onPageChange,
  pageNumbers,
}: PaginationProps) {
  return (
    <nav
      className="d-flex justify-content-center"
      aria-label="Page navigation example"
    >
      <ul className="pagination bg-transparent">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li
            className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
            key={pageNumber}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
