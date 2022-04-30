import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import VideoCard from "./VideoCard";

const RelatedVideos = () => {
  const { videos } = useContext(AuthContext);
  const relatedVideos = videos
    .slice(1, 5)
    .map((video) => <VideoCard key={video.id} snippet={video.snippet} />);

  return (
    <div className="related-videos">
      <h2 className="header2">Related Videos</h2>
      <div className="related-div">{relatedVideos}</div>
    </div>
  );
};

export default RelatedVideos;
