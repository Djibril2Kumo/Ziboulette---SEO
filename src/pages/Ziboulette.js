import React from "react";

export default function Ziboulette() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>La Ziboulette</h1>
      <img
        src="moto.jpg" // Remplacez par l'URL de votre image
        alt="La Ziboulette"
        style={styles.image}
      />
      <p style={styles.description}>
        Découvrez la Ziboulette, la première moto hybride qui combine puissance et maniabilité. Conçue pour s'adapter à tous les environnements, de la ville aux routes de campagne, elle est l'alliance parfaite entre style et performance.
      </p>

      <h2 style={styles.subtitle}>Caractéristiques</h2>
      <ul style={styles.featureList}>
        <li style={styles.featureItem}>Moteur hybride puissant</li>
        <li style={styles.featureItem}>Conception légère et aérodynamique</li>
        <li style={styles.featureItem}>Technologie de freinage avancée</li>
        <li style={styles.featureItem}>Tableau de bord numérique</li>
        <li style={styles.featureItem}>Selle ergonomique pour un confort optimal</li>
      </ul>

      <h2 style={styles.subtitle}>Spécifications Techniques</h2>
      <table style={styles.specTable}>
        <thead>
          <tr>
            <th style={styles.specHeader}>Spécification</th>
            <th style={styles.specHeader}>Détails</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.specCell}>Moteur</td>
            <td style={styles.specCell}>200cc, hybride</td>
          </tr>
          <tr>
            <td style={styles.specCell}>Poids</td>
            <td style={styles.specCell}>120 kg</td>
          </tr>
          <tr>
            <td style={styles.specCell}>Vitesse maximale</td>
            <td style={styles.specCell}>150 km/h</td>
          </tr>
          <tr>
            <td style={styles.specCell}>Autonomie</td>
            <td style={styles.specCell}>300 km</td>
          </tr>
          <tr>
            <td style={styles.specCell}>Couleur</td>
            <td style={styles.specCell}>Bleu, Rouge, Noir</td>
          </tr>
        </tbody>
      </table>

      <h2 style={styles.subtitle}>Témoignages Clients</h2>
      <blockquote style={styles.testimonial}>
        "La Ziboulette a changé ma façon de conduire. Elle est rapide, agile et parfaite pour la ville !" - Marie, Paris
      </blockquote>
      <blockquote style={styles.testimonial}>
        "Un véritable bijou ! Je l'utilise pour mes trajets quotidiens, et je ne pourrais plus m'en passer." - Paul, Lyon
      </blockquote>

      <button style={styles.button}>Acheter Maintenant</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "36px",
    textAlign: "center",
    marginBottom: "20px",
    color: "#2E86C1",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "28px",
    marginTop: "30px",
    marginBottom: "10px",
    color: "#333",
  },
  featureList: {
    listStyleType: "none",
    padding: 0,
    margin: "10px 0",
  },
  featureItem: {
    backgroundColor: "#e0f7fa",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
  },
  specTable: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  specHeader: {
    backgroundColor: "#2E86C1",
    color: "white",
    padding: "10px",
  },
  specCell: {
    padding: "10px",
    border: "1px solid #ccc",
  },
  testimonial: {
    fontStyle: "italic",
    padding: "10px",
    margin: "10px 0",
    borderLeft: "4px solid #2E86C1",
    backgroundColor: "#f0f8ff",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "15px",
    fontSize: "18px",
    color: "white",
    backgroundColor: "#2E86C1",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};
