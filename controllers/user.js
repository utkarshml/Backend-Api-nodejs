import { database } from "../models/user.js"
import bcrypt from "bcrypt"
import { setCookies } from "../utils/featues.js";
import ErrorHandler from "../utils/ErrorHandler.js";


export const CreateUser =  async (req ,res)=>{
  const { name , email , password} = req.body
  const userFindfromDatabase = await database.findOne({ email })
  if(userFindfromDatabase){
    res.status(200).json({
        success:true,
        message:"User Alreay exist"
    })
  }
  else{
  const  hashPassword = await bcrypt.hash(password , 10)
  const user =  database.create({
    name,email,password:hashPassword
   })
    setCookies(res, "your account is created" , 201 , user)
  }
}

export const  LoginUser = async (req ,res)=> {
const { email , password }  = req.body
const userFindfromDatabaseforlogin = await database.findOne({ email}).select("+password")
if(userFindfromDatabaseforlogin){
  const isMatch = await bcrypt.compare(password , userFindfromDatabaseforlogin.password)
  if(isMatch){
    setCookies(res, `wellcome ${userFindfromDatabaseforlogin.name} ` , 200 , userFindfromDatabaseforlogin )
  }
  else{
    res.json({
      success:false,
      message:"Wrong Password"
    })
  }
}
else{
  res.json({
    success:false,
    message: "type valid email"
  })
}
}

export const UserRes = (req ,res)=> {
    const find = database.find().then((data)=>{
    res.status(200).json(data)
    })
}
export const myProfile =  async (req , res) =>{
  
  res.json({
    message:req.user
  })

}
export const logout = (req , res) =>{
    res.status(201).cookie("token" , null , {
      expires:new Date(Date.now()),
    }).json({
      success:true,
      message:"loguted"
    })
    
}
export const Home = (req ,res)=> {
    res.send("working system")
}

export const ErrorCheck =(req , res ,next) =>{
 next(new ErrorHandler("this not good ", 404))
}