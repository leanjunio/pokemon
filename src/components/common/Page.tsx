import PokemonIcon from '@/components/pokemon/PokemonIcon'
import Navbar from '@/components/common/Navbar'

type PageProps = {
  bgVariant: 'list' | 'details'
  children: React.ReactNode
}

export default function Page({ bgVariant = 'list', children }: PageProps) {
  return (
    <div className={`bg-${bgVariant}`}>
      <Navbar icon={<PokemonIcon />} />
      <main className="container-xl">{children}</main>
    </div>
  )
}
