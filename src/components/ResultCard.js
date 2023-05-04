import React from "react";

const ResultCard = ({data}) => {
  console.log(data);
  return (
    <div className="flex mt-5">
      <div className="">
        <img
          src={data.snippet.thumbnails.medium.url}
          className="rounded-lg w-[300px]"
        />
      </div>
      <div className=" px-3 mb-6">
        <h5 className="font-semibold text-sm">
          {data.snippet.title}
        </h5>
        <p className="mb-1 text-sm text-gray-500">{data.snippet.channelTitle}</p>
        <p className="mt-3 text-xs">{data.snippet.description}</p>
      </div>
    </div>
  );
};

export default ResultCard;
