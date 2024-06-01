const express=require("express")
const router= new express.Router();

const mensRanking=require("../models/olympics")
router.get("/",(req,res)=>{
    res.send("<h1>Hello i am the home page<h1>")
})
router.get("/data/:name",async (req,res)=>{
    const data= await mensRanking.find({name:req.params.name},{event:0,_id:0,ranking:0,dob:0,country:0,score:0,__v:0})
    console.log(data);

})
router.patch("/data/:id",async(req,res)=>{
    try{
        const value=await mensRanking.findByIdAndUpdate(req.params.id,{
            event:"400",
            new:true
        })
        res.send(value)
    }
    catch(e){
        console.log(e)
    }
    
})
router.post("/data",async(req,res)=>{
    try{
        const addingMensRanking=new mensRanking(req.body);
        const dataInsert=await addingMensRanking.save();
        res.send(dataInsert)

    }
    catch(err){
        res.status(500).send(err)
    }

})
module.exports=router