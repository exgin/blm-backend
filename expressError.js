/* Might be a little excessive since I'm not using JSONSchema, but it's useful */

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    if (process.env.NODE_ENV !== 'test') {
      console.error(this.stack);
    }
  }
}

module.exports = ExpressError;
