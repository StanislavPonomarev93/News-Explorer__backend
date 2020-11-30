const router = require('express').Router();

router.use('/', require('./cors'));
router.use('/', require('./authorization'));
router.use('/users/me', require('../middlewares/auth'), require('./users'));
router.use('/articles', require('../middlewares/auth'), require('./articles'));
router.use('/', () => {
  throw new Error('Запрашиваемый ресурс не найден');
});

module.exports = router;