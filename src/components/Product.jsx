import React from 'react';
import { Figure } from 'react-bootstrap';
import imagen from '../camiseta.jpg'

function Product() {
  return (
        <Figure>
            <Figure.Image
                width={290}
                alt="171x180"
                src={imagen}
            />
            <Figure.Caption>
                    <div className='col-12 border'>TITULO</div>
                    <div className='col-12 border'>Descripcion breve</div>
                    <div className='col-12 border'>Precio</div>
                    <div className='col-12 border'>Botón</div>
            </Figure.Caption>
        </Figure>
  );
}

export default Product;