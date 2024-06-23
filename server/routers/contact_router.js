const express=require("express");
const contactForm = require("../controllers/contact_controller");
const router=express.Router();


router.post("/contact",contactForm);



module.exports=router;