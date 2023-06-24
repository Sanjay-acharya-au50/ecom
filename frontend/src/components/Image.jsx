import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({data}) => {

  return (
    <Link to={`/product/${data.id}`}>

      <img src={data.img} className="h-[270px] w-[270px]" />

    </Link>
    
  )
}

export default Image