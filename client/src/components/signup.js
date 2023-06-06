import React,{useState} from 'react'
import logo from '../assets/authmodel.png'
import { signupuser } from '../services/users'

const Signup = ({setmodel,setbox}) => {
  const [username,setusername]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [cfmpassword,setcfmpassword]=useState('')

  const handleclose=()=>{
    setmodel(false)
}
  const handlesignup=e=>{
    e.preventDefault()
    const data={username,email,password}
    console.log(data)
    signupuser(data)
    .then(rslt=>console.log(rslt))
    .catch(err=>console.log(err))
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
        <input type='text' required  onChange={e=>setusername(e.target.value)} placeholder='username'value={username}/>
        <input type='text' required onChange={e=>setemail(e.target.value)} placeholder='email'value={email} />
        <input type="password" required onChange={e=>setpassword(e.target.value)} placeholder='password' value={password}/>
        <input type="password" required onChange={e=>setcfmpassword(e.target.value)} placeholder='confirm password' value={cfmpassword}/>        
        <button className='btn' onClick={handlesignup}>Signup</button>
        <p>Existing user? <span style={{color:'red',cursor:'pointer'}} onClick={()=>setbox('login')}>Login</span></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
