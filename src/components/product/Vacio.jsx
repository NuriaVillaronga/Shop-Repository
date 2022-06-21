import React, {Fragment} from 'react';
import Product from './Product';

function Vacio(props) {

  return (<Fragment>
            <div className={`col-3 products-default ${props.vacio}`} key={`col-empty-id${props.id}`}/>
            <div className={`col-3 products-default ${props.propiedad}`} key={`col-empty-moved-id${props.id}`}><Product figura="figura-pred"></Product></div> 
        </Fragment>);
}

export default Vacio;
