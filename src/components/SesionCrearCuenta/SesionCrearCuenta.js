import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./SesionCrearCuenta.css";
import imgPohto from "../../assets/imgSesionCrearCuenta/imgPhoto.png";
import googleIcon from "../../assets/imgSesionCrearCuenta/logo_google_icon.png";
import { loginPhotoUser } from "../../api/apiPhotoUser";
import usePhoto from "../../hooks/usePhoto";
import { useNavigate } from "react-router";
import ErrorToast from "./ErrorToast";

const formLabels = {
  name: "Nombre*",
  email: "Correo*",
  password: "Contraseña*",
  confirmPassword: "Confirmar contraseña*",
  acceptTerms: "Acepto los términos y condiciones",
};

const FormField = ({ label, type, placeholder, value, onChange }) => (
  <Form.Group controlId={`formBasic${label}`}>
    <Form.Label>{formLabels[label]}</Form.Label>
    <Form.Control
      type={type}
      placeholder={placeholder}
      name={label}
      onChange={onChange}
      value={value}
    />
  </Form.Group>
);

const Login = () => {
  const navigate = useNavigate();
  const [
    dataPhotoUser,
    setDataPhotoUser,
    dataAdminUser,
    setDataAdminUser,
    initDataPhotoUser,
    initDataAdminUser,
    router,
    setRouter,
    routerPublic,
    routerPhotoUser
  ] = usePhoto();
  const [isRegistering, setIsRegistering] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);
  const [errorForm, setErrorForm] = useState("");
  const [dataLogin, setDataLogin] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    isRegister: isRegistering,
    tyc: false,
  });
  const formTitle = isRegistering ? "Crear cuenta" : "Iniciar sesión";
  const registerLink = isRegistering
    ? "¿Ya tienes una cuenta? Iniciar sesión"
    : "¿No tienes cuenta? Crear cuenta";

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle form submission
    const resultValForm = validateForm();

    if (resultValForm?.resultValidate === false) {
      setErrorForm(resultValForm.msg || "");
      setIsShowToast(true);
      return;
    }

    console.log("Enviando dataLogin:", dataLogin);
    const resultLogin = await loginPhotoUser(dataLogin);
    console.log("resultLogin:..", resultLogin);
    const retrivedDataPhotoUser = {
      ...resultLogin?.data?.result?.dataPhotoUser,
    };
    const backToken = resultLogin?.data?.result?.token;
    if (retrivedDataPhotoUser._id) {
      if(dataAdminUser.isLogged){
        setDataAdminUser(initDataAdminUser);
      }
      setRouter(routerPhotoUser);
      setDataPhotoUser({
        ...dataPhotoUser,
        nombre: retrivedDataPhotoUser.nombre,
        email: retrivedDataPhotoUser.email,
        id: retrivedDataPhotoUser._id,
        isLogged: true,
        token: backToken ? backToken : "",
        tokenActive: true,
      });
      window.localStorage.setItem("tokenUser", backToken ? backToken : "");
    }
  };
  useEffect(() => {
    if (dataPhotoUser.isLogged&&(router===routerPhotoUser)) {
      console.log("El usuario ya esta logeado(SesionCrearCuenta):..");
      console.log('router:..',router?.routes)
      navigate("/");
    }
  }, [dataPhotoUser.isLogged,router]);

  useEffect(() => {
    //console.log("ValidandoForm:..", isShowToast);
  }, [isShowToast]);

  const handleToggleForm = () => {
    setDataLogin({
      ...dataLogin,
      isRegister: !isRegistering,
    });
    setIsRegistering(!isRegistering);
  };

  const handleCloseToast = () => {
    setIsShowToast(false);
  };

  const handleChange = (e) => {
    //console.log(e.target.name,e.target.value);
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const expresionEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let resultValidate = {
      msg: "",
      resultValidate: true,
    };

    if (!dataLogin.email || !dataLogin.password) {
      resultValidate = {
        msg: "Es necesario llenar los campos obligatorios",
        resultValidate: false,
      };
      return resultValidate;
    }

    if (isRegistering && (!dataLogin.confirmPassword || !dataLogin.nombre)) {
      resultValidate = {
        msg: "Es necesario llenar los campos obligatorios",
        resultValidate: false,
      };
      return resultValidate;
    }

    if (isRegistering && dataLogin.password !== dataLogin.confirmPassword) {
      resultValidate = {
        msg: "El password debe coincidir correctamente",
        resultValidate: false,
      };
      return resultValidate;
    }

    if (!expresionEmail.test(String(dataLogin.email).toLowerCase())) {
      resultValidate = {
        msg: "El e-mail debe tener un formato valido",
        resultValidate: false,
      };
      return resultValidate;
    }

    if (dataLogin.password.length < 8) {
      resultValidate = {
        msg: "El password debe tener minimo 8 caracteres",
        resultValidate: false,
      };
      return resultValidate;
    }

    if (isRegistering && !dataLogin.tyc) {
      resultValidate = {
        msg: "Es necesario aceptar los términos y condiciones",
        resultValidate: false,
      };
      return resultValidate;
    }
  };
  const handleTYC = (e) => {
    //console.log(e.target.checked);
    setDataLogin({
      ...dataLogin,
      tyc: e.target.checked,
    });
  };

  return (
    <div className="login-page">
      <Container>
        <Row>
          <Col className="p-3 m-3">
            <div className="header">
              <h1 className="filmoteca">FILMOTECA</h1>
            </div>
            <div className="">
              <h2 className="title">{formTitle}</h2>
              {errorForm && (
                <ErrorToast
                  msg={errorForm}
                  isShowToast={isShowToast}
                  handleCloseToast={handleCloseToast}
                />
              )}
              <a
                className="google-link"
                href="https://accounts.google.com/Login"
              >
                <img
                  className="google-logo"
                  src={googleIcon}
                  alt="Google Icon"
                />
                Iniciar sesión con Google
              </a>

              <Form onSubmit={handleSubmit}>
                {isRegistering && (
                  <FormField
                    label="nombre"
                    type="text"
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                  />
                )}

                <FormField
                  label="email"
                  type="email"
                  onChange={handleChange}
                  placeholder="Ingresa tu correo"
                />

                <FormField
                  label="password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Contraseña"
                />

                {isRegistering && (
                  <FormField
                    label="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    placeholder="Confirma tu contraseña"
                  />
                )}

                {isRegistering && (
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      onChange={handleTYC}
                      value={dataLogin.tyc}
                      label={formLabels.acceptTerms}
                    />
                  </Form.Group>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  className="d-block my-2"
                  type="submit"
                >
                  {formTitle === "Iniciar sesión"
                    ? "Iniciar sesión"
                    : "Registrarme"}
                </Button>
              </Form>
              <p className="register-link" onClick={handleToggleForm}>
                {registerLink}
              </p>
            </div>
          </Col>

          <Col className="p-3 m-3">
            <div className="imgPhoto">
              <img
                style={{ width: "40vw", height: "50vh" }}
                src={imgPohto}
                alt="imgPhoto"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
