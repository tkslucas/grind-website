# THE GRIND COLLECTIVE Website

Official website for THE GRIND COLLECTIVE, a Chicago-based 501(c)(3) nonprofit organization creating equitable pathways for Black and Brown youth through science, technology, creativity, and social impact.

## Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/) with TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) (static adapter)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── app.css                 # Global styles and Tailwind config
├── app.html                # HTML template
├── lib/
│   ├── components/         # Reusable Svelte components
│   │   ├── Header.svelte
│   │   ├── Footer.svelte
│   │   └── SEO.svelte
│   └── data/               # Static content data
│       ├── content.ts      # Site content (mission, values, services)
│       └── partners.ts     # Partner organizations list + logos
├── routes/
│   ├── +layout.svelte      # Root layout
│   ├── +layout.ts          # Prerender config
│   ├── +page.svelte        # Home page
│   ├── about/              # About page
│   ├── programs/           # Programs page
│   ├── impact/             # Impact page
│   ├── get-involved/       # Get Involved page
│   ├── contact/            # Contact page
│   └── sitemap.xml/        # XML sitemap endpoint
scripts/
└── fetch-logos.js          # Utility script for fetching partner logos
static/
├── images/
│   └── partners/           # Partner logo assets (SVG/PNG)
└── robots.txt              # Robots file for SEO
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, mission overview, services, partners preview |
| About | `/about` | Mission, vision, core values, origin story |
| Programs | `/programs` | Services overview, fiscal sponsorship details |
| Impact | `/impact` | Partner network by category |
| Get Involved | `/get-involved` | Ways to engage, contact info |
| Contact | `/contact` | Contact details, social links |

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Grit Orange | `#E85C3C` | Primary CTAs, accents |
| Rusted Copper | `#B45F36` | Hover states |
| Urban Charcoal | `#2B2B2B` | Text, dark backgrounds |
| Dust Sand | `#C89C7A` | Secondary accents |
| Electric Ochre | `#F5A623` | Highlights |
| Off White | `#F5F5F0` | Light backgrounds |

## Deployment

### Cloudflare Pages (CLI)

Deploy using Wrangler CLI:

```bash
# First time: create the project
wrangler pages project create grind-website --production-branch main

# Build and deploy
npm run build && wrangler pages deploy build --project-name grind-website
```

The site is available at: https://grind-website.pages.dev

### Cloudflare Pages (Dashboard)

Alternatively, connect via the Cloudflare dashboard:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create
2. Connect your GitHub repository
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Node.js version:** 18 or 20 (set `NODE_VERSION` environment variable)

### Custom Domain

To add a custom domain:
- **Dashboard:** Pages → grind-website → Custom domains → Add
- **CLI:** `wrangler pages project add-domain grind-website yourdomain.com`

### Other Platforms

This is a static site and can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, Firebase Hosting, AWS S3, etc.). Use these build settings:

- **Build command:** `npm run build`
- **Output directory:** `build`
- **Node.js version:** 18 or 20

### Environment Variables

No environment variables required for the static build.

## Configuration

### Updating Content

Most site content is centralized in `src/lib/data/`:

- **content.ts** - Mission, vision, values, services, navigation
- **partners.ts** - Partner organizations list and logos for the marquee

### Adding Partner Logos

1. Add logo file (SVG preferred) to `static/images/partners/`
2. Update `partnersWithLogos` array in `src/lib/data/partners.ts`
3. Ensure logo is visible on white background

See `TODO.md` for list of partners still needing logos.

### Updating Social Links

- **LinkedIn:** Already linked to https://www.linkedin.com/company/the-grind-collective/
- **Instagram:** Commented out in Footer and Contact page. Uncomment and add URL when available:
  - `src/lib/components/Footer.svelte`
  - `src/routes/contact/+page.svelte`

### Updating Contact Email

The contact email `info@grindcollective.org` appears in multiple files. Search and replace as needed.

### Updating Domain

Update the domain in:
- `src/routes/sitemap.xml/+server.ts`
- `static/robots.txt`
- `src/lib/components/SEO.svelte`

## License

All rights reserved. THE GRIND COLLECTIVE.
