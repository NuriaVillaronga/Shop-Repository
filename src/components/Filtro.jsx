import React from 'react';

function Filtro(props) {

  return (  
            <div className="col-2 col-filtros ">
                <div className="row">
                    <div className="col-12 tipo-col">{props.tipo}</div>
                </div>
                <div className="row">
                    {
                        props.arrayFiltros.map((valor) => (
                            <div className="col-12 filtro-concreto-col"><input type="checkbox" className="check-filtro" id={`check-${valor}`}/>{valor}</div>
                        ))
                    }
                </div>
            </div>
        );
}

export default Filtro; 