import React from 'react';
import FilterButton from '../filter/FilterButton';
import Vista from './Vista';

function TwoColumnsView(props) {

  return (  
            <div className='row' id="container-products-2">
                <div className="col-12">
                    <div className="row row-options-columna">
                        <div className="col-3 options-products-2"><FilterButton handleClose={props.handleClose} handleShow={props.handleShow}/></div>
                        <Vista clase="col-3 options-products-2 options-2-1" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                    </div>
                </div>
                {props.datos.map(props.showCell)}
            </div>
        );
}

export default TwoColumnsView;
