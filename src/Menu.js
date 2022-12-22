import React, { useState } from "react";
import Card from "./Card";

export default function Menu(props) {
  let data = require("./Data.json");

  const productArr = data;
  const sortedHighToLow = [...productArr];
  const sortedLowToHigh = [...productArr];
  const [selected, setSelected] = useState("Default");
  const [category, setCategory] = useState("Default");
  function sortCards() {
    if (selected == "Default" && category == "Default") {
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
    } else if (selected == "High-low" && category == "Default") {
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
    } else if (selected == "Low-high" && category == "Default") {
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
    } else if (selected == "Default" && category == "Main-dish") {
      return data.map((element, index) => {
        if (element.category === "Main Dish") {
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
        }
      });
    } else if (selected == "High-low" && category == "Main-dish") {
      sortedHighToLow.sort((a, b) => {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      });
      return sortedHighToLow.map((element, index) => {
        if (element.category === "Main Dish") {
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
        }
      });
    } else if (selected == "Low-high" && category == "Main-dish") {
      sortedHighToLow.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
      return sortedHighToLow.map((element, index) => {
        if (element.category === "Main Dish") {
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
        }
      });
    } else if (selected == "Default" && category == "Side-dish") {
      return data.map((element, index) => {
        if (element.category === "Side Dish") {
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
        }
      });
    } else if (selected == "High-low" && category == "Side-dish") {
      sortedHighToLow.sort((a, b) => {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      });
      return sortedHighToLow.map((element, index) => {
        if (element.category === "Side Dish") {
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
        }
      });
    } else if (selected == "Low-high" && category == "Side-dish") {
      sortedHighToLow.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
      return sortedHighToLow.map((element, index) => {
        if (element.category === "Side Dish") {
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
        }
      });
    } else if (selected == "Default" && category == "Drinks") {
      return data.map((element, index) => {
        if (element.category === "Drinks") {
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
        }
      });
    } else if (selected == "High-low" && category == "Drinks") {
      sortedHighToLow.sort((a, b) => {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      });
      return sortedHighToLow.map((element, index) => {
        if (element.category === "Drinks") {
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
        }
      });
    } else if (selected == "Low-high" && category == "Drinks") {
      sortedHighToLow.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
      return sortedHighToLow.map((element, index) => {
        if (element.category === "Drinks") {
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
        }
      });
    } else if (selected == "Default" && category == "Dessert") {
      return data.map((element, index) => {
        if (element.category === "Dessert") {
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
        }
      });
    } else if (selected == "High-low" && category == "Dessert") {
      sortedHighToLow.sort((a, b) => {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      });
      return sortedHighToLow.map((element, index) => {
        if (element.category === "Dessert") {
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
        }
      });
    } else if (selected == "Low-high" && category == "Dessert") {
      sortedHighToLow.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
      return sortedHighToLow.map((element, index) => {
        if (element.category === "Dessert") {
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
        }
      });
    }
  }
  return (
    <div className="menu-container">
      <h2 className="menu-filter-text">Filtration:</h2>
      <div className="selection-container">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Default">Default</option>
          <option value="Main-dish">Main Dish</option>
          <option value="Side-dish">Side Dish</option>
          <option value="Drinks">Drinks</option>
          <option value="Dessert">Dessert</option>
        </select>
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
