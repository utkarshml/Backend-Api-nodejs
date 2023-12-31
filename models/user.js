import mongoose from "mongoose"


const UserSchema = mongoose.Schema({
    name:{
      type : String,
      required: true  
    },
    email:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})

 export const database = mongoose.model("user", UserSchema)
