import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ snippet }) => {
  const { thumbnails, resourceId, title } = snippet;
  return (
    <div className="video">
      <Link to={`/video/${resourceId.videoId}`} className="link-tag">
        <img src={thumbnails.high.url} alt="video-poster" />
        <div className="video-info">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
