import express from "express"
import { CreateUser, UserRes , Home , LoginUser  , myProfile , logout , ErrorCheck} from "../controllers/user.js"
import {isAuth} from "../middlewares/auth.js"

const router = express.Router()

router.get("/" ,Home)

router.post("/signup" , CreateUser)
router.post("/login" ,  LoginUser)
router.get("/user" ,  UserRes)
router.get("/me" , isAuth, myProfile)
router.get("/logout" ,isAuth , logout)
router.get("/error" , ErrorCheck)
export default router;