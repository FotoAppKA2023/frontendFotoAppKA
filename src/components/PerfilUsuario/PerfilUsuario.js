import * as React from "react";
import Foto from "../../assets/imgRollosPopulares/Rollo1.png";
import Image from "react-bootstrap/Image";

const PerfilUsuario = () => {
  return (
    <>
      <section>
        <div className="userPhotos">
          <div className="userWallpaper" style={{ width: "100%" }}>
            <Image src={Foto} style={{ width: "100%", height: "200px" }} />
          </div>
          <div className="userInfo d-flex flex-row align-items-center container">
            <Image src={Foto} style={{ width: "5%" }} roundedCircle />
            <p className="m-3">Juan perez</p>
          </div>
        </div>
        <div>
          <p></p>
          <div className="container">
            <h4 className="ms-4">Publicaciones</h4>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PerfilUsuario;
