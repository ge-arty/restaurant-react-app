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
  function changeStatus(name) {
    let array = data.find((element) => {
      return element.name == name;
    });
    console.log(array);
    if (array.status == "Add to cart") {
      return (array.status = "Added"), setCounter(counter + 1);
    } else {
      return (array.status = "Add to cart"), setCounter(counter - 1);
    }
  }

  return (
    <div className="app">
      <Header counter={counter} />
      <Routes>
        <Route path="/" element={<Home changeStatus={changeStatus} />} />
        <Route path="/menu" element={<Menu changeStatus={changeStatus} />} />
        <Route path="/menu/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart changeStatus={changeStatus} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
