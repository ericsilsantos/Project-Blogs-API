const { Router } = require('express');
const userController = require('../controllers/userControle');
const verifyToken = require('../middlewares/checkToken');

const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.get('/', verifyToken, userController.getUsers);

module.exports = userRouter;