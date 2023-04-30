import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import imagen from "../assets/imagen-placeholder.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { createNewRollo } from "../api/apiRollos";

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
  const [smShow, setSmShow] = useState(false);
  const [foto, setFoto] = React.useState({
    file: File,
  });

  const imprimirDatos = async () => {
    console.log("file: ", foto.file);
    const formData = new FormData();
    formData.append("imagen", foto.file);
    Object.entries(datos).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const resultado = await createNewRollo(formData);

    if (resultado.status === 200) {
      setSmShow(true);
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
    console.log(event.target.name, ": ", event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton style={{ backgroundColor: "#28A745" }}>
              <Modal.Title id="example-modal-sizes-title-sm">
                Succes
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#95D195" }}>
              Rollo Creado Correctamente
            </Modal.Body>
          </Modal>
        </Col>
        <Col>
          <div>
            <img
              src={imagen}
              style={{ width: "100px", marginLeft: "45%" }}
              alt=""
              onClick={abrirInputFile}
            />
            <Form.Group className="mb-3">
              <Form.Control
                aria-required
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
                name="description"
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
