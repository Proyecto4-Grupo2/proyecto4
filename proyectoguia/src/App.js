import logo from './logo.svg';
import React from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa CSS para BS
import 'bootstrap'; // Importa JS para BS
import Modalbs from './components/Modalbs'; // Importa el componente Modal
// import Bannerbs from './components/Bannerbs'; // Importa el componente Banner
// import Columnsbs from './components/Columnsbs'; // Importa el componente Columns// import logo from './logo.svg';
// import Cookies from './components/Cookies'; // Importa el componente Cookies
import Footerbs from './components/Footerbs'; // Importa el componente footer 
import Imagenesfooter './asset/img';


function App(){
  return (
      <div className="App">
        <Modalbs />
        <Footerbs />
      </div>
  );
}


export default App;