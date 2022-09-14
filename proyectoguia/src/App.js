import React, {useState} from 'react';
import './App.css';
import Hero from './components/Hero';
import styled from 'styled-components';
import Modal from './components/Modal';
import Formulario from './components/Formulario';
import Newsletter from './components/Newsletter';
import Footerbs from './components/Footerbs';
import Rutas from './components/Rutas';
import Bonos from './components/Bonos';
import RutasAccesibles from './components/RutasAccesibles';

const App = () => {
  const [estadoModal5, cambiarEstadoModal5] = useState(true);
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
        </div>
        <ContenedorBotones>
          <Boton>Rutas</Boton>
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
          mostrarHeader={false}
          mostrarOverlay={true}
          posicionModal={'center'}
          padding={'20px'}
        >
          <Contenido>
            <h2>Conoce a cultureClub</h2>
      <h3> La misión de cultureClub</h3>
        <p> Pretendemos contribuir a la democratización de la cultura, facilitando el acceso a la información
          de atractivos culturales a través de la tecnología móvil.</p>
        <p>Queremos poner en valor la cultura a pie de calle, destacar todo tipo de atractivos que pueden ser 
          interesantes pero que quizás están ocultos o pasan desapercibidos.</p>
      <h3>Nuestra visión</h3>
      <p>Somos partidarios de movernos de forma responsable y poco contaminante siempre que sea 
        posible y eso incluye también la movilidad en nuestro tiempo de ocio y en los viajes. Por eso nos 
        gusta saber que otras empresas e instituciones van con nosotros de la mano para conseguir que 
        estos objetivos se cumplan. </p>

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
            <p className='texto-accesibilidad'>CultureClub está comprometida con la accesibilidad de nuestro sitio web. 
Queremos que nuestra página puedan usarla todas las personas, sin importar cuáles sean sus impedimentos y qué tecnologías utilicen. Esto es parte de nuestra estrategia de igualdad diaria. 
Hemos hecho que el sitio sea lo más utilizable posible, teniendo en cuenta las directrices de accesibilidad web de las mejores prácticas, incluyendo WCAG 2.0, WCAG 2.1 
Pero es posible que tenga una mejor experiencia si cambia la configuración de su ordenador para que se adapte a sus necesidades individuales. </p>
          </Contenido>
          </Modal>
         {/* Modal #5 */}
         <Modal
          estado={estadoModal5}
          cambiarEstado={cambiarEstadoModal5}
          titulo="Aviso Cookies"
          mostrarHeader={false}
          mostrarOverlay={true}
          posicionModal={'center'}
          padding={'20px'}
        >
          <Contenido>
            <div className="textoCookies">
           <h1>Aviso de Cookies</h1>
		<p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
		<p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
		<p>En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.</p>
		<p>Si tiene cualquier duda acerca de nuestra política de cookies, puede contactar con esta página web a través de nuestros canales de Contacto.</p>
            </div>
            <Boton onClick={() => cambiarEstadoModal5(!estadoModal5)}>Cerrar</Boton> 
          </Contenido>
        </Modal>
    </div>
      <Hero />
      <Rutas/> 
      <Bonos />
      <RutasAccesibles />
      <div className="redesSociales">
          <h3>¿QUÉ HAY EN MADRID?</h3>
          <p>Descubre rutas culturales</p>
          <p>Conoce a cultureClub</p>
          <p>Contactar con cultureClub</p>
          <p>Suscribete al club</p>
          <p>Misión y visión de cultureClub</p>
          <div className="iconosRRSS">
        <a href="https://www.instagram.com/">
            <img width= "80px" src={require("./imagenes/icono_de_instagram.png")} alt="icono instagran"/>
        </a>
        <a href="www.linkedin.com">
            <img width= "80px" src={require("./imagenes/linkedin_icono.png")} alt="icono Linkedin"/>
        </a>
        </div>
      </div>
      <Footerbs />
    </div>
  );
}

export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
  justify-items: end;
	gap: 15px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
  height: 45px;
	border-radius: 100px;
	color: black;
	border: none;
	background: aqua;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: yellow;
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