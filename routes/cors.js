const router = require('express').Router();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8080',
  // [
  // 'http://localhost:8080',
  // 'http://newsexplorer.students.nomoreparties.space',
  // 'http://chelentano.students.nomoreparties.space',
  // ],
  credentials: true,
  optionsSuccessStatus: 200,
};

router.use(cors(corsOptions));

module.exports = router;