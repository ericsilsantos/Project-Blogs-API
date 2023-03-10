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
  async getUsers(_req, res) {
    const allUsers = await userServices.getAllUsers();
    res.status(200).json(allUsers);
  },
  async getUserById(req, res) {
    // const id = await userServices.veridateId(req.params);
    const { id } = req.params;
    const user = await userServices.getUserById(id);
    res.status(200).json(user);
  },
};

module.exports = userController;