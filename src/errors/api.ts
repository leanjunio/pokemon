export class HttpError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message)
    this.name = 'HttpError'
  }
}

export class NotFoundError extends HttpError {
  constructor(resource?: string) {
    super(`${resource} not found`, 404)
    this.name = 'NotFoundError'
  }
}
