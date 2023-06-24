import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'

const Login = () => {
  const   [data, setData] = useState({
    username: "",
    password : ""

  })

  const loginUser = () => {

    e.preventDefault();
    axios.get('/')

  }


  return (
    <>
        <Navbar />
      <Announcement/>
    
    <div className='h-[800px] w-full flex justify-center items-center text-center'>
    
    <div className='h-[600px] w-[500px] border border-black flex flex-col justify-center items-center'>
    <div className='h-[500px] w-[300px] flex flex-col justify-center items-center border border-black'>

    <div className='text-2xl'>Login to E-Com</div>
      <div className='flex flex-col justify-center items-center w-full border border-black p-2'>

       <form onSubmit={loginUser}>

       <input type='text' className='border border-black w-[80%] m-1 rounded p-1' placeholder='username' value={data.username} onChange={(e)=>setData({...data,username:e.target.value})} />
        <input type='text' className='border border-black w-[80%] m-1 rounded p-1' placeholder='password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
        <button type='submit' className='bg-[black] text-white p-2 rounded w-[80%] mt-1'>Login</button>

       </form>


      </div>
    </div>
    </div>

      </div>
    </>

  )
}

export default Login;