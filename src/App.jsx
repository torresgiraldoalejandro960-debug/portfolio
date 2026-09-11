import { Hero } from './modules/Hero/Hero';
import { About } from './modules/About/About';
import { Projects } from './modules/Projects/Projects';
import { Experience } from './modules/Experience/Experience';
import { Contact } from './modules/Contact/Contact';
import { Footer } from './modules/Footer/Footer';

const App = () => {
  const misProyectos = [
    {
      nombre: "Arepas al Carbón",
      descripcion: "Branding y plataforma web para marca de arepas tradicionales colombianas",
      tecnologias: ["Web Design", "Branding"]
    },
    {
      nombre: "Inventario de Mecánico",
      descripcion: "Sistema de gestión de inventario para talleres automotrices",
      tecnologias: ["React", "Node.js", "MongoDB"]
    },
    {
      nombre: "Proyecto Java/Spring Boot",
      descripcion: "Aplicación backend con arquitectura enterprise",
      tecnologias: ["Java", "Spring Boot", "MySQL"]
    }
  ];

  const miExperiencia = [
    {
      año: "2013 - 2024",
      titulo: "Bachiller Académico",
      institucion: "I.E. Fortunato Gavira Botero",
      descripcion: ""
    },
    {
      año: "2022 - 2024",
      titulo: "Técnico en Agroindustria Alimentaria",
      institucion: "SENA",
      descripcion: ""
    },
    {
      año: "2025 - 2027",
      titulo: "Análisis y Desarrollo de Software",
      institucion: "SENA (En curso)",
      descripcion: ""
    },
    {
      año: "Abr 2024 - Abr 2025",
      titulo: "Vendedor - Atención al Cliente",
      institucion: "Descream (Heladería)",
      descripcion: "Encargado del punto de venta, recibir y entregar caja"
    },
    {
      año: "May 2025 - Ago 2025",
      titulo: "Mesero",
      institucion: "La Esquina del Sabor (Restaurante)",
      descripcion: "Atención directa al cliente"
    }
  ];

  return (
    <div id="portafolio-content">
      <main>
        <Hero 
          nombre="Alejandro Torres Giraldo"
          titulo="Desarrollador Full-Stack"
          descripcion="Estudiante de Análisis y Desarrollo de Software en SENA, apasionado por crear soluciones innovadoras."
        />
        <About 
          titulo="Sobre Mí"
          descripcion="Estudiante de Análisis y Desarrollo de Software con disponibilidad inmediata para vinculación laboral o práctica profesional. Interesado en aplicar y fortalecer mis conocimientos en desarrollo de software, aportando responsabilidad, adaptabilidad y una actitud proactiva orientada al cumplimiento de objetivos."
        />
        <Projects proyectos={misProyectos} />
        <Experience experiencias={miExperiencia} />
        <Contact 
          email="torresgiraldoalejandro960@gmail.com"
          telefono="300 577 7915"
        />
        <Footer />
      </main>
    </div>
  );
};

export { App };