import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'


const Register = () => {

  return (
    <>
       <Navbar />
      <Announcement/>
    <div className='h-[800px] w-full flex justify-center items-center text-center'>
    <div className='h-[600px] w-[500px] border border-black flex flex-col justify-center items-center'>
    <div className='h-[500px] w-[300px] flex flex-col justify-center items-center border border-black'>

    <div className='text-2xl'>Create a Account</div>
      <div className='flex flex-col justify-center items-center w-full border border-black p-2'>

        <form >

        <input type='text' className='border border-black w-[80%] m-1 rounded p-1' placeholder='name' />
        <input type='email' className='border border-black w-[80%] m-1 rounded p-1' placeholder='email'  />
        <input type='password' className='border border-black w-[80%] m-1 rounded p-1' placeholder='confirm password'  />
        <button type='submit' className='bg-[black] text-white p-2 rounded w-[80%] mt-1'>Register</button>

        </form>



      </div>
    </div>
    </div>

      </div>
    </>

  )
}

export default Register