import React from "react";
import Card from "./Card";

import grafiti from "../assets/grafiti.jpg";


const cards = [
  {
    id: 1,
    title: "Música",
    image: grafiti,
    url: "https://conciertos-clasica-madrid.com/?mec-events=sinfonico-01-ligeti-y-strauss"
  },
  {
    id: 2,
    title: "Teatro",
    image: grafiti,
    url: "https://conciertos-clasica-madrid.com/?mec-events=sinfonico-01-ligeti-y-strauss"
  },
  {
    id: 3,
    title: "Cine",
    image: grafiti,
    url: "https://conciertos-clasica-madrid.com/?mec-events=sinfonico-01-ligeti-y-strauss"
  }
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id}) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
