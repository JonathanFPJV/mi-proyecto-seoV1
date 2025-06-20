// mi-proyecto-seo/pages/api/sitemap.js

const BASE_URL = "https://juli-seo.onrender.com"; // ¡IMPORTANTE: Asegúrate de que esta sea tu URL DEPLOYADA en Render!

export default async function handler(req, res) {
  // Lista de URLs estáticas.
  // Aquí hemos añadido '/blog' y '/contacto'
  const urls = [
    "/",
    "/blog",
    "/contacto"
    // Si tuvieras más páginas estáticas, las agregarías aquí.
    // Ejemplo: '/acerca-de', '/servicios'
  ];

  // Si en el futuro tuvieras contenido dinámico (ej. artículos de blog desde una base de datos/CMS),
  // este es el lugar donde los buscarías y los añadirías al array 'urls'.
  // Por ejemplo:
  /*
  const dynamicBlogPosts = await fetch('https://tu-api.com/blog-posts').then(res => res.json());
  dynamicBlogPosts.forEach(post => urls.push(`/blog/${post.slug}`));
  */

  // Genera el XML del sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => {
      // Para cada URL, creamos una entrada <url><loc> con la BASE_URL prepuesta.
      return `<url><loc>${BASE_URL}${url}</loc></url>`;
    })
    .join("")}
</urlset>`;

  // Establece el encabezado Content-Type a 'text/xml' para que los navegadores y bots lo reconozcan como un XML.
  res.setHeader("Content-Type", "text/xml");
  // Envía el contenido del sitemap
  res.write(sitemap);
  // Finaliza la respuesta
  res.end();
}