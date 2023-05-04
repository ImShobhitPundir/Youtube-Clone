import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { VIDEO_API_URL_SEARCH_KEY } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";

const SearchResult = () => {
    const [searchParam, setSearchParams] = useSearchParams();
    const query = searchParam.get("q");
    const [result, setResult] = useState([]);

  useEffect(()=>{
    getSearchResult();
  }, [query]);

  const getSearchResult = async () => {
    const data = await fetch(VIDEO_API_URL_SEARCH_KEY+query);
    const json = await data.json();
   
    setResult(json.items);
  };
  return (
    <div className="p-8">
      <h5>Result</h5>
      {
        result?.map((row,index)=>(
            <Link  to={"/watch?v="+row.id.videoId} key={row.id.videoId}>
              <ResultCard data={row} />
            </Link>          
        ))
      }
    </div>
  );
};

export default SearchResult;
