// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // importador de Bootstrap 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Botton from './components/Botton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <botton />
    </div>
  );
}

export default App;
