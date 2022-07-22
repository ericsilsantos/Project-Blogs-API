const categoriesService = require('../services/categoriesService');

const categoriesController = {
  async createCategory(req, res) {
    const data = await categoriesService.veridateReq(req.body);
    const category = await categoriesService.createCategory(data);
    res.status(201).json(category);
  },
};

module.exports = categoriesController;