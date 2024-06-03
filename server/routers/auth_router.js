const express=require("express")
const router= express.Router();

const {register}=require("../controllers/auth_controllers")
const {login}=require("../controllers/auth_controllers")


router.post("/register",register)
router.post("/login",login)


module.exports=router;