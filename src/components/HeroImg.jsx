import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "./HeroImg.css"
//import ProUno from "../img/pata.jpg";
import img from "../img/Slider-1.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={img} alt="Imagen de computadora" />
      </div>
      <div className="content">
        <p>!Bienvenido a polleria olivia!</p>
        <h1>Encontrá acá los mejores productos!</h1>
      </div>
    </div>
  );
};

export default HeroImg;