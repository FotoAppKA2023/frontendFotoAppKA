import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UploadImage from "../components/UploadImage/UploadImage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createNewScaner } from "../api/apiScaners";
import noImg from "../assets/imagen-placeholder.png";
import SuccessToast from "../components/SuccessToast/SuccessToast";

const initDataScaner= {
  marca:'',
  modelo:'',
  tipo:'',
  imagen: null
}

const CrearScaner = () => {
  const [dataImg, setDataImg] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
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
    if (response?.status===200){
      setShowSuccess(true);
    }
  }

  const handleCloseToast= ()=>{
    setShowSuccess(false);
  }
  return (
    <div>
        <Navbar sectionAdmin={true} />
      <h2 className=" text-white bg-warning text-center p-2">Crear Scanner</h2>
      <Form className="container col-12 col-md-6 ms-auto me-auto mb-3" onSubmit={handleSubmit}>
      {!dataImg && (
          <img
            src={noImg}
            style={{ width: "100px", marginLeft: "45%" }}
            alt=""
          />
        )}
        <UploadImage setDataImg={setDataImg} />
        <label className="my-1 fs-5" htmlFor="marca">Marca:</label>
        <Form.Control
          name="marca"
          value={dataScaner.marca}
          onChange={handleChange}
          type="text"
        />
        
        <label className="my-1 fs-5" htmlFor="modelo">Modelo:</label>
        <Form.Control
          name="modelo"
          value={dataScaner.modelo}
          onChange={handleChange}
          type="text"
        />
        
        <label className="my-1 fs-5" htmlFor="tipo">Tipo:</label>
        <Form.Control
          name="tipo"
          value={dataScaner.tipo}
          onChange={handleChange}
          type="text"
        />
        
        <Button className="mt-3" variant="primary" type="submit">
        Save
      </Button>
      <SuccessToast msg={'Scanner creado con Exito'} isShowToast={showSuccess} handleCloseToast={handleCloseToast}/>
      </Form>
      <Footer />
    </div>
  )
}

export default CrearScaner