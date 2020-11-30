const router = require('express').Router();
const { userMe } = require('../controllers/users');

router.get('/', userMe);

module.exports = router;