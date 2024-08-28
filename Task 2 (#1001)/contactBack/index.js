const express=require("express")
require("dotenv").config()
const app=express()
const cors=require("cors")
const nodemailer=require("nodemailer")

app.use(cors())
app.use(express.json())
app.listen(process.env.PORT,()=>console.log("listening.."))

/* For the security purpose auth password is secured */
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.NODEMAILER_SENDER, 
        pass:process.env.NODEMAILER_AUTH_KEY
    }
})

app.post("/api",(req,res)=>{
    const {name,email,subject,message}=req.body

    let senderData={
        from:`${name} <${process.env.NODEMAILER_SENDER}>`,
        to:email,
        subject:subject,
        text:message
    }
    transporter.sendMail(senderData,(error,info)=>{
        if(info)
            res.status(200).json({msg:"Mail sent"})
        res.status(500).json({msg:"Issue in server"})
    })
})