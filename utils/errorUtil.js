class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super();
    this.customMessage = message || "Server Error";
    this.statusCode = statusCode || 500;

    Error.captureStackTrace(this, this.constructor);
  }
}

exports.ErrorResponse = ErrorResponse;
