// Import Modules
const express = require('express');

// Import custom module
const userController = require('../controllers/users');



const router = express.Router();

router.get('/', userController.getUsers);
router.get('/add', userController.getAddUsers);
router.post('/add', userController.postAddUsers);

module.exports = router;
