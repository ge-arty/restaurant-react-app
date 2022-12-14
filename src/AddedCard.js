import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddedCard(props) {
  let navigate = useNavigate();
  return (
    <div className="card-box">
      <img className="card-icon" src={props.src} alt="icon" />
      <h2 className="card-name">{props.name}</h2>
      <button
        onClick={() => navigate(`/menu/${props.name}`)}
        className="card-see-more"
      >
        Click for details
      </button>
      <div className="card-purchase">
        <p className="card-price">price:{props.price}$</p>
        <button onClick={() => props.changeStatus()}>{props.status}</button>
      </div>
    </div>
  );
}
