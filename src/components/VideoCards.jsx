import React from "react";
import Date from "../utils/date";
import { Link } from "react-router-dom";

const videoCards = ({ info }) => {
  const { id, snippet, statistics } = info;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
      <div className="cursor-pointer">
        <Link to={"/watch?v=" + id}>
          <img
            className="rounded-2xl w-full"
            src={thumbnails.high.url}
            alt="video"
          />
        </Link>
        <ul>
          <li className="font-bold">{title}</li>
          <li className="text-gray-700">{channelTitle}</li>
        </ul>
        <ul className="flex space-x-4 text-gray-600">
          <li>{statistics.viewCount} Views</li>
          <li>{Date(publishedAt)}</li>
        </ul>
      </div>
    </div>
  );
};

export default videoCards;
