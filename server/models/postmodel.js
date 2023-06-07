const mongoose=require('mongoose')

const postschema=mongoose.Schema({
    user:String,
    location:String,
    description:String,
    image:String,
    likes:{
        type:Number,
        default:0
    }
})

const Post=mongoose.model('post',postschema)

module.exports=Post