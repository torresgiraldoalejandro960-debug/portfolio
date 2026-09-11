import styles from './About.module.css';

const About = ({ titulo, descripcion }) => {
  return (
    <section className={styles.aboutContainer}>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </section>
  );
};

export { About };