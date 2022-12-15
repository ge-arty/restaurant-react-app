import React from "react";

import { useParams } from "react-router-dom";

export default function Detail() {
  let data = require("./Data.json");
  let { id } = useParams();
  return (
    <div className="detail-box">
      {data.map((item, index) => {
        if (item.name === id) {
          return <h1 key={index}>{item.name}</h1>;
        }
      })}
    </div>
  );
}
