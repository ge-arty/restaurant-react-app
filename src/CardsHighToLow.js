import React from "react";
import Card from "./Card";

export default function CardsHighToLow() {
  let data = require("./Data.json");
  const sortedHighToLow = data;
  {
    sortedHighToLow.sort((a, b) => {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      return 0;
    });
    sortedHighToLow.map((element, index) => {
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
    });
  }

  return {};
}
