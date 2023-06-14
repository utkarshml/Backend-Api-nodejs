import jwt from "jsonwebtoken"

export const setCookies = async (res , message , status , user) =>{
    const cookestoken = jwt.sign({_id:user._id}, process.env.COOKIE_TOKEN)
    res.status(status).cookie("token" , cookestoken).json({
     success:true,
     message
    })
}