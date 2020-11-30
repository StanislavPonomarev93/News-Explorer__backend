const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new Error('Необходима авторизация');
  }

  let payload;

  try {
    payload = jwt.verify(req.cookies.jwt, JWT_SECRET);
  } catch (e) {
    throw new Error('Необходима авторизация');
  }
  req.user = payload;
  next();
};