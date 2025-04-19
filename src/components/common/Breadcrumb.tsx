import { useLocation, Link } from 'react-router'

export default function Breadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(Boolean)

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none pokemon-text-dark">
            Pokemon
          </Link>
        </li>
        <li className="breadcrumb-item">
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1

            return (
              <span key={routeTo}>
                {isLast ? (
                  <span className="text-capitalize pokemon-text-dark fw-bold">{name}</span>
                ) : (
                  <Link to={routeTo} className="text-decoration-none pokemon-text-dark">
                    {name}
                  </Link>
                )}
              </span>
            )
          })}
        </li>
      </ol>
    </nav>
  )
}
