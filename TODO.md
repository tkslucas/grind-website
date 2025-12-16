# TODO

## Images

Waiting on photos from Natika (GRIND folder). The site needs more imagery throughout:

- [ ] Hero section - add background image or photos of youth/programs
- [ ] About page - team photos, event photos
- [ ] Programs page - photos showcasing each program area
- [ ] Impact page - photos of partners and collaborations
- [ ] Get Involved page - community engagement photos
- [ ] Consider adding flyers to the homepage or a dedicated section
- [ ] Consider adding a photo gallery or testimonials with photos

## Contact Information

Social media links:

- [x] LinkedIn - linked in Footer and Contact page
- [ ] Instagram - commented out, uncomment when URL is available
  - `src/lib/components/Footer.svelte`
  - `src/routes/contact/+page.svelte`

## Get Involved Page

The get-involved page (`src/routes/get-involved/+page.svelte`) needs improvements:

- [ ] Add more specific calls-to-action and instructions
- [ ] Include volunteer/mentorship opportunities
- [ ] Add donation information or link
- [ ] Consider adding a contact form instead of just an email link

## Partner Logos

Need to collect more logos for the infinite marquee on the homepage. Currently have 11 logos, but many partners are missing.

### Current logos in marquee:
- [x] ESPN
- [x] NFL
- [x] Northwestern University
- [x] Duke University
- [x] Chicago Cubs
- [x] USC
- [x] UC Berkeley
- [x] Black Kids Predict
- [x] Boys & Girls Club of Chicago
- [x] TIILT Lab
- [x] Big Ten Conference

### Partners still needing logos:
- [ ] Chicago Sky
- [ ] Tulane University
- [ ] University of Maryland
- [ ] Drexel University
- [ ] New York University
- [ ] Shaw University
- [ ] Chicago Public Schools
- [ ] YMCA of Chicago
- [ ] Chicago Park District
- [ ] Comcast
- [ ] Project Exploration
- [ ] City of Chicago Mayor's Office

### Notes:
- Logos should be SVG format when possible for best quality
- Place logos in `static/images/partners/`
- Update `src/lib/data/partners.ts` `partnersWithLogos` array to add new logos
- Ensure logos are visible on white background (avoid white-only logos)
