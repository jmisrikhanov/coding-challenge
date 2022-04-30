import React, { useContext } from "react";
import VideoCard from "../components/VideoCard";
import { AuthContext } from "../context/AuthContext";

const Overview = () => {
  const { currentUser, videos } = useContext(AuthContext);
  const videoList = videos.map((video) => (
    <VideoCard
      key={video.id}
      snippet={video.snippet}
      currentUser={currentUser}
    />
  ));

  return (
    <>
      {currentUser ? (
        <div className="video-container">{videoList}</div>
      ) : (
        <div className="video-container">
          {" "}
          <h1 style={{ color: "black" }}>
            Please log in to browse videos...
          </h1>{" "}
        </div>
      )}
    </>
  );
};

export default Overview;
