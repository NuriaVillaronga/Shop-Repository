import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import datos from './datos.json'
import Lleno from './components/Lleno';
import Vacio from './components/Vacio';
import Vista from './components/Vista';
import TablaFiltros from './components/TablaFiltros';
import filter from './icons/filter.png';

function App() {

  let contadorN =  1;

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
    let columnasPred = document.querySelectorAll(".columna"); 
    let columnas4 = document.querySelectorAll(".columna-4");
    let columnas3 = document.querySelectorAll(".columna-3");
    let columnas2 = document.querySelectorAll(".columna-2");
    let rowPred = document.getElementById("row-productos-all");
    let row4 = document.getElementById("row-productos-all-4");
    let row3 = document.getElementById("row-productos-all-3");
    let row2 = document.getElementById("row-productos-all-2");
    let iconPred = document.getElementById("view-default");
    let icon4 = document.getElementById("view-4");
    let icon3 = document.getElementById("view-3");
    let icon2 = document.getElementById("view-2"); 

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:none"));
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:none"));
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:flex; justify-content: center !important; align-items: center !important;padding-top: 20px; padding-bottom: 50px; padding-left: 20px; padding-right: 20px; min-width: 800px"));
    columnasPred.forEach(columna => columna.setAttribute("style","display:none"));
    row4.setAttribute("style","display:none");
    row3.setAttribute("style","display:none");
    row2.setAttribute("style","display:flex; display: flex; justify-content: center; align-items: center; width: 1600px;");
    rowPred.setAttribute("style","display:none");

    let svgDoc = icon2.contentDocument;
    let palo = svgDoc.getElementById("palo");
    console.log(palo);

    icon4.setAttribute("style","fill: red");
    icon3.setAttribute("style","color:rgb(219, 219, 219)");
    icon2.setAttribute("style","color:black");
    iconPred.setAttribute("style","color:rgb(219, 219, 219)");

    let filtros = document.getElementById("div-filtros");
    filtros.setAttribute("style","display:none");
    setFiltro(true);
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
    let iconPred = document.getElementById("view-default");
    let icon4 = document.getElementById("view-4");
    let icon3 = document.getElementById("view-3");
    let icon2 = document.getElementById("view-2"); 

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:none"));
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:flex; display: flex; justify-content: center !important; align-items: center !important; padding-top: 0px; padding-bottom: 50px !important; min-width: 570px;"));
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:none"));
    columnasPred.forEach(columna => columna.setAttribute("style","display:none"));
    row4.setAttribute("style","display:none");
    row3.setAttribute("style","display:flex; display: flex; justify-content: center; align-items: center; width: 1710px;");
    row2.setAttribute("style","display:none");
    rowPred.setAttribute("style","display:none");

    icon4.setAttribute("style","color: red");

    let filtros = document.getElementById("div-filtros");
    filtros.setAttribute("style","display:none");
    setFiltro(true);
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
    let iconPred = document.getElementById("view-default");
    let icon4 = document.getElementById("view-4");
    let icon3 = document.getElementById("view-3");
    let icon2 = document.getElementById("view-2"); 

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:flex; justify-content: center; align-items: center; padding-top: 0px; padding-bottom: 50px !important; max-width: 398px !important;"));
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:none"));
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:none"));
    columnasPred.forEach(columna => columna.setAttribute("style","display:none"));
    
    row4.setAttribute("style","display:flex; width: 1592px");
    row3.setAttribute("style","display:none");
    row2.setAttribute("style","display:none");
    rowPred.setAttribute("style","display:none");

    icon4.setAttribute("style","color: red");

    let filtros = document.getElementById("div-filtros");
    filtros.setAttribute("style","display:none");
    setFiltro(true);
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
    let iconPred = document.getElementById("view-default");
    let icon4 = document.getElementById("view-4");
    let icon3 = document.getElementById("view-3");
    let icon2 = document.getElementById("view-2"); 

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:none"));
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:none"));
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:none"));
    columnasPred.forEach(columna => columna.setAttribute("style","display:flex"));
    
    row4.setAttribute("style","display:none");
    row3.setAttribute("style","display:none");
    row2.setAttribute("style","display:none");
    rowPred.setAttribute("style","display:flex");

    icon4.setAttribute("style","color: red");
    icon3.setAttribute("style","color:rgb(219, 219, 219)");
    icon2.setAttribute("style","color:rgb(219, 219, 219)");
    iconPred.setAttribute("style","color:black");

    let filtros = document.getElementById("div-filtros");
    filtros.setAttribute("style","display:none");
    setFiltro(true);
  }

  const [filtro, setFiltro] = useState(true)

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

  /**
   * <input type="radio" name="radio-button" onChange={handleColCuatro}></input><img src={view4}/>
   * <object data={view2} type="image/svg+xml" id="view-2"/>
   */
  return (
            <div className='row row-container-products container-fluid'>
                <div className="col-12">  
                    <TablaFiltros/>
                </div>


                <div className='col-12 container-productos'>


                    <div className='row' id="row-productos-all">
                        <div className="col-12">
                            <div className="row row-options-columna">
                              <div className="col-3 options-pred">
                                  <button type="button" className="filtro-principal" onClick={handleShow}><img src={filter}/> Mostrar filtro</button>
                                  <button type="button" className="filtro-principal-ocultar" onClick={handleClose}><img src={filter}/> Ocultar filtro</button>
                                  <TablaFiltros show={show} handleClose={handleClose}></TablaFiltros>
                              </div>
                              <Vista clase="col-3 options-pred options-3" handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos}/>
                              <Vista clase="col-3 options-pred options-2" handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos}/>
                              <Vista clase="col-3 options-pred options-1" handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos}/>
                            </div>
                        </div>
                        {datos.map(showCell)}
                    </div>

                    <div className='row' id="row-productos-all-2">
                        <div className="col-12">
                            <div className="row row-options-columna">
                              <div className="col-3 options-all-2">
                                  <button type="button" className="filtro-principal" onClick={handleShow}><img src={filter}/> Mostrar filtro</button> 
                                  <button type="button" className="filtro-principal-ocultar" onClick={handleClose}><img src={filter}/> Ocultar filtro</button>  
                              </div>
                              <Vista clase="col-3 options-all-2 options-2-1" handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos}/>
                            </div>
                        </div>
                        {datos.map(showCell)}
                    </div>
                    
                    <div className='row' id="row-productos-all-3">
                        <div className="col-12">
                            <div className="row row-options-columna">
                              <div className="col-3 options-all-3">
                                  <button type="button" className="filtro-principal" onClick={handleShow}><img src={filter}/> Mostrar filtro</button> 
                                  <button type="button" className="filtro-principal-ocultar" onClick={handleClose}><img src={filter}/> Ocultar filtro</button>
                                  <TablaFiltros show={show} handleClose={handleClose}></TablaFiltros> 
                              </div>
                              <Vista clase="col-3 options-all-3 options-3-2" handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos}/>
                              <Vista clase="col-3 options-all-3 options-3-1" handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos}/>
                              <Vista clase="col-3 options-all-3 options-3-3" handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos}/>
                            </div>
                        </div>
                        {datos.map(showCell)}
                    </div>

                    <div className='row' id="row-productos-all-4">
                        <div className="col-12">
                            <div className="row row-options-columna">
                              <div className="col-3 options-all-4">
                                  <button type="button" className="filtro-principal" onClick={handleShow}><img src={filter}/> Mostrar filtro</button>
                                  <button type="button" className="filtro-principal-ocultar" onClick={handleClose}><img src={filter}/> Ocultar filtro</button>
                                  <TablaFiltros show={show} handleClose={handleClose}></TablaFiltros>
                              </div>
                              <Vista clase="col-3 options-all-4 options-4-1" handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos}/>
                              <Vista clase="col-3 options-all-4 options-4-2" handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos}/>
                              <Vista clase="col-3 options-all-4 options-4-3" handleColPred={handleColPred} handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos}/>
                            </div>
                        </div>
                        {datos.map(showCell)}
                    </div>
                </div> 
            </div>
        );
}

export default App;