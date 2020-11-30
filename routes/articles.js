const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getArticles, postArticle, deleteArticle } = require('../controllers/articles');

router.get('/', getArticles);
router.post('/', celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    link: Joi.string().required().pattern(/^(?! )http(s)?:\/\/(www\.)?((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z0-9])[.-]?){1,}([a-zA-Z0-9])\.([a-zA-Z]{2,6}))(?::\d{2,5})?(?:[\\/?#]\S*)?/),
    image: Joi.string().required().pattern(/^(?! )http(s)?:\/\/(www\.)?((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z0-9])[.-]?){1,}([a-zA-Z0-9])\.([a-zA-Z]{2,6}))(?::\d{2,5})?(?:[\\/?#]\S*)?/)
  })
}), postArticle);

router.delete('/:id', celebrate({
  body: Joi.object().keys({
    id: Joi.string().hex()
  })
}), deleteArticle);

module.exports = router;