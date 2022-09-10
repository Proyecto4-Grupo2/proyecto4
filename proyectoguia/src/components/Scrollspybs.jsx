import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa CSS para BS
import 'bootstrap' // Importa JS para BS

// Crea las columnas en BS

function Scrollspybs() {
  return  ( 

        <div className="scrollspybs">
            <div id="section1" className="container-fluid bg-success text-white" style="padding:100px 20px;">
                <h1>Section 1</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>

            <div id="section2" className="container-fluid bg-warning" style="padding:100px 20px;">
                <h1>Section 2</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>

            <div id="section3" className="container-fluid bg-secondary text-white" style="padding:100px 20px;">
                <h1>Section 3</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>
        </div>

)
}


export default Scrollspybs