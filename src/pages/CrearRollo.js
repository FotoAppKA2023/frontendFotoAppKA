import React from "react";
import { ReactDOM } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import imagen from "../assets/imagen-placeholder.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { createNewRollo } from "../api/apiRollos";

const CrearRollo = () => {
  const [datos,setDatos]= React.useState({
    formato:'',
    marca:'',
    nombre:'',
    iso:'',
    grano:'',
    tomas:'',
    descripcion:'',


  })
  const [foto,setFoto]=React.useState({
    file:File
  })

  const imprimirDatos=()=>{
    console.log(datos)
    const formData=new FormData()
    formData.append('imagenRollo',foto)
    formData.append("datosRollos",datos)
    createNewRollo(FormData)

  }
  const abrirInputFile = () => {
    console.log("se debe ejecutar la abrida de archivos");
  };
  const obtenerFile=(event)=>{
     console.log(event.target)
    setFoto({
      foto,
      [event.target.name]:event.target.files[0]
    })
  }
  const obtenerValor=(event)=>{
    setDatos({
      ...datos,
      [event.target.name]:event.target.value
    })
  }
  return (
    <Container>
      <Row >
        <Col ></Col>
        <Col >
          <div>
            <img
              src={imagen}
              style={{ width: "100px", marginLeft: "45%" }}
              alt=""
              onClick={abrirInputFile}
            />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control name="file" onChange={obtenerFile} type="file" />
            </Form.Group>
          </div>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Formato</Form.Label>
              <Form.Select name="formato" onChange={obtenerValor}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Marca</Form.Label>
              <Form.Select name="marca" onChange={obtenerValor}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Select name="nombre" onChange={obtenerValor}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ISO</Form.Label>
              <Form.Select name="iso" onChange={obtenerValor}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Grano</Form.Label>
              <Form.Select name="grano" onChange={obtenerValor}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numero de tomas</Form.Label>
              <Form.Select name="tomas" onChange={obtenerValor}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescripcion">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                name="descripcion"
                onChange={obtenerValor}
                type="text"
                placeholder="Ingresa la descripcion del rollo"
              />
            </Form.Group>

            <Button onClick={imprimirDatos} >Agregar Rollo</Button>
          </Form>
        </Col>
        <Col ></Col>
      </Row>
    </Container>
  );
};

export default CrearRollo;
