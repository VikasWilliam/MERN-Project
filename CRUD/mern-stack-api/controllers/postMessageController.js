const { json } = require('body-parser');
const express=require('express');
var router=express.Router();

var { PostMessage }=require('../models/postMessage')

router.get('/',(req,res)=>{
    PostMessage.find((err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error while reteriving all records:'+JSON.stringify(err,undefined,2))
    })
    
})

module.exports=router
