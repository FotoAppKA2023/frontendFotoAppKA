import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {getAllRollos} from "../../api/apiRollos"
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";
import DetalleRollo from "../DetalleRollo/DetalleRollo";
import { Drawer } from "antd";
import foto1 from "../../assets/SeccionRollosImg/rollo1.png";
import foto2 from "../../assets/SeccionRollosImg/rollo2.jpeg";
import foto3 from "../../assets/SeccionRollosImg/rollo3.jpeg";
import foto4 from "../../assets/SeccionRollosImg/rollo4.jpeg";
import foto5 from "../../assets/SeccionRollosImg/rollo5.jpeg";
import foto6 from "../../assets/SeccionRollosImg/rollo6.jpeg";
import foto7 from "../../assets/SeccionRollosImg/rollo7.jpeg";
import foto8 from "../../assets/SeccionRollosImg/rollo8.jpeg";


function SeccionRollosImg() {
  const [filtro, setFiltro] = useState("");
  const [vistosRecientemente, setVistosRecientemente] = useState([]);
  const [rollos, setRollos] = useState([
    { id: 1, nombre: "Rollo 1", imagen: foto1 },
    { id: 2, nombre: "Rollo 2", imagen: foto2 },
    { id: 3, nombre: "Rollo 3", imagen: foto3 },
    { id: 4, nombre: "Rollo 4", imagen: foto4 },
    { id: 5, nombre: "Rollo 5", imagen: foto5 },
    { id: 6, nombre: "Rollo 6", imagen: foto6 },
    { id: 7, nombre: "Rollo 7", imagen: foto7 },
    { id: 8, nombre: "Rollo 8", imagen: foto8 },
  ]);

  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedRollo, setSelectedRollo] = useState(null);

  useEffect(() => {
    cargardatos();
  }, [])

  const handledCloseDrawer = () => {
    setShowDrawer(false);
  };

  const handledOpenDrawer = (rollo) => {
    setSelectedRollo(rollo);
    setShowDrawer(true);
  };

  const actualizarFiltro = (e) => {
    setFiltro(e.target.value);
  };

  const agregarAVistosRecientes = (rollo) => {
    setVistosRecientemente([
      rollo,
      ...vistosRecientemente.filter((v) => v.id !== rollo.id).slice(0, 3),
    ]);
  };

  
  const cargardatos = async() => {
      try{
        const result = await getAllRollos() 
        console.log(result)
        if(result?.data?.result){
          setRollos([...result.data.result])
        }
      }catch(error){
        console.log(error)
      }
      
  }

  const rollosFiltrados = rollos?.filter((rollo) =>
    rollo.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <Container fluid className="p-3">
      <Row>
        <Col md={8}>
          <div className="mb-3">
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Buscar rollos"
                onChange={actualizarFiltro}
              />
            </InputGroup>
          </div>
          <div className="mb-3 row">
            {rollos?.map((rollo) => (
              <div key={rollo.id} className="col-md-6">
                <Card
                  onClick={() => {
                    handledOpenDrawer(rollo);
                    agregarAVistosRecientes(rollo);
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={rollo?.imageUrl}
                    alt={rollo.nombre}
                  />
                  <Card.Body>
                    <Card.Title>{rollo.nombre}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Col>

        <Col md={4}>
          <div
            className="mb-3"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h4>Vistos Recientemente</h4>
            <div className="row">
              {vistosRecientemente.map((rollo) => (
                <div key={rollo.id}>
                  <Card style={{ marginBottom: "10px" }}>
                    <Card.Img
                      variant="top"
                      src={rollo?.imageURL}
                      alt={rollo.nombre}
                      style={{width:"20%"}} 
                    />
                    <Card.Body onClick={() => agregarAVistosRecientes(rollo)}>
                      <Card.Title>{rollo.nombre}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      <Drawer
        title="Detalle del rollo"
        placement="right"
        onClose={handledCloseDrawer}
        visible={showDrawer}
        width="50%"
      >
        {selectedRollo && <DetalleRollo rollo={selectedRollo} />}
      </Drawer>
    </Container>
    </>
  );
}

export default SeccionRollosImg;
