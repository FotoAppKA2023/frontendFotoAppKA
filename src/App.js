
//iniciando con la rama dev

import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { useState } from "react";
import PhotoContext from "./context/PhotoContext";

const initDataPhotoUser = {
  nombre: '',
  apellido:'',
  email:'',
  isLogged: false
}

const initDataAdminUser = {
  nombre: '',
  apellido:'',
  email:'',
  isLogged: false
}


const App = () => {
  const [dataPhotoUser, setDataPhotoUser] = useState(initDataPhotoUser);
  const [dataAdminUser, setDataAdminUser] = useState(initDataAdminUser);
  return (
    <div className="">
      <PhotoContext.Provider value={[dataPhotoUser,setDataPhotoUser,dataAdminUser,setDataAdminUser]} >

      <RouterProvider router={router} />

      </PhotoContext.Provider>
      
      
    </div>
  );
}

export default App;
