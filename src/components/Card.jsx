import React from "react";
//Estilos
import "./Card.css";

const Card = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="imagen" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          {/* <a href={props.view} className="btn">
            VER
          </a> */}
       
        </div>
      </div>
    </div>
  );
};

export default Card;