import { Link } from 'react-router'
import Image from './Image'

type CardLinkProps = {
  text: string
  imageUrl: string
  altText: string
  to: string
  onClick?: () => void
}

/**
 * A link component that renders a card
 *
 * @param {string} text - The text to display in the card
 * @param {string} imageUrl - The URL of the image to display in the card
 * @param {string} altText - The alt text for the image
 * @param {string} to - The URL to link to
 */
export default function CardLinkWithImage({ text, imageUrl, altText, to }: CardLinkProps) {
  return (
    <Link to={to} className="card p-2 rounded-1 bg-card-border text-decoration-none">
      <div
        className="bg-card ratio d-flex justify-content-center align-items-center p-3"
        style={{ '--bs-aspect-ratio': '90%' } as React.CSSProperties}
      >
        <Image altText={altText} imageUrl={imageUrl} variant="list" />
      </div>
      <div className="card-body pb-2 px-0">
        <h3 className="card-title h5 fs-6 fw-bold">{text}</h3>
      </div>
    </Link>
  )
}
