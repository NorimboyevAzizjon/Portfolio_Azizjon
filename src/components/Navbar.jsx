
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const bolimlar = [
    { path: '/', nom: 'Bosh sahifa', exact: true },
    { path: '/haqimda', nom: 'Haqimda' },
    { path: '/portfolio', nom: 'Portfolio' },
    { path: '/aloqa', nom: 'Aloqa' },
  ];

  return (
    <nav className={`${styles.navbar} fade-in`}>
      <ul className={styles.navList}>
        {bolimlar.map((bolim) => (
          <li key={bolim.path}>
            <NavLink
              to={bolim.path}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              end={bolim.exact || undefined}
            >
              {bolim.nom}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;