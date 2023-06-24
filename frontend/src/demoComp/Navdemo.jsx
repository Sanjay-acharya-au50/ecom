import React from 'react'
import { Link } from 'react-router-dom'

const Navdemo = () => {
  return (
    <div className='flex text-center w-full'>
        <div className='m-2'>
        <Link to="/" >Home</Link>
        </div>
        <div className='m-2'>
        <Link to="/login" >log</Link>
        </div>
        <div className='m-2'>
        <Link to="/register" >reg</Link>
        </div>
    
    </div>
  )
}

export default Navdemo;