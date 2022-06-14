import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import datos from './datos.json'
import Lleno from './components/Lleno';
import Vacio from './components/Vacio';
import Filtro from './components/Filtro';
import view2 from '../src/icons/2.svg';
import view3 from '../src/icons/3.svg';
import view4 from '../src/icons/4.svg'

function App() {

  var contadorN =  1;

  const showCell = (dato) => {

    contadorN++;

    if (contadorN === 15) {
      return <Lleno id={dato.id} propiedad="b-top"></Lleno>
    }
    else if (contadorN === 8) {
      return <Vacio id={dato.id} propiedad="b-bottom" vacio="vacio"></Vacio> 
    }
    else if (contadorN === 1 || contadorN === 7) {
      return <Lleno id={dato.id} propiedad="b-bottom"></Lleno>
    }
    else if (contadorN === 16 || contadorN === 13) {
      contadorN = 0;
      return <Lleno id={dato.id} propiedad="b-bottom"></Lleno>
    }
    else if (contadorN === 6 || contadorN === 4 || contadorN === 10) {
      return <Lleno id={dato.id} propiedad="b-top"></Lleno>
    }
    else if (contadorN === 2 || contadorN === 9 || contadorN === 3 || contadorN === 14) {
      return <Lleno id={dato.id} propiedad="b-left"></Lleno>
    }
    else if (contadorN === 11 || contadorN === 5 || contadorN === 12) {
      return <Lleno id={dato.id} propiedad="b-right"></Lleno>
    }
  }

  const handleColDos = () => {
    var columnasPred = document.querySelectorAll(".columna");
    var columnas4 = document.querySelectorAll(".columna-4");
    var columnas3 = document.querySelectorAll(".columna-3");
    var columnas2 = document.querySelectorAll(".columna-2");
    var rowPred = document.getElementById("row-productos-all");
    var row4 = document.getElementById("row-productos-all-4");
    var row3 = document.getElementById("row-productos-all-3");
    var row2 = document.getElementById("row-productos-all-2");
    var iconPred = document.getElementById("view-default");
    var icon4 = document.getElementById("view-4");
    var icon3 = document.getElementById("view-3");
    var icon2 = document.getElementById("view-2"); 

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:none"));
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:none"));
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:flex"));
    columnasPred.forEach(columna => columna.setAttribute("style","display:none"));
    row4.setAttribute("style","display:none");
    row3.setAttribute("style","display:none");
    row2.setAttribute("style","display:flex");
    rowPred.setAttribute("style","display:none");

    var svgDoc = icon2.contentDocument;
    var palo = svgDoc.getElementById("palo");
    console.log(palo);

    icon4.setAttribute("style","color:rgb(219, 219, 219)");
    icon3.setAttribute("style","color:rgb(219, 219, 219)");
    icon2.setAttribute("style","color:black");
    iconPred.setAttribute("style","color:rgb(219, 219, 219)");
  }

  const handleColTres = () => {
    var columnasPred = document.querySelectorAll(".columna");
    var columnas4 = document.querySelectorAll(".columna-4");
    var columnas3 = document.querySelectorAll(".columna-3");
    var columnas2 = document.querySelectorAll(".columna-2");
    var rowPred = document.getElementById("row-productos-all");
    var row4 = document.getElementById("row-productos-all-4");
    var row3 = document.getElementById("row-productos-all-3");
    var row2 = document.getElementById("row-productos-all-2");
    var iconPred = document.getElementById("view-default");
    var icon4 = document.getElementById("view-4");
    var icon3 = document.getElementById("view-3");
    var icon2 = document.getElementById("view-2"); 

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:none"));
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:flex"));
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:none"));
    columnasPred.forEach(columna => columna.setAttribute("style","display:none"));
    row4.setAttribute("style","display:none");
    row3.setAttribute("style","display:flex");
    row2.setAttribute("style","display:none");
    rowPred.setAttribute("style","display:none");
  }

  const handleColCuatro = () => {
    var columnasPred = document.querySelectorAll(".columna");
    var columnas4 = document.querySelectorAll(".columna-4");
    var columnas3 = document.querySelectorAll(".columna-3");
    var columnas2 = document.querySelectorAll(".columna-2");
    var rowPred = document.getElementById("row-productos-all");
    var row4 = document.getElementById("row-productos-all-4");
    var row3 = document.getElementById("row-productos-all-3");
    var row2 = document.getElementById("row-productos-all-2");
    var iconPred = document.getElementById("view-default");
    var icon4 = document.getElementById("view-4");
    var icon3 = document.getElementById("view-3");
    var icon2 = document.getElementById("view-2"); 

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:flex"));
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:none"));
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:none"));
    columnasPred.forEach(columna => columna.setAttribute("style","display:none"));
    
    row4.setAttribute("style","display:flex");
    row3.setAttribute("style","display:none");
    row2.setAttribute("style","display:none");
    rowPred.setAttribute("style","display:none");

  }

  const handleColPred = () => {
    var columnasPred = document.querySelectorAll(".columna");
    var columnas4 = document.querySelectorAll(".columna-4");
    var columnas3 = document.querySelectorAll(".columna-3");
    var columnas2 = document.querySelectorAll(".columna-2");
    var rowPred = document.getElementById("row-productos-all");
    var row4 = document.getElementById("row-productos-all-4");
    var row3 = document.getElementById("row-productos-all-3");
    var row2 = document.getElementById("row-productos-all-2");
    var iconPred = document.getElementById("view-default");
    var icon4 = document.getElementById("view-4");
    var icon3 = document.getElementById("view-3");
    var icon2 = document.getElementById("view-2"); 

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:none"));
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:none"));
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:none"));
    columnasPred.forEach(columna => columna.setAttribute("style","display:flex"));
    
    row4.setAttribute("style","display:none");
    row3.setAttribute("style","display:none");
    row2.setAttribute("style","display:none");
    rowPred.setAttribute("style","display:flex");

    icon4.setAttribute("style","color:rgb(219, 219, 219)");
    icon3.setAttribute("style","color:rgb(219, 219, 219)");
    icon2.setAttribute("style","color:rgb(219, 219, 219)");
    iconPred.setAttribute("style","color:black");
  }

  const [filtro, setFiltro] = useState(true)
  const handleFilter = () => {
  var filtros = document.getElementById("div-filtros");
    if (filtro == true) {
        filtros.setAttribute("style","display:flex");
        setFiltro(false);
    }
    if (filtro == false) {
      filtros.setAttribute("style","display:none");
      setFiltro(true);
    }
  }

  const arrayProductos = [ "Vestidos", "Abrigos", "Sudaderas", "Camisetas", "Chaquetas", "Pantalones", "Faldas", "Tops", "Calzado", "Bolsos", "Accesorios" ];                 
  const arrayRopa = [ "XS", "S", "M", "L", "XL" ];
  const arrayCalzado = [ "36", "37", "38", "39", "40", "41" ];
  const arrayMarca = [ "For Love & Lemons", "Aniye By", "Punk void", "Marina Eeirre", "SKETCH-Y", "Heimat Atlántica" ];
  const arrayPrecio = [ "€0.00 - €125.00", "€125.00 - €245.00", "€245.00 - €390.00", "€390.00+" ];
  const arrayColor = [ "Neutros", "Cálidos", "Fríos", "Multicolor" ];

  const handleDeleteFiltros = () => {
  var checks = document.querySelectorAll(".check-filtro");
    checks.forEach(check => {
        if (check.checked == true) {
          check.checked = false;
        }
    });
  }

  /**
   * <input type="radio" name="radio-button" onChange={handleColCuatro}></input><img src={view4}/>
   * <object data={view2} type="image/svg+xml" id="view-2"/>
   */
  return (
            <div className='row row-container-products container-fluid'>
                <div className="col-12">
                    <div className="row row-options">
                        <div className="col-6">
                            <button type="button" onClick={handleFilter}>Filter</button>
                        </div>
                        <div className="col-6 col-vista">
                            <button onClick={handleColPred}><span id="view-default">Defecto</span></button>
                            <button onClick={handleColCuatro}><img src={view4} id="view-4"/></button>
                            <button onClick={handleColTres}><img src={view3} id="view-3"/></button>
                            <button onClick={handleColDos}><img src={view2} id="view-2"/></button>
                            <span>Vista</span>
                        </div>
                    </div>
                    <div className="row" id="div-filtros">
                        <div className="col-2"></div>
                        <div className="col-8 tabla-filtros">
                          <div className="row row-all-filtros">
                            <Filtro arrayFiltros={arrayProductos} tipo="PRODUCTOS"/>
                            <Filtro arrayFiltros={arrayMarca} tipo="MARCA"/>
                            <Filtro arrayFiltros={arrayColor} tipo="COLOR"/>
                            <Filtro arrayFiltros={arrayRopa} tipo="TALLA (Ropa)"/>
                            <Filtro arrayFiltros={arrayCalzado} tipo="NÚMERO (Calzado)"/>
                            <Filtro arrayFiltros={arrayPrecio} tipo="PRECIO"/>
                          </div>
                          <div className="row row-delete-filtros">
                            <div className="col-3"></div>
                            <div className="col-6 button-filtros-delete"><button type="button" onClick={handleDeleteFiltros}>ELIMINAR FILTROS</button></div>
                            <div className="col-3"></div>
                          </div>
                        </div>
                        <div className="col-2"></div>
                    </div>  
                    <div className="col-12">Filtros aplicados: 
                        <div className="filtro-aplicado">SUDADERAS<button type="button">x</button></div>
                        <div className="filtro-aplicado">CAMISETAS<button type="button">x</button></div>
                    </div>  
                </div>
                <div className='col-12 container-productos'>
                    <div className='row' id="row-productos-all">{ datos.map(showCell)}</div>
                    <div className='row' id="row-productos-all-2">{ datos.map(showCell)}</div>
                    <div className='row' id="row-productos-all-3">{ datos.map(showCell)}</div>
                    <div className='row' id="row-productos-all-4">{ datos.map(showCell)}</div>
                </div> 
            </div>
        );
}

export default App;