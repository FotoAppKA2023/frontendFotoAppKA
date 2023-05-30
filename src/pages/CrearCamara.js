import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UploadImage from "../components/UploadImage/UploadImage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postNewCamara } from "../api/apiCamaras";
import noImg from "../assets/imagen-placeholder.png";
import SuccessToast from "../components/SuccessToast/SuccessToast";

const initDataCamara = {
  marca: "",
  modelo: "",
  formato: "",
  tipo: "",
  imagen: null,
};

const CrearCamara = () => {
  const [dataImg, setDataImg] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [dataCamara, setDataCamara] = useState(initDataCamara);

  useEffect(() => {
    if (dataImg && dataImg !== [] && dataImg !== null) {
      console.log("lista la img para subir:..", dataImg);
      setDataCamara({
        ...dataCamara,
        imagen: dataImg,
      });
    }
  }, [dataImg]);

  const handleChange = (e) => {
    //console.log(e.target.name,e.target.value);
    setDataCamara({
      ...dataCamara,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando datos:", dataCamara);
    const formData = new FormData();
    //formData.append("imagen", foto.file);
    Object.entries(dataCamara).forEach(([key, value]) => {
      formData.append(key, value);
      //console.log(key,value);
    });

    const response = await postNewCamara(formData);
    console.log("response Back:..", response);
    if (response?.status===200){
      setShowSuccess(true);
    }
  };

  const handleCloseToast= ()=>{
    setShowSuccess(false);
  }

  return (
    <div>
      <Navbar sectionAdmin={true} />
      <h2 className=" text-white bg-warning text-center p-2">Crear Camara</h2>
      <Form
        className="container col-12 col-md-6 ms-auto me-auto mb-3"
        onSubmit={handleSubmit}
      >
        {!dataImg && (
          <img
            src={noImg}
            style={{ width: "100px", marginLeft: "45%" }}
            alt=""
          />
        )}
        <UploadImage setDataImg={setDataImg} />
        <label className="my-1 fs-5" htmlFor="marca">
          Marca:
        </label>
        <Form.Control
          name="marca"
          value={dataCamara.marca}
          onChange={handleChange}
          type="text"
        />

        <label className="my-1 fs-5" htmlFor="modelo">
          Modelo:
        </label>
        <Form.Control
          name="modelo"
          value={dataCamara.modelo}
          onChange={handleChange}
          type="text"
        />
        
        <label className="my-1 fs-5" htmlFor="formato">
          Formato:
        </label>
        <Form.Control
          name="formato"
          value={dataCamara.formato}
          onChange={handleChange}
          type="text"
        />
        
        <label className="my-1 fs-5" htmlFor="tipo">
          Tipo Lente:
        </label>
        <Form.Control
          name="tipo"
          value={dataCamara.tipo}
          onChange={handleChange}
          type="text"
        />
        
        <Button className="mt-3" variant="primary" type="submit">
          Save
        </Button>
        
        <SuccessToast msg={'Camara creada con Exito'} isShowToast={showSuccess} handleCloseToast={handleCloseToast}/>
      </Form>

      <Footer />
    </div>
  );
};

export default CrearCamara;
