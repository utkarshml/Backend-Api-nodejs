import { database } from "../models/user.js"


export const CreateUser = (req ,res)=>{
    database.create({
        name:req.body.name,
        age:req.body.age
    })
    res.cookie("value" ,req.body.age ,{
        httpOnly:true
    })
    res.send("submit")
}

export const findUser = async (req ,res)=> {
    let { id } = req.params
    let user = await database.findOne({ _id:id})
    res.json({
        user
    })
}

export const UserRes = (req ,res)=> {
    const find = database.find().then((data)=>{
    res.status(200).json(data)
    })
}

export const Home = (req ,res)=> {
    res.send("working system")
}