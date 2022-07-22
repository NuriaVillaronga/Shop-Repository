import React from 'react';
import { Fragment } from 'react';

function FilterButton(props) {

  return (<Fragment>
              <button type="button" className="filtro-principal" onClick={props.handleShow}>FILTROS</button>
          </Fragment>
        );
}

export default FilterButton; 