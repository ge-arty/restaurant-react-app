import React from "react";
import { useNavigate } from "react-router-dom";
export default function Card(props) {
  let navigate = useNavigate();
  return (
    <div className="card-box">
      <img className="card-icon" src={props.src} alt="icon" />
      <h2 className="card-name">{props.name}</h2>
      <button
        onClick={() => navigate(`/menu/${props.name}`)}
        className="view-btn"
      >
        View
      </button>
      <p className="card-price">Price:{props.price}$</p>
      <button
        className="add-btn"
        disabled={props.status == "Added" ? true : false}
        onClick={() => props.changeStatus()}
      >
        {props.status}
      </button>
    </div>
  );
}
