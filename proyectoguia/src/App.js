import React, {useState} from "react";
import './style.css';
import data from "./TemplateData.json";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Busqueda..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm === ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }else if(val.distrito.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }else if(val.address.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val; 
                  
                }})
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                 
                  <img src={val.image} alt="" /> 
                  
                      <h3>{val.title}</h3>
                     
                      <p>Dirección: {val.address}</p>
                    
                      <p>Distrito: {val.distrito}</p>
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

export default App;

