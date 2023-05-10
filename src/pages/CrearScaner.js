import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UploadImage from "../components/UploadImage/UploadImage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createNewScaner } from "../api/apiScaners";

const initDataScaner= {
  marca:'',
  modelo:'',
  tipo:'',
  imagen: null
}

const CrearScaner = () => {
  const [dataImg, setDataImg] = useState(null);
  const [dataScaner, setDataScaner] = useState(initDataScaner);

  useEffect(() => {
    if (dataImg && dataImg !== [] && dataImg !== null) {
      console.log("lista la img para subir:..", dataImg);
      setDataScaner({
        ...dataScaner,
        imagen: dataImg
      })
    }
  }, [dataImg]);

  const handleChange= (e)=>{
        //console.log(e.target.name,e.target.value);
        setDataScaner({
          ...dataScaner,
          [e.target.name]: e.target.value
        })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log('Enviando datos:',dataScaner);
    const formData = new FormData();
    //formData.append("imagen", foto.file);
    Object.entries(dataScaner).forEach(([key, value]) => {
      formData.append(key, value);
      //console.log(key,value);
    });

    const response = await createNewScaner(formData);
    console.log('response Back:..',response);
  }

  return (
    <div>
        <Navbar sectionAdmin={true} />
      <h2 className=" text-white bg-warning text-center p-2">Crear Scaner</h2>
      <Form className="ms-auto me-auto w-75 mb-3" onSubmit={handleSubmit}>
        <UploadImage setDataImg={setDataImg} />
        <label className="my-1 fs-5" htmlFor="marca">Marca:</label>
        <Form.Select name="marca" value={dataScaner.marca} onChange={handleChange} aria-label="Default select example">
          <option>select</option>
          <option value="marca1">Marca1</option>
          <option value="marca2">Marca2</option>
          <option value="marca3">Marca3</option>
        </Form.Select>
        <label className="my-1 fs-5" htmlFor="modelo">Modelo:</label>
        <Form.Select name="modelo" value={dataScaner.modelo} onChange={handleChange} aria-label="Default select example">
          <option>select</option>
          <option value="modelo1">Modelo1</option>
          <option value="modelo2">Modelo2</option>
          <option value="modelo3">Modelo3</option>
        </Form.Select>
        <label className="my-1 fs-5" htmlFor="tipo">Tipo:</label>
        <Form.Select name="tipo" value={dataScaner.tipo} onChange={handleChange} aria-label="Default select example">
          <option>select</option>
          <option value="tipo1">Tipo1</option>
          <option value="tipo2">Tipo2</option>
          <option value="tipo3">Tipo3</option>
        </Form.Select>
        <Button className="mt-3" variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      <Footer />
    </div>
  )
}

export default CrearScaner