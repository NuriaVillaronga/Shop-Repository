import React from 'react';
import Product from './Product';

function Lleno(props) {

  return (<div className={`col-3 columna ${props.propiedad}`} key={props.id}><Product></Product></div>);
}

export default Lleno; 