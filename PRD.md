# Product Requirements Document (PRD)
# THE GRIND COLLECTIVE Website

**Version:** 1.0
**Date:** December 15, 2024
**Project:** grind-website

---

## 1. Executive Summary

### 1.1 Project Overview
Build a modern, accessible website for THE GRIND COLLECTIVE, a Chicago-based 501(c)(3) nonprofit organization focused on creating equitable pathways for Black and Brown youth through science, technology, creativity, and social impact.

### 1.2 Goals
- Establish a professional online presence for the organization
- Communicate GRIND's mission, vision, and impact to diverse audiences
- Showcase the network of 50+ partner organizations
- Provide clear pathways for engagement (donors, partners, sponsees, community)

### 1.3 Success Metrics
- Website successfully deployed and accessible
- All core pages functional and on-brand
- Partner logos displayed prominently
- Contact information easily accessible
- SEO fundamentals in place for discoverability

---

## 2. Target Audiences

### Primary Audiences
1. **Potential Donors/Funders** - Foundations, corporations, individual donors interested in youth equity
2. **Fiscal Sponsorship Prospects** - Organizations seeking nonprofit infrastructure support
3. **Partner Organizations** - Universities, schools, community orgs interested in collaboration
4. **Community Members** - Youth, families, educators in Chicago wanting to engage

### User Needs by Audience
| Audience | Primary Need | Key Pages |
|----------|--------------|-----------|
| Donors | Understand impact, find donation path | Home, Impact, Get Involved |
| Sponsees | Learn about fiscal sponsorship services | About, Programs, Get Involved |
| Partners | Explore collaboration opportunities | About, Partners, Get Involved |
| Community | Learn what GRIND offers | Home, About, Programs |

---

## 3. Technical Specifications

### 3.1 Technology Stack
| Component | Technology | Rationale |
|-----------|------------|-----------|
| Framework | **SvelteKit** | Modern, performant, excellent DX |
| Styling | **Tailwind CSS** | Rapid development, design system consistency |
| Language | **TypeScript** | Type safety, better maintainability |
| Hosting | **Cloudflare Pages** | Fast edge network, generous free tier |
| Content | **Static** | Simple, no CMS overhead for initial launch |

### 3.2 Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

### 3.3 Performance Targets
- Lighthouse Performance Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### 3.4 Accessibility
- Follow WCAG 2.1 best practices
- Semantic HTML structure
- Keyboard navigation support
- Appropriate color contrast ratios
- Alt text for all images
- Screen reader friendly

---

## 4. Design System

### 4.1 Color Palette
Based on official Brand Style Guide:

```css
:root {
  /* Primary Colors */
  --color-grit-orange: #E85C3C;    /* Energy, disruption, CTAs */
  --color-rusted-copper: #B45F36;  /* Grit, resilience */
  --color-urban-charcoal: #2B2B2B; /* Strength, text */
  --color-dust-sand: #C89C7A;      /* Warmth, balance */
  --color-electric-ochre: #F5A623; /* Accents, momentum */

  /* Extended Palette */
  --color-white: #FFFFFF;
  --color-off-white: #F5F5F0;      /* Light backgrounds (from pitch deck) */
  --color-black: #000000;
}
```

### 4.2 Typography
```css
:root {
  /* Headings - Bold Sans-Serif */
  --font-heading: 'Montserrat', 'Bebas Neue', sans-serif;

  /* Body - Clean Sans-Serif */
  --font-body: 'Inter', 'Open Sans', 'Helvetica Neue', sans-serif;
}
```

**Type Scale:**
- H1: 48px / 3rem (bold)
- H2: 36px / 2.25rem (bold)
- H3: 24px / 1.5rem (semibold)
- H4: 20px / 1.25rem (semibold)
- Body: 16px / 1rem (regular)
- Small: 14px / 0.875rem (regular)

### 4.3 Design Principles
- **Light theme** with off-white/cream backgrounds (matching pitch deck aesthetic)
- **Grit Orange** for primary CTAs and accent elements
- **Urban Charcoal** for text and strong visual elements
- **Dust Sand** for secondary backgrounds and balance
- Clean, modern layout with generous whitespace
- "Grit + polish" — raw energy with sleek design

### 4.4 Component Style
- Rounded buttons (pill-style, matching pitch deck)
- Card-based content sections
- Strong typography hierarchy
- Decorative sun-ray motif from brand (as accent)

### 4.5 Animations
- Subtle, professional motion design
- Fade-in on scroll for content sections
- Smooth hover state transitions (0.2s ease)
- No jarring or distracting animations

---

## 5. Information Architecture

