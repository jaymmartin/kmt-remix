
const fs = require('fs');
const path =require('path')
var convert = require('xml-js');
var options = {compact: true, ignoreComment: true, spaces: 4};


// const xml = `
//   <urlset>
// <url>
// <loc>https://www.katemartintherapy.com</loc>
// <lastmod>2022-01-08T00:15:16+01:00</lastmod>
// <priority>1.0</priority>
// </url>
// <url>
// <loc>https://www.taco-it.com/develop</loc>
// <lastmod>2022-01-08T00:15:16+01:00</lastmod>
// <priority>1.0</priority>
// </url>
// <url>
// <loc>https://www.taco-it.com/consult</loc>
// <lastmod>2022-01-08T00:15:16+01:00</lastmod>
// <priority>1.0</priority>
// </url>
// <url>
// <loc>https://www.taco-it.com/manage</loc>
// <lastmod>2022-01-08T00:15:16+01:00</lastmod>
// <priority>1.0</priority>
// </url>
// </urlset>`;

const pages = [
  "",
  "/about",
  "/services",
  "/rates",
  "/parenting",
  "/options",
  "/work"
];

const now = new Date();
const sitemap = {
  urlset: { url: pages.map(page => ({    

      loc: "https://katemartintherapy.com"+page,
      lastmod: now.toISOString().substring(0, 10),
      priority: 1.0

  }))
}
};


const sitemapXml = convert.js2xml(sitemap, options);
console.dir(sitemap, {depth:5});
console.log(sitemapXml);

fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemapXml);