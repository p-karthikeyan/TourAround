import React from 'react'
import bg from '../assets/homebg.jpg'
import {useNavigate} from 'react-router-dom'
import { decodeToken } from 'react-jwt'

const Intro = ({setmodel}) => {
  const navigate=useNavigate()
  return (
    <div className='home-cont'>
        <div className='home-dscp'>
          <h1 style={{color:'brown'}}>Travel Around The World!</h1>
          <p>The Travel App is your ultimate companion for seamless and unforgettable 
            travel experiences. Whether you're planning a weekend getaway, a business trip, 
            or a globetrotting adventure, this app has got you covered. 
            With its user-friendly interface and comprehensive features, 
            it's designed to simplify every aspect of your journey and make traveling a breeze.</p>
          <button className='btn' onClick={()=>{
            const token=localStorage.getItem('authToken')
            const decodedtoken=decodeToken(token)
            if(decodedtoken){
              navigate('/dashboard')
            }
            else{
              setmodel(true)
            }
          }}>Explore &gt;</button>
        </div>
        <img className='home-img' src={bg}/>
      </div>
  )
}

export default Intro
