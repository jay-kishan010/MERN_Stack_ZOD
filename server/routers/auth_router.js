const express=require("express")
const router= express.Router();

const {register}=require("../controllers/auth_controllers")
const {login}=require("../controllers/auth_controllers")
const validate=require("../middlewares/validate_middleware")
const signupSchema=require("../validators/auth_validator")

router.post("/register",validate(signupSchema),register)
router.post("/login",login)


module.exports=router;