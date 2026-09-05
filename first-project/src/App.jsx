import { Hero } from './modules/Hero/Hero';
import { About } from './modules/About/About';

const App = () => {
  return (
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
    </main>
  );
};

export { App };