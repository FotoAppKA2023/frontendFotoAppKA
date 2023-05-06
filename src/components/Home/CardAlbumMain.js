import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineEllipsis, AiOutlineUser } from "react-icons/ai";

export default function CardAlbumMain({ datos }) {
  return (
    <Card style={{ width: "30%", height:"50vh" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <AiOutlineUser />
            Nombre del usuario
            <AiOutlineEllipsis />
          </div>
        </ListGroup.Item>
      </ListGroup>
      <img src={datos.urlImages[0]} style={{width:"100%", height:"50%"}} alt="Imagen del album" />
      

      <Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
          Descripcion: {datos.description}
          </div>
        </ListGroup.Item>
      </ListGroup>

        <hr />
        <Card.Text>
          <Nav
             style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/rollos/:id">Rollo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Scanner</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Camara</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
