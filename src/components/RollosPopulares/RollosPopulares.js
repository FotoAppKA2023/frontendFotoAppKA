import * as React from 'react';
import { Card } from 'react-bootstrap';
import './RollosPopulares.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const RollosPopulares = () => {
	return (
		<>
			<section id="rollosFav">
				<h2 className="h2Rollos">Rollos Populares</h2>
				<div id="cardsRollos">
					<Card style={{ width: '18rem' }} className="cardsPopulares">
						<Card.Img
							variant="top"
							src="../../assets/imgRollosPopulares/Rollo1.png"
						/>
						<Card.Body className="d-flex flex-row justify-content-between">
							<Card.Title className="nombreRollo">Rp 168.300</Card.Title>
							<Link>
								<AiOutlineArrowRight id="linkRow" />
							</Link>
						</Card.Body>
						<Card.Text className="descriptCard">
							Kodak colorplus-Rollfilm ISO 200, 36exp
						</Card.Text>
					</Card>
					<Card style={{ width: '18rem' }} className="cardsPopulares">
						<Card.Img
							variant="top"
							src="../../assets/imgRollosPopulares/Rollo2.png"
						/>
						<Card.Body className="d-flex flex-row justify-content-between">
							<Card.Title className="nombreRollo">Rp 168.300</Card.Title>
							<Link>
								<AiOutlineArrowRight id="linkRow" />
							</Link>
						</Card.Body>
						<Card.Text className="descriptCard">
							Kodak colorplus-Rollfilm ISO 200, 36exp
						</Card.Text>
					</Card>
					<Card style={{ width: '18rem' }} className="cardsPopulares">
						<Card.Img
							variant="top"
							src="../../assets/imgRollosPopulares/Rollo3.png"
						/>
						<Card.Body className="d-flex flex-row justify-content-between">
							<Card.Title className="nombreRollo">Rp 168.300</Card.Title>
							<Link>
								<AiOutlineArrowRight id="linkRow" />
							</Link>
						</Card.Body>
						<Card.Text className="descriptCard">
							Kodak colorplus-Rollfilm ISO 200, 36exp
						</Card.Text>
					</Card>
					<Card style={{ width: '18rem' }} className="cardsPopulares">
						<Card.Img
							variant="top"
							src="../../assets/imgRollosPopulares/Rollo4.png"
						/>
						<Card.Body className="d-flex flex-row justify-content-between">
							<Card.Title className="nombreRollo">Rp 168.300</Card.Title>
							<Link>
								<AiOutlineArrowRight id="linkRow" />
							</Link>
						</Card.Body>
						<Card.Text className="descriptCard">
							Kodak colorplus-Rollfilm ISO 200, 36exp
						</Card.Text>
					</Card>
				</div>
			</section>
		</>
	);
};

export default RollosPopulares;
