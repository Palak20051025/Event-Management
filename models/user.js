let mongoose = require('mongoose');
const { model } = mongoose; 

let userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = model ('User',userschema);