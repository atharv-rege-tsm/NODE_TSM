const userController = require('../controllers/userController.controller');
const express = require('express');
const router = express.Router();


router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.delete("/:id", userController.deleteUser);

router.put("/:id", userController.updateUser);

module.exports = router;