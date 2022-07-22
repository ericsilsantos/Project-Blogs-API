const throwUserRegistered = (message) => {
  const error = new Error(message);
  error.name = 'UserRegistered';
  throw error;
};

module.exports = {
  throwUserRegistered,
};