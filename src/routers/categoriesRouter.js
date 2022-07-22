const { Router } = require('express');
const categoriesController = require('../controllers/categoriesControler');
const verifyToken = require('../middlewares/checkToken');

const categoriesRouter = Router();

categoriesRouter.post('/', verifyToken, categoriesController.createCategory);
categoriesRouter.get('/', verifyToken, categoriesController.getAll);

module.exports = categoriesRouter;