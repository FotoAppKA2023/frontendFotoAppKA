import * as React from 'react';
import './ExpertoFoto.css';
import { Button } from 'react-bootstrap';

const ExpertoFoto = () => {
	return (
		<>
			<section className="fotoContainer">
				<div className="fotoTexto">
					<div className="textExpertContainer">
						<h2 className="fotoH2">
							¿Listo para convertirte en un experto de la fotografia?
						</h2>
						<p className="fotoParragraph">
							«Tienes que pedirte más a ti mismo. Tienes que empezar a buscar
							fotografías que nadie más pueda hacer Tienes que coger tus
							herramientas e ir más allá.» William Albert Allard.
						</p>
					</div>
				</div>
				<div className="fotoAside">
					<Button id="fotoBtn">Iniciar sesion</Button>
				</div>
				<div className="circlesContainer">
					<div className="yellowCircle">
						<div className="whiteCircle">
							<div className="blackCircle"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ExpertoFoto;
