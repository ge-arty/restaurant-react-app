import React, { useState } from "react";
import Card from "./Card";

export default function Home(props) {
  let shuffledCards = props.getRandomCards;
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
