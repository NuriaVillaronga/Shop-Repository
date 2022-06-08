import React from 'react';
import { Figure } from 'react-bootstrap';
import imagen from '../camiseta.jpg';
import { Picture, FullsizePicture } from "react-responsive-picture";

function Product() {
  return (
        <Figure>
            <Figure.Image
                src={imagen}
            />
            <Figure.Caption>
                    <div className='col-12'>TITULO</div>
                    <div className='col-12'>Descripcion breve</div>
                    <div className='col-12'>Precio</div>
                    <div className='col-12'>Botón</div> 
            </Figure.Caption>
        </Figure>
  );
}

export default Product;