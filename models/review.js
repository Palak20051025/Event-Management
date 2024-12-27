let mongoose = require('mongoose');
const { model } = mongoose; 

let reviewSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    star:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});

module.exports = model ('Review',reviewSchema);