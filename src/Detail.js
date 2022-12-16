import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  let data = require("./Data.json");
  let { id } = useParams();
  return (
    <>
      {data.map((item) => {
        if (item.name === id) {
          return (
            <div className="detail-container">
              <h1 className="detail-name">{item.name}</h1>
              <div className="detail-info-box">
                <img src={item.image} alt="icon" className="detail-img" />
                <div className="detail-product-desc">
                  <p className="detail-description">{item.description}</p>
                  <div className="detail-buttons">
                    <button
                      disabled={item.status == "Added" ? true : false}
                      onClick={() => props.changeStatus(item.name)}
                      className="detail-add"
                    >
                      {item.status}
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
      })}
    </>
  );
}
