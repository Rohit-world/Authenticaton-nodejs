const {UserModel}=require("../models/user.model")

const signupcheck =async(req, res,next)=>{
    const {email,password}=req.body
if(!email || !password)return res.send({"msg":"wrong creadendials"})
const isPresent= await UserModel.find({email:email})

if(isPresent.length>0)return res.send({"msg":"User already exist please login"})
next()


}

module.exports={signupcheck}