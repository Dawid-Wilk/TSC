import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/logo.jpeg'

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isNavActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navBar">
      <Link to="/" className="navLogo">
          <img 
              width="160"
              height="90" 
              src={logo} 
              alt="logo"
          />
      </Link>
    <div 
      className={`hamburgerMenu ${isMobileMenuOpen ? 'open' : ''}`}
      onClick={toggleMobileMenu}
    >
      <div className="hamburgerLine"></div>
      <div className="hamburgerLine middle"></div>
      <div className="hamburgerLine"></div>
    </div>

    <div className={`navLinks ${isMobileMenuOpen ? 'open' : ''}`}>
      <Link 
        to="/Startseite"
        className={`navLink ${isNavActive('/Startseite') ? 'activeNavLink' : ''}`}
        onClick={toggleMobileMenu}
      >
        Startseite
      </Link>
      <Link 
        to="/UberUns" 
        className={`navLink ${isNavActive('/UberUns') ? 'activeNavLink' : ''}`}
        onClick={toggleMobileMenu}
      >
        Über uns
      </Link>
      <Link 
        to="/Kontakt" 
        className={`navLink ${isNavActive('/Kontakt') ? 'activeNavLink' : ''}`}
        onClick={toggleMobileMenu}
      >
        Kontakt
      </Link>
    </div>
    </nav>
  );
}