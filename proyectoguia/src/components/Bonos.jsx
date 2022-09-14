import React, {useState} from "react";
import '../style/bonos.css';
import data from "../TemplateBonos.json";



function Bonos() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <>
        
        <div className="templateContainer">
          <div className="textoRutas">
            <h1>Bonos culturales</h1>
            <h3>Te ofrecemos paquetes coordinados y listos para que los disfrutes</h3>
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
   
  export default Bonos;