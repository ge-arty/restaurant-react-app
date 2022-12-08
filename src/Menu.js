import React from "react";
import Card from "./Card";

export default function Menu(props) {
  return (
    <div className="menu-container">
      {props.array.map((element, index) => {
        return (
          <Card
            key={index}
            name={element.name}
            src={element.image}
            description={element.description}
            price={element.price}
          />
        );
      })}
    </div>
  );
}
