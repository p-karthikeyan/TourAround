const express=require('express')
const cors=require('cors')
const jwt=require('jsonwebtoken')
require('dotenv').config();


const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const mongoose=require('mongoose')
const uri=process.env.DATABASE_URI

const bcrypt=require('bcrypt')

const User=require('./models/usermodel')
const Post=require('./models/postmodel')
const Comment=require('./models/comentmodel')

const secretkey=process.env.SECRET_KEY

const generatetoken=(userid)=>{
    return jwt.sign({_id:userid},secretkey)
}
const authenticate=(token)=>{
    return jwt.verify(token,secretkey)
}

const port=process.env.PORT
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(result=>{
    app.listen(port || 5000,()=>console.log(`listening to the port ${port}...`))
}).catch(err=>console.log(err))

app.post('/getcomments',(req,res)=>{
    const {token,postid}=req.body
    const decoded=authenticate(token)
    if(decoded){
        Comment.find({postid}).then(rslt=>{
            res.send(rslt)
        }).catch(err=>console.log(err))
    }
})

app.post('/addcomments',(req,res)=>{
    const {token,postid,message}=req.body
    const decoded=authenticate(token)
    if(decoded){
        User.findOne({_id:decoded._id}).then(userdata=>{
            const newcmnt=new Comment({postid:postid,user:userdata.username,message:message})
            newcmnt.save().then(rslt=>{
                Comment.find({postid}).then(rsl=>{
                    res.send(rsl)
                }).catch(err=>console.log(err))
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }
})

app.post('/locations',(req,res)=>{
    const {token,location}=req.body
    const decoded=authenticate(token)
    if(decoded){
        Post.find({location:location}).then(posts=>{
            res.send(posts)
        }).catch(err=>console.log(err))
    }
})

app.put('/like',(req,res)=>{
    const {token,postid,likes,location}=req.body
    const decoded=authenticate(token)
    if(decoded){
        if(!likes.likedusers.includes(decoded._id)){
            const updatedlikes={
                likedusers:[...likes.likedusers,decoded._id],
                likecnt:likes.likecnt+1
            }
            Post.findOneAndUpdate({_id:postid},{likes:updatedlikes}).then(rslt=>{
                Post.find({location}).then(rsl=>res.send(rsl)).catch(err=>console.log(err))
            }).catch(err=>console.log(err))
        }else{
            console.log('already liked this post!!')
        }
    }
})

app.post('/addpost',(req,res)=>{
    const {authtoken,location,description,image}=req.body
    const decoded=authenticate(authtoken)
    if(decoded){
        User.findOne({_id:decoded._id}).then(user=>{
            const post=new Post({user:user.username,location,description,image})
            post.save().then(post=>{
                res.send(post)
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }else{
        console.log("authentication failed!!..")
    }
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    User.findOne({email}).then(result=>{
        if(result){
            bcrypt.compare(password,result.password)
            .then(match=>{
                if(match){
                    const token=generatetoken(result._id)
                    res.send({name:result.username,authtoken:token})
                    }
                else{
                    res.send('password incorrect!')
                }
            })
        }else{
            res.send('user not found!')
        }
    })
})

app.post('/signup',(req,res)=>{
    const {username,email,password}=req.body;
    
    User.findOne({email:email})
    .then(result=>{
        if(result){throw new Error("User already exist!!")}

        bcrypt.genSalt(10).then(salt=>bcrypt.hash(password,salt)).then(hashedpassword=>{
        const user=new User({username:username,email:email,password:hashedpassword})
        user.save().then(result=>{
            res.send({email})
        }).catch(err=>console.log(err))
    })
    }).catch(err=>{
        console.log(err)
        res.status(409).json({error:"User already exist!!"})
    })
})