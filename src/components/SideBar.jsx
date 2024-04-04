import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return isMenuOpen ? (
    <div className="flex-col p-10 py-32 fixed left-0 bottom-0 top-0 bg-white">
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <div className="py-5">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <div className="py-5">
        <h1 className="font-bold">Watch Later</h1>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
    </div>
  ) : null;
};

export default SideBar;
