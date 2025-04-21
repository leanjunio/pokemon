type FallbackProps = {
  error: Error
}

export function ErrorFallback({ error }: FallbackProps) {
  return (
    <div role="alert" className="alert alert-danger">
      <h4>Something went wrong:</h4>
      <pre>{error.message}</pre>
    </div>
  )
}
