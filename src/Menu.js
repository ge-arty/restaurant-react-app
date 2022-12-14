import React from "react";
import Card from "./Card";

export default function Menu(props) {
  let data = require("./Data.json");
  return (
    <div className="menu-container">
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
  );
}
