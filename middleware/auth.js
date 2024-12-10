const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  const tokenHeader = req.headers['authorization'];

  if (!tokenHeader) {
    return res.status(403).json({ message: 'Access Denied, No Token Provided!' });
  }

  const token = tokenHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Malformed Token!' });
  }

  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = verified;
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    res.status(400).json({ message: 'Invalid Token!' });
  }
};
