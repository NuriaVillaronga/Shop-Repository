import React, {useState, Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import datos from './datos.json'
import Lleno from './components/Lleno';
import Vacio from './components/Vacio';

function App() {

  const [contador, setContador] = useState(0);

  /** Hacer funcion que devuelva si tiene que ser vacio o falso y que actualice el contador*/

  return (
    <div className="container-fluid">
        <div className='row border row-container-products'>
        <div className='col-12 container-productos'>
          <div className='row row-productos-all'>
            {
              
              datos.map((dato) => (
                dato.id === 3 || dato.id === 4 || dato.id === 8 || dato.id === 13 || dato.id === 15 || dato.id === 16 || dato.id === 20
                      ? 
                        <Vacio id={dato.id}></Vacio>
                      : 
                        <Lleno id={dato.id}></Lleno>
              ))
            }
          </div>
          
        </div>
    </div>
    </div>
  );
}

export default App;
