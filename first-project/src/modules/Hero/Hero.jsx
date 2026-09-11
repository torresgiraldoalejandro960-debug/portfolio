import styles from './Hero.module.css';

const Hero = ({ nombre, titulo, descripcion }) => {
  return (
    <section className={styles.heroContainer}>
      <h1>{nombre}</h1>
      <p className={styles.heroSubtitle}>{titulo}</p>
      <p className={styles.heroDescription}>{descripcion}</p>
      <button className={styles.heroButton}>Contactame</button>
    </section>
  );
};

export { Hero };