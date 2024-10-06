import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Contact</h4>
          <p style={styles.footerText}>contact@ziboulette.com</p>
          <p style={styles.footerText}>+33 1 23 45 67 89</p>
        </div>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Liens rapides</h4>
          <ul style={styles.footerNavList}>
            <li style={styles.footerNavItem}>
              <a href="/" style={styles.footerNavLink}>
                Accueil
              </a>
            </li>
            <li style={styles.footerNavItem}>
              <a href="/about" style={styles.footerNavLink}>
                À propos
              </a>
            </li>
            <li style={styles.footerNavItem}>
              <a href="/ziboulette" style={styles.footerNavLink}>
                La ziboulette
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={styles.copyright}>
        <p style={styles.copyrightText}>
          © 2024 Ziboulette. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2E86C1", // Couleur en cohérence avec le header
    padding: "40px 20px",
    color: "#fff",
    boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.2)", // Ombre légère en haut du footer
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerSection: {
    flex: "1 1 300px",
    marginBottom: "20px",
  },
  footerHeading: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  footerText: {
    fontSize: "16px",
    margin: "5px 0",
  },
  socialIcons: {
    display: "flex",
  },
  iconLink: {
    marginRight: "10px",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  footerNavList: {
    listStyle: "none",
    padding: 0,
  },
  footerNavItem: {
    marginBottom: "10px",
  },
  footerNavLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  footerNavLinkHover: {
    color: "#f1c40f",
  },
  copyright: {
    textAlign: "center",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    paddingTop: "20px",
    marginTop: "20px",
  },
  copyrightText: {
    fontSize: "14px",
    color: "#f1f1f1",
  },
};
