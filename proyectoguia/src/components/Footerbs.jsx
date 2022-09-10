import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa CSS para BS
import 'bootstrap'; // Importa JS para BS
import logo from './logo_amarillo_grande.png';


function Footerbs () {
    return (
        <footer className="footerbs">
            <div className="container mt-5">
            <div className="row">
            <div className="col-sm-2">
                <img src="./logo_amarillo_grande.png" />
            </div>

            <div className="col-sm-8">
                <p>©2022 CultureClub | Todos los derechos reservados</p>
                <p>Terminos de servicio | Política de privacidad y cookies</p>
            </div>

            <div className="col-sm-2">
                <img src="src/img/iconos/flecha_para_arriba_amarillo.png" />
            </div>
            </div>
            </div>
        </footer>
    );
}






export default Footerbs