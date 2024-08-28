const express=require("express")
const { validateUser } = require("./controller")

const router=express.Router()

router.post("/",validateUser)

module.exports=router