const loginService = require('../services/loginService');
const userServices = require('../services/userServices');

const userController = {
  async createUser(req, res, _next) {
    const user = await userServices.veridateReq(req.body);
    await userServices.verifyEmail(user.email);
    await userServices.createUser(user);
    const token = await loginService.getToken(user);
    res.status(201).json({ token });
  },
};

module.exports = userController;