### 5.1 Site Map
```
Home
├── About
│   ├── Who We Are
│   ├── Mission & Vision
│   ├── Core Values
│   └── Why 501(c)(3)
├── Programs
│   ├── What We Offer
│   ├── Fiscal Sponsorship
│   └── Services Overview
├── Impact
│   ├── Our Reach
│   └── Partner Network
├── Get Involved
│   └── Contact Information
└── Contact
    └── General Inquiry
```

### 5.2 Navigation Structure
**Primary Navigation (Header):**
- Logo (links to Home)
- About
- Programs
- Impact
- Get Involved
- Contact (could be CTA button style)

**Footer Navigation:**
- Quick links to all pages
- Social media links (placeholder for now)
- Contact information
- Copyright / Legal

---

## 6. Page Specifications

### 6.1 Home Page
**Purpose:** Introduce GRIND, communicate mission, drive engagement

**Sections:**
1. **Hero Section**
   - Large headline: Organization name + tagline
   - Subheadline: "Building Futures Through Collaboration, Creativity, and Inclusivity"
   - Primary CTA button
   - Hero image or branded graphic

2. **Mission Statement**
   - Brief mission text
   - Supporting visual element

3. **What We Do** (Brief overview)
   - 3-4 service highlights with icons
   - Link to Programs page

4. **Partners Section**
   - "Our Network" headline
   - Logo grid of 50+ partners
   - Possibly scrolling/marquee for visual interest

5. **Call to Action**
   - "Get Involved" section
   - Contact/engagement prompt

### 6.2 About Page
**Purpose:** Deep dive into GRIND's story, mission, vision, and values

**Sections:**
1. **Page Header**
   - "Who We Are" headline

2. **Organization Overview**
   - GRIND acronym explanation
   - Chicago-based 501(c)(3) details
   - Founded 2024, incorporated 2025

3. **Mission Statement**
   - Full mission text with visual treatment

4. **Vision Statement**
   - Full vision text

5. **Core Values**
   - 5 values with descriptions:
     - Collaboration
     - Equity
     - Innovation
     - Integrity
     - Learning

6. **Why We Formed**
   - Origin story (2024 GRIND Conference, 40+ organizations)
   - Benefits of 501(c)(3) status

### 6.3 Programs Page
**Purpose:** Detail GRIND's offerings and fiscal sponsorship services

**Sections:**
1. **Page Header**
   - "What We Offer" headline

2. **Services Overview**
   - Fiscal Sponsorship
   - Program Design & Implementation
   - Community Research & Evaluation
   - Professional Development
   - Partnership & Capacity Building

3. **Fiscal Sponsorship Deep Dive**
   - What it is
   - How it works at GRIND
   - Benefits for sponsees
   - Year One services list

4. **Why Choose GRIND**
   - Key differentiators
   - Value proposition

### 6.4 Impact Page
**Purpose:** Showcase GRIND's reach and partner network

**Sections:**
1. **Page Header**
   - "Our Impact" headline

2. **By the Numbers** (if data available)
   - Key statistics
   - Reach metrics

3. **Partner Network**
   - Full partner logo display
   - Categories if applicable (Universities, Sports, Media, Community Orgs, etc.)
   - 50+ partners listed

4. **Commitment Statement**
   - GRIND's commitment to collaboration and community impact

### 6.5 Get Involved Page
**Purpose:** Simple pathway to engagement

**Sections:**
1. **Page Header**
   - "Get Involved" headline

2. **Ways to Engage**
   - Brief description of how to connect
   - Contact information prominently displayed

3. **Contact Details**
   - Email address
   - Phone (if available)
   - Location: Chicago, IL

4. **Social Links**
   - Placeholder for social media links

### 6.6 Contact Page
**Purpose:** Direct contact information

**Sections:**
1. **Contact Information**
   - Email
   - Phone (if available)
   - Address/Location

2. **Social Media Links**
   - Placeholders until URLs provided

*Note: No contact form for initial launch - mailto links only*

---

## 7. Assets Required

### 7.1 Images
- [ ] Logo (PNG provided - need high resolution)
- [ ] Hero image(s) for homepage
- [ ] Team photos (if available)
- [ ] Event/program photos
- [ ] Partner logos (50+ organizations)

### 7.2 Content
- [x] Mission statement (from pitch deck)
- [x] Vision statement (from pitch deck)
- [x] Core values (from pitch deck)
- [x] Services list (from pitch deck)
- [x] Partner list (from pitch deck)
- [ ] Contact email address
- [ ] Phone number (optional)
- [ ] Social media URLs (to be provided)

### 7.3 Fonts
- Montserrat (Google Fonts - free)
- Inter (Google Fonts - free)

---

## 8. SEO Requirements

