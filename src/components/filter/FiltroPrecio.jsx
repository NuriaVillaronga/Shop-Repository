import React from 'react';
import MultiRangeSlider from "multi-range-slider-react";

class FiltroPrecio extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            hidde: false,
            minValue: 0,
            maxValue: 100
          };
          
          this.filtroRow = React.createRef();
          this.filtroMostrar = React.createRef();
          this.filtroOcultar = React.createRef();
          this.boton = React.createRef();
        }

    handleDisplay = () => {

        if (this.state.hidde == true) {
            this.filtroRow.current.setAttribute("style","display:none");
            this.filtroMostrar.current.setAttribute("style","display:inline");
            this.filtroOcultar.current.setAttribute("style","display:none");
            this.setState({ hidde: false })
        }
        if (this.state.hidde == false) {
            this.filtroRow.current.setAttribute("style","display:block");
            this.filtroMostrar.current.setAttribute("style","display:none");
            this.filtroOcultar.current.setAttribute("style","display:inline");
            this.setState({ hidde: true })
        }
    }

    handleInput = (e) => {
        this.setState({ minValue: e.minValue })
        this.setState({ maxValue: e.maxValue })
    };

    render () {
        return (  
            <div className="col-12 col-filtros">
                <div className="row">
                    <div className="col-12 tipo-col" onClick={this.handleDisplay}>
                        <div className="row row-seleccion">
                            <div className="div-tipo col-7">
                                <div>{this.props.tipo}</div>
                            </div>
                            <div className="icon-filtro col-4">
                                <div className="icono-mostrar" ref={this.filtroMostrar}>+</div>
                                <div className="icono-ocultar" ref={this.filtroOcultar}>-</div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="row-filtros" ref={this.filtroRow}> 
                    <div id="container-range">
                        <div className="row labels-range">
                            <div className="col-6 rango-minimo">{this.state.minValue} EUR</div>
                            <div className="col-6 rango-maximo">{this.state.maxValue} EUR</div>
                        </div>
                        <MultiRangeSlider min={0} max={100} step={5} ruler={false} label={false} preventWheel={false} minValue={this.state.minValue} maxValue={this.state.maxValue} onInput={(e) => {this.handleInput(e);}}/>
                    </div>
                </div>
            </div>
        );
    }
  
}

export default FiltroPrecio; 