const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/olympic",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Mongodb Connection Succesfull");
}).catch((err)=>{
    console.log(err)
})