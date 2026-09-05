const Hero = ({ nombre, titulo, descripcion }) => {
  return (
    <section className="heroContainer">
      <h1>{nombre}</h1>
      <p className="heroSubtitle">{titulo}</p>
      <p className="heroDescription">{descripcion}</p>
      <button className="heroButton">Contactame</button>
    </section>
  );
};

export { Hero };