const postService = require('../services/postService');

const postController = {
  async createPost(req, res) {
    const userId = await postService.getUserId(req.headers.authorization);
    const post = await postService.veridateReq(req.body);
    await Promise.all(post.categoryIds
      .map((id) => postService.verifyCategoryId(id)));
    const postCreated = await postService.createPost(post, userId);
    await Promise.all(post.categoryIds
      .map((id) => postService.createPostCategories(id, postCreated.id)));
    res.status(201).json(postCreated);
  },
};

module.exports = postController;