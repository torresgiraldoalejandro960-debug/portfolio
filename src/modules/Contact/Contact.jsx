import styles from './Contact.module.css';

const Contact = ({ email, telefono }) => {
  return (
    <section className={styles.contactContainer}>
      <h2>Contactame</h2>
      <p className={styles.subtitle}>Estoy disponible para nuevas oportunidades</p>
      
      <div className={styles.contactInfo}>
        <a href={`mailto:${email}`} className={styles.contactLink}>
          ✉️ {email}
        </a>
        <a href={`tel:${telefono}`} className={styles.contactLink}>
          📱 {telefono}
        </a>
      </div>
    </section>
  );
};

export { Contact };