const SITE_URL = 'https://grindcollective.org';

const pages = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/about', priority: '0.8', changefreq: 'monthly' },
	{ path: '/programs', priority: '0.8', changefreq: 'monthly' },
	{ path: '/impact', priority: '0.8', changefreq: 'monthly' },
	{ path: '/get-involved', priority: '0.7', changefreq: 'monthly' },
	{ path: '/contact', priority: '0.6', changefreq: 'monthly' }
];

export const prerender = true;

export function GET() {
	const today = new Date().toISOString().split('T')[0];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
