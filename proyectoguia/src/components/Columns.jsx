import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // // Importa CSS para BS
import 'bootstrap' // Importa JS para BS

// Crea las columnas en BS

function Columns() {
  return  (
    <div className="columnsbs">
        <div className="container mt-5">
            <div className="row">
            <div className="col-sm-4">
                <h3>Column 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>

            <div className="col-sm-4">
                <h3>Column 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>

            <div className="col-sm-4">
                <h3>Column 3</h3>        
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
            </div>
        </div>
    </div>
  );
}
  
  
export default Columns