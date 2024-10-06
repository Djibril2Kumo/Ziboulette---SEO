import React from "react";
import { Link } from "react-router-dom";

export default function Accueil() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>
          Bienvenue sur le site officiel de la Ziboulette – Moto Hybride
          Révolutionnaire
        </h1>
        <p style={styles.subtitle}>
          Découvrez les dernières nouveautés sur la moto Ziboulette,
          l'innovation qui change le monde des deux roues.
        </p>
      </header>
      <section style={styles.section}>
        <p style={styles.paragraph}>
          Grâce à Ziboulette, les motos sont bien plus qu’un simple moyen de
          transport. Elles incarnent la liberté, l’aventure et la passion de la
          route. Que vous soyez un amateur de vitesse, un adepte des longues
          balades ou un passionné de mécanique, les motos Ziboulette offrent une
          expérience unique. Leur maniabilité, leur design audacieux et leur
          puissance en font des machines à la fois pratiques et exaltantes.
          <br /> N'attendez plus !
        </p>
        <p style={styles.paragraph}>
          Plus besoin de vous creuser la tête pour choisir un deux roues : la
          Ziboulette réunit les avantages de tous ces modèles dans une seule
          moto hybride. Elle combine la puissance d'une moto sportive avec le
          confort et la maniabilité d'un scooter, tout en étant adaptée à la
          conduite en ville et sur route.
        </p>
        <ul style={styles.list}>
          <li>Moto de route</li>
          <li>Moto sportive</li>
          <li>Moto d'aventure</li>
          <li>Custom/Cruiser</li>
          <li>Moto tout-terrain / Motocross</li>
          <li>Scooter / Scooter électrique</li>
          <li>Mobylette</li>
          <li>Scooter à 2 ou 3 roues</li>
          <li>Vélo à assistance électrique / VAE</li>
          <li>Vélo électrique</li>
          <li>Trottinette électrique</li>
        </ul>
        <p style={styles.paragraph}>
          Découvrez la <strong>moto Ziboulette</strong>, un véhicule à deux
          roues unique qui fusionne les avantages de la moto et du scooter pour
          offrir une expérience de conduite inégalée. Conçue pour répondre aux
          attentes des passionnés de la route et des amateurs de mobilité
          urbaine, la Ziboulette est un modèle qui allie performance, praticité
          et style.
        </p>
        <p style={styles.paragraph}>
          La <strong>moto Ziboulette</strong> se positionne à mi-chemin entre
          une <strong>moto de route</strong> et un <strong>scooter</strong>.
          Elle reprend le caractère sportif et la puissance d'une moto tout en
          conservant la maniabilité et le confort d'un scooter.
        </p>
        <p style={styles.paragraph}>
          Le <strong>moteur</strong> de la Ziboulette, robuste et économe, offre
          une accélération fluide, idéale pour les trajets sur route comme pour
          la navigation dans le trafic dense des villes.
        </p>
        <p style={styles.paragraph}>
          Le <strong>design</strong> de la moto Ziboulette est un autre atout
          qui la démarque sur le marché. Elle combine l'élégance épurée des
          motos avec la simplicité pratique des scooters.
        </p>
        <p style={styles.paragraph}>
          L'un des points forts de la Ziboulette est également son espace de
          rangement. Contrairement aux motos classiques, elle dispose d'un{" "}
          <strong>coffre sous la selle</strong>, comme les scooters, assez
          spacieux pour accueillir un casque et quelques effets personnels.
        </p>
        <p style={styles.paragraph}>
          La moto Ziboulette ne se contente pas d'allier moto et scooter sur le
          plan esthétique ; elle intègre également une technologie de pointe
          pour améliorer l'expérience de conduite.
        </p>
        <p style={styles.paragraph}>
          Un autre point fort de la Ziboulette est sa motorisation
          écoresponsable. En effet, elle est disponible en version{" "}
          <strong>électrique</strong>, une option idéale pour ceux qui
          souhaitent réduire leur empreinte carbone tout en profitant d'une
          conduite fluide et silencieuse.
        </p>
        <p style={styles.paragraph}>
          La <strong>moto Ziboulette</strong> est bien plus qu'un simple
          véhicule à deux roues. C'est un modèle polyvalent qui marie à la
          perfection les qualités d'une moto et d'un scooter.
        </p>
      </section>

      <footer style={styles.footer}>
        <Link to="/ziboulette">
          <button style={styles.button}>Commandez votre Ziboulette !</button>
        </Link>
        <p>En apprendre plus sur </p>
        <Link to="/about">
          <button style={styles.button}>L'histoire de la Ziboulette</button>
        </Link>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    margin: "0 auto",
    padding: "20px",
    maxWidth: "800px", // Limiter la largeur du conteneur
    fontFamily: "Arial, sans-serif", // Choix de police moderne
    lineHeight: "1.6", // Améliore la lisibilité
    color: "#333", // Couleur du texte
  },
  header: {
    backgroundColor: "#2E86C1",
    padding: "20px",
    textAlign: "center",
    color: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Ombre pour le relief
  },
  title: {
    fontSize: "36px",
    margin: "0",
  },
  subtitle: {
    fontSize: "24px",
    margin: "10px 0 0 0",
  },
  section: {
    padding: "20px",
    borderBottom: "1px solid #ccc",
  },
  paragraph: {
    marginBottom: "15px", // Espace entre les paragraphes
    fontSize: "16px",
  },
  list: {
    listStyleType: "disc",
    marginLeft: "20px",
    marginBottom: "20px", // Espace après la liste
  },
  footer: {
    padding: "20px",
    backgroundColor: "#2E86C1",
    color: "white",
    textAlign: "center",
    borderRadius: "8px",
    marginTop: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Ombre pour le relief
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#fff",
    color: "#2E86C1",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s, color 0.3s", // Transition pour le hover
  },
};
