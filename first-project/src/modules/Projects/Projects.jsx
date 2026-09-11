import { ProjectCard } from './ProjectCard';

const Projects = ({ proyectos }) => {
  return (
    <section className="projectsContainer">
      <h2>Mis Proyectos</h2>
      <div className="projectsGrid">
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