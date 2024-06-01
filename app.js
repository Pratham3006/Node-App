const express=require("express");
const app=express();
const port =process.env.PORT || 8000;
require("./db/connection")
const mensRanking=require("./models/olympics");
const router = require("./routers/routes");
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("<h1>Hello i am the home page<h1>")
})
app.use(router)
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})