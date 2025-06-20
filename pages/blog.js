// mi-proyecto-seo/pages/blog.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    id: 1,
    title: "Guía Completa de Core Web Vitals 2025",
    excerpt: "Domina las métricas más importantes de Google: LCP, FID, CLS y las nuevas actualizaciones para este año.",
    content: "Los Core Web Vitals son un conjunto de métricas de rendimiento que Google considera fundamentales para la experiencia del usuario. Incluyen Largest Contentful Paint (LCP), First Input Delay (FID), y Cumulative Layout Shift (CLS). Estas métricas son cruciales para el ranking en Google y la satisfacción del usuario.",
    category: "Performance",
    readTime: "8 min",
    publishDate: "2025-06-15",
    author: "SEO Expert",
    image: "/images/core-web-vitals.jpg",
    tags: ["Core Web Vitals", "Performance", "Google", "SEO"]
  },
  {
    id: 2,
    title: "SEO Técnico con Next.js: Mejores Prácticas",
    excerpt: "Aprende a implementar SEO técnico avanzado en Next.js con Server-Side Rendering y optimización automática.",
    content: "Next.js ofrece herramientas poderosas para SEO técnico, incluyendo generación automática de sitemaps, meta tags dinámicos, y optimización de imágenes. En este artículo exploramos las técnicas más avanzadas.",
    category: "Technical SEO",
    readTime: "12 min",
    publishDate: "2025-06-10",
    author: "Development Team",
    image: "/images/nextjs-seo.jpg",
    tags: ["Next.js", "Technical SEO", "React", "SSR"]
  },
  {
    id: 3,
    title: "Optimización de Imágenes para Web: WebP, AVIF y Lazy Loading",
    excerpt: "Técnicas avanzadas de optimización de imágenes que reducen el tiempo de carga hasta un 70%.",
    content: "La optimización de imágenes es crucial para el rendimiento web. Exploramos formatos modernos como WebP y AVIF, técnicas de lazy loading, y cómo implementarlas eficientemente en aplicaciones web modernas.",
    category: "Optimization",
    readTime: "10 min",
    publishDate: "2025-06-05",
    author: "Performance Team",
    image: "/images/image-optimization.jpg",
    tags: ["Images", "WebP", "Performance", "Lazy Loading"]
  },
  {
    id: 4,
    title: "Estrategias de Contenido SEO que Funcionan en 2025",
    excerpt: "Las últimas tendencias en creación de contenido optimizado para motores de búsqueda y usuarios.",
    content: "El contenido sigue siendo el rey del SEO, pero las estrategias han evolucionado. Analizamos las técnicas más efectivas para crear contenido que rankee bien y convierta usuarios en 2025.",
    category: "Content Marketing",
    readTime: "15 min",
    publishDate: "2025-05-28",
    author: "Content Team",
    image: "/images/content-strategy.jpg",
    tags: ["Content Marketing", "SEO Strategy", "EEAT", "User Intent"]
  }
];

const categories = ["Todos", "Performance", "Technical SEO", "Optimization", "Content Marketing"];

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog SEO Profesional | Guías y Estrategias Avanzadas 2025</title>
        <meta name="description" content="Descubre las últimas estrategias SEO, técnicas de optimización web y guías profesionales para mejorar tu posicionamiento en Google. Contenido actualizado y práctico." />
        <meta name="keywords" content="blog SEO profesional, guías SEO 2025, optimización web, Core Web Vitals, Next.js SEO, estrategias contenido, SEO técnico, performance web" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Blog SEO Profesional | Estrategias y Guías Avanzadas" />
        <meta property="og:description" content="Artículos especializados sobre SEO, optimización web y estrategias digitales que realmente funcionan." />
        <meta property="og:image" content="/images/blog-featured.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juli-seo.onrender.com/blog" />
        
        {/* Article-specific meta tags */}
        <meta property="article:author" content="SEO Professional Team" />
        <meta property="article:section" content="SEO & Digital Marketing" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog SEO Profesional | Guías Avanzadas" />
        <meta name="twitter:description" content="Las mejores estrategias SEO y técnicas de optimización web." />
        <meta name="twitter:image" content="/images/blog-featured.jpg" />
        
        <link rel="canonical" href="https://juli-seo.onrender.com/blog" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Blog SEO Profesional",
              "description": "Artículos especializados sobre SEO y optimización web",
              "url": "https://juli-seo.onrender.com/blog",
              "author": {
                "@type": "Organization",
                "name": "SEO Professional Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Juli SEO",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://juli-seo.onrender.com/images/logo.png"
                }
              }
            })
          }}
        />
      </Head>

      <main className="space-y-16">
        {/* Hero Section */}
        <BlogHeroSection />
        
        {/* Categories Filter */}
        <CategoriesSection />
        
        {/* Featured Article */}
        <FeaturedArticleSection featuredPost={blogPosts[0]} />
        
        {/* Newsletter Section */}
        <NewsletterSection />
      </main>
    </Layout>
  );
}

// Hero Section del Blog
function BlogHeroSection() {
  return (
    <section className="text-center space-y-8 max-w-4xl mx-auto px-4">
      <div className="space-y-6">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
          📚 Blog SEO Profesional
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Estrategias <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Avanzadas</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Descubre las técnicas más efectivas para dominar el SEO moderno, optimizar el rendimiento web 
          y crear estrategias de contenido que realmente convierten.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-500">Artículos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">10k+</div>
              <div className="text-sm text-gray-500">Lectores</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-gray-500">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sección de Categorías
function CategoriesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              index === 0 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

// Artículo Destacado
function FeaturedArticleSection({ featuredPost }) {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 text-white space-y-6">
            <div className="flex items-center space-x-3">
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                ⭐ Destacado
              </span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {featuredPost.category}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {featuredPost.title}
            </h2>
            
            <p className="text-blue-100 text-lg leading-relaxed">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex items-center space-x-4 text-blue-100">
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{featuredPost.readTime}</span>
              </span>
              <span>•</span>
              <span>{new Date(featuredPost.publishDate).toLocaleDateString('es-ES')}</span>
            </div>
            
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
              Leer Artículo Completo
            </button>
          </div>
          
          <div className="relative min-h-[300px] md:min-h-full">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative h-full flex items-center justify-center text-white text-6xl">
              📊
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// Tarjeta de Artículo
function ArticleCard({ post }) {
  return (
    <article className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
          {post.category === 'Performance' && '⚡'}
          {post.category === 'Technical SEO' && '🔧'}
          {post.category === 'Optimization' && '🚀'}
          {post.category === 'Content Marketing' && '✍️'}
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{new Date(post.publishDate).toLocaleDateString('es-ES')}</span>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
          {post.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
            <span>Leer más</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

// Sección de Newsletter
function NewsletterSection() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white">
        <div className="space-y-6">
          <div className="text-5xl mb-4">📧</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Quieres recibir los mejores tips de SEO?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Únete a más de 10,000 profesionales que reciben nuestras guías exclusivas, 
            actualizaciones de algoritmos y estrategias avanzadas directamente en su email.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            />
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg whitespace-nowrap">
              Suscribirse Gratis
            </button>
          </div>
          
          <p className="text-blue-200 text-sm">
            ✨ Sin spam, solo contenido de valor • Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
}