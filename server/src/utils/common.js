const jwt = require('jsonwebtoken');

module.exports = {
  createToken: async (payload = {}) => {
    const token = await jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
    return token;
  },
  verifyToken: async (token) => {
    const user = await jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    return user;
  }
};