// mi-proyecto-seo/components/LargeComponent.js
import React from 'react';

const LargeComponent = () => {
  // Simula un componente grande que no se necesita inmediatamente
  // Adaptamos el contenido para que refleje temas de SEO
  const largeContent = Array(5).fill( // Reducimos para que no sea tan largo visualmente
    <p className="mb-3 text-gray-700 leading-relaxed">
      En el **SEO (Search Engine Optimization)**, la optimización de la experiencia del usuario (UX) es tan crucial como la calidad del contenido. Componentes como este, cargados de forma diferida, demuestran un compromiso con la velocidad de carga, un factor clave para el ranking en buscadores.
      Un sitio rápido no solo mejora la satisfacción del usuario, sino que también indica a Google que tu página ofrece una experiencia valiosa, lo cual puede traducirse en una mejor posición en los resultados de búsqueda.
    </p>
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Profundizando en Estrategias SEO Avanzadas
      </h2>
      <div className="text-base text-gray-800">
        {largeContent}
      </div>

      <div className="mt-8 text-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          onClick={() => alert('¡Explorando más sobre SEO!')}
        >
          Descubre Más Técnicas SEO
        </button>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Este componente ilustra cómo un sitio moderno maneja el contenido extenso para mejorar el rendimiento.</p>
        <p>Conceptos clave: **Lazy Loading**, **Rendimiento Web**, **Core Web Vitals**.</p>
      </div>
    </div>
  );
};

export default LargeComponent;