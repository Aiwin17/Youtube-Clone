import React from "react";

const shimmer = () => {
  const blocks = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-wrap my-16">
      {blocks.map((block, index) => (
        <div
          className="bg-gray-300 w-96 h-72 mx-5 my-2 rounded-lg"
          key={index}
        ></div>
      ))}
    </div>
  );
};

export default shimmer;
