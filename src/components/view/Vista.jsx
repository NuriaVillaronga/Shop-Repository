import React, {Fragment} from 'react';
import view2 from '../../icons/2.png';
import view3 from '../../icons/3.png';
import view4 from '../../icons/4.png';

function Vista(props) {

  return (<Fragment>
            <div className={`${props.clase} row-btn-vistas`}>
                <button onClick={props.handleColDos}><img src={view2} id="view-2"/></button>
                <button onClick={props.handleColTres}><img src={view3} id="view-3"/></button>
                <button onClick={props.handleColCuatro}><img src={view4} id="view-4"/></button>
                <button onClick={props.handleColPred}><div className="view-default">Defecto</div></button>
            </div>
        </Fragment>);
}

export default Vista;