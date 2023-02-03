import React from "react";
import {Button,CardText,CardSubtitle,CardTitle,CardBody,CardImg,Col,Card,} from "reactstrap";
import "./Producto.css";
import FichaProducto from "./FichaProducto";

// function Producto(props) {
class Producto extends React.Component {
    render() {
        return (
            <Col sm="4">
                <Card className="Card" body outline color="primary">
                    <CardImg src={this.props.imagen} />
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle>
                            <b>Valor: </b>
                            {this.props.precio}
                        </CardSubtitle>
                        <CardText>{this.props.descripcion}</CardText>
                        {/* <Button className="Button">Comprar</Button>
                        <Button className="Button">Ver ficha</Button> */}
                        <FichaProducto props={this.props}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
export default Producto;
