const MONGODB = process.env.MONGODB || 'mongodb://localhost:27017/backend';
const JWT_SECRET = (process.env.NODE_ENV === 'production') ? process.env.JWT_SECRET : 'pin-kod';
const PORT = process.env.PORT || 3000;
module.exports = {
  MONGODB,
  JWT_SECRET,
  PORT
};