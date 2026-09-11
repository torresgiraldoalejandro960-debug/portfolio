import styles from './Experience.module.css';

const ExperienceItem = ({ año, titulo, institucion, descripcion }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.yearBadge}>{año}</div>
      <div className={styles.itemContent}>
        <h3>{titulo}</h3>
        <p className={styles.institucion}>{institucion}</p>
        {descripcion && <p className={styles.descripcion}>{descripcion}</p>}
      </div>
    </div>
  );
};

export { ExperienceItem };