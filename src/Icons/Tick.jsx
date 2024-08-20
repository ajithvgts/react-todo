import React from "react";

const Tick = (props) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title />
      <g id="Complete">
        <g id="tick">
          <polyline
            fill="none"
            points="3.7 14.3 9.6 19 20.3 5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  );
};

export default Tick;
