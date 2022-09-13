import React from 'react';

import './cardequipo.css';


 function CardEquipo( {imageSource, title, text}) {
    return (
      <div className="card text-center bg-dark col-6">
        <img className="mw-50 " src={imageSource} alt="imagen" />
        <div className="card-body">
          <h4 className="card-title text-info">{title}</h4>
          <p className="card-text text-warning">{text}</p>
        </div>
      </div>
    )
}

export default CardEquipo;