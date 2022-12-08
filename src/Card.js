import React from "react";
export default function Card(props) {
  return (
    <div className="card-box">
      <img className="card-icon" src={props.src} alt="icon" />
      <h2 className="card-name">{props.name}</h2>
      <button className="card-see-more">Click for details</button>
      <div className="card-purchase">
        <p className="card-price">price:{props.price}$</p>
        <button onClick={props.changeStatus}>{props.status}</button>
      </div>
    </div>
  );
}
