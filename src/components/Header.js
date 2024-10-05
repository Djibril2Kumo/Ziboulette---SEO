import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.logo}>Ziboulette</div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="/" style={styles.navLink}>
              Accueil
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/about" style={styles.navLink}>
              À propos
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#models" style={styles.navLink}>
              Modèles
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#contact" style={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#2E86C1", // Couleur plus moderne
    padding: "10px 20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Ombre pour le relief
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: "28px", // Augmentation de la taille du logo
    fontWeight: "bold",
    letterSpacing: "1px", // Espacement des lettres pour un look plus moderne
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "30px", // Espace plus grand entre les éléments
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px", // Augmentation de la taille de la police
    transition: "color 0.3s", // Transition pour le hover
  },
  navLinkHover: {
    color: "#f1c40f", // Couleur lors du survol
  },
};
