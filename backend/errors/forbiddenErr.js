const { FORBIDDEN } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBIDDEN;
    this.name = this.constructor.name;
  }
}

module.exports = ForbiddenError;
