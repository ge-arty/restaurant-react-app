import React from "react";
import Card from "./Card";

export default function Menu(props) {
  let data = require("./Data.json");
  return (
    <div className="menu-container">
      <h2 className="menu-filter-text">Filtration:</h2>
      <div className="selection-container">
        <select>
          <option value="comming soon">comming soon</option>
          <option value="comming soon">comming soon</option>
        </select>
      </div>
      <div className="menu-card-container">
        {data.map((element, index) => {
          return (
            <Card
              key={index}
              name={element.name}
              src={element.image}
              description={element.description}
              price={element.price}
              status={element.status}
              changeStatus={() => props.changeStatus(element.name)}
            />
          );
        })}
      </div>
    </div>
  );
}
