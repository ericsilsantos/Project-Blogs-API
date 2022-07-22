const { Router } = require('express');
const categoriesController = require('../controllers/categoriesControler');
const verifyToken = require('../middlewares/checkToken');

const categoriesRouter = Router();

categoriesRouter.post('/', verifyToken, categoriesController.createCategory);

module.exports = categoriesRouter;