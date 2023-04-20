import React from 'react';
import './LandingPart2.css';
import { Container, Row, Col } from 'react-bootstrap';

const LandingPart2 = () => {
  return (
    <div className="landing-part2">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="landing-part2-title">
              Conoce más sobre nosotros
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col lg={8}>
            <p className="landing-part2-text">
              Con fotoApp tienes acceso a una biblioteca de rollos con información de su calidad y muchos ejemplos de usos en diferentes escenarios, también podrás subir y compartir tus recuerdos, con información de cómo llegaste a ese resultado.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col lg={2} > 
            <p className="landing-part2-leer">
              Leer más &rarr;
            </p>
          </Col>
        </Row>
        <Row className="mt-5"> 
          <Col lg={4}>
            <img src={process.env.PUBLIC_URL + '/img1.png'} className="landing-part2-img" alt="img1" />
          </Col>
          <Col lg={4}>
            <img src={process.env.PUBLIC_URL + '/img2.png'} className="landing-part2-img" alt="img2" />
          </Col>
          <Col lg={4}> 
            <img src={process.env.PUBLIC_URL + '/img3.png'} className="landing-part2-img" alt="img3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPart2;
