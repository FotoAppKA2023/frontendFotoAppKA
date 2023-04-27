import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import imagen from "../assets/imagen-placeholder.png";
const CrearRollo = () => {
    
      
    
   const  abrirInputFile=()=>{
        console.log("se debe ejecutar la abrida de archivos")
    }
  return (
    <>
      <Container>
   <div>
   <img
          src={imagen}
          style={{ width: "100px", marginLeft: "45%" }}
          alt=""
          onClick={abrirInputFile()}
        />
        <Form.Group  controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>
   </div>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Formato</Form.Label>
            <Form.Select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Marca</Form.Label>
            <Form.Select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ISO</Form.Label>
            <Form.Select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Grano</Form.Label>
            <Form.Select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Numero de tomas</Form.Label>
            <Form.Select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescripcion">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa la descripcion del rollo"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Agregar Rollo
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CrearRollo;
