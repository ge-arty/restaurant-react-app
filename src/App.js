import "./reset/reset.css";
import "./App.css";
import "./card.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  let data = require("./Data.json");
  const [clicked, setClicked] = useState("null");
  const [dataState, setDataState] = useState(data);

  function getRandomCards(arr, num) {
    const randomCards = [...arr].sort(() => 0.5 - Math.random());
    return randomCards.slice(0, num);
  }

  function changeStatus(name) {
    console.log(name);
    dataState.map((element) => {
      if (element.name == name) {
        element.status = "remove from cart";
        console.log(true);
      } else {
        element.status = "add to cart";
        console.log(false);
      }
    });
  }
  console.log(clicked);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          index
          element={
            <Home
              getRandomCards={getRandomCards(dataState, 4)}
              changeStatus={changeStatus}
              clicked={clicked}
            />
          }
        />
        <Route
          path="restaurant-react-app/#/menu"
          element={<Menu array={dataState} />}
        />
        <Route path="restaurant-react-app/#/contact" element={<Contact />} />
        <Route path="restaurant-react-app/#/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
