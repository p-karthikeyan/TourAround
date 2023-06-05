import React from 'react';
import search from '../assets/search.jpg';
import explore from '../assets/explore.jpg';
import posts from '../assets/posts.jpg';

const Demo = () => {
  return (
    <>
    <h1 style={{textAlign:'center',fontSize:'x-large'}}>Features of Our App</h1>
    <div className='demo-cont'>
      <img className='demo-pics' src={search}/>
      <div className='demo-dscp'>
        <h1 style={{color:'rgb(255, 232, 168)',cursor:'pointer'}}>You Can Search Locations!</h1>
        <p>
        Empowers you to search, explore and discover a wide range of destinations for your next adventure.
         With this app, the world is at your fingertips
         as you embark on a journey of exploration and create unforgettable travel experiences.
        </p>
      </div>
    </div>
    <div className='demo-cont'>
      <div className='demo-dscp'>
        <h1 style={{color:'rgb(255, 232, 168)',cursor:'pointer'}}>Explore Other's Experience!</h1>
        <p>
        Takes you on a journey of discovery, enabling you to explore and experience destinations like never before. 
        With its unique features and user-friendly interface, 
        the app transforms your travels into extraordinary adventures, allowing you to create lifelong memories.
        </p>
      </div>
      <img className='demo-pics' src={explore}/>
    </div>
    <div className='demo-cont'>
      <img className='demo-pics' src={posts}/>
      <div className='demo-dscp'>
        <h1 style={{color:'rgb(255, 232, 168)',cursor:'pointer'}}>Post Your Experience!</h1>
        <p>
        Share your travel moments by capturing stunning photos directly within the app.
         Whether it's a breathtaking landscape, a mouthwatering dish, 
        or a memorable encounter, you can easily upload your photos to create a visual narrative of your journey.
        </p>
      </div>
    </div>
    </>
  )
}

export default Demo
