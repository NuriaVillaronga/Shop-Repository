import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import datos from './datos.json'
import Lleno from './components/Lleno';
import Vacio from './components/Vacio';

function App() {

  var contadorN =  1;

  const showCell = (dato) => {

    contadorN++;

    if (contadorN === 14) {
      return <Lleno id={dato.id} propiedad="b-top"></Lleno>
    }
    else if (contadorN === 13) {
      return <Vacio id={dato.id} propiedad="b-bottom" vacio="vacio13"></Vacio>
    }
    else if (contadorN === 8) {
      return <Vacio id={dato.id} propiedad="b-bottom" vacio="vacio8"></Vacio> 
    }
    else if (contadorN === 1 || contadorN === 7 || contadorN === 11) {
      return <Lleno id={dato.id} propiedad="b-bottom"></Lleno>
    }
    else if (contadorN === 16) {
      contadorN = 0;
      return <Lleno id={dato.id} propiedad="b-bottom"></Lleno>
    }
    else if (contadorN === 3) {
      return <Vacio id={dato.id} propiedad="b-left" vacio="vacio3"></Vacio>
    }
    else if (contadorN === 4) {
      return <Vacio id={dato.id} propiedad="b-top" vacio="vacio4"></Vacio>
    }
    else if (contadorN === 6) {
      return <Lleno id={dato.id} propiedad="b-top"></Lleno>
    }
    else if (contadorN === 2 || contadorN === 9 || contadorN === 15) {
      return <Lleno id={dato.id} propiedad="b-left"></Lleno>
    }
    else if (contadorN === 10 || contadorN === 5 || contadorN === 12) {
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

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:none"));
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:none"));
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:flex"));
    columnasPred.forEach(columna => columna.setAttribute("style","display:none"));
    row4.setAttribute("style","display:none");
    row3.setAttribute("style","display:none");
    row2.setAttribute("style","display:flex");
    rowPred.setAttribute("style","display:none");
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

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:none"));
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:none"));
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:none"));
    columnasPred.forEach(columna => columna.setAttribute("style","display:flex"));
    row4.setAttribute("style","display:none");
    row3.setAttribute("style","display:none");
    row2.setAttribute("style","display:none");
    rowPred.setAttribute("style","display:flex");
  }

  return (
            <div className='row row-container-products container-fluid'>
                <div className="col-12 border">
                            <input type="radio" name="radio-button" onChange={handleColPred}></input>Predeterminado
                            <input type="radio" name="radio-button" onChange={handleColCuatro}></input>4 columnas
                            <input type="radio" name="radio-button" onChange={handleColTres}></input>3 columnas
                            <input type="radio" name="radio-button" onChange={handleColDos}></input>2 columnas
                            
                    </div>
                <div className='col-12 container-productos'>
                    <div className='row' id="row-productos-all">{ datos.map(showCell)}</div>
                    <div className='row' id="row-productos-all-2">{ datos.map(showCell)}</div>
                    <div className='row' id="row-productos-all-3">{ datos.map(showCell)}</div>
                    <div className='row' id="row-productos-all-4" onClick={alert(window.innerWidth)}>{ datos.map(showCell)}</div>
                </div>
            </div>
        );
}

export default App;