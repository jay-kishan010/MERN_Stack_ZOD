const {z} = require("zod");

// creating an object schema 

const signupSchema=z.object({
  username:z 
  .string({required_error:"Name is required"}).trim().min(3,{message:"Name must be atleast of 3 chars."}).max(255,{message:"Name must not be more than 255 characters"}) ,
  email:z 
  .string({required_error:"Email is required"}).trim().email({message:"Invalid email address"}).min(3,{message:"email must be atleast of 3 chars."}).max(255,{message:"email must not be more than 255 characters"}) ,
  phone:z 
  .string({required_error:"phone is required"}).trim().min(10,{message:"phone no must be atleast of 3 chars."}).max(20,{message:"phone must not be more than 20 characters"}) ,
  password:z 
  .string({required_error:"Password is required"}).trim().min(7,{message:"Password must be atleast of 6 chars."}).max(255,{message:"Password must not be more than 35 characters"}) ,
})

module.exports=signupSchema;