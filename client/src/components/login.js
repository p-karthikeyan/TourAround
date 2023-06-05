import React from 'react'
import logo from '../assets/authmodel.png'

const Login = ({setmodel,setbox}) => {
    const handleclose=()=>{
        setmodel(false)
    }
  return (
    <div className='authmodel'>
    <h3 className='auth-close-btn' onClick={handleclose}>x</h3>
      <div className='auth-img-cont'>
        <img src={logo}/>
        <p>*please login to go further!</p>
      </div>
      <div className='form-cont'>
        <div className='form-dt'>
        <h1>Log In</h1>
        <input type='text' placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button className='btn'>Login</button>
        <p>new user? <span style={{color:'red',cursor:'pointer'}} onClick={()=>setbox('signup')}>Register</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
