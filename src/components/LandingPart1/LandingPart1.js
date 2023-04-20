import React from "react";
import "./LandingPart1.css";
<<<<<<< HEAD
=======
import { Container, Row, Col } from 'react-bootstrap';
>>>>>>> landingPart2

const LandingPart1 = () => {
  return (
    <Container fluid className="landing-page">
      <div className="overlay"></div>
<<<<<<< HEAD
      <div className="landing-header">
        <h1>Conviértete en experto capturando momentos que sobresalen</h1>
      </div>
      <div className="landing-footer">
        <p className="left-align">
          La película de cine encarretada para foto fija otorga una nueva arista
          al mundo análogo, desde los tonos, la versatilidad y su funcionalidad.
        </p>
        <p className="right-align">Kodak vision &rarr;</p>
      </div>
    </div>
=======
      <Row>
        <Col>
          <div className="landing-header">
            <h1>Conviértete en experto capturando momentos que sobresalen</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="landing-footer">
            <p className="left-align">
              La película de cine encarretada para foto fija otorga una nueva arista
              al mundo análogo, desde los tonos, la versatilidad y su funcionalidad.
            </p>
            <p className="right-align">Kodak vision &rarr;</p>
          </div>
        </Col>
      </Row>
    </Container>
>>>>>>> landingPart2
  );
};

export default LandingPart1;
