import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name}) => {
  return (
    <div>
       <Link to={"/result?q=" + name}>
        <button className='bg-gray-200 p-1 px-3 m-2 rounded-lg whitespace-nowrap'> {name}</button>
        </Link>
    </div>
  )
}

export default Button