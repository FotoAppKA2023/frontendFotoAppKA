import CardAlbumMain from "../components/Home/CardAlbumMain";
import CardAlbumAside from "../components/Home/CardAlbumASide";
export default function Dashboard() {
  const albumModel = {
    imagenUrl:
      "https://1819.es/wp-content/uploads/2020/04/El-coleccionismo-de-fotograf%C3%ADas-antiguas.jpg",
    idRollo: "2",
    idScanner: "3",
    idCamara: "4",
  };
  const rolloModel = {
    imagenUrl:
      "https://www.fotojapon.com/media/images/products/641/16787441857wHYk-350.jpg",
    idRollo: "2",
    idScanner: "3",
    idCamara: "4",
  };

  return (
    <div
      style={{
        display: "flex",
    

        width: "100%",
      }}
    >
      <aside
        style={{
          width: "25%",
          height: "100vh",
        
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            overflowY: "scroll",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2>Albumes favoritos</h2>
          <CardAlbumAside datos={albumModel} />
          <CardAlbumAside datos={albumModel} />
          <CardAlbumAside datos={albumModel} />
          <CardAlbumAside datos={albumModel} />
          <h2>Rollos Favoritos</h2>
          <CardAlbumAside datos={rolloModel} />
          <CardAlbumAside datos={rolloModel} />
          <CardAlbumAside datos={rolloModel} />
          <CardAlbumAside datos={rolloModel} />
        </div>
      </aside>
      <main
        style={{
         
          width: "70%",
          display: "flex",
          gap: "5%",
          flexWrap: "wrap",
        }}
      >
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
        <CardAlbumMain datos={albumModel} />
      </main>
    </div>
  );
}
