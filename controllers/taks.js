import { raw } from "express"
import { taks } from "../models/taks.js"
export const createTaks = async (req , res) =>{
    const {title , text } = req.body
  const taksputingindatabase =  taks.create({
      title , text , user:req.user._id
  })
  res.status(201).json({
    success:true,
    message:"Your takes is added"
  })
}
export const findTaks = async (req , res) =>{
     console.log(req.user)
    const userTaksShow = await taks.find({user:req.user._id})
    res.status(201).json({
        success:true,
        userTaksShow
    })

}

export const taksUpdate =  async (req , res)=>{
    const { id } = req.params
    const findUser = await taks.findOne({_id:id})
    findUser.isComplete = !findUser.isComplete
    await findUser.save();

    res.status(201).json({
        success:true,
        message:"messege Updated"
    })
}
 
export const taksDelete = async(req , res) =>{
    const { id } = req.params
    const findUser = await taks.findOne({_id:id})
    await findUser.deleteOne()

    res.status(201).json({
        success:true,
        message:"Taks deleted"
    })
}