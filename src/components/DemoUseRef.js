import React, { useState, useRef } from "react";

const DemoUseRef = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  return (
    <div className="w-30 h-60 border border-gray-300 m-5 p-4">
      <h5>
        <button
          className="bg-gray-500 p-1 px-2 rounded-lg text-white m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Let Change
        </button>{x}
      </h5>
      <h5>
        <button
          className="bg-orange-500 p-1 px-2 rounded-lg text-white m-4"
          onClick={() => {
            setY(y+1)
          }}
        >
          State Change
        </button>{y}
      </h5>
      <h5>
        <button
          className="bg-blue-500 p-1 px-2 rounded-lg text-white m-4"
          onClick={() => {
            ref.current = ref.current+1
          }}
        >
          Ref Change
        </button>{ref.current}
      </h5>
    </div>
  );
};

export default DemoUseRef;
