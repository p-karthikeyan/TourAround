import React,{useEffect ,useState} from 'react'
import Footer from '../components/Footer'
import bg from '../assets/dashboard.webp'
import Addpost from '../components/addpost'
import Post from '../components/post'
import {decodeToken} from 'react-jwt'
import {useNavigate} from 'react-router-dom'
import { getpost } from '../services/users'

const Dashboard = () => {
  const navigate=useNavigate()
  const [searchlocation,setsearchlocation]=useState('')
  const [result,viewresult]=useState(false)
  const [data,setdata]=useState([])

  const len=data.length
  const [iscmnt,setcmnt]=useState(Array(len).fill(false))

  useEffect(()=>{
    const token=localStorage.getItem('authToken')
    const decodedtoken=decodeToken(token)
    if(decodedtoken){
      console.log("accessible..")
    }
    else{
      navigate('/')
    }
  },[])

  const handlesearch=(e)=>{
    const token=localStorage.getItem('authToken')
    getpost(searchlocation,token).then(posts=>{
      viewresult(true)
      setdata(posts.data)
  }).catch(err=>console.log(err))
  }

  return (
    <div className='bganimation'>
        <div style={{width:'100%',overflow:'hidden'}}>
        <img className='dash-bg' style={{height:'100vh'}} src={bg}/>
        </div>
        <div className='dash-nav'>
          <h1>TourAround</h1>
          <div>
            <button className='transp-btn' onClick={()=>navigate('/')}>Home</button>
            <button className='transp-btn' onClick={()=>{
              localStorage.removeItem('authToken')
              navigate('/')
              }}>Logout</button>
          </div>
        </div>
        <div className='search-cont'>
            <input className='search-bar' onChange={(e)=>setsearchlocation(e.target.value)} type='text' placeholder='Enter a location' value={searchlocation}/>
            <button className='btn' onClick={handlesearch} style={{height:'50px'}}>Search</button>
            <div className='dash-desc' >
                <h1 className='descp'>Search Your Desired Location</h1>
                <p style={{color:'white'}}>Empowers you to search, explore and discover a wide range of destinations
                for your next adventure. With this app, the world is at your
                fingertips as you embark on a journey of exploration and create unforgettable travel experiences.
                </p>
            </div>
        </div>
        {result &&
        <Post data={data} setdata={setdata} iscmnt={iscmnt} searchagain={handlesearch} setcmnt={setcmnt}/>}
        <Addpost/>
        <Footer/>
    </div>
  )
}

export default Dashboard
