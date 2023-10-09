import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
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
      </ul>
    </nav>
  );
}

export default Navbar;
