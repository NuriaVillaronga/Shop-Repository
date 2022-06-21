import React from 'react';
import Vista from '../Vista';

function FourColumnsView(props) {

  return (  <div className='row' id="container-products-4">
                <div className="col-12">
                    <div className="row row-options-columna">
                        <div className="col-3 options-all-4">
                            <button type="button" className="filtro-principal" onClick={props.handleShow}><img src={props.filter}/> Mostrar filtro</button>
                            <button type="button" className="filtro-principal-ocultar" onClick={props.handleClose}><img src={props.filter}/> Ocultar filtro</button>
                        </div>
                        <Vista clase="col-3 options-all-4 options-4-1" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                        <Vista clase="col-3 options-all-4 options-4-2" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                        <Vista clase="col-3 options-all-4 options-4-3" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                    </div>
                </div>
                {props.datos.map(props.showCell)}
            </div>);
}

export default FourColumnsView;