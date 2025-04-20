import PokemonIcon from '@/components/pokemon/PokemonIcon'
import Navbar from '@/components/common/Navbar'

type PageProps = {
  bgVariant: 'list' | 'details'
  children: React.ReactNode
  className?: string
}

export default function Page({ bgVariant = 'list', children, className }: PageProps) {
  return (
    <div className={`bg-${bgVariant}`}>
      <Navbar icon={<PokemonIcon />} />
      <main className={className}>{children}</main>
    </div>
  )
}
