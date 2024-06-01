const express=require("express");
const app=express();
const port =process.env.PORT || 8000;
require("./db/connection")
app.get("/",(req,res)=>{
    res.send("<h1>Hello i am the home page<h1>")
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})