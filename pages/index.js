// mi-proyecto-seo/pages/index.js
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";

// Importación dinámica del componente grande para mejor rendimiento
const DynamicLargeComponent = dynamic(() => import("../components/LargeComponent"), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="animate-pulse">
        <div className="h-32 bg-gray-200 rounded-lg w-full"></div>
      </div>
    </div>
  )
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js SEO Pro: Optimización Web Avanzada</title>
        <meta name="description" content="Domina Next.js y SEO con técnicas avanzadas: meta tags dinámicos, sitemaps, optimización de imágenes y Core Web Vitals para máximo rendimiento." />
        <meta name="keywords" content="Next.js SEO, optimización web, rendimiento, sitemap, meta tags, lazy loading, Core Web Vitals" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Next.js SEO Pro: Rendimiento Web Avanzado" />
        <meta property="og:description" content="Construye sitios web ultrarrápidos y optimizados para motores de búsqueda con Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juli-seo.onrender.com/" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://juli-seo.onrender.com/" />
        
        {/* Viewport and additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
      </Head>

      <main className="space-y-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Image Section */}
        <FeaturedImageSection />
        
        {/* Dynamic Component Section */}
        <DynamicSection />
      </main>
    </Layout>
  );
}

// Componente Hero Section
function HeroSection() {
  const handleGetStarted = () => {
    // Scroll suave hacia la sección de características
    document.getElementById('seo-features')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="text-center space-y-8 max-w-4xl mx-auto px-4">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Domina <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Next.js & SEO</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Aprende las técnicas más avanzadas para crear aplicaciones web de alto rendimiento, 
          optimizadas para motores de búsqueda y con experiencia de usuario excepcional.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={handleGetStarted}
          className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <span className="flex items-center gap-2">
            Comenzar Ahora
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
        
        <button className="text-gray-600 hover:text-blue-600 font-medium py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
          Ver Documentación
        </button>
      </div>
    </section>
  );
}

// Componente Featured Image Section
function FeaturedImageSection() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src="/images/seo-image.png"
              alt="Dashboard de optimización SEO para Next.js mostrando métricas de rendimiento y Core Web Vitals"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-6 text-sm">
        Panel de control integral para optimización SEO y análisis de rendimiento
      </p>
    </section>
  );
}

// Componente Feature Card
function FeatureCard({ title, description, icon }) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Componente Dynamic Section
function DynamicSection() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Optimización Avanzada de Rendimiento
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explora técnicas avanzadas de carga diferida y optimización que llevarán 
          tu aplicación Next.js al máximo rendimiento posible.
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-inner">
        <DynamicLargeComponent />
      </div>
    </section>
  );
}