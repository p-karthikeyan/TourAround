const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const User=mongoose.model('user',userschema)

module.exports=User;
