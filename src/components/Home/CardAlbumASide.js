import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function CardAlbumAside({ datos }) {
  return (
    <Card style={{ width: "75%", marginBottom:"2vh" }}>
      <Card.Img variant="top" src={datos.urlImages[0]} />

      <Card.Body>
        <hr />
      
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Link to={"/rollos/:id"} >Rollo</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/rollos/:id"} >Scanner</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/rollos/:id"} >Camara</Link>
            </Nav.Item>
          </Nav>
        
      </Card.Body>
    </Card>
  );
}
