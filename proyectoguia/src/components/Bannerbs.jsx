import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importador de Bootstrap
import 'bootstrap' // Importa JS para BS

// Crea el banner en BS

function Bannerbs() {
  return  (
    <div className="bannerbs">
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>Proyecto Guía</h1>
        <p>Prueba de texto</p>    
      </div>
    </div>
  );
}
  
  
export default Bannerbs