const secret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const { throwTokenNotFound, throwTokenInvalid } = require('../services/utils');

const verifyToken = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throwTokenNotFound('Token not found');
  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    throwTokenInvalid('Expired or invalid token');
  }
};

module.exports = verifyToken;