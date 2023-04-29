import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postAlbum } from "../api/apiAlbums";
import { getOnePhotoUser } from "../api/apiPhotoUser";

const BackHelper = () => {
  const [formValues, setFormValues] = useState({
    description: "",
    images: "",
    photoUser_id: "64488bcc2c6d1d8daf5a2002",
    camera_id: "",
    scaner_id: "",
    rollo_id: "",
  });
  const onChangeText = (e) => {
    //console.log(e.target.name,e.target.value);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeImages = (e) => {
    console.log(e.target.name, e.target.files);
    setFormValues({
      ...formValues,
      images: e.target.files,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log("Enviando datos:..", formValues);
    
    try {
      const backResponse = await postAlbum(formValues);
      console.log("backResponse:..", backResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrueba = async()=>{
    console.log('Haremos la consulta de un photoUser...');
    const result = await getOnePhotoUser('64488bcc2c6d1d8daf5a2002');
    console.log(result);
  }

  return (
    <div className="w-75 ms-auto me-auto">
      <h5>BackHelper</h5>

      <Form onSubmit={onSubmitForm}>
        <Form.Group className="mb-3" controlId="formBasicDesciption">
          <Form.Label>Description:..</Form.Label>
          <Form.Control
            type="text"
            placeholder="Desciption"
            name="description"
            onChange={onChangeText}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImages">
          <Form.Label>Images:..</Form.Label>
          <Form.Control
            type="file"
            placeholder="Select Images"
            name="images"
            onChange={onChangeImages}
            multiple
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCamaras">
          <Form.Label>Camaras:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="camera_id"
            onChange={onChangeText}
          >
            <option>Selecciona una Camara</option>
            <option value="Camara1">Camara1</option>
            <option value="Camara2">Camara2</option>
            <option value="Camara3">Camara3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicScaners">
          <Form.Label>Scaners:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="scaner_id"
            onChange={onChangeText}
          >
            <option>Selecciona un Scaner</option>
            <option value="Scaner1">Scaner1</option>
            <option value="Scaner2">Scaner2</option>
            <option value="Scaner3">Scaner3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRollos">
          <Form.Label>Rollos:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="rollo_id"
            onChange={onChangeText}
          >
            <option>Selecciona un Rollo</option>
            <option value="Rollo1">Rollo1</option>
            <option value="Rollo2">Rollo2</option>
            <option value="Rollo3">Rollo3</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div>
        <Button className="mt-3" onClick={handlePrueba}>Prueba getOnePhotoUser</Button>
      </div>
    </div>
  );
};

export default BackHelper;
