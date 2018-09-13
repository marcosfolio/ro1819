import React from "react";
import PlayersAPI from "../api";
import "./components.css";
import { Link } from "react-router-dom";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faClock, faSquare } from "@fortawesome/free-solid-svg-icons";

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
          <p className="card-text">
            <span>
              <FontAwesomeIcon icon={faFutbol} /> {u.goals}
            </span>
            <span className="m-l-10">
              <FontAwesomeIcon icon={faSquare} color="#f7ec28" />{" "}
              {u.yellowCards}
            </span>
            <span className="m-l-10">
              <FontAwesomeIcon icon={faSquare} color="red" /> {u.redCards}
            </span>
          </p>
          <p className="card-text">
            <FontAwesomeIcon icon={faClock} /> Minutos jugados: {u.minutes}
          </p>
          <p>Porcentaje min. jugados:</p>
          <div className="progressbar-container">
            <CircularProgressbar
              percentage={MinutesPercentage(u)}
              text={`${MinutesPercentage(u)}%`}
            />
          </div>
        </div>
        <div class="card-body">
          <Link className="btn btn-primary btn-ro" to={`${url}/${u.id}`}>
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
