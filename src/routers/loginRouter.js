const { Router } = require('express');
const loginController = require('../controllers/loginControler');

const loginRouter = Router();

loginRouter.post('/', loginController.login);

module.exports = loginRouter;