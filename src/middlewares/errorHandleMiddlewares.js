const error = {
  validadeError: 400,
  NotFoundError: 404,
};

const errorHandleMiddlewares = (err, _req, res, _next) => {
  const status = error[err.name];
  if (!status) return res.status(500).json({ message: 'Error não tratado' });
  res.status(status).json({ message: err.message });
};

module.exports = errorHandleMiddlewares;