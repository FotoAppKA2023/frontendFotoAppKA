import React, { useState } from 'react';
import { Modal, Button, Form, Card, Toast } from 'react-bootstrap'; // Agregamos Toast a los imports
import { useDropzone } from 'react-dropzone';
import { BsCamera, BsPrinter, BsPlusCircleFill } from 'react-icons/bs';
import { MdOutlineCameraRoll } from 'react-icons/md';

const ModalCrearPublicacion = ({ show, handleClose }) => {
  const [descripcion, setDescripcion] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!descripcion || imagenes.length === 0 || !opcionSeleccionada) {
      setShowErrorToast(true);
    } else {
      setShowSuccessToast(true);
      setDescripcion('');
      setImagenes([]);
      setOpcionSeleccionada('');
      
    }
  };
 
  const handleDrop = (acceptedFiles) => {
    setImagenes([...imagenes, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

    return (
      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Crear Publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            
            <div {...getRootProps()} className='border p-2 rounded'>
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
                    <img width={'20%'} className='mx-2' src={URL.createObjectURL(imagen)} alt={imagen.name} key={imagen.name} />
                ))}
                </div>
            )}
                <Card style={{ marginTop: '1rem' }}>
  <Card.Body>
    <Card.Title>Agregar a tu publicación:</Card.Title>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

    <BsCamera
        size={30}
        onClick={() => setOpcionSeleccionada('Camara')}
        style={{ color: opcionSeleccionada === 'Camara' ? 'blue' : 'black' }}
      />     
       <BsPrinter size={30} 
       onClick={() => setOpcionSeleccionada('Print')}
       style={{ color: opcionSeleccionada === 'Print' ? 'blue' : 'black' }}
        />
      <MdOutlineCameraRoll 
      size={30}
      onClick={() => setOpcionSeleccionada('Rollo')}
      style={{ color: opcionSeleccionada === 'Rollo' ? 'blue' : 'black' }}
        />
    </div>
    {opcionSeleccionada && (
  <Form.Group controlId="formOpciones">
    <Form.Label>Seleccione una opción:</Form.Label>
    <Form.Control as="select" value={opcionSeleccionada} onChange={(e) => setOpcionSeleccionada(e.target.value)}>
      <option value="">--Seleccione una opción--</option>
      {[
        { value: "Camara", options: ["Camara 1", "Camara 2", "Camara 3"] },
        { value: "Print", options: ["Print 1", "Print 2", "Print 3"] },
        { value: "Rollo", options: ["Rollo 1", "Rollo 2", "Rollo 3"] }
      ].find(opcion => opcion.value === opcionSeleccionada)?.options?.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </Form.Control>
    <p>Seleccionaste: {opcionSeleccionada}</p>
  </Form.Group>
)}
  </Card.Body>
</Card>
<Form.Group controlId="formDescripcion">
                <Form.Label>Escribir descripción de la publicación</Form.Label>
                <Form.Control
                style={{resize:'none'}}
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción de su publicación aquí"
                value={descripcion}
                onChange={handleDescripcionChange}
                
                />
            </Form.Group>

            </Form>
        </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
        Cancelar
    </Button>
    <Button variant="primary" onClick={handleSubmit}>
    Crear Publicación
</Button>
<Toast show={showSuccessToast} autohide delay={3000} onClose={() => setShowSuccessToast(false)}>
  <Toast.Header>
    <strong className="mr-auto">Publicación creada</strong>
  </Toast.Header>
  <Toast.Body>Su publicación ha sido creada exitosamente</Toast.Body>
</Toast>

<Toast show={showErrorToast} onClose={(handleClose) => setShowErrorToast(false)} autohide delay={3000}>
  <Toast.Header>
    <strong className="mr-auto">Error en la publicación</strong>
  </Toast.Header>
  <Toast.Body>Debe llenar todos los campos antes de crear una publicación</Toast.Body>
</Toast>

</Modal.Footer>
</Modal>

        
    );
    };
  
    export default ModalCrearPublicacion;