const { type } = require("os");
const bcrypt=require("bcryptjs")
const mongoose=require("mongoose")
const jwt= require("jsonwebtoken")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    }
    ,
    password:{
    type:String,
    required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

// hashed password 

userSchema.pre("save", async function(next){
console.log("pre method", this);

const user=this;

if(!user.isModified("password")){
    next();
}
try {
    const saltRound=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(user.password, saltRound);
    user.password=hashPassword;
} catch (error) {
    next(error);
}
})



// compare password 
userSchema.methods.comparePassword=async function(password){
try {
    // console.log(password)
    return  bcrypt.compare(password, this.password);
    
} catch (error) {
    // console.log(error)
    console.error(error)
}

}

// json web token 
userSchema.methods.generateToken=async function(){
 try {
    return jwt.sign({
        userId:this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin,
    },
  process.env.JWT_SECRET_KEY,{
    expiresIn:'30d'
  }
)
 } catch (error) {
    console.error(error)
 }
}

const User=new mongoose.model("User",userSchema)

module.exports=User;