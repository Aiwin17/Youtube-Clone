import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import Shimmer from "./shimmer";

const   VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      if (json && json.items && json.items.length > 0) {
        setVideos(json.items);
      } else {
        console.error("No videos found");
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="fixed top-20 bottom-0 overflow-y-scroll scrollable-hide">
      {videos.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap my-6 md:my-12 lg:my-16">
          {videos.map((video) => (
            <VideoCards info={video} key={video.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
