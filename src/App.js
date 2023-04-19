
//iniciando con la rama dev

import { RouterProvider } from "react-router";
import { router } from "./routes/routes";



const App = () => {
  return (
    <div className="">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
