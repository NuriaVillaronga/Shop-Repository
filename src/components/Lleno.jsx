import React from 'react';
import Product from './Product';
import { Fragment } from 'react';

function Lleno(props) {

  return (<Fragment>
              <div className="col-3 columna" key={`col-full-id${props.id}`}><Product figura="figura-pred"></Product></div>
              <div className="col-3 columna-4" key={`col4-full-id${props.id}`}><Product figura="figura-4"></Product></div>
              <div className="col-3 columna-3" key={`col3-full-id${props.id}`}><Product figura="figura-3"></Product></div>
              <div className="col-3 columna-2" key={`col2-full-id${props.id}`}><Product figura="figura-2"></Product></div>
          </Fragment>
        );
}

export default Lleno; 