import React from "react";
import { NavLink } from "react-router-dom";
export default function CardDetail(props) {
  return (
    <div className="detail-container">
      <h1 className="detail-name">{props.name}</h1>
      <div className="detail-info-box">
        <img src={props.image} alt="icon" className="detail-img" />
        <div className="detail-product-desc">
          <p className="detail-description">{props.description}</p>
          <div className="detail-buttons">
            <button
              disabled={props.status == "Added" ? true : false}
              onClick={props.changeStatus}
              className="detail-add"
            >
              {props.status}
            </button>
            <NavLink to="/menu">
              <button className="detail-add">Back to Menu</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
