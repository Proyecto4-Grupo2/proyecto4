import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa CSS para BS
import 'bootstrap'; // Importa JS para BS


function Scrollspybs() {
    return  (
        <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                ...
                    <ul class="navbar-nav">
                        <li><a href="#section1">Section 1</a></li>
                    </ul>
            </nav>
 
            <div id="section1">
                <h1>Section 1</h1>
                    <p>Try to scroll this page and look at the navigation bar while scrolling!</p>
            </div>
                ...
 
        </body>
    )
}


export default Scrollspybs