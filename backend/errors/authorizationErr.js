const { AUTH_ERROR } = require('../utils/constants');

class AuthorizationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = AUTH_ERROR;
    this.name = this.constructor.name;
  }
}

module.exports = AuthorizationError;
