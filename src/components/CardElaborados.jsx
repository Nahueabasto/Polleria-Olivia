import React from "react";
import Card from "./Card";
import ElaboradosCardData from "./ElaboradosCardData";
//Estilos
import "./CardProduct.css";

const CardElaborados = () => {
  return (
    <div className="CardProduct-container">
      <h1 className="project-heading">Elaborados</h1>
      <div className="project-container">
        {ElaboradosCardData.map((val, ind) => {
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

export default CardElaborados;