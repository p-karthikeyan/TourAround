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
    <div style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:'50px',
        paddingRight:'50px',
        color:'rgb(255, 232, 168)',
        backgroundColor:'rgb(73, 22, 2)'
    }}>
      <h2>TourAround</h2>
      <div style={{fontWeight:'bold'}}>
        <a style={{marginLeft:'30px',cursor:'pointer'}} href='#about'>About</a>
        <a style={{marginLeft:'30px',cursor:'pointer'}} onClick={handleLogin}>Login</a>
        <a style={{marginLeft:'30px',cursor:'pointer'}} onClick={handleSignup}>Signup</a>
      </div>
    </div>
  )
}

export default Nav
