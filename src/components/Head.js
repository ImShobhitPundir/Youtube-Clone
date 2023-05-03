import React, { useEffect, useState } from "react";
import HAMBURGER from "../assets/img/hamburger-menu.png";
import LOGO from "../assets/img/logo.png";
import PROFILEICON from "../assets/img/user.png";
import SEARCH from "../assets/img/search.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionResult, setSuggestionResult] = useState([]);
  const [suggestionBox, setSuggestionBox] = useState(false);
  //subscribe store
  const cacheData = useSelector((store) => store.search);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    //Debouncing with 200 millisecond
    const timer = setTimeout(() => {
      if (cacheData[searchQuery]) {
        setSuggestionResult(cacheData[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  async function getSuggestions() {
    const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestionResult(json[1]);
    console.log("query - " + searchQuery);
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  }

  return (
    <div className="grid grid-flow-col p-4 shadow-lg sticky w-full bg-white top-0">
      <div className="col-span-1 flex">
        <img
          src={HAMBURGER}
          alt="hamburger"
          className="h-8 cursor-pointer"
          onClick={() => handleToggleMenu()}
        />
        <a href="/">
          <img src={LOGO} alt="logo" className="h-7 ml-4" />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setSuggestionBox(true)}
            onBlur={() => setSuggestionBox(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            <img src={SEARCH} alt="search" className="h-5" />
          </button>
        </div>

        <div className="fixed">
          {suggestionBox && (
            <ul className="bg-white w-[27rem] shadow-lg border border-gray-300 rounded-lg">
              {suggestionResult?.map((suggestion, index) => (
                <li className="px-3 py-1 hover:bg-gray-200" key={index}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img src={PROFILEICON} alt="prfile" className="h-7" />
      </div>
    </div>
  );
};

export default Head;
