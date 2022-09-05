// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa CSS para BS
import 'bootstrap'; // Importa JS para BS
import Modal from './components/Modalbs'; // Importa el componente Modal
import Banner from './components/Bannerbs'; // Importa el componente Banner
import Columns from './components/Columnsbs'; // Importa el componente Columns
import Scrollspy from './components/Scrollspybs'; // Importa el componentes Scrollspy
// import Cookies from './components/Cookies'; // Importa el componente Cookies

function App(){
  return (
      <div className="App">
        <Scrollspy /> <Banner /> <Columns /> <Modal /> 
      </div>
  );
}


export default App;
