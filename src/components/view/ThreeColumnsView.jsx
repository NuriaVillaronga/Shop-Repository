import React from 'react';
import Vista from './Vista';
import FilterButton from '../filter/FilterButton';

function ThreeColumnsView(props) {

  return (<div className='row' id="container-products-3"> 
            <div className="col-12">
                <div className="row row-options-columna">
                    <div className="col-3 options-products-3"><FilterButton handleClose={props.handleClose} handleShow={props.handleShow}/></div>
                    <Vista clase="col-3 options-products-3 options-3-1" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                    <Vista clase="col-3 options-products-3 options-3-2" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                    <Vista clase="col-3 options-products-3 options-3-3" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                </div>
            </div>
            {props.datos.map(props.showCell)}
        </div>);
}

export default ThreeColumnsView;
