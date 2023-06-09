import express from "express"
import { CreateUser , findUser , UserRes , Home } from "../controllers/user.js"

const router = express.Router()

router.get("/" ,Home)

router.post("/fill" , CreateUser)

router.get("/data/:id" , findUser)

router.get("/user" ,  UserRes)



export default router;