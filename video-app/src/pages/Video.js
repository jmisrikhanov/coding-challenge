import React from "react";
import Comments from "../components/Comments";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { useParams } from "react-router-dom";
import RelatedVideos from "../components/RelatedVideos";

const Video = () => {
  const { id } = useParams();

  return (
    <div>
      <YoutubeEmbed embedId={id} />
      <Comments />
      <RelatedVideos />
    </div>
  );
};

export default Video;
