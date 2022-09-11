// import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap';

function App() {
  return (
    <div className="App">
      <Cards 
        imagen='ainara'
        nombre='Ainara Arbiol'
        cargo='Dto de programción y sistemas'/>
      <Cards 
        imagen='angelica'
        nombre='Angélica'
        cargo='Dto de programción y sistemas'/>
      <Cards 
        imagen='barbara'
        nombre='Bárbara Santano'
        cargo='Dto de programción y sistemas'/>
      <Cards 
        imagen='cristal'
        nombre='Cristal Lightbourn'
        cargo='Dto de programción y sistemas'/>
      <Cards 
        imagen='karina'
        nombre='Karina Perdomo'
        cargo='Dto de programción y sistemas'/>
      <Cards 
        imagen='marcela'
        nombre='Marcela Blanco'
        cargo='Dto de programción y sistemas'/>
        <Cards 
          imagen='maria'
          nombre='María Martínez'
          cargo='Dto de programción y sistemas'/>
    </div>
    
  );
}

export default App;
