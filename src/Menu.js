import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Menu(props) {
  let data = require("./Data.json");
  const productArr = data;
  const [selected, setSelected] = useState("Default");
  function sortCards() {
    if (selected == "Default") {
      return data.map((element, index) => {
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
    } else if (selected == "High-low") {
      const sortedHighToLow = [...productArr];
      console.log(productArr == sortedHighToLow);
      sortedHighToLow.sort((a, b) => {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      });
      return sortedHighToLow.map((element, index) => {
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
    } else if (selected == "Low-high") {
      const sortedLowToHigh = [...productArr];
      sortedLowToHigh.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
      return sortedLowToHigh.map((element, index) => {
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
  }
  return (
    <div className="menu-container">
      <h2 className="menu-filter-text">Filtration:</h2>
      <div className="selection-container">
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option value="Default">Default</option>
          <option value="High-low">Price high to low</option>
          <option value="Low-high">Price low to high</option>
        </select>
      </div>
      <div className="menu-card-container">{sortCards()}</div>
    </div>
  );
}
