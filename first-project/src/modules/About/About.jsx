const About = ({ titulo, descripcion }) => {
  return (
    <section className="aboutContainer">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </section>
  );
};

export { About };