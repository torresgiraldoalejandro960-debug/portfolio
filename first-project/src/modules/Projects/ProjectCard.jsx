const ProjectCard = ({ nombre, descripcion, tecnologias }) => {
  return (
    <div className="cardContainer">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <div className="tecnologias">
        {tecnologias.map((tech, index) => (
          <span key={index} className="tech">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export { ProjectCard };