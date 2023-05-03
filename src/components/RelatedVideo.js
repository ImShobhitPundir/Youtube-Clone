import React, { useState } from "react";
import { Link } from "react-router-dom";

const RelatedVideo = ({ info, handleQuery }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <Link to={"/watch?v=" + info.id}>
      <div className="grid grid-flow-col">
        <div>
          <img
            src={thumbnails.default.url}
            alt="thumbnail"
            className="rounded-lg"
          />
        </div>
        <div className="px-3 mb-6">
          <h5 className="font-semibold text-sm">{title.slice(0, 50)}...</h5>
          <p className="mt-1 text-xs">{channelTitle}</p>
          <p className="text-xs">{viewCount} Views</p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedVideo;
