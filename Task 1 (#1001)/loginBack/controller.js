const userModel=require("./userModel")

const validateUser=async (req,res)=>{
    const {email,password}=req.body
    // console.log(password)
    try{
        const response=await userModel.findOne({email:email})
        // console.log(response)
        if(response){
            if(response.password==password){
                res.status(200).json({msg:"valid user"})
            }
            else{
                res.status(404).json({msg:"invalid password"})
            }
        }
        else{
            res.status(404).json({msg:"invalid email"})
        }
    }
    catch(err){
        res.status(404).json(err)
    }
}



module.exports={validateUser}