const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const registerValidator = require("../middleware/registerValidator");


router.post("/", registerValidator, userController.registerUser);

router.put("/", userController.verifyUser);

router.post('/login', userController.userLogin)

module.exports = router;
