import { ExperienceItem } from './ExperienceItem';
import styles from './Experience.module.css';

const Experience = ({ experiencias }) => {
  return (
    <section className={styles.experienceContainer}>
      <h2>Formación y Experiencia</h2>
      <div className={styles.timelineContainer}>
        {experiencias.map((exp, index) => (
          <ExperienceItem
            key={index}
            año={exp.año}
            titulo={exp.titulo}
            institucion={exp.institucion}
            descripcion={exp.descripcion}
          />
        ))}
      </div>
    </section>
  );
};

export { Experience };