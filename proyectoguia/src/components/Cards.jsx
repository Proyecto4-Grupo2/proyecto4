import React from 'react'
import '../estilo/cards.css';



function Cards(props){
    return(
        <div className='cardContainer'>
            <div className='cardConocenos'>
                    <img src={require(`../media/foto-${props.imagen}.jpeg`)} className="cardImagen" alt="foto personal del equipo"/>
                    <div className="cardBody">
                        <h5 className="cardTitle">{props.nombre}</h5>
                        <p className="cardText">{props.cargo}</p>
                    </div>
            </div>
        </div>
    )
}

export default Cards


