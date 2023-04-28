import React, { useState } from 'react';
import { Modal, Button, Form, Card } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { BsCamera, BsPrinter, BsPlusCircleFill } from 'react-icons/bs';
import { MdOutlineCameraRoll } from 'react-icons/md';


const ModalCrearPublicacion = ({ show, handleClose }) => {
  const [descripcion, setDescripcion] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  
  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos de la publicación al servidor para crearla, incluyendo las imágenes seleccionadas
    handleClose();
  };

  const handleDrop = (acceptedFiles) => {
    setImagenes([...imagenes, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = (e) => {
    setShowModal(true);
  }

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Crear Publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDescripcion">
                <Form.Label>Escribir descripción de la publicación</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción de su publicación aquí"
                value={descripcion}
                onChange={handleDescripcionChange}
                />
            </Form.Group>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                <p>Suelta la imagen aquí ...</p>
                ) : (
                <p>Arrastra y suelta imágenes o haz clic aquí para seleccionar archivos <BsPlusCircleFill></BsPlusCircleFill></p>
                )}
            </div>
            {imagenes.length > 0 && (
                <div>
                <h4>Imágenes seleccionadas:</h4>
                {imagenes.map((imagen) => (
                    <img src={URL.createObjectURL(imagen)} alt={imagen.name} key={imagen.name} />
                ))}
                </div>
            )}
                <Card style={{ marginTop: '1rem' }}>
                <Card.Body>
    <Card.Title>Agregar a tu publicación:</Card.Title>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <BsCamera size={30} onClick={() => {
        setOpcionSeleccionada('Camara');
        handleModalOpen();
      }} />
      <BsPrinter size={30} onClick={() => {
        setOpcionSeleccionada('Print');
        handleModalOpen();
      }} />
      <MdOutlineCameraRoll size={30} onClick={() => {
        setOpcionSeleccionada('Rollo');
        handleModalOpen();
      }} />
    </div>
  </Card.Body>

        <Modal show={showModal} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <Modal.Title>Opcion de {opcionSeleccionada}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form.Group controlId="formOpciones">
      <Form.Label>Seleccione una opción:</Form.Label>
      <Form.Control as="select" value={opcionSeleccionada} onChange={(e) => setOpcionSeleccionada(e.target.value)}>
        <option value="">--Seleccione una opción--</option>
        {opcionSeleccionada === 'Camara' && (
          <>
            <option value="Camara 1">Camara 1</option>
            <option value="Camara 2">Camara 2</option>
            <option value="Camara 3">Camara 3</option>
          </>
        )}
        {opcionSeleccionada === 'Print' && (
          <>
            <option value="Print 1">Print 1</option>
            <option value="Print 2">Print 2</option>
            <option value="Print 3">Print 3</option>
          </>
        )}
        {opcionSeleccionada === 'Rollo' && (
          <>
            <option value="Rollo 1">Rollo 1</option>
            <option value="Rollo 2">Rollo 2</option>
            <option value="Rollo 3">Rollo 3</option>
          </>
        )}
      </Form.Control>
    </Form.Group>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleModalClose}>
      Cerrar
    </Button>
    <Button variant="primary" onClick={handleModalClose}>
      Guardar cambios
    </Button>
  </Modal.Footer>
</Modal>

            </Card>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cancelar
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={descripcion === '' || imagenes.length === 0}>
            Crear Publicación
            </Button>
        </Modal.Footer>
        </Modal>

        
    );
    };

    export default ModalCrearPublicacion;
