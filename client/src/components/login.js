import React, { useState } from 'react'
import logo from '../assets/authmodel.png'
import {loginuser} from '../services/users'

const Login = ({setmodel,setbox}) => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const handleclose=()=>{
        setmodel(false)
    }
    const handlelogin=e=>{
      e.preventDefault()
      const data={email,password}
      loginuser(data)
      .then(rslt=>console.log(rslt))
      .catch(err=>console.log(err))
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
        <input type='text' onChange={e=>setemail(e.target.value)} value={email} placeholder='email'/>
        <input type="password" onChange={e=>setpassword(e.target.value)} value={password} placeholder='password'/>
        <button className='btn' type='submit' onClick={handlelogin}>Login</button>
        <p>new user? <span style={{color:'red',cursor:'pointer'}} onClick={()=>setbox('signup')}>Register</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
