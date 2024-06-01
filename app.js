const express=require("express");
const app=express();
const port =process.env.PORT || 8000;
require("./db/connection")
const mensRanking=require("./models/olympics")
app.get("/",(req,res)=>{
    res.send("<h1>Hello i am the home page<h1>")
})
app.post("/data",async(req,res)=>{
    try{
        

    }
    catch(err){
        res.status(500).send(err)
    }

})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})