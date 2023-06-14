import mongoose from "mongoose"


const UserSchema = mongoose.Schema({
    title:{
      type : String,
      required: true  
    },
    text:{
        type:String,
        required: true
    },
    user:{
         type:String
    },
    isComplete:{
        type:Boolean,
        default:false
        
    },

    createAt:{
        type:Date,
        default:Date.now()
    }
})

 export const taks = mongoose.model("userTakes", UserSchema)
