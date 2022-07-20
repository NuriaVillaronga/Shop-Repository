import React from 'react';
import Filtro from './Filtro';
import { Offcanvas } from 'react-bootstrap';

function TablaFiltros(props) {

    const arrayProductos = [ "VESTIDOS", "ABRIGOS", "SUDADERAS", "CAMISETAS", "CHAQUETAS", "PANTALONES", "FALDAS", "TOPS", "CALZADO", "BOLSOS", "ACCESORIOS" ];                 
    const arrayMarca = [ "For Love & Lemons", "Aniye By", "Punk void", "Marina Eeirre", "SKETCH-Y", "Heimat Atlántica" ];
    const arrayPrecio = [ "€0.00 - €125.00", "€125.00 - €245.00", "€245.00 - €390.00", "€390.00+" ];
    const arrayColor = [ "NEUTROS", "CÁLIDOS", "FRÍOS", "MULTICOLOR" ];
    const arrayTalla = [ "XS", "S", "M", "L", "XL" ];
    const arrayPantalon = [ "34", "36", "38", "40" ];
    const arrayCalzado = [ "37", "38", "38.5", "39", "39.5" ];

    const handleClose = () => props.setShow(false);

    return (  <Offcanvas show={props.show} className="offcanvas-filter" scroll={false} backdrop={false}>
                    <Offcanvas.Header><button onClick={handleClose}>CERRAR</button></Offcanvas.Header>
                    <Offcanvas.Body>
                        <div>
                            <Filtro arrayFiltros={arrayProductos} tipo="PRODUCTOS" id="producto"/>
                            <Filtro arrayFiltros={arrayMarca} tipo="MARCA" id="marca"/>
                            <Filtro arrayFiltros={arrayColor} tipo="COLOR" id="color"/>
                            <Filtro arrayFiltros={arrayTalla} tipo="TALLA GENERAL" id="talla-general"/>
                            <Filtro arrayFiltros={arrayPantalon} tipo="TALLA PANTALON/FALDA" id="talla-falda"/>
                            <Filtro arrayFiltros={arrayCalzado} tipo="TALLA CALZADO" id="talla-calzado"/>
                            <Filtro arrayFiltros={arrayPrecio} tipo="PRECIO" id="talla-precio"/>
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