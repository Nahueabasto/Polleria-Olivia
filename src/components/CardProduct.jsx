import React from "react";
import ProductCard from "./Card";
import ProductCardData from "./ProductCardData";
//Estilos
import "./CardProduct.css";

const CardProduct = () => {
  return (
    <div className="CardProduct-container">
      <h1 className="project-heading">PRODUCTOS</h1>
      <div className="project-container">
        {ProductCardData.map((val, ind) => {
          return (
            <ProductCard
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

export default CardProduct;