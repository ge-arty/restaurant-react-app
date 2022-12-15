import React from "react";
import Card from "./Card";
import photo from "../src/images/photo1.jpg";
import photo2 from "../src/images/photo2.jpg";
import photo3 from "../src/images/photo3.jpg";

export default function Home(props) {
  let data = require("./Data.json");
  function getRandomCards(arr, num) {
    const randomCards = [...arr].sort(() => 0.5 - Math.random());
    return randomCards.slice(0, num);
  }
  let RandomedCards = getRandomCards(data, 4);
  console.log(RandomedCards);
  return (
    <div className="home-container">
      <h2 className="home-main-title">Welcome To LOGO</h2>
      <div className="home-slider">
        <img src={photo} alt="photo" />
        <img src={photo2} alt="photo" />
        <img src={photo3} alt="photo" />
      </div>
      <h2 className="home-title">Most Popular</h2>
      <div className="random-cards">
        {RandomedCards.map((element, index) => {
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
