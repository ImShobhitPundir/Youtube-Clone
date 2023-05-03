import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="w-80  m-5">
      <Link to={"/watch?v=" + info.id}>
        <img
          src={thumbnails.medium.url}
          alt="thumbnail"
          className="rounded-lg"
        />
        <div className="p-2">
          <h5 className="font-bold text-sm">{title}</h5>
          <p className="mt-2">{channelTitle}</p>
          <p>{viewCount} Views</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
