import React from "react";

const Button = ({ name }) => {
  return (
    <>
      {name.map((value, index) => (
        <button key={index} className="m-4 px-4 py-2 bg-gray-200 rounded-lg">
          {value}
        </button>
      ))}
    </>
  );
};

export default Button;
