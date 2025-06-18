// mi-proyecto-seo/pages/_app.js
import "@/styles/globals.css"; // Mantén tus estilos globales
import { Inter } from "next/font/google"; // Importa la fuente Inter de Google Fonts
import Head from "next/head"; // Importa el componente Head para metadatos globales

// Configura la fuente Inter. `subsets: ["latin"]` carga solo los caracteres latinos.
// Añadimos la estrategia de precarga y display para optimizar la carga de fuentes.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Especifica los pesos que usarás para reducir el tamaño
  display: "swap", // Mejora el rendimiento de renderizado de texto (FOIT/FOUT)
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Metadatos globales (útil para valores por defecto o fallback) */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/*
          Aquí puedes añadir metadatos que aplican a todas las páginas por defecto.
          Las páginas individuales pueden sobrescribir estos valores usando su propio Head.
          Por ejemplo, un título predeterminado si una página no tiene uno:
        */}
        {/* <title>Mi Sitio Web Optimizado por Defecto</title> */}

        {/* Favicon - ¡Crucial para la marca y la UX! */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Optimización para el modo oscuro (si lo implementarías) */}
        {/* <meta name="color-scheme" content="light dark" /> */}
        {/* <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" /> */}
        {/* <meta name="theme-color" content="#1a202c" media="(prefers-color-scheme: dark)" /> */}
      </Head>

      {/* Aplica la clase generada por la fuente al elemento principal de la aplicación */}
      {/* Añadimos clases de Tailwind para un estilo base consistente y minimalista */}
      <main className={`${inter.className} antialiased text-gray-800 bg-gray-50`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;