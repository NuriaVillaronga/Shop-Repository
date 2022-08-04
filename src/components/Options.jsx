import React, { useState, Fragment } from 'react';
import TablaFiltros from './filter/TablaFiltros';
import view2 from '../icons/2.png';
import view3 from '../icons/3.png';

function Options() {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleView2 = () => { 
        let products3 = document.querySelectorAll(".products-3"); 
        let products2 = document.querySelectorAll(".products-2"); 
        let view3 = document.getElementById("container-view-3"); 
        let view2 = document.getElementById("container-view-2"); 
        products3.forEach(product => product.style.display = "none");
        products2.forEach(product => product.setAttribute("style","display:flex; justify-content: center; align-items: center; max-width: 825px !important"));
        view3.style.display = "none";
        view2.style.display = "flex";  
    }
    
    const handleView3 = () => { 
        let products3 = document.querySelectorAll(".products-3"); 
        let products2 = document.querySelectorAll(".products-2");
        let view3 = document.getElementById("container-view-3"); 
        let view2 = document.getElementById("container-view-2"); 
        products3.forEach(product => product.style.display = "flex"); 
        products2.forEach(product => product.style.display = "none"); 
        view3.style.display = "flex";
        view2.style.display = "none";
    }

    return (<Fragment>
                <div className="row container-options">
                    <div className="col-4 col-option" id="col-option-filter"> 
                        <button type="button" onClick={handleShow}>FILTROS</button>
                    </div>
                    <div className="col-4 col-option" id="col-option-hidden"/>
                    <div className="col-4 col-option" id="col-option-view">
                        <button onClick={handleView2}><img src={view2} id="icon-view-2"/></button>
                        <button onClick={handleView3}><img src={view3} id="icon-view-3"/></button>
                    </div>
                </div>
                <TablaFiltros show={show} setShow={setShow}></TablaFiltros>
            </Fragment>);
}

export default Options; 