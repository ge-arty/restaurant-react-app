import React from "react";
import AddedCard from "./AddedCard";

export default function Cart(props) {
  let data = require("./Data.json");
  return (
    <div>
      <button onClick={() => props.removeAll()}>Remove All</button>
      <h1>
        Total price:{props.total}$ Total items:{props.totalItems}
      </h1>
      {data.map((element, index) => {
        if (element.status === "Added") {
          return (
            <AddedCard
              key={index}
              name={element.name}
              src={element.image}
              price={element.price}
              status={element.status}
              changeStatus={() => props.changeStatus(element.name)}
              addQuantity={() => props.addQuantity(element.id, element.price)}
              removeQuantity={() =>
                props.removeQuantity(element.id, element.price)
              }
              quantity={element.quantity}
            />
          );
        }
      })}
    </div>
  );
}
