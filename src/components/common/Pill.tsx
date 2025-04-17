type PillProps = {
  text: string
}

/**
 * A pill component that displays a text
 *
 * @param {PillProps} props - The props for the component
 * @returns {React.ReactNode} The rendered component
 */
export default function Pill({ text }: PillProps) {
  return <span className="badge rounded-pill bg-badges fw-light me-2">{text}</span>
}
