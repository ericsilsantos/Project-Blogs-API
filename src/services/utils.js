const throwUserRegistered = (message) => {
  const error = new Error(message);
  error.name = 'UserRegistered';
  throw error;
};

const throwNotFound = (message) => {
  const error = new Error(message);
  error.name = 'NotFoundError';
  throw error;
};

const throwTokenNotFound = (message) => {
  const error = new Error(message);
  error.name = 'TokenNotFound';
  throw error;
};

const throwTokenInvalid = (message) => {
  const error = new Error(message);
  error.name = 'TokenInvalid';
  throw error;
};

module.exports = {
  throwUserRegistered,
  throwNotFound,
  throwTokenNotFound,
  throwTokenInvalid,
};