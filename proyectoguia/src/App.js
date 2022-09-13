// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa CSS para BS
import 'bootstrap'; // Importa JS para BS
import Footerbs from './components/Footerbs'; // Importa el componente footer
import Cookies from './components/Cookies';
// import Avisocookies from './components/Avisocookies';
import Boton from './components/Boton';
import Popup from './components/Popup';


function App(){
    return (
      <div className="App">
        <Footerbs />
        <Cookies />
        <Boton />
        <Popup />
      </div>
    );

  
}


export default App