### 8.1 Technical SEO
- Semantic HTML5 structure
- XML Sitemap generation
- robots.txt configuration
- Canonical URLs
- Mobile-responsive design

### 8.2 Meta Tags (Per Page)
- Title tag (unique per page, < 60 characters)
- Meta description (unique per page, < 160 characters)
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags

### 8.3 Structured Data
- Organization schema
- LocalBusiness schema (Chicago location)
- BreadcrumbList schema

### 8.4 Example Meta Tags
```html
<!-- Home Page -->
<title>THE GRIND COLLECTIVE | Building Futures Through Collaboration</title>
<meta name="description" content="Chicago-based 501(c)(3) creating equitable pathways for Black and Brown youth through science, technology, creativity, and social impact.">
```

---

## 9. Development Phases

### Phase 1: Foundation
- [ ] Initialize SvelteKit project with TypeScript
- [ ] Configure Tailwind CSS with brand design tokens
- [ ] Set up project structure and routing
- [ ] Create base layout component
- [ ] Implement header/navigation
- [ ] Implement footer

### Phase 2: Core Pages
- [ ] Home page (Hero + Mission focus)
- [ ] About page
- [ ] Programs page
- [ ] Contact page

### Phase 3: Extended Pages
- [ ] Impact page with partner grid
- [ ] Get Involved page

### Phase 4: Polish & Launch
- [ ] SEO implementation (meta tags, sitemap, structured data)
- [ ] Performance optimization
- [ ] Accessibility review
- [ ] Cross-browser testing
- [ ] Cloudflare Pages deployment setup
- [ ] Final review and launch

---

## 10. Out of Scope (Future Considerations)

The following are explicitly **not** included in this initial build:

- [ ] Donation/payment integration
- [ ] Contact forms (using mailto links instead)
- [ ] Newsletter signup
- [ ] Fiscal sponsorship application system
- [ ] Blog/News section
- [ ] Event calendar
- [ ] CMS integration
- [ ] User accounts/authentication
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Embedded social media feeds

---

## 11. Deployment & Hosting

### 11.1 Cloudflare Pages Configuration
- Build command: `npm run build`
- Build output directory: `.svelte-kit/cloudflare`
- Node.js version: 18.x or 20.x
- SvelteKit adapter: `@sveltejs/adapter-cloudflare`

### 11.2 Domain
- TBD (to be provided by client)
- Cloudflare DNS recommended for seamless integration

### 11.3 Environment
- Production deployment from `main` branch
- Preview deployments for pull requests

---

## 12. Appendix

### A. Brand Keywords
From Brand Style Guide:
- Disruptive
- Strategic
- Authentic
- Community-Driven
- Relentless
- Bold
- Energetic
- Motivational

### B. GRIND Acronym
**G**enerative **R**esearch and **I**nclusion **N**etworks in **D**iverse Development

### C. Partner Organizations (Full List)
1. True Star Media
2. Red Oracle Films
3. Kountry Wayne Productions
4. Tulane University
5. ESPN
6. Big Ten Conference
7. Chicago Sky
8. Project Syncere
9. Boys and Girls Club of Chicago
10. Flash Hoops
11. Game Flo
12. YMCA of Chicago
13. University of IL Chicago
14. Chicago Public Schools - Citywide STEM Initiatives
15. C. J. Brown Foundation
16. Chicago Public Schools
17. 530 Scholars
18. Project Exploration
19. University of Southern California
20. Redwell Foundation
21. Northwestern University - TIILT Lab
22. Hero Foundation
23. TIILT Lab
24. Black Kids Predict
25. T.O.B.Y. Agency
26. Transforming Learning
27. Drexel University - ILLEST Lab
28. Twin Flame Ventures
29. Chicago Park District
30. New York University
31. STEM From Dance
32. University of Maryland
33. Perry Co Shoes
34. The Next IT Girl
35. 4th Family
36. Duke University
37. Shaw University
38. Nunn Group LLC
39. NFL - Do Not Disturb
40. University of California, Berkeley - TEAM Inc.
41. 1000 Watts Sports
42. The Future in Color Institute
43. Brand B Sports
44. City of Chicago Mayor's Office
45. Youth Sports Science Institute
46. The Fab Foundation
47. NJAPA Enterprises LLC
48. Comcast
49. Chicago Public Schools Department of Education
50. Shot Tracker
51. Chicago Cubs
52. Vanderpoel Elementary School
53. Creative Astronaut Ventures
54. Strides for Peace

---

## 13. Sign-Off

**Document Status:** Draft
**Prepared for:** THE GRIND COLLECTIVE
**Prepared by:** Development Team

---

*This PRD is a living document and may be updated as requirements evolve.*
