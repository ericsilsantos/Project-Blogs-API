const Joi = require('joi');
const models = require('../database/models');

const categoriesService = {
  async veridateReq(info) {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
    const result = await schema.validateAsync(info);
    return result;
  },
  async createCategory(data) {
    const category = await models.Category.create(data, { raw: true });
    return category;
  },
};

module.exports = categoriesService;