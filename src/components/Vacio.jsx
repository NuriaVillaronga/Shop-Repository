import React, {Fragment} from 'react';
import Product from './Product';

function Vacio(props) {

  return (<Fragment>
            <div className={`col-3 columna ${props.vacio}`} key={`vacio-${props.id}`}/>
            <div className={`col-3 columna ${props.propiedad}`} key={props.id}><Product figura="figura-pred"></Product></div> 

            <div className={`col-3 columna-4 ${props.vacio}`} key={`vacio-${props.id}`}/>
            <div className={`col-3 columna-4 ${props.propiedad}`} key={props.id}><Product figura="figura-4"></Product></div> 

            <div className={`col-3 columna-3 ${props.vacio}`} key={`vacio-${props.id}`}/>
            <div className={`col-3 columna-3 ${props.propiedad}`} key={props.id}><Product figura="figura-3"></Product></div> 

            <div className={`col-3 columna-2 ${props.vacio}`} key={`vacio-${props.id}`}/>
            <div className={`col-3 columna-2 ${props.propiedad}`} key={props.id}><Product figura="figura-2"></Product></div> 
        </Fragment>);
}

export default Vacio;
