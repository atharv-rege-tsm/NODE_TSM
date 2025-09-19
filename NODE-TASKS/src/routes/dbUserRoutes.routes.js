const dbUserController = require("../controllers/dbUserController.controller");
const express = require('express');
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", verifyToken, dbUserController.getAllUsers);
router.post("/", dbUserController.createUser);
router.delete("/:id", dbUserController.deleteUser);
router.put("/:id", dbUserController.updateUser);

module.exports = router;