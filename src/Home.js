import React, { useState } from "react";
import Card from "./Card";

export default function Home(props) {
  let data = require("./Data.json");
  function getRandomCards(arr, num) {
    const randomCards = [...arr].sort(() => 0.5 - Math.random());
    return randomCards.slice(0, num);
  }
  let shuffledCards = getRandomCards(data, 4);
  return (
    <div className="home-container">
      <div className="home-slider"></div>
      <h2 className="home-title">Most Popular</h2>
      <div className="random-cards">
        {shuffledCards.map((element, index) => {
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
