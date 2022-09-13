import React from 'react';
import CardEquipo from './CardEquipo';

import fotoAinara from '../assets/fotoAinara.jpeg'
import fotoAngelica from '../assets/fotoAngelica.jpeg'
import fotoBarbara from '../assets/fotoBarbara.jpeg'
import fotoCristal from '../assets/fotoCristal.jpeg'
import fotoKarina from '../assets/fotoKarina.jpeg'
import fotoMarcela from '../assets/fotoMarcela.jpeg'
import fotoMaria from '../assets/fotoMaria.jpeg'


const cards = [
    {
        id:1,
        image:fotoAinara,
        title:'Ainara Arbiol',
        text:'Dpto. de programación y sistemas'
    },
    {
        id:2,
        image:fotoAngelica,
        title:'Angélica Carvallo',
        text:'Dpto. de marketing'
    },
    {
        id:3,
        image:fotoBarbara,
        title:'Bárbara Santano',
        text:'Dpto. de programación'
    },   
    {
        id:4,
        image:fotoCristal,
        title:'Cristal Lightbourn',
        text:'Dpto. de programación y sistemas'
    },
    {
        id:5,
        image:fotoKarina,
        title:'Karina Perdomo',
        text:'Dpto. de programación y diseño'
    },
    {
        id:6,
        image:fotoMarcela,
        title:'Marcela Blanco',
        text:'Dpto. de programación'
    },
    {
        id:7,
        image:fotoMaria,
        title:'María Martínez',
        text:'Dpto. de marketing y desarrollo CEO' 
    },
];

function CardsEquipo() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 bg-dark">
        <div className="row">
            {cards.map(({ image, title, text, id}) => (
                <div className="col-md-4" key={id}>
                    <CardEquipo imageSource={image} title={title} text={text}/>
                </div>
            ))}
        </div>  
    </div>
  );
}

export default CardsEquipo;