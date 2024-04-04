import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const List = [
  "All",
  "Gamings",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentine",
];

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`flex fixed top-20 right-0 left-52 bg-white z-10 overflow-x-auto scrollable-hide left-${
        isMenuOpen ? "54" : "0"
      }`}
    >
      <Button name={List} />
    </div>
  );
};

export default ButtonList;
