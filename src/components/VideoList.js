import React from "react";

// props destructured so props doesn't need to be referenced each time
const VideoList = ({ videos }) => {
  return <div>{videos.length}</div>;
};

export default VideoList;
