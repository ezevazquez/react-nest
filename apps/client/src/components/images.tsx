import jesi1 from '../assets/jesi1.png';
import jesi2 from '../assets/jesi2.png';
import './images.css'; // Asegúrate de importar tu archivo CSS

function JesiImages() {
  return (
    <div className="contenedor-imagenes">
      <img src={jesi1} alt="Imagen 1" className="imagen" />
      <img src={jesi2} alt="Imagen 2" className="imagen" />
    </div>
  );
}

export default JesiImages;