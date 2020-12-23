//DB connection

const mongoose=require ('mongoose');


mongoose.connect('mongodb://localhost:27017/postManagerDB',{useNewUrlParser:true,useUnifiedTopology:true},
err=>{
    if(!err)
    console.log("mongo DB connection Succeeded!!!!!");
    else
    console.log('Error whle connecting MongoDB:' + JSON.stringify(err, undefined, 2));
})