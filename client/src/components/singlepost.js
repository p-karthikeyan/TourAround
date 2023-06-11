import React,{useState} from 'react'
import Comments from './comment';
import person from '../assets/person.webp';

const Singlepost = ({handlecmnt,post,handlelike,iscmnt,index}) => {
    
  return (
                            <div className='post-cont'>
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
                                    <h3 onClick={()=>handlecmnt(index)}>Comments</h3>
                                    <h3>Share</h3>
                                </div>
                                <hr/>
                                {iscmnt.map((visibility,pos)=>{
                                    if(visibility && pos===index){return <Comments postid={post._id}/>}
                                }) 
                                }
                            </div>
  )
}

export default Singlepost
