import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import About from '../pages/About';
import BackHelper from '../pages/BackHelper';
import CrearRollo from '../pages/CrearRollo';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: 'about/',
		element: <About />,
	},
	{
		path: 'backHelper/',
		element: <BackHelper/>
	},
	{
		path:'crear-rollo/',
		element:<CrearRollo/>
	}
]);
