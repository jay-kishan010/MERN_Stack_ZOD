 
const mongoose=require("mongoose")

 const URL="mongodb+srv://MERN:MERN@cluster0.cexx0wg.mongodb.net/"
 
 const connectDB=async()=>{
    try {
        await mongoose.connect(URL);
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("database connection fail")

        process.exit(0);
        
    }
 }

 module.exports=connectDB;
 