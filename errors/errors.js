module.exports.errors = (e, req, res, next) => {
  next();
  if (e.message === 'Incorrect email or password') return res.status(401).send(e.message);
  if (e.name === 'DocumentNotFoundError') return res.status(400).send('Not Found');
  if (e === 'Cannot delete. Alien article') return res.status(403).send(e);
  if (e.code === 11000) return res.status(409).send('Email is busy');
  if (e.name === 'CastError') return res.status(400).send('Incorrectly ID');
  if (e.message === 'Запрашиваемый ресурс не найден') return res.status(404).send(e.message);
  if (e.message === 'Необходима авторизация') return res.status(401).send(e.message);
  return res.status(500).send(e);
};