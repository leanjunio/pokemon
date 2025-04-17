type NavbarProps = {
  icon: React.ReactNode
}

export default function Navbar({ icon }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {icon}
        </a>
      </div>
    </nav>
  )
}
