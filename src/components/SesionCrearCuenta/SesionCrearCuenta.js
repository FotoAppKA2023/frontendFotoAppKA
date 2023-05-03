import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./SesionCrearCuenta.css";
import imgPohto from  "../../assets/imgSesionCrearCuenta/imgPhoto.png";
import googleIcon from '../../assets/imgSesionCrearCuenta/logo_google_icon.png';

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
    <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </Form.Group>
);

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const formTitle = isRegistering ? "Crear cuenta" : "Iniciar sesión";
  const registerLink = isRegistering ? "¿Ya tienes una cuenta? Iniciar sesión" : "¿No tienes cuenta? Crear cuenta";

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="login-page">
      
      <Container>
      
        <Row>
          <Col className="p-3 m-3">
          <div className="header">
        <h1 class="filmoteca">FILMOTECA</h1>
        </div>
          <div className="formLogin">
            <h2 className="title">{formTitle}</h2>
            <a className="google-link" href="https://accounts.google.com/Login"><img className="google-logo" src={googleIcon} alt="Google Icon" />Iniciar sesión con Google</a>


            <Form onSubmit={handleSubmit}>
              {isRegistering && <FormField label="name" type="text" placeholder="Ingresa tu nombre" />}

              <FormField label="email" type="email" placeholder="Ingresa tu correo" />

              <FormField label="password" type="password" placeholder="Contraseña" />

              {isRegistering && (
                <FormField label="confirmPassword" type="password" placeholder="Confirma tu contraseña" />
              )}
  
              {isRegistering && (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label={formLabels.acceptTerms} />
                </Form.Group>
              )}

              <Button variant="primary" size="lg" block type="submit">
                {formTitle === "Iniciar sesión" ? "Iniciar sesión" : "Registrarme"}
              </Button>
            </Form>
            <p className="register-link" onClick={handleToggleForm}>
              {registerLink}
            </p>
            </div>
          </Col>
        
        <Col  className="p-3 m-3">
            <div className="imgPhoto">
            <img src={imgPohto} alt="imgPhoto"></img>
            </div>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
