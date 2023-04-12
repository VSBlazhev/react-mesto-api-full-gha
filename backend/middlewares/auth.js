const jwt = require('jsonwebtoken');
const AuthorizationError = require('../errors/authorizationErr');

const { NODE_ENV, JWT_SECRET } = process.env;

function Auth(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) {
    next(new AuthorizationError('Необходима авторизация'));
  }
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'key');
  } catch (err) {
    next(new AuthorizationError('Необходима авторизация'));
  }
  req.user = payload;
  next();
}

module.exports = Auth;
