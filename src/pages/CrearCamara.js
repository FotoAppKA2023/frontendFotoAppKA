import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UploadImage from "../components/UploadImage/UploadImage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postNewCamara } from "../api/apiCamaras";


const initDataCamara= {
  marca:'',
  modelo:'',
  formato:'',
  tipo:'',
  imagen: null
}


const CrearCamara = () => {
  const [dataImg, setDataImg] = useState(null);
  const [dataCamara, setDataCamara] = useState(initDataCamara);

  useEffect(() => {
    if (dataImg && dataImg !== [] && dataImg !== null) {
      console.log("lista la img para subir:..", dataImg);
      setDataCamara({
        ...dataCamara,
        imagen: dataImg
      })
    }
  }, [dataImg]);

  const handleChange= (e)=>{
        //console.log(e.target.name,e.target.value);
        setDataCamara({
          ...dataCamara,
          [e.target.name]: e.target.value
        })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log('Enviando datos:',dataCamara);
    const formData = new FormData();
    //formData.append("imagen", foto.file);
    Object.entries(dataCamara).forEach(([key, value]) => {
      formData.append(key, value);
      //console.log(key,value);
    });

    const response = await postNewCamara(formData);
    console.log('response Back:..',response);
  }

  return (
    <div>
      <Navbar sectionAdmin={true} />
      <h2 className=" text-white bg-warning text-center p-2">Crear Camara</h2>
      <Form className="ms-auto me-auto w-75 mb-3" onSubmit={handleSubmit}>
        <UploadImage setDataImg={setDataImg} />
        <label className="my-1 fs-5" htmlFor="marca">Marca:</label>
        <Form.Select name="marca" value={dataCamara.marca} onChange={handleChange} aria-label="Default select example">
          <option>select</option>
          <option value="marca1">Marca1</option>
          <option value="marca2">Marca2</option>
          <option value="marca3">Marca3</option>
        </Form.Select>
        <label className="my-1 fs-5" htmlFor="modelo">Modelo:</label>
        <Form.Select name="modelo" value={dataCamara.modelo} onChange={handleChange} aria-label="Default select example">
          <option>select</option>
          <option value="modelo1">Modelo1</option>
          <option value="modelo2">Modelo2</option>
          <option value="modelo3">Modelo3</option>
        </Form.Select>
        <label className="my-1 fs-5" htmlFor="formato">Formato:</label>
        <Form.Select name="formato" value={dataCamara.formato} onChange={handleChange} aria-label="Default select example">
          <option>select</option>
          <option value="formato1">formato1</option>
          <option value="formato2">formato2</option>
          <option value="formato3">formato3</option>
        </Form.Select>
        <label className="my-1 fs-5" htmlFor="tipo">Tipo Lente:</label>
        <Form.Select name="tipo" value={dataCamara.tipo} onChange={handleChange} aria-label="Default select example">
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
  );
};

export default CrearCamara;
