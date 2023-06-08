import React, { useRef, useState } from 'react'
import {addpost} from '../services/users'
import {decodeToken} from 'react-jwt'

const Addpost = () => {
  const [location,setlocation]=useState('')
  const [description,setdescription]=useState('')
  const uploadimage=useRef(null)
  const [image,setimage]=useState('')
  const [nofpost,setnofpost]=useState(0)

  const handleaddpost=(e)=>{
    e.preventDefault()
    const token=localStorage.getItem('authToken')
    const decoded=decodeToken(token)
    console.log(decoded)
    if(decoded){
    const data={authtoken:token,location,description,image}
    addpost(data).then(rslt=>{
      setnofpost(nofpost+1)
      setlocation('')
      setdescription('')
      uploadimage.current.value=null
      console.log("post success")})
    .catch(err=>console.log(err))
    }
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
            <form className='form-dt' onSubmit={handleaddpost}>
                <h1>Add post</h1>

                <input type='file' required ref={uploadimage}
                onChange={handleupload} accept='image/*'/>

                <input type='text' required onChange={(e)=>setlocation(e.target.value)} placeholder='location' value={location}/>
                
                <input type="textarea" required onChange={(e)=>setdescription(e.target.value)} placeholder='description' value={description}/>
                
                <button className='btn' type='submit'>Add post</button>

                {nofpost>0 && <p>{nofpost} posts added!!</p>}
            </form>
      </div>
    </div>
  )
}

export default Addpost
