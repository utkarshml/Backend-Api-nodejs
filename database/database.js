import mongoose from "mongoose"


 const MongoDB = () =>{
    mongoose.connect(process.env.MONGO_URI, {
    dbName:"Todo"} )
.then(data => console.log('database is connected'))
.catch(err=> console.log(err))}

export default MongoDB;