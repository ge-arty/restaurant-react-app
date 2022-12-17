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
import Detail from "./Detail";
import { useState } from "react";

function App() {
  let data = require("./Data.json");
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  function removeQuantity(id, price) {
    setTotalItems(totalItems - 1);
    setTotal(total * 1 - price * 1);
    let prodQuantity = data.find((item) => {
      return item.id === id;
    });
    if (prodQuantity.quantity > 1) {
      prodQuantity.quantity -= 1;
    }
  }
  function addQuantity(id, price) {
    setTotalItems(totalItems + 1);
    setTotal(price * 1 + total * 1);
    let prodQuantity = data.find((item) => {
      return item.id === id;
    });
    prodQuantity.quantity += 1;
  }
  function removeAll() {
    data.forEach((item) => {
      item.status = "Add to cart";
    });
    setCounter(0);
    setTotal(0);
    setTotalItems(0);
  }
  function changeStatus(name) {
    let card = data.find((element) => element.name == name);

    if (card.status == "Add to cart") {
      return (
        ((card.status = "Added"), (card.quantity = 1)),
        setCounter(counter + 1),
        setTotalItems(totalItems + 1),
        setTotal(card.price * 1 + total * 1)
      );
    } else {
      return (
        (card.status = "Add to cart"),
        setCounter(counter - 1),
        setTotalItems(totalItems - card.quantity),
        setTotal(total - card.price * card.quantity)
      );
    }
  }

  return (
    <div className="app">
      <Header counter={counter} />
      <Routes>
        <Route
          path="/restaurant-react-app"
          element={<Home changeStatus={changeStatus} />}
        />
        <Route path="/menu" element={<Menu changeStatus={changeStatus} />} />
        <Route
          path="/menu/:id"
          element={<Detail changeStatus={changeStatus} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              removeAll={removeAll}
              changeStatus={changeStatus}
              total={total}
              totalItems={totalItems}
              counter={counter}
              addQuantity={addQuantity}
              removeQuantity={removeQuantity}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
