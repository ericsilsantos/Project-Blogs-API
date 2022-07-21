const loginService = require('../services/loginService');

const loginController = {
  async login(req, res) {
    try {
      const data = await loginService.validateLogin(req.body);
      const user = await loginService.getUser(data);
      if (!user) return res.status(400).json({ message: 'Invalid fields' });
      const token = await loginService.getToken(data);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: 'Some required fields are missing' });
    }
  },
};

module.exports = loginController;