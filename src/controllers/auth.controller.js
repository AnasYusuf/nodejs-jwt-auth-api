const authService = require('../services/auth.service');

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);

    return res.status(201).json({
      message: 'User registered successfully',
      data: user
    });

  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);

    return res.status(200).json({
      message: 'Login successful',
      data: result
    });

  } catch (error) {
    return res.status(401).json({
      message: error.message
    });
  }
};