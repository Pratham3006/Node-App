const validator=require("validator");
const mongoose=require("mongoose");
const events=[100,200,400,800];


const eventSchema=new mongoose.Schema({
    event:{
        type:Number,
        required:true,
        trim:true,
        enum:events,
    },
    ranking:{
        type:Number,
        required:true,
        unique:true,
        trim:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    dob:{
        type:String,
        required:true,
        trim:true,
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true,
    }
    
})
const mensRanking=new mongoose.model("Olympic",eventSchema);
module.exports=mensRanking