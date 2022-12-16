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
        className="view-btn"
      >
        View
      </button>

      <p className="card-price">price:{props.price}$</p>
      <button className="add-btn" onClick={() => props.changeStatus()}>
        Remove
      </button>
      <div className="added-card-quantity">
        <button
          className="quantity-btn"
          disabled={props.quantity == 1 ? true : false}
          onClick={props.removeQuantity}
        >
          -
        </button>
        <p className="quantity-title">Quantity:{props.quantity}</p>
        <button className="quantity-btn" onClick={props.addQuantity}>
          +
        </button>
      </div>
    </div>
  );
}
