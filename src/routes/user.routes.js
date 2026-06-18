const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Protected route
router.get('/profile', authMiddleware, userController.profile);

module.exports = router;