import React, {useState} from "react";
import '../style/bonos.css';
import data from "../TemplateRutasAccesibles.json"; 



function RutasAccesibles() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <>
        <div className="templateContainer">
          <div className="textoRutas">
            <h1>Rutas culturales con propuestas accesibles</h1>
            <h3>Elige y agrega a favoritos para crear tu ruta accesible</h3>
        </div>
        <div className="iconosAccesibles">
            <img src={require("../imagenes/persona ciega.png")} alt="icono persona caminando con un baston" />
            <img src={require("../imagenes/Signo de lengua de signos.png")} alt="icono lengua de signos" />
        </div>
          <div className="template_Container">
            {
              data
                .map((val) => {
                  return(
                    <div className="template" key={val.id}>
                   
                    <img src={val.image} alt="" /> 
                    
                        <h4>{val.title}</h4>
                       
                        <p>{val.descripcion}</p>
                        <a href={val.enlace}> Ir a la web</a>
                    </div> 
                  )
                })
            }
          </div>
        </div>
      </>
    )
  }
   
  export default RutasAccesibles;