import React from 'react';
import Filtro from './Filtro';
import { Offcanvas } from 'react-bootstrap';
import FiltroPrecio from './FiltroPrecio';

function TablaFiltros(props) {

    const arrayProductos = [ "VESTIDOS", "ABRIGOS", "SUDADERAS", "CAMISETAS", "CHAQUETAS", "PANTALONES", "FALDAS", "TOPS", "CALZADO", "BOLSOS", "ACCESORIOS" ];                 
    const arrayMarca = [ "For Love & Lemons", "Aniye By", "Punk void", "Marina Eeirre", "SKETCH-Y", "Heimat Atlántica" ];
    const arrayPrecio = [ "€0.00 - €125.00", "€125.00 - €245.00", "€245.00 - €390.00", "€390.00+" ];
    const arrayTalla = [ "XS", "S", "M", "L", "XL" ];
    const arrayPantalon = [ "34", "36", "38", "40" ];
    const arrayCalzado = [ "37", "38", "38.5", "39", "39.5" ];

    const handleClose = () => props.setShow(false);

    return (  <Offcanvas show={props.show} className="offcanvas-filter" scroll={false} backdrop={false}>
                    <Offcanvas.Header>
                        <button onClick={handleClose} className="btn-close-filter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>     
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div>
                            <Filtro arrayFiltros={arrayProductos} tipo="PRODUCTOS" id="producto"/>
                            <Filtro arrayFiltros={arrayMarca} tipo="MARCA" id="marca"/>
                            <Filtro arrayFiltros={arrayTalla} tipo="TALLA GENERAL" id="talla-general"/>
                            <Filtro arrayFiltros={arrayPantalon} tipo="TALLA PANTALON/FALDA" id="talla-falda"/>
                            <Filtro arrayFiltros={arrayCalzado} tipo="TALLA CALZADO" id="talla-calzado"/>
                            <FiltroPrecio tipo="PRECIO"/>
                        </div>
                        <div>
                            Ordenar por .....
                        </div>
                        <div className="row row-delete-filtros">
                            <div className="col-6 col-resultado">1240 RESULTADOS</div>
                            <div className="col-6 col-clean"><button type="button">LIMPIAR</button></div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            );
}

export default TablaFiltros; 


/** <Filtro arrayFiltros={arrayPrecio} tipo="PRECIO" id="talla-precio"/> */