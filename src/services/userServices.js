const Joi = require('joi');
const models = require('../database/models');
const { throwUserRegistered } = require('./utils');

const userServices = {
  async veridateReq(info) {
    const schema = Joi.object({
      displayName: Joi.string().required().min(8),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
      image: Joi.string().required(),
    });
    const result = await schema.validateAsync(info);
    return result;
  },
  async verifyEmail(email) {
    const result = await models.User.findOne(
      {
        where: {
          email,
        },
        raw: true,
      },
    );
    if (result) throwUserRegistered('User already registered');
  },
  async createUser(user) {
    await models.User.create(user, { raw: true });
  },
};

module.exports = userServices;