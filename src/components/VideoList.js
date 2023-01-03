import React from "react";
import VideoItem from "./VideoItem";

// props destructured so props doesn't need to be referenced each time
const VideoList = ({ videos, onVideoSelect }) => {
  // for each video in videos, VideoItem component will be returned
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
