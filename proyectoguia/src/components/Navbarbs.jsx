import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // // Importa CSS para BS
import 'bootstrap' // Importa JS para BS

function Navbarbs() {
    return  (
        <body className="scrollspybs" data-spy="scroll" data-target=".navbar" data-offset="50">
            <div className="navbarbs">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <a className="navbar-brand" href="/public/index.html">WebSiteName</a>
                        </div>
                        <div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                            <li><a href="#section1">Section 1</a></li>
                            <li><a href="#section2">Section 2</a></li>
                            <li><a href="#section3">Section 3</a></li>
                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/public/index.html">Section 4 <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                <li><a href="#section41">Section 4-1</a></li>
                                <li><a href="#section42">Section 4-2</a></li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </nav>    
            </div>
        </body>
    )
}

export default Navbarbs