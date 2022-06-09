import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import datos from './datos.json'
import Lleno from './components/Lleno';
import Vacio from './components/Vacio';

function App() {

  let contadorN =  0;

  const showCell = (dato) => {

    contadorN++;
    console.log(contadorN);
    if (contadorN === 14) {
      contadorN = 1;
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
    else if (contadorN === 3) {
      return <Vacio id={dato.id} propiedad="b-left" vacio="vacio3"></Vacio>
    }
    else if (contadorN === 4) {
      return <Vacio id={dato.id} propiedad="b-top" vacio="vacio4"></Vacio>
    }
    else if (contadorN === 6) {
      return <Lleno id={dato.id} propiedad="b-top"></Lleno>
    }
    else if (contadorN === 2 || contadorN === 9) {
      return <Lleno id={dato.id} propiedad="b-left"></Lleno>
    }
    else if (contadorN === 10 || contadorN === 5 || contadorN === 12) {
      return <Lleno id={dato.id} propiedad="b-right"></Lleno>
    }
  }

  return (
        <div className='row row-container-products container-fluid'>
        <div className='col-12 container-productos'>
          <div className='row row-productos-all' onClick={alert(window.innerWidth)}>
            { datos.map(showCell)}
          </div>
        </div>
    </div>
  );
}

export default App;