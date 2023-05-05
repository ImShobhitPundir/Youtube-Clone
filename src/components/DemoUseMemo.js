import React, { useMemo, useState } from "react";
import { nthPrime } from "../utils/Helper";

const DemoUseMemo = () => {
  const [number, setNumber] = useState();
  const [isDark, setIsDark] = useState(false);

  ///const prime  = nthPrime(number);
  const prime = useMemo(()=>nthPrime(number),[number]);
  
  return (
    <div
      className={
        "w-50 h-60 border border-gray-300 m-5 " +
        (isDark && "bg-gray-800 text-white")
      }
    >
      <div className="p-5">
        <h5>
          <button
            className="bg-gray-500 p-1 px-2 rounded-lg text-white m-4"
            onClick={() => setIsDark(!isDark)}
          >
            Change Theme
          </button>
        </h5>
        <input
          type="number"
          className="border border-blue-500 mr-3 rounded-lg"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        {/* <button
          className="bg-green-600 text-white rounded-lg p-1 px-3"
          onClick={() => getPrime()}
        >
          Prime
        </button> */}
        { prime }
      </div>
    </div>
  );
};

export default DemoUseMemo;
