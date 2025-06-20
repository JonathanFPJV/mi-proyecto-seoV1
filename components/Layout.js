// mi-proyecto-seo/components/Layout.js
import React, { useState } from 'react';
import Link from 'next/link'; // Importa Link para la navegación

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Botón de Hamburguesa para Móviles */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 text-gray-700 lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        )}
      </button>

      {/* Menú Lateral Fijo */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-6 z-40
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col lg:h-auto
          shadow-lg`}
      >
        <div className="mb-8 text-2xl font-bold text-white">
          Juli SEO App
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link href="/" legacyBehavior>
                <a className="block py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out">
                  Home
                </a>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/blog" legacyBehavior>
                <a className="block py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out">
                  Blog
                </a>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contacto" legacyBehavior>
                <a className="block py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out">
                  Contacto
                </a>
              </Link>
            </li>
            {/* Puedes añadir más enlaces aquí */}
          </ul>
        </nav>
      </aside>

      {/* Contenido Principal */}
      {/* El `lg:ml-64` empuja el contenido a la derecha para dejar espacio al sidebar en pantallas grandes */}
      <main className="flex-1 p-4 lg:ml-64">
        {children}
      </main>
    </div>
  );
};

export default Layout;