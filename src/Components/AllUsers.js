import React from "react";
import UsersAPI from "../api";
import "./components.css";
import { Link } from "react-router-dom";

const mapUser = url =>
  UsersAPI.all().map(u => (
    <div className="col-md-3 float-left" key={u.id}>
      <div className="card">
        <img class="card-img-top" src={u.playerUrl} alt={u.name} />
        <div className="card-body">
          <h5 className="card-title">
            {u.dorsal}- {u.name}
          </h5>
          <p class="card-text">Goles: {u.goals}</p>
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
