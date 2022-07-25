const { Router } = require('express');
const postController = require('../controllers/postContoler');
const verifyToken = require('../middlewares/checkToken');

const postRouter = Router();

postRouter.post('/', verifyToken, postController.createPost);

module.exports = postRouter;