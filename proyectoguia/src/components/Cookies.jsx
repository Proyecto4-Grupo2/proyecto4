import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // // Importa CSS para BS
import 'bootstrap' // Importa JS para BS


function Cookies(){
    return (
        <div className="aviso-cookies activo" id="aviso-cookies">
            <img className="galleta" src={require("../asset/img/cookie.svg")} alt="Galleta"></img>
            <h2 className="titulo">Cookies</h2>
            <p className="parrafo">Utilizamos cookies propias y de terceros para una mejora en nuestros servicios</p>
            <a className="enlace" href="../public/avisocookies.html">Aviso de cookies</a>
            <div className="fondo-aviso-cookies activo" id="fondo-aviso-cookies"></div>
        </div>
    )
}    
        

export default Cookies

