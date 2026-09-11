import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

const Projects = ({ proyectos }) => {
  return (
    <section className={styles.projectsContainer}>
      <h2>Mis Proyectos</h2>
      <div className={styles.projectsGrid}>
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
          />
        ))}
      </div>
    </section>
  );
};

export { Projects };