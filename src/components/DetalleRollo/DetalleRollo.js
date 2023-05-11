import React, { useState } from "react";
import {Button, Form, Card, Image } from "react-bootstrap";

function DetalleRollo({ rollo }) {
  const [calidad, setCalidad] = useState(0);
  const [like, setLike] = useState(false);
  const [nuevaResena, setNuevaResena] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const handleLike = () => {
    setLike(!like);
  };

  const handleResenaSubmit = (e) => {
    e.preventDefault();
    setComentarios([...comentarios, nuevaResena]);
    setNuevaResena("");
  };
  
  const descripcion = "Aquí van los detalles del rollo...";


  return (
    <div>
      <h4>{rollo.nombre}</h4>
      <img src={rollo.imagen.default} alt={rollo.nombre} />
      <h4>Titulo</h4>
      <p>
      {descripcion}
      </p>
      

      <div className="my-2">
        <span>Califica el rollo: </span>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`mx-1 ${i < calidad ? "text-warning" : ""}`}
            style={{ cursor: "pointer" }}
            onClick={() => setCalidad(i + 1)}
          >
            ★
          </span>
        ))}
      </div>
      <div className="my-2">
        <Button variant="outline-danger" onClick={handleLike}>
          {like ? "❤️" : "🤍"}
        </Button>{" "}
        <span>{like ? "Te gusta esta foto" : "Dale me gusta a esta foto"}</span>
      </div>
      <div className="my-2">
        <Form onSubmit={handleResenaSubmit}>
          <Form.Group>
            <Form.Label>Deja tu reseña:</Form.Label>
            <p>Deja tu reseña:</p>
            <Form.Control
              as="textarea"
              rows={3}
              value={nuevaResena}
              onChange={(e) => setNuevaResena(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
      {comentarios.length > 0 && (
        <div className="my-2">
          <h4>Comentarios:</h4>
          {comentarios.map((comentario, index) => (
            <Card key={index} className="my-2">
              <Card.Header>
                <Image
                  className="rounded-circle"
                  src="https://via.placeholder.com/50x50"
                  alt="Foto de perfil"
                />
                <span className="ml-2">Nombre de usuario</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>Titulo del comentario</Card.Title>
                <Card.Text>{comentario}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default DetalleRollo;
