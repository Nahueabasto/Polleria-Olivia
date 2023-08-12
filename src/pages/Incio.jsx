import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";

export default function Inicio(){
    return(
        <div>
            <div>
                <Navbar />
                </div>
                <HeroImg />
                {/* <div className="car-contenedor">
                 </div> */}
                <div>
                <Footer />
                </div>
        </div>
    )
} 