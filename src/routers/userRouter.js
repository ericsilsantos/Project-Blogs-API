const { Router } = require('express');
const userController = require('../controllers/userControle');
const verifyToken = require('../middlewares/checkToken');

const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.get('/', verifyToken, userController.getUsers);
userRouter.get('/:id', verifyToken, userController.getUserById);

module.exports = userRouter;