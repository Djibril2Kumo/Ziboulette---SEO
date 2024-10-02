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
    backgroundColor: "#333",
    padding: "10px 20px",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};
