const Joi = require('joi');
const models = require('../database/models');
const { throwNotFound } = require('./utils');

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
  async getAll() {
    const categories = await models.Category.findAll({ raw: true });
    if (!categories) throwNotFound('Categories not found');
    return categories;
  },
};

module.exports = categoriesService;