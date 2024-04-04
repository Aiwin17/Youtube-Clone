import React from "react";

const commentsContainer = ({ info }) => {
  const { name, comment } = info;
  return (
    <>
      <div className="bg-gray-200 mt-2">
        <div className="flex space-x-2 p-2">
          <img
            className="h-6 cursor-pointer"
            src=""
            alt="user"
          />
          <span>{name}</span>
        </div>
        <div className="mx-10">{comment}</div>
      </div>
    </>
  );
};

export default commentsContainer;
