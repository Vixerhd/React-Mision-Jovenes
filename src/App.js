import React from "react";
import Producto from "./Componentes/Producto";
import "./App.css";
import { Container, Row } from "reactstrap";
import Navegacion from "./Componentes/Navegacion";
import {listaProductos} from './listaProductos.json'
import Footer from "./Componentes/Footer";



class App extends React.Component {
    constructor(){
        super();

        this.state={
            listaProductos
        };


    }
    render(){
        const arregloComponentes = this.state.listaProductos.map(
            (listaProductos,i)=>{
                console.log(i)
                return(
                    <Producto
                    key={i}
                    titulo={listaProductos.titulo}
                    imagen={listaProductos.imagen}
                    descripcion={listaProductos.descripcion}
                    precio={listaProductos.precio}
                    stock={listaProductos.stock}
                    />
                )
            }
        );



        return (

                <Container >
                    <Navegacion titulo="Mi primer sitio de compras en React"/>
                    <Row>
                        {arregloComponentes}
                    </Row>
                    <Footer/>
                </Container>
                

            
        );
    }
}

export default App;
