// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // importador de Bootstrap 
import Formulario from './components/Formulario';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Formulario />
    </div>
  );
}

export default App;
