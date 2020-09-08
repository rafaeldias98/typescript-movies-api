class DomainError extends Error {
  data: { status: number };

  constructor(message: string, status = 500) {
    super(message);
    this.name = this.constructor.name;
    this.data = { status };

    Error.captureStackTrace(this, this.constructor);
  }
}

export default DomainError;
