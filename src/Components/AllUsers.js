import React from "react";
import PlayersAPI from "../api";
import "./components.css";
import { Link } from "react-router-dom";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MinutesPercentage(u) {
  var num = (u.minutes / 360) * 100;
  return num.toFixed(2);
}

const mapUser = url =>
  PlayersAPI.all().map(u => (
    <div className="col-md-3 float-left" key={u.id}>
      <div className="card">
        <img class="card-img-top" src={u.playerUrl} alt={u.name} />
        <div className="card-body">
          <h5 className="card-title">
            {u.dorsal}- {u.name}
          </h5>
          <p className="card-text">Goles: {u.goals}</p>
          <p className="card-text">Minutos jugados: {u.minutes}</p>
          <p>Porcentaje: {MinutesPercentage(u)}%</p>
          <div className="progressbar-container">
            <CircularProgressbar
              percentage={MinutesPercentage(u)}
              text={`${MinutesPercentage(u)}%`}
            />
          </div>
        </div>
        <div class="card-body">
          <Link className="btn btn-primary" to={`${url}/${u.id}`}>
            Ver ficha del jugador
          </Link>
        </div>
      </div>
    </div>
  ));

const AllUsers = ({ match }) => (
  <div className="container">
    <div classNmae="row">{mapUser(match.url)}</div>
  </div>
);

export default AllUsers;
