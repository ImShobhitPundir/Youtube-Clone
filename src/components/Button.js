import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 p-1 px-3 m-2 rounded-lg whitespace-nowrap'> {name}</button>
        
    </div>
  )
}

export default Button