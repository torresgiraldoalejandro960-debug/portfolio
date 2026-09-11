import styles from './Projects.module.css';

const ProjectCard = ({ nombre, descripcion, tecnologias }) => {
  return (
    <div className={styles.cardContainer}>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <div className={styles.tecnologias}>
        {tecnologias.map((tech, index) => (
          <span key={index} className={styles.tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export { ProjectCard };