import React from 'react'
import PROFILEICON from "../assets/img/user.png";

const Comments = ({info}) => {
  
  return (
    <div className='flex mt-4'>
            <img src={info.snippet.topLevelComment.snippet.authorProfileImageUrl  ? info.snippet.topLevelComment.snippet.authorProfileImageUrl : PROFILEICON } alt="author" width="40" height="40" className='rounded-full w-10 h-10'/>
        <div className='pl-4'>
            <h5 className='font-bold'>{info.snippet.topLevelComment.snippet.authorDisplayName}</h5>
            <p className='text-sm'>{info.snippet.topLevelComment.snippet.textDisplay}</p>
        </div>
    </div>
  )
}

export default Comments