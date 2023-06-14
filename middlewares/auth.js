 import jwt from "jsonwebtoken"
 import { database } from "../models/user.js"

export const isAuth = async (req , res ,next)=>{
  const {token} = req.cookies 
  if(!token){
    return res.status(404).json({
        success:false,
        message: "login First"
      })
    }
    const decoded = jwt.verify(token, process.env.COOKIE_TOKEN)
    const findProfileByid = await database.findById(decoded._id)
    req.user = findProfileByid
    next()
}