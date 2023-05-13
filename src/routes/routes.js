import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import About from '../pages/About';
import BackHelper from '../pages/BackHelper';
import CrearRollo from '../pages/CrearRollo';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Dashboard from '../pages/Dashboard';
import CrearScaner from '../pages/CrearScaner';
import CrearCamara from '../pages/CrearCamara';
import AlbumDesplegado from '../pages/albumDesplegado';
import UserProfile from '../pages/UserProfile';
import SeccionRollos from '../components/SeccionRollos/SeccionRollos';


export const routerPublic = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Login />,
	},
	{
		path: 'about/',
		element: <About />,
	},
	{
		path:'login/',
		element:<Login/>
	},
	{
		path: 'loginAdminUser/',
		element: <Admin />,
	}
]);

export const routerPrivate = createBrowserRouter([
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
		element: <BackHelper />,
	},
	{
		path: 'crear-rollo/',
		element: <CrearRollo />,
	},
	{
		path:'crear-scaner/',
		element:<CrearScaner/>
	},
	{
		path:'crear-camara/',
		element:<CrearCamara/>
	},
	{
		path:'login/',
		element:<Login/>
	},
	{
		path: 'loginAdminUser/',
		element: <Admin />,
	},
	{
		path: 'dashboard/',
		element: <Dashboard />,
	},
	{
		path: 'album-desplegado/',
		element: <AlbumDesplegado />,
	},
	{
		path: 'profile/',
		element: <UserProfile />,
	},
	{
		path: 'rollos/',
		element: <SeccionRollos />,
	},
]);
