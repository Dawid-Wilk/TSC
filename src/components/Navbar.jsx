import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navBar">
      <Link to="/" className="navLogo">
          <img 
              width="180"
              height="90" 
              src="./images/logo.jpeg" 
              alt="logo"
          />
      </Link>
      <Link to="/Startseite" className="navLink">Startseite</Link>
      <Link to="/ÜberUns" className="navLink">Über uns</Link>
      <Link to="/Kontakt" className="navLink">Kontakt</Link>
    </nav>
  );
}