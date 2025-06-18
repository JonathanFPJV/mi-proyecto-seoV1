// mi-proyecto-seo/pages/index.js
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

// Carga DynamicComponent de forma diferida, solo en el cliente (ssr: false)
const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    // Contenedor principal con estilos de fondo y padding
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <Head>
        {/* Meta Tags mejorados para un enfoque SEO más claro */}
        <title>Next.js SEO Pro: Optimiza tu Web con Rendimiento y Estrategia</title>
        <meta
          name="description"
          content="Descubre cómo Next.js eleva tu SEO y rendimiento web con técnicas avanzadas de meta tags, sitemaps, optimización de imágenes y lazy loading."
        />
        <meta
          name="keywords"
          content="Next.js SEO, optimización web, rendimiento, sitemap, meta tags, lazy loading, Core Web Vitals"
        />
        {/* Open Graph Meta Tags para compartir en redes sociales */}
        <meta property="og:title" content="Next.js SEO Pro: Rendimiento Web Avanzado" />
        <meta
          property="og:description"
          content="Aprende a construir sitios ultrarrápidos y optimizados para Google con Next.js."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juli-seo.onrender.com/" /> {/* Cambia a tu dominio real */}
        <link rel="canonical" href="https://juli-seo.onrender.com/" /> {/* Cambia a tu dominio real */}
      </Head>

      {/* Sección del Héroe (Hero Section) */}
      <section className="text-center mb-12 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Sitio Web con <span className="text-blue-600">Next.js y SEO </span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Explora las técnicas clave para mejorar la **visibilidad**, el **rendimiento** y la **experiencia de usuario** de tu aplicación Next.js en los motores de búsqueda.
        </p>
        {/* Botones de acción */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => alert('¡Inicia tu viaje SEO!')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Empieza a Optimizar Ahora
          </button>
        </div>
      </section>

      {/* Sección de la Imagen Optimizada */}
      <section className="mb-12 w-full max-w-xl">
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl border border-gray-200">
          <Image
            src="/images/seo-image.png"
            alt="Gráfico de optimización SEO para Next.js mostrando métricas de rendimiento"
            layout="fill" // Hace que la imagen llene el contenedor
            objectFit="cover" // Corta la imagen para que se ajuste sin distorsión
            priority
            className="rounded-lg"
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-3">
          Ilustración con SEO integral.
        </p>
      </section>

      {/* Sección de Características SEO (simulada) */}
      <section className="mb-16 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Meta Tags Dinámicos</h3>
          <p className="text-gray-700 leading-relaxed">
            Controla cómo tu sitio aparece en motores de búsqueda y redes sociales, mejorando tu CTR.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Sitemaps XML</h3>
          <p className="text-gray-700 leading-relaxed">
            Facilita a Google el rastreo e indexación de todas tus páginas importantes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Optimización de Imágenes</h3>
          <p className="text-gray-700 leading-relaxed">
            Carga visuales ultrarrápidas con `next/image` para Core Web Vitals excelentes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Lazy Loading</h3>
          <p className="text-gray-700 leading-relaxed">
            Reduce el tiempo de carga inicial y enfoca los recursos en el contenido clave.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Fuentes Optimizadas</h3>
          <p className="text-gray-700 leading-relaxed">
            Mejora el rendimiento de fuentes con `next/font` para una carga fluida.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Estructura Limpia</h3>
          <p className="text-gray-700 leading-relaxed">
            Un código limpio y semántico ayuda a los motores de búsqueda a entender tu contenido.
          </p>
        </div>
      </section>

      {/* Sección del Componente de Carga Diferida */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Profundiza en la Optimización de Rendimiento (Carga Diferida)
        </h2>
        <DynamicComponent /> {/* Renderiza el componente dinámico */}
      </section>
    </div>
  );
}