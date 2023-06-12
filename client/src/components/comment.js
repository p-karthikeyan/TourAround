import React, { useEffect, useState } from 'react'
import { addcomment, getcomment } from '../services/users'
import send from '../assets/send.png';

const Comments = ({postid}) => {

    const [comments,setcomments]=useState([])
    const [msge,setmsge]=useState('')

    const commentthis=()=>{
        const token=localStorage.getItem('authToken')
        const data={token,postid,message:msge}
        addcomment(data).then(rslt=>{
            setmsge('')
            setcomments(rslt.data)
        }).catch(err=>console.log(err))
    }

    useEffect(()=>{
        const token=localStorage.getItem('authToken')
        const data={token,postid}
        getcomment(data).then(cmnts=>setcomments(cmnts.data))
        .catch(err=>console.log(err))
    },[])

    const cmnts=comments.map(item=>{
        return <div>
            <h4 style={{marginBottom:'0px',color:'brown'}}>{item.user}</h4>
            <div className='cmntbox'>
            <p style={{marginTop:'3px'}}>{item.message}</p>
            </div>
        </div>
    })

  return (
    <div>
        <hr/>
        {cmnts}
        <div className='cmnt-send-cont'>
            <input type='text' onChange={(e)=>setmsge(e.target.value)} placeholder='Type a comment..' value={msge}/>
            <img onClick={commentthis} style={{width:'50px',marginTop:'25px',cursor:'pointer'}} src={send}/>
        </div>
    </div>
  )
}

export default Comments
