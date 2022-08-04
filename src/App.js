import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import portada from './vestidos.jpg';
import View from './components/View';
import Options from './components/Options';

function App() {

  return (<div className='row row-container-products container-fluid'>
            <div className="col-12 cabecera"><img src={portada}></img></div>
            <Options/>
            <View/>
          </div>);
}

export default App;
