import React from "react";
import "../style/Navbar.css";
import ModalF from "./ModalF.jsx";
import ModalN from "./ModalN.jsx";

function Navbar() {
    return (
      <div className='navbar'>
        <div className='logo-home'> 
          <img className="logo-principal" src={require("../imagenes/iconozapato_sinfondo.png")} alt="logo principal"/>
          <div className="texto-navbar">
            <h2>Culture Club</h2>
            <p>Cultura a pie de calle</p>
          </div>
        </div>
        <div className='nav-menu'>
          <img className='icono-lupa' alt="icono lupa" src={require("../imagenes/lupa_navbar.png")}/>
          <button className='nav-link'>Rutas</button>
          <button className='nav-link'>Mapa</button>
          <button className='nav-link'>Acerca de</button>
          <button className='nav-link'>Contacto
            <ModalF>
            </ModalF>
          </button>
         
          <img className='icono-accesibilidad' src={require("../imagenes/iconoaccesib.jpg")} alt="icono accesibilidad"/>
          <button className='suscribete'>Suscríbete
            <ModalN>
            </ModalN>
          </button>
        </div>
      </div>
    )
}


export default Navbar;

