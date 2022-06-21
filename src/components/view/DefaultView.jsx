import React from 'react';
import Vista from './Vista';
import FilterButton from '../filter/FilterButton';

function DefaultView(props) {

    return (    <div className='row' id="container-products-default"> 
                    <div className="col-12">
                        <div className="row container-options">
                            <div className="col-3 options-products-default"><FilterButton handleClose={props.handleClose} handleShow={props.handleShow}/></div>
                            <Vista clase="col-3 options-products-default options-default-1" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                            <Vista clase="col-3 options-products-default options-default-2" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                            <Vista clase="col-3 options-products-default options-default-3" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                        </div>
                    </div>
                    {props.datos.map(props.showCell)}
                </div>
            );
}

export default DefaultView;