import React from 'react';
import datos from '../datos.json';
import Product from './Product';
import { Fragment } from 'react';

function View() {

    const showCell = (dato) => {

        return  <Fragment>
                    <div className="products-3" key={`view3-id${dato.id}`}>
                        <Product producto={dato} id={dato.id}></Product>
                    </div>
                    <div className="products-2" key={`view2-id${dato.id}`}>
                        <Product producto={dato} id={dato.id}></Product>
                    </div>
                </Fragment>
    }

    return (<div className='col-12 container-productos'>
                <div className='row' id="container-view-3">{datos.map(showCell)}</div> 
                <div className='row' id="container-view-2">{datos.map(showCell)}</div>
            </div>);
}

export default View; 