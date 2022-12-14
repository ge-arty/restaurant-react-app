import React from "react";
import AddedCard from "./AddedCard";

export default function Cart(props) {
  let data = require("./Data.json");
  return (
    <div>
      {data.map((element) => {
        if (element.status === "Added") {
          return (
            <AddedCard
              name={element.name}
              src={element.image}
              price={element.price}
              status={element.status}
              changeStatus={() => props.changeStatus(element.name)}
            />
          );
        }
      })}
    </div>
  );
}
