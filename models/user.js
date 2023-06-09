import mongoose from "mongoose"


const UserSchema = mongoose.Schema({
    name:String,
    age:Number
})

 export const database = mongoose.model("user", UserSchema)
