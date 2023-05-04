import React from 'react'

const LiveChatCard = ({name,message}) => {
  return (
        <div className='flex mt-2'>
              <img
                src="https://picsum.photos/200"
                alt="author"
                width="20"
                height="20"
                className="rounded-full w-5 h-5"
                
              />
            <div className="pl-4 text-sm">
              <h5> <span className="font-bold">{name} </span>{message}</h5>
            </div>
          </div>
  )
}

export default LiveChatCard