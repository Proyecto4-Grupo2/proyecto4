// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa CSS para BS
import 'bootstrap'; // Importa JS para BS
import Modal from './components/Modal'; // Importa el componente Modal
import Banner from './components/Banner'; // Importa el componente Banner
import Columns from './components/Columns'; // Importa el componente Modal


function App(){
  return (
      <div className="App">
        <Banner /> <Columns /> <Modal /> 
      </div>
  );
}


export default App;
