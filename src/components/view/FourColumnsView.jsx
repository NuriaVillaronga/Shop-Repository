import React from 'react';
import Vista from './Vista';
import FilterButton from '../filter/FilterButton';

function FourColumnsView(props) {

  return (  <div className='row' id="container-products-4">
                <div className="col-12">
                    <div className="row container-options">
                        <div className="col-3 options-products-4"><FilterButton handleClose={props.handleClose} handleShow={props.handleShow}/></div>
                        <Vista clase="col-3 options-products-4 options-4-1" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                        <Vista clase="col-3 options-products-4 options-4-2" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                        <Vista clase="col-3 options-products-4 options-4-3" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                    </div>
                </div>
                {props.datos.map(props.showCell)}
            </div>);
}

export default FourColumnsView;