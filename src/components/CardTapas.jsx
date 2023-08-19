import React from "react";
import Card from "./Card";
import PastasCardData from "./PastasCardData";
//Estilos
import "./CardProduct.css";

const CardTapas = () => {
  return (
    <div className="CardProduct-container">
      <h1 className="project-heading">Pastas</h1>
      <div className="project-container">
        {PastasCardData.map((val, ind) => {
          return (
            <Card
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardTapas;