import React from "react";
import PlayersAPI from "../api";
import { Link } from "react-router-dom";

const Profile = ({
  match: {
    params: { id }
  }
}) => {
  const user = PlayersAPI.get(parseInt(id));
  if (!user) {
    return <div>Lo sentimos, el jugador no fue encontrado</div>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>
        Dorsal:
        {user.dorsal}
      </h2>
      <h2>
        Goles:
        {user.goals}
      </h2>
      <video width="400" controls>
        <source src={user.playerVideoUrl} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <Link to="/users">Volver</Link>
    </div>
  );
};

export default Profile;
