import React, {Fragment} from 'react';
import Product from './Product';

function Vacio(props) {

  return (<Fragment>
            <div className='col-3 border columna columna-escondida' key={`vacio-${props.id}`}/>
            <div className='col-3 border columna' key={props.id}>{props.id}</div>
        </Fragment>);
}

export default Vacio;
