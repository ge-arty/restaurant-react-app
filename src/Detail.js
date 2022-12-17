import React from "react";

import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail";

export default function Detail(props) {
  let data = require("./Data.json");
  let { id } = useParams();
  return (
    <>
      {data.map((item, index) => {
        if (item.name === id) {
          return (
            <CardDetail
              name={item.name}
              image={item.image}
              description={item.description}
              changeStatus={() => props.changeStatus(item.name)}
              status={item.status}
              key={index}
            />
          );
        }
      })}
    </>
  );
}
