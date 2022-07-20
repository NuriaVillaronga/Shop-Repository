import React from 'react';
import { Fragment } from 'react';
import imgFilter from '../../icons/filter.png';

function FilterButton(props) {

  return (<Fragment>
              <button type="button" className="filtro-principal" onClick={props.handleShow}><img src={imgFilter}/> Filtros</button>
          </Fragment>
        );
}

export default FilterButton; 