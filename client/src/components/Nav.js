import React from 'react'

const Nav = ({setmodel,setbox}) => {
  const handleLogin=()=>{
    setmodel(true)
    setbox('login')
  }
  const handleSignup=()=>{
    setmodel(true)
    setbox('signup')
  }
  return (
    <div className='nav'>
      <h2>TourAround</h2>
      <div style={{fontWeight:'bold'}}>
        <a href='#about'>About</a>
        <a onClick={handleLogin}>Login</a>
        <a onClick={handleSignup}>Signup</a>
      </div>
    </div>
  )
}

export default Nav
