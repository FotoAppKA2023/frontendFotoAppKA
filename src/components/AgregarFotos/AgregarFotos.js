import React from 'react';
import { Button } from 'react-bootstrap';

const AgregarFotos = ({ handleShowModal }) => {
  return (
    <div className="border rounded p-3">
      <p>Agregar fotos o arrastrar y soltar</p>
      <Button variant="primary" onClick={handleShowModal}>
        Agregar Fotos
      </Button>
    </div>
  );
};

export default AgregarFotos;
