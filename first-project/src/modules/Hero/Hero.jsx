import styles from './Hero.module.css';
import profileImage from '../../assets/profile.jpg';

const Hero = ({ nombre, titulo, descripcion }) => {
  return (
    <section className={styles.heroContainer}>
      <img src={profileImage} alt={nombre} className={styles.profileImage} />
      <h1>{nombre}</h1>
      <p className={styles.heroSubtitle}>{titulo}</p>
      <p className={styles.heroDescription}>{descripcion}</p>
      <button className={styles.heroButton}>Contactame</button>
    </section>
  );
};

export { Hero };