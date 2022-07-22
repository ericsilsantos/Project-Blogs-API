const { Router } = require('express');
const userController = require('../controllers/userControle');

const userRouter = Router();

userRouter.post('/', userController.createUser);

module.exports = userRouter;