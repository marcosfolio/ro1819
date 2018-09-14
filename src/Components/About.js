import React from "react";
import VideosAPI from "../video-api";

const mapVideos = url =>
  VideosAPI.all().map(v => (
    <div className="col-sm-4">
      <h1>Tejera</h1>
      <video width="100%" controls>
        <source src={v.videoUrl} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  ));

const About = ({ match }) => (
  <div className="container">
    <div classNmae="row">{mapVideos(match.url)}</div>
  </div>
);

export default About;
