import React from "react";
import { useState } from "react";
import BMW1 from "../../Img/bmw1.jpg";
import BMW2 from "../../Img/bmw2.jpg";
import BMW3 from "../../Img/bmw3.jpg";
import BMW4 from "../../Img/bmw4.jpg";
import { More } from "./more";

const arr = [
  {
    id: 1,
    name: "BMW",
    firma: "Motorcycle1",
    url: BMW1,
    price: "$2999",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 2,
    name: "BMW",
    firma: "Motorcycle1",
    url: BMW2,
    price: "$2999",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 3,
    name: "BMW",
    firma: "Motorcycle1",
    url: BMW3,
    price: "$2999",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 4,
    name: "BMW",
    firma: "Motorcycle1",
    url: BMW4,
    price: "$2999",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 5,
    name: "BMW",
    firma: "Motorcycle1",
    url: BMW4,
    price: "$2999",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    id: 6,
    name: "BMW",
    firma: "Motorcycle1",
    url: BMW4,
    price: "$2999",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
];

export let Page7 = () => {
  const arre = arr.map((item) => {
    return (
      <div>
        <More
          name={item.name}
          firma={item.firma}
          url={item.url}
          text={item.text}
          price={item.price}
          key={item.id}
        />
      </div>
    );
  });

  return (
    <div>
      <div>{arre}</div>
    </div>
  );
};
