import { Link } from 'react-router'

type NavbarProps = {
  icon: React.ReactNode
  to: string
}

export default function Navbar({ icon, to }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to={to}>
          {icon}
        </Link>
      </div>
    </nav>
  )
}
