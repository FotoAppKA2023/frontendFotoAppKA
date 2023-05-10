import * as React from 'react';
import Foto from '../../assets/imgRollosPopulares/Rollo1.png';
import wallpaper from '../../assets/imgRollosPopulares/wallpaper.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import './PerfilUsuario.css';
import usePhoto from '../../hooks/usePhoto';
import { useEffect } from 'react';
import { getMyAlbumsByIdPhotoUser } from '../../api/apiAlbums';
import { useState } from 'react';
import CardAlbumMain from '../Home/CardAlbumMain';
import { myId } from '../../lib/myLib';
const PerfilUsuario = () => {
	const [misAlbums, setMisAlbums] = useState([]);
	const [dataPhotoUser] = usePhoto();
	useEffect(() => {
		cargarDatos();
		console.log(dataPhotoUser);
	}, []);
	const cargarDatos = async () => {
		try {
			const result = await getMyAlbumsByIdPhotoUser(dataPhotoUser?.id);
			console.log('respuesta del backend:', result);
			if (result?.data?.result) {
				setMisAlbums([...result.data.result]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<section>
				<div className="userPhotos">
					<div
						style={{
							width: '100%',
						}}
					>
						<Link>
							<Image src={wallpaper} id="userWallpaper" />
						</Link>
					</div>
					<div className="userInfo d-flex flex-row align-items-center container">
						<Image src={Foto} roundedCircle className="profileImg" />
						<p className="profileName">{dataPhotoUser.nombre}</p>
					</div>
				</div>
				<div>
					<p></p>
					<div className="container">
						<h4 className="ms-4">Publicaciones</h4>
						<div className="d-flex flex-wrap gap-5">
							{misAlbums.map((item) => (
								<CardAlbumMain key={myId()} datos={item} />
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PerfilUsuario;
