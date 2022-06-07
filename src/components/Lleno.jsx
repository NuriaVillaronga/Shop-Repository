import React from 'react';
import Product from './Product';

function Lleno(props) {

  return (<div className='col-3 border columna' key={props.id}>{props.id}</div>);
}

export default Lleno; 