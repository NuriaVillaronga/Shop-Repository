import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import datos from './datos.json'
import Lleno from './components/Lleno';
import Vacio from './components/Vacio';
import filter from './icons/filter.png';
import TwoColumnsView from './components/views/TwoColumnsView';
import DefaultView from './components/views/DefaultView';
import ThreeColumnsView from './components/views/ThreeColumnsView';
import FourColumnsView from './components/views/FourColumnsView';
import TablaFiltros from './components/TablaFiltros';

function App() {

  let contadorN =  1;

  const showCell = (dato) => {

    contadorN++;

    if (contadorN === 8) {
      return <Vacio id={dato.id} vacio="vacio"></Vacio> 
    }
    else if (contadorN === 1 || contadorN === 7 || contadorN === 13 || contadorN === 15 || contadorN === 6 || contadorN === 4 || contadorN === 10 || contadorN === 2 || contadorN === 9 || contadorN === 3 || contadorN === 14 || contadorN === 11 || contadorN === 5 || contadorN === 12) {
      return <Lleno id={dato.id}></Lleno>
    }
    else if (contadorN === 16) {
      contadorN = 0;
      return <Lleno id={dato.id}></Lleno>
    }
  }


  const handleColDos = () => {
    let columnasPred = document.querySelectorAll(".columna"); 
    let columnas4 = document.querySelectorAll(".columna-4");
    let columnas3 = document.querySelectorAll(".columna-3");
    let columnas2 = document.querySelectorAll(".columna-2");
    let rowPred = document.getElementById("row-productos-all");
    let row4 = document.getElementById("row-productos-all-4");
    let row3 = document.getElementById("row-productos-all-3");
    let row2 = document.getElementById("row-productos-all-2");

    columnas4.forEach(columna4 => columna4.style.display = "none");
    columnas3.forEach(columna3 => columna3.style.display = "none");
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:flex; justify-content: center !important; align-items: center !important;padding-top: 20px; padding-bottom: 50px; padding-left: 20px; padding-right: 20px; min-width: 800px"));
    columnasPred.forEach(columna => columna.style.display = "none");
    row4.style.display = "none";
    row3.style.display = "none";
    row2.setAttribute("style","display:flex; display: flex; justify-content: center; align-items: center; width: 1600px;");
    rowPred.style.display = "none";
  }

  const handleColTres = () => {
    let columnasPred = document.querySelectorAll(".columna");
    let columnas4 = document.querySelectorAll(".columna-4");
    let columnas3 = document.querySelectorAll(".columna-3");
    let columnas2 = document.querySelectorAll(".columna-2");
    let rowPred = document.getElementById("row-productos-all");
    let row4 = document.getElementById("row-productos-all-4");
    let row3 = document.getElementById("row-productos-all-3");
    let row2 = document.getElementById("row-productos-all-2");

    columnas4.forEach(columna4 => columna4.style.display = "none");
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:flex; display: flex; justify-content: center !important; align-items: center !important; padding-top: 0px; padding-bottom: 50px !important; min-width: 570px;"));
    columnas2.forEach(columna2 => columna2.style.display = "none");
    columnasPred.forEach(columna => columna.style.display = "none");
    row4.style.display = "none";
    row3.setAttribute("style","display:flex; display: flex; justify-content: center; align-items: center; width: 1710px;");
    row2.style.display = "none";
    rowPred.style.display = "none";
  }

  const handleColCuatro = () => {
    let columnasPred = document.querySelectorAll(".columna");
    let columnas4 = document.querySelectorAll(".columna-4");
    let columnas3 = document.querySelectorAll(".columna-3");
    let columnas2 = document.querySelectorAll(".columna-2");
    let rowPred = document.getElementById("row-productos-all");
    let row4 = document.getElementById("row-productos-all-4");
    let row3 = document.getElementById("row-productos-all-3");
    let row2 = document.getElementById("row-productos-all-2");

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:flex; justify-content: center; align-items: center; padding-top: 0px; padding-bottom: 50px !important; max-width: 398px !important;"));
    columnas3.forEach(columna3 => columna3.style.display = "none");
    columnas2.forEach(columna2 => columna2.style.display = "none");
    columnasPred.forEach(columna => columna.style.display = "none");
    row4.setAttribute("style","display:flex; width: 1592px");
    row3.style.display = "none";
    row2.style.display = "none";
    rowPred.style.display = "none";
  }

  const handleColPred = () => {
    let columnasPred = document.querySelectorAll(".columna");
    let columnas4 = document.querySelectorAll(".columna-4");
    let columnas3 = document.querySelectorAll(".columna-3");
    let columnas2 = document.querySelectorAll(".columna-2");
    let rowPred = document.getElementById("row-productos-all");
    let row4 = document.getElementById("row-productos-all-4");
    let row3 = document.getElementById("row-productos-all-3");
    let row2 = document.getElementById("row-productos-all-2");

    columnas4.forEach(columna4 => columna4.style.display = "none");
    columnas3.forEach(columna3 => columna3.style.display = "none");
    columnas2.forEach(columna2 => columna2.style.display = "none");
    columnasPred.forEach(columna => columna.setAttribute("style","display:flex"));
    
    row4.style.display = "none";
    row3.style.display = "none";
    row2.style.display = "none";
    rowPred.setAttribute("style","display:flex");
  }

  const [show, setShow] = useState(false);

  const handleClose = () => {
      let filtroBtnShow = document.querySelectorAll(".filtro-principal");
      let filtroBtnHidde = document.querySelectorAll(".filtro-principal-ocultar");
      filtroBtnShow.forEach(btn => btn.style.display = "block");
      filtroBtnHidde.forEach(btn => btn.style.display = "none");
      setShow(false);
  }
  const handleShow = () => {
      let filtroBtnShow = document.querySelectorAll(".filtro-principal");
      let filtroBtnHidde = document.querySelectorAll(".filtro-principal-ocultar");
      filtroBtnShow.forEach(btn => btn.style.display = "none");
      filtroBtnHidde.forEach(btn => btn.style.display = "block");
      setShow(true);
  }

  return (
            <div className='row row-container-products container-fluid'>
                <div className='col-12 container-productos'>
                    <DefaultView handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos} handleClose={handleClose} handleShow={handleShow} datos={datos} showCell={showCell} filter={filter}/>
                    <TwoColumnsView handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos} handleClose={handleClose} handleShow={handleShow} datos={datos} showCell={showCell} filter={filter}/>
                    <ThreeColumnsView handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos} handleClose={handleClose} handleShow={handleShow} datos={datos} showCell={showCell} filter={filter}/>
                    <FourColumnsView handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos} handleClose={handleClose} handleShow={handleShow} datos={datos} showCell={showCell} filter={filter}/>
                    <TablaFiltros show={show} handleClose={handleClose}></TablaFiltros>
                </div> 
            </div>
        );
}

export default App;

/**
 * La etiqueta final <TablaFiltros/> es comun para todas las vista
 */