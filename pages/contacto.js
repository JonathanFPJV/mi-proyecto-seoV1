// mi-proyecto-seo/pages/contacto.js
import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mensaje enviado exitosamente');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <Layout>
      <Head>
        <title>Contacto | Consultoría SEO y Optimización Web Profesional</title>
        <meta name="description" content="Contacta con nuestros expertos en SEO y optimización web. Ofrecemos consultoría personalizada, auditorías SEO y servicios de posicionamiento web. ¡Respuesta garantizada en 24h!" />
        <meta name="keywords" content="contacto SEO, consultoría SEO profesional, servicios optimización web, auditoría SEO, posicionamiento Google, expertos SEO" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mi Sitio Optimizado" />
        
        {/* Open Graph mejorado */}
        <meta property="og:title" content="Contacto | Consultoría SEO y Optimización Web Profesional" />
        <meta property="og:description" content="Conecta con expertos en SEO. Consultoría personalizada y servicios de optimización web. ¡Mejora tu posicionamiento hoy!" />
        <meta property="og:image" content="/images/contact-seo-experts.jpg" />
        <meta property="og:image:alt" content="Equipo de expertos SEO listos para ayudarte" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juli-seo.onrender.com/contacto" />
        <meta property="og:site_name" content="Mi Sitio Optimizado" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto | Consultoría SEO Profesional" />
        <meta name="twitter:description" content="Expertos en SEO listos para optimizar tu sitio web. Consultoría personalizada y resultados garantizados." />
        <meta name="twitter:image" content="/images/contact-seo-experts.jpg" />
        
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contacto - Mi Sitio Optimizado",
              "description": "Página de contacto para servicios de consultoría SEO y optimización web",
              "url": "https://juli-seo.onrender.com/contacto",
              "mainEntity": {
                "@type": "LocalBusiness",
                "name": "Mi Sitio Optimizado",
                "description": "Consultoría SEO y servicios de optimización web",
                "url": "https://juli-seo.onrender.com",
                "telephone": "+1-555-0123",
                "email": "contacto@misitiooptimizado.com"
              }
            })
          }}
        />
        
        <link rel="canonical" href="https://juli-seo.onrender.com/contacto" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Hero Section con gradiente moderno */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
      </section>

      {/* Formulario de contacto moderno */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  ¿Listo para dominar Google?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Cada día que tu sitio no está optimizado, pierdes clientes potenciales. 
                  Nuestros expertos en SEO han ayudado a cientos de empresas a multiplicar 
                  su tráfico orgánico y sus ventas.
                </p>
              </div>

              {/* Beneficios */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Auditoría SEO Gratuita</h3>
                    <p className="text-gray-600">Análisis completo de tu sitio web sin costo. Identifica oportunidades de mejora inmediatas.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Resultados Garantizados</h3>
                    <p className="text-gray-600">Mejora medible en rankings y tráfico orgánico en los primeros 90 días o te devolvemos tu dinero.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Soporte 24/7</h3>
                    <p className="text-gray-600">Equipo de expertos disponible cuando lo necesites. Monitoreo continuo y optimización.</p>
                  </div>
                </div>
              </div>

              {/* Información de contacto */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Otras formas de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">contacto@misitiooptimizado.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">Ciudad de México, México</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Obtén tu Auditoría SEO
                  <span className="block text-blue-600">Gratis</span>
                </h3>
                <p className="text-gray-600">Completa el formulario y recibe un análisis detallado de tu sitio web</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sitio web (opcional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="https://tusitio.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-900 placeholder-gray-500 resize-none"
                    placeholder="Describe tu negocio, objetivos SEO y qué tipo de ayuda necesitas..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Obtener Auditoría Gratuita'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  * Al enviar este formulario, aceptas recibir comunicaciones de marketing. 
                  Puedes cancelar la suscripción en cualquier momento.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Prefieres hablar directamente?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Agenda una llamada gratuita de 30 minutos con nuestro equipo de expertos
          </p>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center bg-white text-blue-900 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llamar Ahora: +1 (555) 123-4567
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </Layout>
  );
}