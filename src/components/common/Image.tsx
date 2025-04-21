type ImageProps = {
  altText: string
  imageUrl: string
  variant?: 'card' | 'details'
}

/**
 * A component that displays an image
 *
 * @param {string} altText - The alt text for the image
 * @param {string} imageUrl - The URL of the image
 * @param {string} variant - The variant of the image
 */
export default function Image({ altText, imageUrl, variant = 'card' }: ImageProps) {
  return (
    <img alt={altText} src={imageUrl} className={`bg-card px-4 ${variant === 'details' ? 'py-5' : 'py-3'} mw-100`} />
  )
}
