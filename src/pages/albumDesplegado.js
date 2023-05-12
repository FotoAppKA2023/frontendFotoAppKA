import React from "react";

const AlbumDesplegado = () => {
  return (
    <div class="card mb-3" style={{height:"100%", backgroundColor:"#3F3B38"}} >
  <div class="row g-0">
    <div class="col-md-4">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/USAF_photographer.jpg"  class="img-fluid rounded-start" alt="..." style={{width: "35%"}}/>
        
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">NOMBRE DEL USUARIO</h5>
        <p class="card-text">DESCRIPCION DEL ALBUM</p>
        <p class="card-text"><small class="text-body-secondary">feCHA DE PUBLICACION</small></p>
      </div>
    </div>
  </div>
</div>
  );
};

export default AlbumDesplegado;
