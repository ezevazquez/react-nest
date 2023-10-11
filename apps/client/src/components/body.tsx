import "./body.css";
import { Helmet } from 'react-helmet';

function Body() {
  return (
    <div className="body">
      <Helmet>
        <meta property="og:title" content='El proyecto de Jesi' />
        <meta property="og:description" content='Acá va la descripción de Jesi' />
        <meta property="og:image" content='./assets/socialcard-jesi1.png' />
      </Helmet>
      <h1>Hola Jesi</h1>
    </div>
  );
}

export default Body;
