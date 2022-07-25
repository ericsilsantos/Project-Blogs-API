const secret = process.env.JWT_SECRET;
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const models = require('../database/models');
const { throwCategoryNotFound } = require('./utils');

const postService = {
  async veridateReq(info) {
    const schema = Joi.object({
      title: Joi.string().required(),
      content: Joi.string().required(),
      categoryIds: Joi.array().items(Joi.number()).min(1).required(),
    }).messages({ 'string.empty': 'Some required fields are missing' });
    const result = await schema.validateAsync(info);
    return result;
  },
  async verifyCategoryId(id) {
    const result = await models.Category.findByPk(id, { raw: true });
    if (!result) throwCategoryNotFound('"categoryIds" not found');
    return result;
  },
  async getUserId(token) {
    const { data: { email } } = jwt.verify(token, secret);
    const { id } = await models.User.findOne({ where: { email }, raw: true });
    return id;
  },
  async createPost({ title, content }, userId) {
    const published = new Date();
    const updated = new Date();
    const data = { title, content, userId, published, updated };
    const result = await models.BlogPost.create(data, { raw: true });
    return result;
  },
  async createPostCategories(categoryId, postId) {
    await models.PostCategory.create({ postId, categoryId });
  },
};

module.exports = postService;