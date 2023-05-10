import React, { useState, useEffect } from "react";
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
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UploadImage from "../components/UploadImage/UploadImage";

//const inputFile = document.getElementById("file");
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
    imagen: null,
  });
  const [dataToast, setDataToast] = useState(false);
  const mostrarToast = () => setDataToast(!dataToast);
  const [foto, setFoto] = React.useState(null);

  useEffect(() => {
    if (foto && foto !== [] && foto !== null) {
      console.log("lista la img para subir:..", foto);
      setDatos({
        ...datos,
        imagen: foto,
      });
    }
  }, [foto]);

  const imprimirDatos = async () => {
    console.log(datos);
    //console.log(foto.file);
    const formData = new FormData();
    //formData.append("imagen", foto.file);
    Object.entries(datos).forEach(([key, value]) => {
      formData.append(key, value);
      //console.log(key,value);
    });

    const resultado = await createNewRollo(formData);
    console.log(resultado);
    if (resultado.status === 200) {
      mostrarToast();
      setTimeout(() => {
        setDataToast(false);
      }, "2000");
    }
  };
  const abrirInputFile = () => {
    //inputFile.click()
  };
  const obtenerFile = (event) => {
    console.log(event.target);
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
  return (
    <>
      <Navbar sectionAdmin={true} />
      <h2 className=" text-white bg-warning text-center p-2">Crear Rollo</h2>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col>
            <div>
              {!foto && (
                <img
                  src={imagen}
                  style={{ width: "100px", marginLeft: "45%" }}
                  alt=""
                  onClick={abrirInputFile}
                />
              )}

              {/* <Form.Group  className="mb-3">
              <Form.Control
                name="file"
                id="file"
                onChange={obtenerFile}
                type="file"
              />
            </Form.Group> */}
              <UploadImage setDataImg={setFoto} />
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
              <ToastContainer style={{ marginTop: "10%" }} position="top-start">
                <Toast show={dataToast} onClose={setDataToast}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Succes</strong>
                    <small>hace un segundo</small>
                  </Toast.Header>
                  <Toast.Body>Rollo Creado Correctamente</Toast.Body>
                </Toast>
              </ToastContainer>
              <Button onClick={imprimirDatos}>Agregar Rollo</Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CrearRollo;
