import Nav from '../components/Nav';
import './App.css';
import Intro from '../components/intro';
import Demo from '../components/demo';
import About from '../components/About';
import Footer from '../components/Footer';
import Login from '../components/login';
import { useState } from 'react';
import Signup from '../components/signup';

function Home() {
  const [showAuthmodel,setAuthmodel]=useState(false)
  const [Authbox,setauthbox]=useState('login')

  const disabled=showAuthmodel?'50%':'100%'
  return (
    <div className='wrap'>
      <div style={{opacity:disabled}}>
      <Nav setmodel={setAuthmodel} setbox={setauthbox}/>
      <Intro/>
      <Demo/>
      <About/>
      <Footer/>
      </div>
      {showAuthmodel && Authbox==='login' &&(<Login setmodel={setAuthmodel} setbox={setauthbox}/>)}
      {showAuthmodel && Authbox==='signup' &&(<Signup setmodel={setAuthmodel} setbox={setauthbox}/>)}
    </div>
  );
}

export default Home;
