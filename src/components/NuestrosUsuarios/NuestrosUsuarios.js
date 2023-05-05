import * as React from 'react';
import { Card, Image } from 'react-bootstrap';
import './NuestrosUsuarios.css';
import comillas from '../../assets/imgNuestrosUsuarios/comillas.png';
import avatar from '../../assets/imgNuestrosUsuarios/avatarUsuario.png';

const NuestrosUsuarios = () => {
	return (
		<>
			<section style={{position: 'relative'}} id="nuestrosUsuarios">
				<h2 className="usuariosH2">
					Amamos a nuestros usuarios y ellos nos aman a nosotros
				</h2>
				<div className="usuarios">
					<Card style={{ width: '20rem' }} id="cardsUsuarios">
						<Card.Img variant="top" id="imgUsuarioCard" src={comillas} />
						<Card.Body className="">
							<Card.Title className="lineasCard"></Card.Title>
							<Card.Text className="textUsuario">
								Se agradece la disposición que tienen para ayudar a solucionar
								inconvenientes informáticos. Sigan adelante!!
							</Card.Text>
						</Card.Body>
						<Card.Body className="d-flex flex-row">
							<Image src={avatar} className="roundedCircle avatarUsuario" />
							<div className="infoUsuario">
								<p className="nombreUsuario">Juan Lopez</p>
								<p className="miembroDesde">Usuario desde 1998</p>
							</div>
						</Card.Body>
					</Card>
					<Card style={{ width: '20rem' }} id="cardsUsuarios">
						<Card.Img variant="top" id="imgUsuarioCard" src={comillas} />
						<Card.Body className="">
							<Card.Title className="lineasCard"></Card.Title>
							<Card.Text className="textUsuario">
								Se agradece la disposición que tienen para ayudar a solucionar
								inconvenientes informáticos. Sigan adelante!!
							</Card.Text>
						</Card.Body>
						<Card.Body className="d-flex flex-row">
							<Image src={avatar} className="roundedCircle avatarUsuario" />
							<div className="infoUsuario">
								<p className="nombreUsuario">Juan Lopez</p>
								<p className="miembroDesde">Usuario desde 1998</p>
							</div>
						</Card.Body>
					</Card>
					<Card style={{ width: '20rem' }} id="cardsUsuarios">
						<Card.Img variant="top" id="imgUsuarioCard" src={comillas} />
						<Card.Body className="">
							<Card.Title className="lineasCard"></Card.Title>
							<Card.Text className="textUsuario">
								Se agradece la disposición que tienen para ayudar a solucionar
								inconvenientes informáticos. Sigan adelante!!
							</Card.Text>
						</Card.Body>
						<Card.Body className="d-flex flex-row">
							<Image src={avatar} className="roundedCircle avatarUsuario" />
							<div className="infoUsuario">
								<p className="nombreUsuario">Juan Lopez</p>
								<p className="miembroDesde">Usuario desde 1998</p>
							</div>
						</Card.Body>
					</Card>
				</div>
			</section>
		</>
	);
};

export default NuestrosUsuarios;
