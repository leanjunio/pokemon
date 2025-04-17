import Navbar from './Navbar'

type PageProps = {
  bgVariant: 'list' | 'details'
  children: React.ReactNode
}

export default function Page({ bgVariant = 'list', children }: PageProps) {
  return (
    <div className={`bg-${bgVariant}`}>
      <Navbar />
      <main className="container-xl">{children}</main>
    </div>
  )
}
