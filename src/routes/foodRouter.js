import express from "express";
import {updateFood} from '../db/controllers/foods'
const router = express.Router();


router.get('/', (req, res) => {
    updateFood(req, res)
})

export default router