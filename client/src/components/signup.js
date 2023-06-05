import React from 'react'
import logo from '../assets/authmodel.png'

const Signup = ({setmodel,setbox}) => {
  const handleclose=()=>{
    setmodel(false)
}
  return (
    <div className='authmodel'>
    <h3 className='auth-close-btn' onClick={handleclose}>x</h3>
      <div className='auth-img-cont'>
        <img src={logo}/>
        <p>Create an Account for you!</p>
      </div>
      <div className='form-cont'>
        <div className='form-dt'>
        <h1>Sign Up</h1>
        <input type='text' placeholder='username'/>
        <input type='text' placeholder='email'/>
        <input type="password" placeholder='password'/>
        <input type="password" placeholder='confirm password'/>        
        <button className='btn'>Signup</button>
        <p>Existing user? <span style={{color:'red',cursor:'pointer'}} onClick={()=>setbox('login')}>Login</span></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
