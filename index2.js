import express from "express";
import { Router } from "express";
const app=express()
app.use("/app",(req,res)=>{
    res.status(200).json({
        succuss:true,
        message:"I am happy to learn full stack development from pw skills"
    })
})
app.listen(3002,()=>{
    console.log("App listen on port 3002");
})