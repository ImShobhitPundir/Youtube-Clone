import React, { useEffect, useState } from 'react'
import { VIDEO_API_URL } from '../utils/constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    getVideoList();
  },[])

  const getVideoList = async () =>{
    const data = await fetch(VIDEO_API_URL);
    const json = await data.json();
    //console.log(json.items)
    setVideos(json.items);
  }

  return (
    <div className='p-2 mt-4 flex flex-wrap'>
      {
        videos.map((video)=>(
          <VideoCard info={video} key={video.id} />
        ))
      }
    </div>
  )
}

export default VideoContainer