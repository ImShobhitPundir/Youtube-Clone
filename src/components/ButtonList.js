import React from 'react'
import Button from './Button'

const buttons = ['All','Live','Music','Mixes','Movies','Programming','Comedy','News','Stock','AI','Bhajan Music','Watched'];
const ButtonList = () => {
  return (
    <div className='flex text-sm flex-nowrap max-w-full overflow-auto '>
      {
        buttons.map((button,index)=>(
          <Button name={button} key={index}/>
        ))
      }
    </div>
  )
}

export default ButtonList