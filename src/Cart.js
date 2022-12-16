import React from "react";
import AddedCard from "./AddedCard";

export default function Cart(props) {
  let data = require("./Data.json");
  return (
    <div className="cart-container">
      <h2 className="cart-title">In your Cart:</h2>
      <div className="cart-info">
        <div className="cart-title-box">
          <h2 className="cart-total-title">Total price:{props.total}$</h2>
          <h2 className="cart-total-title">Total items:{props.totalItems}</h2>
        </div>
        <button className="detail-add" onClick={() => props.removeAll()}>
          Remove All
        </button>
      </div>
      <div className="added-card-container">
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
    </div>
  );
}
