//import logo from './logo.svg';
//import './App.css';

//iniciando con la rama dev

import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import PhotoContext from "./context/PhotoContext";
import { useState } from "react";



const initialDataPhotoUser = {
  email:''
}

function App() {
  const [photoUser, setPhotoUser] = useState(initialDataPhotoUser);
  return (
    <div className="">
      <PhotoContext.Provider value={[
        photoUser,
        setPhotoUser,
        initialDataPhotoUser
      ]} >
      FrontEnd FotoAppKA
      <RouterProvider router={router} />
      </PhotoContext.Provider>
    </div>
  );
}

export default App;
