import './navbar.css';
import { Helmet } from 'react-helmet';

function Navbar() {
  return (
    <nav className="navbar">
      <Helmet>
        <meta property="og:title" content='El proyecto de Jesi' />
        <meta property="og:description" content='Acá va la descripción de Jesi' />
        <meta property="og:image" content='./assets/socialcard-jesi1.png' />
      </Helmet>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/acerca">Acerca</a>
        </li>
        <li className="nav-item">
          <a href="/api">Backend</a>
        </li>
        {/* <button onClick={async () => {
          const response = await fetch('/api')
          const data = await response.text()
          console.log(data)
        }}>
        Tocame
        </button> */}
      </ul>
    </nav>
  );
}

export default Navbar;
