import React from "react";
import "../style/Hero.css"

function Hero() {
    return(
    <div className="Hero">
        <div className="grupo-imagen">
            <img className="foto-hero" src={require("../imagenes/lavapies_imagen_recortada.png")} alt="pintura urbana en calle de Madrid" />
            <button className="texto-principal-hero">RUTAS CULTURALES ACCESIBLES</button>
        </div>
        <div className="contenedor-texto-hero">
            <p className="texto-debajo-hero">Sigue las <a href="www.google.com">mejores rutas</a> o crea tu <a href="www.google.com">propio itinerario cultural</a></p>
            <p className="texto-Madrid">MADRID CULTURAL A PIE DE CALLE</p>
        </div>
    </div>
)}

export default Hero;