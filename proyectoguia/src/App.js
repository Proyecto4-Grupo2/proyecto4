// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // importador de Bootstrap 
import Formulario from './components/Formulario';
import Newsletter from './components/newsletter';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Formulario />
      <Newsletter />
      
    </div>
  );
}

export default App;
