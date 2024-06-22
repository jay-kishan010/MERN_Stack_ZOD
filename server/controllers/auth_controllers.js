const User = require("../models/User_model");
const bcrypt=require("bcryptjs")
const register = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, email, password, phone } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const user = await User.create({ username, email, password, phone });

    res.status(201).json({ msg: user , token: await user.generateToken(), userID:user._id.toString(), });
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
     
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist)
    if (!userExist) {
      return res.status(400).json({ message:"invalid credentials" });
    }

    const user=await userExist.comparePassword(password);
//    const user=await bcrypt.compare(password, userExist.password)
// console.log(user)
   if(user){

       res.status(201).json({ msg: user , token: await userExist.generateToken(), userID:userExist._id.toString(), });
   }
  else{
res.status(401).json({message:"invalid email or password!"})
  }
 } catch (error) {
    
    res.status(500).json("internal server error");
    next(error);
  }
};

module.exports={register, login}
