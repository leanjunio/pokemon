import Page from './Page'

type FallbackProps = {
  error: Error
  resetErrorBoundary: () => void
}

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Page bgVariant="details">
      <div role="alert" className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h4>Oops! Something went wrong</h4>
          <pre>{error.message}</pre>
          <button className="btn btn-warning" onClick={resetErrorBoundary}>
            Try again
          </button>
        </div>
      </div>
    </Page>
  )
}
