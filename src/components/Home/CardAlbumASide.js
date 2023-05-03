import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
export default function CardAlbumAside({ datos }) {
  return (
    <Card style={{ width: "75%" }}>
      <Card.Img variant="top" src={datos.imagenUrl} />

      <Card.Body>
        <hr />
        <Card.Text>
          <Nav
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
