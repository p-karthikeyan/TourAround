import React, { useState } from 'react'
import {addpost} from '../services/users'
import {decodeToken} from 'react-jwt'

const Addpost = () => {
  const [location,setlocation]=useState('')
  const [description,setdescription]=useState('')
  const [image,setimage]=useState('')

  const handleaddpost=(e)=>{
    e.preventDefault()
    const token=localStorage.getItem('authToken')
    const decoded=decodeToken(token)
    console.log(image,decoded)
    const data={userid:decoded._id,location,description,image}
    addpost(data).then(rslt=>console.log("post success"))
    .catch(err=>console.log(err))
  }

  const handleupload=(e)=>{
    e.preventDefault()
    const file=e.target.files[0]
    converttostring(file).then(encodedimage=>{
      setimage(encodedimage)
    }).catch(err=>console.log(err))
  }

  const converttostring=(file)=>{
    return new Promise((resolve,reject)=>{
      const fr=new FileReader();
      fr.readAsDataURL(file)
      fr.onload=()=>resolve(fr.result)
      fr.onerror=(error)=>reject(error)
    })
  }

  return (
    <div className='add-post'>
        <div style={{width:'50vw'}}>
            <h1 className='descp' style={{color:'brown'}}>Post Your Travel Experiences!</h1>
            <p>
            Share your travel moments by capturing stunning photos directly within the app. 
            Whether it's a breathtaking landscape, a mouthwatering dish, or a memorable encounter,
             you can easily upload your photos to create a visual narrative of your journey.
            </p>
        </div>
        <div className='form-cont'>
            <div className='form-dt'>
                <h1>Add post</h1>

                <input type='file' required 
                onChange={handleupload} accept='image/*'/>

                <input type='text' required onChange={(e)=>setlocation(e.target.value)} placeholder='location' value={location}/>
                
                <input type="textarea" required onChange={(e)=>setdescription(e.target.value)} placeholder='description' value={description}/>
                
                <button className='btn' onClick={handleaddpost}>Add post</button>
            </div>
      </div>
    </div>
  )
}

export default Addpost
