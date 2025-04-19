import { capitalize } from '@/utils/string'
import Pill from '@/components/common/Pill'

type BasicInfoProps = {
  id: number
  name: string
  types: {
    slot: number
    type: {
      name: string
    }
  }[]
}

/**
 * A component that displays the basic information of a pokemon
 *
 * @param {BasicInfoProps} props - The props for the component
 * @returns {React.ReactNode} The rendered component
 */
export default function BasicInfo({ id, name, types }: BasicInfoProps) {
  return (
    <>
      <p className="m-0 fw-lighter">#{id}</p>
      <h1 className="h2">{capitalize(name)}</h1>
      {types.map((type) => (
        <Pill key={type.slot} text={capitalize(type.type.name)} />
      ))}
    </>
  )
}
