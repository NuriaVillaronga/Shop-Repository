import React from 'react';
import Vista from '../Vista';

function ThreeColumnsView(props) {

  return (<div className='row' id="row-productos-all-3">
            <div className="col-12">
                <div className="row row-options-columna">
                    <div className="col-3 options-all-3">
                        <button type="button" className="filtro-principal" onClick={props.handleShow}><img src={props.filter}/> Mostrar filtro</button> 
                        <button type="button" className="filtro-principal-ocultar" onClick={props.handleClose}><img src={props.filter}/> Ocultar filtro</button> 
                    </div>
                    <Vista clase="col-3 options-all-3 options-3-2" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                    <Vista clase="col-3 options-all-3 options-3-1" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                    <Vista clase="col-3 options-all-3 options-3-3" handleColPred={props.handleColPred} handleColCuatro={props.handleColCuatro} handleColTres={props.handleColTres} handleColDos={props.handleColDos}/>
                </div>
            </div>
            {props.datos.map(props.showCell)}
        </div>);
}

export default ThreeColumnsView;
