const express=require("express")
const app=express()
const path=require("path")

app.get("/",(req,res)=>{
    res.send("hola")
})
app.listen(3000,()=>{console.log("servidor levantado")})