const mongoose=require('mongoose')
const cmntschema=mongoose.Schema({
    postid:String,
    user:String,
    message:String,
})
const Comment=mongoose.model('comment',cmntschema)

module.exports=Comment