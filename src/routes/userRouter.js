import express from "express";
import {addUser} from '../controllers/userController'
const router = express.Router();


router.post('/', (req, res) => {
    addUser(req, res)
})

export default router