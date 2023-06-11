import React, { useState } from 'react';
import '../pages/App.css';
import { like } from '../services/users';
import Singlepost from './singlepost';

const Post = ({data,setdata,iscmnt,setcmnt,searchagain}) => {
    

    const handlecmnt=(index)=>{
        console.log(iscmnt,index)
        const tmp=iscmnt
        tmp[index]=!tmp[index]
        setcmnt(tmp)
        searchagain()
    }

    const handlelike=(postid,likes,location)=>{
        const token=localStorage.getItem('authToken')
        const data={token,postid,likes,location}
        like(data).then(rst=>{
            setdata(rst.data)
        })
        .catch(err=>console.log(err))
    }

    const Posts=data.map((post,pos)=>{
                    return <Singlepost post={post} 
                    handlelike={handlelike} handlecmnt={handlecmnt}
                    iscmnt={iscmnt} index={pos}/>
                })
  return (
    <div>
      <h1 style={{color:'white',margin:'50px 0px',textAlign:'center'}}>Results for your Search 'location'</h1>
      {Posts}
    </div>
  )
}

export default Post
