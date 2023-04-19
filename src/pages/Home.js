import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getSaludo } from '../api/apiSaludo';
import RollosPopulares from '../components/RollosPopulares/RollosPopulares';

const Home = () => {
	const [miSaludo, setMiSaludo] = useState('');

	const handleSaludo = async () => {
		console.log('Perdiremos saludo:..');
		try {
			const response = await getSaludo();
			console.log('response:..', response);
			if (response?.data) {
				setMiSaludo(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			Home
			<Link to={'/about'}>ABOUT</Link>
			<RollosPopulares />
			<br />
			<button onClick={handleSaludo} className="btn btn-primary">
				GetSaludo
			</button>
			{miSaludo && <h5>{miSaludo}</h5>}
		</div>
	);
};

export default Home;
