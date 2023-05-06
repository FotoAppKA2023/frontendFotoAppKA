import React, { useState } from 'react';
import { Modal, Button, Form, Card, Toast } from 'react-bootstrap'; // Agregamos Toast a los imports
import { useDropzone } from 'react-dropzone';
import { BsCamera, BsPrinter, BsPlusCircleFill } from 'react-icons/bs';
import { MdOutlineCameraRoll } from 'react-icons/md';
import Selector from './Selector';
import usePhoto from '../../hooks/usePhoto';
import { postAlbum } from '../../api/apiAlbums';
import { useNavigate } from 'react-router';

/**
 * This is a React component that handles state changes for a modal used to create a new publication.
 */

const initDataSelections = {
  Camara:'',
  Scaner:'',
  Rollo:''
}


const ModalCrearPublicacion = ({ show, handleClose }) => {
  const [dataPhotoUser] = usePhoto();
  const [descripcion, setDescripcion] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [dataSelections, setDataSelections]= useState(initDataSelections);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const navigate = useNavigate();

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  /**
   * This function handles form submission and checks if certain fields are filled out before resetting
   * them.
   * @param event - The event parameter is an object that represents the event that triggered the
   * function. In this case, it is the form submission event. The event object contains information
   * about the event, such as the target element, the type of event, and any data associated with the
   * event.
   */

  const enviarDataForm = async()=>{
    try {
      console.log('Descripcion:..',descripcion);
      console.log('Imagenes:..',imagenes);
      console.log('DataSelections:..',dataSelections);
      console.log('photoUser ID:..',dataPhotoUser.id);
      const formValues = {
        description: descripcion,
        images: [...imagenes],
        photoUser_id: dataPhotoUser.id,
        camera_id: dataSelections.Camara,
        scaner_id: dataSelections.Scaner,
        rollo_id: dataSelections.Rollo,
      }
      const resultEnvio = await postAlbum(formValues);
      console.log('resultEnvio:..',resultEnvio);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!descripcion || imagenes.length === 0 || !opcionSeleccionada) {
      setShowErrorToast(true);
    } else {
      await enviarDataForm();
      setShowSuccessToast(true);
      setDescripcion('');
      setImagenes([]);
      setOpcionSeleccionada('');
      setDataSelections(initDataSelections);
      //navigate('/');
      //handleClose();
    }
  };
 /**
  * This function adds accepted files to an array of images.
  * @param acceptedFiles - acceptedFiles is an array of files that have been dropped or selected by the
  * user. In this code snippet, it is being spread into the existing array of images (imagenes) using
  * the spread operator (...) and then set as the new state using the setImagenes function.
  */
 
  const handleDrop = (acceptedFiles) => {
    setImagenes([...imagenes, ...acceptedFiles]);
  };

  /* `const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });` is
  using the `useDropzone` hook from the `react-dropzone` library to create a dropzone area for the
  user to upload images. It returns an object with three properties: `getRootProps`,
  `getInputProps`, and `isDragActive`. */
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
       onClick={() => setOpcionSeleccionada('Scaner')}
       style={{ color: opcionSeleccionada === 'Scaner' ? 'blue' : 'black' }}
        />
      <MdOutlineCameraRoll 
      size={30}
      onClick={() => setOpcionSeleccionada('Rollo')}
      style={{ color: opcionSeleccionada === 'Rollo' ? 'blue' : 'black' }}
        />
    </div>
    {opcionSeleccionada && ( <Selector category={opcionSeleccionada} dataSelections={dataSelections} setDataSelections={setDataSelections}/>)}
    {dataSelections.Camara && <h6 className='text-center'>Camara: <span className='text-secondary'>{dataSelections.Camara}</span> </h6>}
    {dataSelections.Scaner && <h6 className='text-center'>Scaner: <span className='text-secondary'>{dataSelections.Scaner}</span></h6>}
    {dataSelections.Rollo && <h6 className='text-center'>Rollo: <span className='text-secondary'>{dataSelections.Rollo}</span></h6>}
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

<Toast show={showErrorToast} onClose={() => setShowErrorToast(false)} autohide delay={3000}>
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