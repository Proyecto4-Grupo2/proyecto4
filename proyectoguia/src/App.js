import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // importador de Bootstrap 
import Navbar from './components/Navbar';
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
      <Navbar />
      <Hero />
      <div>
			<ContenedorBotones>
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
				posicionModal={'end'}
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
					Accesibilidad
				</Contenido>
			</Modal>
		</div>
    </div>
  );
}

export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
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