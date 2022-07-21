const secret = process.env.JWT_SECRET;
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const models = require('../database/models');

const loginService = {
  async validateLogin(info) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const result = await schema.validateAsync(info);
    return result;
  },
  async getUser(info) {
    const result = await models.User.findOne(
      {
        where: {
          email: info.email,
          password: info.password,
        },
        raw: true,
      },
    );
    return !!result;
  },
  async getToken(user) {
    const { password, ...restOfUser } = user;
    const token = jwt.sign({ data: restOfUser }, secret);
    return token;
  },
};

module.exports = loginService;