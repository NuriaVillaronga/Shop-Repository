import React, {Fragment} from 'react';
import Product from './Product';

function Vacio(props) {

  return (<Fragment>
            <div className={`col-3 columna ${props.vacio}`} key={`vacio-${props.id}`}/>
            <div className={`col-3 columna ${props.propiedad}`} key={props.id}><Product></Product></div> 
        </Fragment>);
}

export default Vacio;
