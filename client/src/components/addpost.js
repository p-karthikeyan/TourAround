import React from 'react'

const Addpost = () => {
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
                <input type='file' accept='image/*'/>
                <input type='text' placeholder='location'/>
                <input type="textarea" placeholder='description'/>
                <button className='btn'>Add post</button>
            </div>
      </div>
    </div>
  )
}

export default Addpost
