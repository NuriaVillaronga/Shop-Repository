import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import datos from './datos.json'
import TwoColumnsView from './components/view/TwoColumnsView';
import ThreeColumnsView from './components/view/ThreeColumnsView';
import FourColumnsView from './components/view/FourColumnsView';
import TablaFiltros from './components/filter/TablaFiltros';
import portada from './vestidos.jpg';
import Product from './components/product/Product';
import { Fragment } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

function App() {

  const showCell = (dato) => {

      return <Fragment>
                <div className="col-3 products-4" key={`col4-full-id${dato.id}`}><Product figura="figura-4" producto={dato} id={dato.id}></Product></div> 
                <div className="col-3 products-3" key={`col3-full-id${dato.id}`}><Product figura="figura-3" producto={dato} id={dato.id}></Product></div>
                <div className="col-3 products-2" key={`col2-full-id${dato.id}`}><Product figura="figura-2" producto={dato} id={dato.id}></Product></div>
            </Fragment>
  }


  const handleColDos = () => {
    let columnas4 = document.querySelectorAll(".products-4");
    let columnas3 = document.querySelectorAll(".products-3"); 
    let columnas2 = document.querySelectorAll(".products-2"); 
    let row4 = document.getElementById("container-products-4");
    let row3 = document.getElementById("container-products-3");
    let row2 = document.getElementById("container-products-2");

    columnas4.forEach(columna4 => columna4.style.display = "none");
    columnas3.forEach(columna3 => columna3.style.display = "none");
    columnas2.forEach(columna2 => columna2.setAttribute("style","display:flex; justify-content: center !important; align-items: center !important;padding-top: 20px; padding-bottom: 50px; padding-left: 20px; padding-right: 20px; min-width: 800px"));
    row4.style.display = "none";
    row3.style.display = "none";
    row2.setAttribute("style","display:flex; display: flex; justify-content: center; align-items: center; width: 1600px;");
  }

  const handleColTres = () => {
    let columnas4 = document.querySelectorAll(".products-4");
    let columnas3 = document.querySelectorAll(".products-3");
    let columnas2 = document.querySelectorAll(".products-2");
    let row4 = document.getElementById("container-products-4");
    let row3 = document.getElementById("container-products-3");
    let row2 = document.getElementById("container-products-2");

    columnas4.forEach(columna4 => columna4.style.display = "none");
    columnas3.forEach(columna3 => columna3.setAttribute("style","display:flex; display: flex; justify-content: center !important; align-items: center !important; padding-top: 0px; padding-bottom: 50px !important; min-width: 570px;"));
    columnas2.forEach(columna2 => columna2.style.display = "none");
    row4.style.display = "none";
    row3.setAttribute("style","display:flex; display: flex; justify-content: center; align-items: center; width: 1710px;");
    row2.style.display = "none";
  }

  const handleColCuatro = () => {
    let columnas4 = document.querySelectorAll(".products-4");
    let columnas3 = document.querySelectorAll(".products-3");
    let columnas2 = document.querySelectorAll(".products-2");
    let row4 = document.getElementById("container-products-4");
    let row3 = document.getElementById("container-products-3");
    let row2 = document.getElementById("container-products-2");

    columnas4.forEach(columna4 => columna4.setAttribute("style","display:flex; justify-content: center; align-items: center; padding-top: 0px; padding-bottom: 50px !important; max-width: 398px !important;"));
    columnas3.forEach(columna3 => columna3.style.display = "none");
    columnas2.forEach(columna2 => columna2.style.display = "none");
    row4.setAttribute("style","display:flex; width: 1592px");
    row3.style.display = "none";
    row2.style.display = "none";
  } 

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
            <div className='row row-container-products container-fluid'>
                <div className="col-12 cabecera"><img src={portada}></img></div>


                <div className="slider row">
                  <div className="col-3"></div>
                  <div className="col-6 tipo-content">
                    <div><button className="button-todos">VER TODO</button></div>
                    <div><button>CORTOS</button></div>
                    <div><button>MIDI</button></div>
                    <div><button>LARGOS</button></div>
                  </div>
                  <div className="col-3"></div>
                </div>

                <div className='col-12 container-productos'>
                    <TwoColumnsView handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos} handleShow={handleShow} datos={datos} showCell={showCell}/>
                    <ThreeColumnsView handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos} handleShow={handleShow} datos={datos} showCell={showCell}/>
                    <FourColumnsView handleColCuatro={handleColCuatro} handleColTres={handleColTres} handleColDos={handleColDos} handleShow={handleShow} datos={datos} showCell={showCell}/>
                    <TablaFiltros show={show} setShow={setShow}></TablaFiltros>
                </div> 
            </div>
        );
}

export default App;

/**
 * La etiqueta final <TablaFiltros/> es comun para todas las vista
 */