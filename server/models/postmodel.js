const mongoose=require('mongoose')

const postscheme=mongoose.Schema({
    location:String,
    description:String,
    image:String
})