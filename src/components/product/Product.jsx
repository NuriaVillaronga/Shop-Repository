import React from 'react';
import { Figure } from 'react-bootstrap';
import imagen from '../../camiseta.jpg';

function Product(props) {
  return (
        <Figure className={props.figura}>
            <Figure.Image src={imagen}/>
            <Figure.Caption>
                    <div className='col-12'>TITULO</div>
                    <div className='col-12' id="descripcion">Descripcion breve</div>
                    <div className='col-12'>Precio</div>
            </Figure.Caption>
        </Figure>
  );
}

export default Product;