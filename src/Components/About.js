import React from "react";
import VideosAPI from "../video-api";

const mapVideos = url =>
  VideosAPI.all().map(v => (
    <div className="col-sm-4">
      <h1>{v.scorer}</h1>
      <p>{v.match}</p>
      <video width="100%" controls>
        <source src={v.videoUrl} type="video/mp4" />
        Tu navegador no soporta HTML5 Vídeo.
      </video>
    </div>
  ));

const About = ({ match }) => (
  <div className="container">
    <div classNmae="row">{mapVideos(match.url)}</div>
  </div>
);

export default About;
