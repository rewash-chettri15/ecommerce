const mongoose = require('mongoose')

const tshirtSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    size : [],
    prices:[],
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})

const tshirtModel =mongoose.model('tshirt',tshirtSchema)
module.exports=tshirtModel;