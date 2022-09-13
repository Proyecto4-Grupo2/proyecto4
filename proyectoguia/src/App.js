import React, {useState} from 'react';
import './App.css';
import Hero from './components/Hero';
import styled from 'styled-components';
import Modal from './components/Modal';
import Formulario from './components/Formulario';
import Newsletter from './components/Newsletter';

const App = () => {
	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [estadoModal2, cambiarEstadoModal2] = useState(false);
	const [estadoModal3, cambiarEstadoModal3] = useState(false);
	const [estadoModal4, cambiarEstadoModal4] = useState(false);
  return (
    <div className="App">
      <div className='navbar'>
        <div className='logo-home'> 
          <img className="logo-principal" src={require("./imagenes/iconozapato_sinfondo.png")} alt="logo principal"/>
          <div className="texto-navbar">
            <h2>Culture Club</h2>
            <p>Cultura a pie de calle</p>
        </div>
        <img className='icono-lupa' alt="icono lupa" src={require("./imagenes/lupa_navbar.png")}/>
        <ContenedorBotones>
          <Boton className='nav-link'>Rutas</Boton>
          <Boton className='nav-link'>Mapa</Boton>
          <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Acerca de</Boton>
          <Boton onClick={() => cambiarEstadoModal2(!estadoModal2)}>Contacto</Boton>
          <Boton onClick={() => cambiarEstadoModal3(!estadoModal3)}>Suscribete</Boton>
          <Boton onClick={() => cambiarEstadoModal4(!estadoModal4)}>Accesibilidad</Boton>
        </ContenedorBotones>

        {/* Modal #1 */}
        <Modal
          estado={estadoModal1}
          cambiarEstado={cambiarEstadoModal1}
          titulo="Acerca de"
          mostrarHeader={true}
          mostrarOverlay={true}
          posicionModal={'center'}
          padding={'20px'}
        >
          <Contenido>
            Quienes somos
            <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</Boton>
          </Contenido>
        </Modal>

        {/* Modal #2 */}
        <Modal
          estado={estadoModal2}
          cambiarEstado={cambiarEstadoModal2}
          titulo="Ventana 2!"
          mostrarHeader={false}
          mostrarOverlay={true}
          posicionModal={'center'}
          padding={'20px'}
        >
          <Contenido>
            <Formulario />
          </Contenido>
        </Modal>

        {/* Modal #3 */}
        <Modal
          estado={estadoModal3}
          cambiarEstado={cambiarEstadoModal3}
          titulo="Ventana 3!"
          mostrarHeader={false}
          mostrarOverlay={true}
          posicionModal={'start'}
          padding={'20px'}
        >
          <Contenido>
            <Newsletter />
          </Contenido>
        </Modal>

        {/* Modal #4 */}
        <Modal
          estado={estadoModal4}
          cambiarEstado={cambiarEstadoModal4}
          titulo="Ventana 4!"
          mostrarHeader={false}
          mostrarOverlay={true}
          posicionModal={'center'}
          padding={'0px'}
        >
          <Contenido>
            <p>CultureClub está comprometida con la accesibilidad de nuestro sitio web. 
Queremos que nuestra página puedan usarla todas las personas, sin importar cuáles sean sus impedimentos y qué tecnologías utilicen. Esto es parte de nuestra estrategia de igualdad diaria. 
Hemos hecho que el sitio sea lo más utilizable posible, teniendo en cuenta las directrices de accesibilidad web de las mejores prácticas, incluyendo WCAG 2.0, WCAG 2.1 
Pero es posible que tenga una mejor experiencia si cambia la configuración de su ordenador para que se adapte a sus necesidades individuales. </p>
          </Contenido>
        </Modal>
    </div>
    </div>
      <Hero />
    </div>
  );
}

export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: right;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
  height: 35px;
	border-radius: 100px;
	color: black;
	border: none;
	background: aqua;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
    }
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;