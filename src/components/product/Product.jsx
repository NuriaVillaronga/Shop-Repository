import React from 'react';
import { Figure } from 'react-bootstrap';
import imagen from '../../img1.jpg';
import imagen2 from '../../img2.jpg';
import Badge from 'react-bootstrap/Badge';


class Product extends React.Component {
        constructor(props) {
          super(props);
          
          this.imagenMostrar = React.createRef();
          this.imagenOcultar = React.createRef();
          this.rapida = React.createRef();
          this.rapidaTitle = React.createRef();
          this.rapidaTalla = React.createRef();
          this.rapidaContainer = React.createRef();
        }

    handleEnter = () => {
        this.imagenMostrar.current.setAttribute("style","display:none");
        this.imagenOcultar.current.setAttribute("style","display:flex");
        this.rapida.current.setAttribute("style","display:block");
    }

    handleOut = () => {
        this.imagenMostrar.current.setAttribute("style","display:flex");
        this.imagenOcultar.current.setAttribute("style","display:none");
        this.rapida.current.setAttribute("style","display:none");
    }

    handleEnterRapida = () => {
      if (this.props.producto.categoria == "Accesorios") {
        this.rapidaContainer.current.setAttribute("style","margin-top: -39px; margin-bottom: 13.5px; padding: 4.5px; border: 1px solid grey; cursor: pointer");
        this.rapidaTalla.current.setAttribute("style","display:none");
      }
      else {
        this.rapidaContainer.current.setAttribute("style","margin-top: -79px; margin-bottom: 13.5px");
        this.rapidaTalla.current.setAttribute("style","display:block");
      }
    }

    handleOutRapida = () => {
      this.rapidaContainer.current.setAttribute("style","margin-top: -41px; margin-bottom: 13.5px");
      this.rapidaTalla.current.setAttribute("style","display:none");
    }

    render () {
        return (  
                  <Figure className={this.props.figura} onMouseOver={this.handleEnter} onMouseOut={this.handleOut}>
                    <Badge bg="dark" className={`prod-estado-${this.props.producto.estado} prod-estado`}>AGOTADO</Badge>
                    <Figure.Image src={imagen} ref={this.imagenMostrar}/>
                    <Figure.Image src={imagen2} className="ocultas" ref={this.imagenOcultar}/>
                    <Figure.Caption className="quick" ref={this.rapida} onMouseOver={this.handleEnterRapida} onMouseOut={this.handleOutRapida}>
                      <div className="div-rapido" ref={this.rapidaContainer}>
                        <div className="q-title" ref={this.rapidaTitle}>AÑADIR AL CARRITO</div>
                        <div className="q-talla" ref={this.rapidaTalla}>
                          {
                            this.props.producto.sizes.map((sizeA, indexBtn) => <button className={sizeA.est} key={indexBtn}>{sizeA.talla}</button>)
                          }
                        </div>
                      </div>
                    </Figure.Caption>
                    <Figure.Caption className="info-producto">
                                <div className="pi-nom row">
                                  <div className="col-10 col-desc">
                                    <div id="name-div">{this.props.producto.name.toUpperCase()}</div>
                                    <div id="separation-div">-</div>
                                    <div id="categoria-div">{this.props.producto.tipo}</div>
                                  </div>
                                  <div className="col-2 col-precio">
                                    <div id="categoria-div">435€</div>
                                  </div>
                                </div>
                    </Figure.Caption>
                  </Figure>
              );
    }
  
}

export default Product; 
