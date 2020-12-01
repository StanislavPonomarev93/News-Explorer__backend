const router = require('express').Router();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  optionsSuccessStatus: 200,
};

router.use(cors(corsOptions));

module.exports = router;