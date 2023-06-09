import mongoose from "mongoose"


 const MongoDB = () =>{
    mongoose.connect(process.env.MONGO_URI, {
    dbName:"Login"} )
.then(data => console.log('database is connected'))
.catch(err=> console.log(err))}

export default MongoDB;