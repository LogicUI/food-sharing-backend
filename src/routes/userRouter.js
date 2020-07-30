const express =  require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const registerValidator = require("../middleware/registerValidator");


router.post('/', registerValidator, userController.registerUser)


module.exports = router;