import React from 'react'
import Footer from '../components/Footer'
import bg from '../assets/dashboard.webp'
import Addpost from '../components/addpost'
import Post from '../components/post'

const Dashboard = () => {
  return (
    <div style={{background:'rgb(70,40,40)'}}>
        <img style={{width:'100%',height:'100vh'}} src={bg}/>
        <div className='dash-nav'>
          <h1 style={{marginRight:'68vw'}}>TourAround</h1>
          <div>
            <button className='transp-btn'>Home</button>
            <button className='transp-btn'>Logout</button>
          </div>
        </div>
        <div className='search-cont'>
            <input className='search-bar' type='text' placeholder='Enter a location'/>
            <button className='btn' style={{height:'50px'}}>Search</button>
            <div style={{width:'40vw'}}>
                <h1 className='descp'>Search Your Desired Location</h1>
                <p style={{color:'white'}}>Empowers you to search, explore and discover a wide range of destinations
                for your next adventure. With this app, the world is at your
                fingertips as you embark on a journey of exploration and create unforgettable travel experiences.
                </p>
            </div>
        </div>
        <Post/>
        <Addpost/>
        <Footer/>
    </div>
  )
}

export default Dashboard