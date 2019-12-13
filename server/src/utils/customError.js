class CustomError extends Error {
  constructor(status, message, errors, ...params) {
    super(...params);

    this.status = status;
    this.message = message;
    this.errors = errors;
  }
}

module.exports = CustomError;