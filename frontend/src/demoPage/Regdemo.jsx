import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Regdemo = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email : "",
    password : ""
  })

  const registerUser =  async (e) =>{
    e.preventDefault();
    const {username,email,password} = data;
    try {
        const {data} = await axios.post('/register', {
          username,email,password
        });
        if(data.error){
          toast.error("err")
        }
        else{
          setData({});
          toast.success("success");
          navigate('/login')
        }
      
    } catch (error) {
      console.log("again error");
    }
  }

  return (
    <div className='h-[800px] w-full flex justify-center items-center text-center'>
    <div className='h-[600px] w-[500px] border border-black flex flex-col justify-center items-center'>
    <div className='h-[500px] w-[300px] flex flex-col justify-center items-center border border-black'>

    <div className='text-2xl'>Create a Account</div>
      <div className='flex flex-col justify-center items-center w-full border border-black p-2'>

        <form onSubmit={registerUser}>

        <input type='text' className='border border-black w-[80%] m-1 rounded p-1' placeholder='name'  value={data.name} onChange={(e)=> setData({...data, name:e.target.value})}/>
        <input type='email' className='border border-black w-[80%] m-1 rounded p-1' placeholder='email'  value={data.email} onChange={(e)=> setData({...data, email:e.target.value})}/>
        <input type='password' className='border border-black w-[80%] m-1 rounded p-1' placeholder='confirm password'  value={data.password} onChange={(e)=> setData({...data, password:e.target.value})}/>
        <button type='submit' className='bg-[black] text-white p-2 rounded w-[80%] mt-1'>Register</button>

        </form>

      </div>
    </div>
    </div>

      </div>
  )
}

export default Regdemo;