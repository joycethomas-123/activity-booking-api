const express = require('express');
const { register, login } = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

// Register route with validation
router.post('/register', [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('phone').notEmpty(),
  body('password').isLength({ min: 6 })
], register);

// Login route
router.post('/login', [
  body('email').isEmail(),
  body('password').exists()
], login);

module.exports = router;