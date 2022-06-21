import React from 'react';

class Filtro extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            hidde: false,
            valor: true,
            contador: 0
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

    handleFiltroClick = (boton) => {
        
        if (boton.target.getAttribute("class") == "btn-seleccionado") {
            this.setState({ valor: true });
        }
        if (boton.target.getAttribute("class") == "btn-filtro") {
            this.setState({ valor: false });
        }


        if (this.state.valor == true) { 
            boton.target.setAttribute("class","btn-filtro");
        }
        if (this.state.valor == false) { 
            boton.target.setAttribute("class","btn-seleccionado");
        }

    }

    render () {
        return (  
            <div className="col-12 col-filtros">
                <div className="row">
                    <div className="col-12 tipo-col" onClick={this.handleDisplay}>
                        <div className="row row-seleccion">
                            <div className="div-tipo col-7">{this.props.tipo}{this.state.contador}</div>
                            <div className="icon-filtro col-4">
                                <div className="icono-mostrar" ref={this.filtroMostrar}>+</div>
                                <div className="icono-ocultar" ref={this.filtroOcultar}>-</div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="row-filtros" ref={this.filtroRow}> 
                    {
                        this.props.arrayFiltros.map((filtro, id) => (
                            <button type="button" className={`btn-filtro`} key={id} onClick={this.handleFiltroClick}>{filtro}</button>
                        ))
                    }
                </div>
            </div>
        );
    }
  
}

export default Filtro; 