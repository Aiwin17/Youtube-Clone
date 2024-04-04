import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const searchCache = useSelector((state) => state.search);



  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchQuery(searchCache[searchQuery]);
      } else {
        getSearchSuggetions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between bg-white p-4 sticky top-0 z-10 ">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src=""
          alt="menu"
        />
        <img
          className="h-8 mx-7 cursor-pointer"
          src=""
          alt="logo"
        />
      </div>
      <div className="max-md:hidden">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-96 border border-gray-400 p-1 rounded-l-full"
        />
        <button className="border border-gray-400 rounded-r-full p-1">
          Search
        </button>
      </div>
      <div className="max-md:hidden">
        <img
          className="h-8 cursor-pointer"
          src=""
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
