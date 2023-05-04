import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import RelatedVideo from "./RelatedVideo";

import {
  VIDEO_API_URL_RELATED,
  VIDEO_API_URL_SINGLE,
  VIDEO_API_URL_COMMENT,
} from "../utils/constants";
import Comments from "./Comments";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const videoId = searchParam.get("v");
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState([]);
  const [comments, setComments] = useState([]);
  const [isDescriptionFull, setIsDescriptionFull] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getSingleVideo();
    getRelatedVideos();
    getVideoComments();
  }, []);

  useEffect(() => {
    getSingleVideo();
    getRelatedVideos();
    getVideoComments();
  }, [videoId]);

  const getRelatedVideos = async () => {
    const data = await fetch(VIDEO_API_URL_RELATED);
    const json = await data.json();
    // console.log(json.items);
    setRelatedVideo(json.items);
  };
  const getSingleVideo = async () => {
    const data = await fetch(VIDEO_API_URL_SINGLE + videoId);
    const json = await data.json();
    //console.log(json.items[0]);
    setVideo(json.items[0]);
  };
  const getVideoComments = async () => {
    const data = await fetch(VIDEO_API_URL_COMMENT + videoId);
    const json = await data.json();
    //console.log(json.items);
    setComments(json.items);
  };

  if (!video) return null;

  return (
    <div className="grid grid-flow-col px-20 w-full ">
      <div className="col-span-8 p-2 max-w-[660px]">
        <iframe
          width="660"
          height="370"
          src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold py-3 text-lg">
          {video.snippet.localized.title}
        </h1>
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">{video.snippet.channelTitle}</h3>
          </div>

          <div>
            <button className="bg-black text-white p-2 px-4 rounded-full  text-sm font-semibold">
              Subscribe
            </button>
          </div>

          <div>
            <button className="bg-gray-100 p-2 px-4 text-sm font-semibold rounded-l-full border-r">
              Like
            </button>
            <button className="bg-gray-100 p-2 px-4 text-sm font-semibold rounded-r-full">
              Dislike
            </button>
            <button className="bg-gray-100  p-2 px-4 rounded-full  text-sm font-semibold ml-2 ">
              Share
            </button>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 my-5">
          <div>
            {isDescriptionFull ? (
              <p className="text-sm">
                {video.snippet.localized.description}{" "}
                <button
                  className="font-bold"
                  onClick={() => setIsDescriptionFull(false)}
                >
                  Show Less
                </button>
              </p>
            ) : (
              <p className="text-sm">
                {video.snippet.localized.description.slice(0, 400)}...
                <button
                  className="font-bold"
                  onClick={() => setIsDescriptionFull(true)}
                >
                  Show More
                </button>
              </p>
            )}
          </div>
        </div>
        {/* <div>
          <h5>{comments?.length} Comments</h5>
          {
            comments?.map((comment)=>(
              <Comments info={comment} key={comment.id}/>
            ))
          }
        </div> */}
        <div>
          <CommentContainer />
        </div>
      </div>
      <div className="col-span-4 px-10 p-4 w-full">
      <LiveChat />
      
        {/* <h2 className="font-bold">Related Videos</h2> */}

        {relatedVideo?.map((video) => (
          <RelatedVideo
            info={video}
            key={video.id}
            handleQuery={(id) => {
              setSearchParams(id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
