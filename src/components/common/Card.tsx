type CardProps = {
  text: string
  imageUrl: string
  altText: string
}

export default function Card({ text, imageUrl, altText }: CardProps) {
  return (
    <div className="card p-2 rounded-1 bg-card-border">
      <div
        className="bg-card ratio d-flex justify-content-center align-items-center p-3"
        style={{ '--bs-aspect-ratio': '90%' } as React.CSSProperties}
      >
        <img alt={altText} src={imageUrl} className="bg-card px-4 py-3" />
      </div>
      <div className="card-body pb-2 px-0">
        <h3 className="card-title h5 fs-6 fw-bold">{text}</h3>
      </div>
    </div>
  )
}
