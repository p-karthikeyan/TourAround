const express=require('express')
const cors=require('cors')
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const mongoose=require('mongoose')
const uri="mongodb+srv://karthik-2002:karthik2002@cluster.8oxgmsm.mongodb.net/TourAround?retryWrites=true&w=majority"

const bcrypt=require('bcrypt')
const User=require('./models/usermodel')

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(result=>{
    app.listen(5000,()=>console.log("listening to the port 5000..."))
}).catch(err=>console.log(err))

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    User.findOne({email}).then(result=>{
        if(result){
            bcrypt.compare(password,result.password)
            .then(match=>{
                if(match){
                res.send(result)}
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