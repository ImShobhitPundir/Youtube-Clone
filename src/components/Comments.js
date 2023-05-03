import React from 'react'

const Comments = ({info}) => {
  
  return (
    <div className='flex mt-4'>
        <div className='w-11'>
            <img src={info.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="author" width="40" height="40" className='rounded-full'/>
        </div>
        <div className='pl-4'>
            <h5 className='font-bold'>{info.snippet.topLevelComment.snippet.authorDisplayName}</h5>
            <p className='text-sm'>{info.snippet.topLevelComment.snippet.textDisplay}</p>
        </div>
    </div>
  )
}

export default Comments