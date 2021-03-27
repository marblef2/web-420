/**
 * API Routes
 */

let express = require('express');
let router = express.Router();
let auth_controller = require('../controllers/authController');

//POST request for registering a user.
router.post('/auth/register', auth_controller.user_register);

//GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

module.exports = router;