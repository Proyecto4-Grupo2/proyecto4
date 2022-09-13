import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa CSS para BS
import 'bootstrap'; // Importa JS para BS




function Footerbs() {
    return (
        <footer className="footerbs m-5">
            <div className="container-align-item: center">
                <div class="row">
                    <div className="col-sm-12 col-md-1">
                        <img width= "100px" src={require("../asset/img/logo_amarillo_grande.jpeg")} alt="Logo Culture Club con zapato amarillo junto a un punto en el mapa" />
                    </div>

                    <div className="col-sm-12 col-md-10">
                        <p>©2022 CultureClub | Todos los derechos reservados</p>
                        <p>Terminos de servicio | Política de privacidad y cookies</p>
                    </div>

                    <div className="col-sm-12 col-md-1 px-1">
                        <img width="100px" src={require("../asset/img/flecha_amarilla_arriba.jpeg")} alt="Flecha indicando como llega arriba en la página web" />
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footerbs