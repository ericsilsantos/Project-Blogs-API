const categoriesService = require('../services/categoriesService');

const categoriesController = {
  async createCategory(req, res) {
    const data = await categoriesService.veridateReq(req.body);
    const category = await categoriesService.createCategory(data);
    res.status(201).json(category);
  },
  async getAll(_req, res) {
    const allCategories = await categoriesService.getAll();
    res.status(200).json(allCategories);
  },
};

module.exports = categoriesController;