import React, { useState } from 'react';
import person from '../assets/person.webp';
import send from '../assets/send.png';
import '../pages/App.css';
import { like } from '../services/users';

const Post = ({data,setdata}) => {
    const [iscmnt,setcmnt]=useState(false)
    

    const handlecmnt=()=>{
        setcmnt(!iscmnt)
    }
    const handlelike=(postid,likes,location)=>{
        const token=localStorage.getItem('authToken')
        const data={token,postid,likes,location}
        like(data).then(rst=>{
            setdata(rst.data)
        })
        .catch(err=>console.log(err))
    }

    const comments=[
        {username:'kishore',msge:'Nice location!'},
        {username:'prasanna',msge:'That was a wonderful spot!'}
    ]
    const Posts=data.map((post,pos)=>{
                            const cmnts=comments.map(item=>{
                                return <div>
                                    <h4 style={{marginBottom:'0px',color:'brown'}}>{item.username}</h4>
                                    <div className='cmntbox'>
                                    <p style={{marginTop:'3px'}}>{item.msge}</p>
                                    </div>
                                </div>
                            })
                    return <div className='post-cont'>
                                <div className='post-head'>
                                    <img style={{width:'50px'}}src={person}/>
                                    <div style={{marginLeft:'15px',fontSize:'larger'}}>
                                        <h4 style={{marginBottom:'0px'}}>{post.user}</h4>
                                        <p style={{marginTop:'0px'}}>{post.location}</p>
                                    </div>
                                </div><hr/>
                                <p style={{fontFamily:'Brush Script MT',fontSize:'x-large'}}>{post.description}</p>
                                <img style={{width:'100%'}} src={post.image}/>
                                <div className='post-foot'>
                                    <h3 onClick={()=>handlelike(post._id,post.likes,post.location)}>{post.likes.likecnt} Like</h3>
                                    <h3 onClick={handlecmnt}>Comments</h3>
                                    <h3>Share</h3>
                                </div>
                                <hr/>
                                {iscmnt &&
                                <div>
                                    {cmnts}
                                    <div className='cmnt-send-cont'>
                                        <input type='text' placeholder='Type a comment..'/>
                                        <img style={{width:'50px',marginTop:'25px',cursor:'pointer'}} src={send}/>
                                    </div>
                                </div>}
                            </div>
                })
  return (
    <div>
      <h1 style={{color:'white',margin:'50px 0px',textAlign:'center'}}>Results for your Search 'location'</h1>
      {Posts}
    </div>
  )
}

export default Post
