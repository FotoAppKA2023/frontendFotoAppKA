import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import imagen from "../assets/imagen-placeholder.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { createNewRollo } from "../api/apiRollos";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
const inputFile = document.getElementById("file");
const CrearRollo = () => {
  const [datos, setDatos] = React.useState({
    formato: "",
    marca: "",
    nombre: "",
    iso: "",
    grano: "",
    tomas: "",
    description: "",
    link: [],
  });

  const [foto, setFoto] = React.useState({
    file: File,
  });

  const imprimirDatos = async () => {
    const formData = new FormData();
    formData.append("imagenRollo", foto.file);
    Object.entries(datos).forEach(([key, value]) => {
      formData.append(key, value);
     
    });

    const resultado = await createNewRollo(formData);
   
    console.log(resultado)
    if (resultado.status === 200) {
    }
  };
  const abrirInputFile = () => {
    inputFile.click();
  };
  const obtenerFile = (event) => {
   
    setFoto({
      [event.target.name]: event.target.files[0],
    });
  };
  const obtenerValor = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const [show, setShow] = useState(false);
  return (
    <Container>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
      <Row>
        <Col></Col>
        <Col>
          <div>
            <img
              src={imagen}
              style={{ width: "100px", marginLeft: "45%" }}
              alt=""
              onClick={abrirInputFile}
            />
            <Form.Group  className="mb-3">
              <Form.Control
                name="file"
                id="file"
                onChange={obtenerFile}
                type="file"
              />
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
            <Form.Group className="mb-3">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                name="descripcion"
                onChange={obtenerValor}
                type="text"
                placeholder="Ingresa la descripcion del rollo"
              />
            </Form.Group>

            <Button onClick={imprimirDatos}>Agregar Rollo</Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default CrearRollo;
