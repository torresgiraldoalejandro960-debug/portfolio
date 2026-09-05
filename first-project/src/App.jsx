import { Hero } from './modules/Hero/Hero';

const App = () => {
  return (
    <main>
      <Hero 
        nombre="Alejandro Torres Giraldo"
        titulo="Desarrollador Full-Stack"
        descripcion="Estudiante de Análisis y Desarrollo de Software en SENA, apasionado por crear soluciones innovadoras."
      />
    </main>
  );
};

export { App };