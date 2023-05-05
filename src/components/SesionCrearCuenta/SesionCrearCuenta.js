import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./SesionCrearCuenta.css";
import imgPohto from "../../assets/imgSesionCrearCuenta/imgPhoto.png";
import googleIcon from "../../assets/imgSesionCrearCuenta/logo_google_icon.png";
import { loginPhotoUser } from "../../api/apiPhotoUser";
import usePhoto from "../../hooks/usePhoto";
import { useNavigate } from "react-router";

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
  const [dataPhotoUser, setDataPhotoUser] = usePhoto();
  const [isRegistering, setIsRegistering] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    isRegister: isRegistering,
  });
  const formTitle = isRegistering ? "Crear cuenta" : "Iniciar sesión";
  const registerLink = isRegistering
    ? "¿Ya tienes una cuenta? Iniciar sesión"
    : "¿No tienes cuenta? Crear cuenta";

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle form submission
    console.log("Enviando dataLogin:", dataLogin);
    const resultLogin = await loginPhotoUser(dataLogin);
    console.log("resultLogin:..", resultLogin);
    const retrivedDataPhotoUser = { ...resultLogin?.data?.result?.dataPhotoUser };
    if (retrivedDataPhotoUser) {
      setDataPhotoUser({
        ...dataPhotoUser,
        nombre: retrivedDataPhotoUser.nombre,
        email: retrivedDataPhotoUser.email,
        id: retrivedDataPhotoUser._id,
        isLogged: true,
      });
      navigate('/');
    }
  };

  const handleToggleForm = () => {
    setDataLogin({
      ...dataLogin,
      isRegister: !isRegistering,
    });
    setIsRegistering(!isRegistering);
  };

  const handleChange = (e) => {
    //console.log(e.target.name,e.target.value);
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
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
            <div className="formLogin">
              <h2 className="title">{formTitle}</h2>
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
                      label={formLabels.acceptTerms}
                    />
                  </Form.Group>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  className="d-block"
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
