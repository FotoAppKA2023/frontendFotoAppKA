import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postAlbum } from "../api/apiAlbums";

const BackHelper = () => {
  const [formValues, setFormValues] = useState({
    title:'',
    description:'',
    images: ''
  });
  const onChangeText = (e)=>{
    //console.log(e.target.name,e.target.value);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const onChangeImages = (e)=>{
    console.log(e.target.name,e.target.files);
    setFormValues({
      ...formValues,
      images: e.target.files
    })
  }

  const onSubmitForm = async (e)=>{
    e.preventDefault();
    console.log('Enviando datos:..',formValues);
    try {

      const backResponse = await postAlbum(formValues);  
      console.log('backResponse:..',backResponse)
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div className="w-75 ms-auto me-auto">
      <h5>BackHelper</h5>

      <Form onSubmit={onSubmitForm}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title:..</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="title" onChange={onChangeText} />
          <Form.Text className="text-muted">
            Texto de apoyo...
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesciption">
          <Form.Label>Description:..</Form.Label>
          <Form.Control type="text" placeholder="Desciption" name="description" onChange={onChangeText} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImages">
          <Form.Label>Images:..</Form.Label>
          <Form.Control type="file" placeholder="Select Images" name="images" onChange={onChangeImages} multiple />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BackHelper;
