// mi-proyecto-seo/components/LargeComponent.js
import React, { useState, useEffect } from 'react';

const LargeComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('performance');

  useEffect(() => {
    // Animación de entrada
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Contenido SEO optimizado con diferentes secciones
  const seoSections = {
    performance: {
      title: "⚡ Rendimiento Web",
      icon: "🚀",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-400 to-blue-500",
      content: [
        "El **lazy loading** es una técnica fundamental que revoluciona la experiencia del usuario. Al cargar componentes solo cuando son necesarios, reducimos significativamente el tiempo de carga inicial, mejorando directamente los Core Web Vitals.",
        "Google considera la velocidad como uno de los factores de ranking más importantes. Un sitio que carga en menos de 3 segundos tiene un 32% menos probabilidad de que los usuarios lo abandonen, lo que se traduce en mejor SEO y conversiones.",
        "La optimización de recursos críticos mediante técnicas como code splitting y tree shaking permite que tu aplicación Next.js alcance puntuaciones perfectas en Lighthouse, el estándar de Google para medir rendimiento web."
      ]
    },
    technical: {
      title: "🔧 SEO Técnico",
      icon: "⚙️",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-400 to-pink-500",
      content: [
        "La **estructura semántica** del HTML es crucial para que los motores de búsqueda comprendan tu contenido. Etiquetas como `<article>`, `<section>`, y `<nav>` proporcionan contexto que mejora la indexación.",
        "Los **schema markup** (datos estructurados) son el lenguaje secreto que hablas con Google. Rich snippets, breadcrumbs y FAQ schemas pueden aumentar tu CTR hasta un 30% en los resultados de búsqueda.",
        "La **optimización de crawl budget** asegura que los bots de Google rastreen eficientemente tu sitio. URLs limpias, sitemaps XML dinámicos y robots.txt optimizados son fundamentales para sitios grandes con miles de páginas."
      ]
    },
    content: {
      title: "📝 Contenido y UX",
      icon: "✨",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderGradient: "from-emerald-400 to-teal-500",
      content: [
        "El **contenido de calidad** sigue siendo el rey del SEO moderno. Pero ahora Google evalúa también la **experiencia de usuario**: tiempo de permanencia, tasa de rebote y engagement son señales cruciales de ranking.",
        "La **arquitectura de información** bien diseñada mejora tanto el SEO como la usabilidad. Una navegación intuitiva y breadcrumbs claros ayudan a usuarios y crawlers a entender la jerarquía de tu contenido.",
        "Las **métricas de interacción** como el tiempo de permanencia en página y las páginas por sesión son indicadores directos de la relevancia de tu contenido para las consultas de búsqueda de los usuarios."
      ]
    }
  };

  const currentSection = seoSections[activeTab];

  return (
    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {/* Contenedor principal con glassmorphism */}
      <div className="relative bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full -translate-y-20 translate-x-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/30 to-orange-500/30 rounded-full translate-y-16 -translate-x-16 blur-xl"></div>
        
        {/* Header del componente */}
        <div className="relative z-10 text-center mb-10">
          <div className="inline-flex items-center bg-gray-800/60 backdrop-blur-sm text-gray-100 px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-gray-600/50">
            🎯 Carga Diferida Inteligente
          </div>
          
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 mb-4">
            Estrategias SEO Avanzadas
          </h2>
          
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Descubre cómo la optimización técnica y el rendimiento web impulsan tu posicionamiento orgánico
          </p>
        </div>

        {/* Pestañas de navegación */}
        <div className="relative z-10 flex justify-center mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-600/50">
            <div className="flex space-x-2">
              {Object.entries(seoSections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-gray-700/80 to-gray-600/80 text-white shadow-lg scale-105 border border-gray-500/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/40'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{section.icon}</span>
                    <span className="hidden sm:inline">{section.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10">
          <div className={`bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/40 mb-8 transition-all duration-500`}>
            {/* Header de sección */}
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${currentSection.borderGradient} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                <span className="text-2xl">{currentSection.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{currentSection.title}</h3>
            </div>

            {/* Contenido de la sección */}
            <div className="space-y-6">
              {currentSection.content.map((paragraph, index) => (
                <div 
                  key={index}
                  className={`bg-gray-700/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 transform transition-all duration-500 delay-${index * 100}`}
                >
                  <p className="text-gray-100 leading-relaxed text-lg">
                    {paragraph.split('**').map((part, i) => 
                      i % 2 === 1 ? (
                        <span key={i} className="text-cyan-200 font-semibold">{part}</span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Métricas y estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-600/50 text-center">
              <div className="text-3xl font-black text-green-300 mb-2">98%</div>
              <div className="text-white font-semibold">Lighthouse Score</div>
              <div className="text-gray-300 text-sm mt-1">Performance optimizado</div>
            </div>
            
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-600/50 text-center">
              <div className="text-3xl font-black text-cyan-300 mb-2">0.8s</div>
              <div className="text-white font-semibold">First Contentful Paint</div>
              <div className="text-gray-300 text-sm mt-1">Carga ultrarrápida</div>
            </div>
            
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-600/50 text-center">
              <div className="text-3xl font-black text-purple-300 mb-2">45%</div>
              <div className="text-white font-semibold">Mejora en CTR</div>
              <div className="text-gray-300 text-sm mt-1">Con optimización SEO</div>
            </div>
          </div>

          {/* Botón de acción mejorado */}
          <div className="text-center mb-8">
            <button
              className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/30 overflow-hidden"
              onClick={() => alert('¡Explorando más sobre SEO avanzado!')}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center space-x-2">
                <span>🔍</span>
                <span>Explorar Técnicas Avanzadas</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>

          {/* Footer informativo */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600/40">
            <div className="text-center">
              <p className="text-gray-200 mb-2">
                <span className="text-cyan-300 font-semibold">💡 Lazy Loading en Acción:</span> Este componente se carga solo cuando es necesario
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-gray-700/50 px-3 py-1 rounded-full border border-cyan-500/50 text-cyan-200">
                  #LazyLoading
                </span>
                <span className="bg-gray-700/50 px-3 py-1 rounded-full border border-purple-500/50 text-purple-200">
                  #CoreWebVitals
                </span>
                <span className="bg-gray-700/50 px-3 py-1 rounded-full border border-emerald-500/50 text-emerald-200">
                  #SEOTécnico
                </span>
                <span className="bg-gray-700/50 px-3 py-1 rounded-full border border-orange-500/50 text-orange-200">
                  #RendimientoWeb
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeComponent;