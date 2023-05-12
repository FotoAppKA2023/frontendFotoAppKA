import { React, useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AppNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Tabs from "react-bootstrap/Tabs";
import Carousel from "react-bootstrap/Carousel";
const AlbumDesplegado = () => {
  const [FotosAlbum, setFotosAlbum] = useState([]);

  return (
    <div class="card mb-3">
      <AppNavbar />
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/USAF_photographer.jpg"
            class="img-fluid rounded-start"
            alt="..."
            style={{ width: "35%" }}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">NOMBRE DEL USUARIO</h5>
            <p class="card-text">DESCRIPCION DEL ALBUM</p>
            <p class="card-text">
              <small class="text-body-secondary">feCHA DE PUBLICACION</small>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "70%",
          height: "60vh",
          border: "1px solid black",
          marginLeft: "15%",
        }}
      >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
              alt="First slide"
              style={{ width: "100%", height: "60vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
              alt="First slide"
              style={{ width: "100%", height: "60vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
              alt="First slide"
              style={{ width: "100%", height: "60vh" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ marginLeft: "40%" }}>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Camara">
            Camara
            <div
              style={{
                width: "20%",
                height: "30vh",
                border: "1px solid black",
              }}
            ></div>
          </Tab>
          <Tab eventKey="profile" title="Rollo">
            Rollo
            <div
              style={{
                width: "20%",
                height: "30vh",
                border: "1px solid black",
              }}
            ></div>
          </Tab>
          <Tab eventKey="contact" title="Scanner">
            Scanner
            <div
              style={{
                width: "20%",
                height: "30vh",
                border: "1px solid black",
              }}
            ></div>
          </Tab>
        </Tabs>
      </div>
      <div style={{ marginLeft: "15%", width: "70%" }}>
        <h5>Descripcion del album</h5>
        <p>
          Consequat labore sit sint proident. Occaecat dolore eu aute cillum
          nulla reprehenderit nostrud amet duis ea labore amet. Non eu est
          mollit Lorem nulla Lorem consequat officia fugiat. Voluptate voluptate
          aute tempor cillum dolor.
        </p>
      </div>
      <div style={{ marginLeft: "15%", width: "70%" }}>
        <h5>Escribe tu reseña</h5>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
      </div>
      <Footer />
    </div>
  );
};

export default AlbumDesplegado;
