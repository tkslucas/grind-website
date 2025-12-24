# TODO

## Domain Setup

- [ ] Set up custom domain `grindcollective.org`
  - Either: Add CNAME record pointing to `grind-website.pages.dev`
  - Or: Transfer DNS to Cloudflare for easier management

## Images

Event photos added to `static/images/events/`:

- [x] Hero section - background image with blur overlay (GRINDConferenceCloseupSpeakers.JPG)
- [x] Who We Are section - conference photo (GRINDConferenceWiderPhotoParticipants.JPG)
- [x] Vision section - STEAM camp photo (STEAMSummerCamp_ActivityKids.jpeg)
- [x] Programs page - auto-rotating carousel with all 6 event photos

Still to do:
- [ ] About page - team photos, event photos
- [ ] Impact page - photos of partners and collaborations
- [ ] Get Involved page - community engagement photos
- [ ] Consider adding flyers to the homepage or a dedicated section

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

Currently have 18 logos in the marquee.

### Current logos in marquee:
- [x] ESPN
- [x] NFL
- [x] Northwestern University
- [x] Duke University
- [x] Chicago Cubs
- [x] Chicago Sky
- [x] USC
- [x] UC Berkeley
- [x] Black Kids Predict
- [x] Boys & Girls Club of Chicago
- [x] TIILT Lab
- [x] Big Ten Conference
- [x] Chicago Public Schools
- [x] YMCA of Chicago
- [x] Fab Foundation
- [x] New York University
- [x] City of Chicago Mayor's Office

### Partners still needing logos:
- [ ] Tulane University
- [ ] University of Maryland
- [ ] Drexel University
- [ ] Shaw University
- [ ] Chicago Park District
- [ ] Comcast
- [ ] Project Exploration

### Notes:
- Logos should be SVG format when possible for best quality
- Place logos in `static/images/partners/`
- Update `src/lib/data/partners.ts` `partnersWithLogos` array to add new logos
- Ensure logos are visible on white background (avoid white-only logos)

## Future Enhancements

### High Priority
- [x] Hero background image with dark overlay
- [ ] Team/founder section on About page
- [ ] Testimonials from partners or program participants

### Medium Priority
- [ ] Stats with context on Impact page (brief descriptions of what numbers mean)
- [ ] Partner logo tooltips (hover to show name and collaboration details)
- [ ] Featured programs section highlighting flagship initiatives
- [ ] Press/media mentions ("As seen in" section)

### Nice to Have
- [ ] Newsletter signup (footer or dedicated section)
- [ ] Impact stories / case studies
- [ ] Scroll animations (fade in sections)
