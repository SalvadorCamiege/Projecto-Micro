import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import logo from '../../Img/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';

function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.NavBar}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <Link to="/">
            <img src={logo} alt="Logo da empresa" />
          </Link>
          {isMobile && (
            <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          )}
          <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
            <li><Link to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link></li>
            <li><Link to="/compra" onClick={() => setMenuOpen(false)}>Compra</Link></li>
            <li><Link to="/contactos" onClick={() => setMenuOpen(false)}>Contactos</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;