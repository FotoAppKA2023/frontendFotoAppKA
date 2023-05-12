
//iniciando con la rama dev

import { RouterProvider } from "react-router";
import { routerPrivate, routerPublic } from "./routes/routes";
import { useState } from "react";
import PhotoContext from "./context/PhotoContext";

const initDataPhotoUser = {
  nombre: '',
  apellido:'',
  email:'',
  id:'',
  isLogged: false
}

const initDataAdminUser = {
  nombre: '',
  apellido:'',
  email:'',
  id:'',
  isLogged: false
}


const App = () => {
  const [dataPhotoUser, setDataPhotoUser] = useState(initDataPhotoUser);
  const [dataAdminUser, setDataAdminUser] = useState(initDataAdminUser);
  const router = dataPhotoUser.isLogged? routerPrivate:routerPublic;
  return (
    <div className="">
      <PhotoContext.Provider value={[dataPhotoUser,setDataPhotoUser,dataAdminUser,setDataAdminUser]} >

      <RouterProvider router={router} />

      </PhotoContext.Provider>
      
      
    </div>
  );
}

export default App;
