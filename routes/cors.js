const router = require('express').Router();
const cors = require('cors');

const corsOptions = {
  origin: 'http://news-explorer-backend.students.nomoreparties.co',
  credentials: true,
  optionsSuccessStatus: 200,
};

router.use(cors(corsOptions));

module.exports = router;