//iniciando con la rama dev

import { RouterProvider } from "react-router";
import {
  routerPhotoUser,
  routerPublic,
  routerAdminUser,
} from "./routes/routes";
import { useState, useEffect } from "react";
import PhotoContext from "./context/PhotoContext";

const initDataPhotoUser = {
  nombre: "",
  apellido: "",
  email: "",
  id: "",
  isLogged: false,
  token: "",
  tokenActive: false
};

const initDataAdminUser = {
  nombre: "",
  apellido: "",
  email: "",
  id: "",
  isLogged: false,
  token: "",
  tokenActive: false
};

const App = () => {
  const [dataPhotoUser, setDataPhotoUser] = useState(initDataPhotoUser);
  const [dataAdminUser, setDataAdminUser] = useState(initDataAdminUser);
  const [router, setRouter] = useState(routerPublic);

  useEffect(() => {
    if (dataAdminUser.isLogged) {
      setRouter(routerAdminUser);
    }
    if (dataPhotoUser.isLogged) {
      setRouter(routerPhotoUser);
    }
  }, [dataAdminUser.isLogged, dataPhotoUser.isLogged]);

  return (
    <div className="">
      <PhotoContext.Provider
        value={[
          dataPhotoUser,
          setDataPhotoUser,
          dataAdminUser,
          setDataAdminUser,
          initDataPhotoUser,
          initDataAdminUser,
        ]}
      >
        <RouterProvider router={router} />
      </PhotoContext.Provider>
    </div>
  );
};

export default App;
