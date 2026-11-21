# Roynet Solutions — five-page design preview

**Status:** preview only. Do not merge to `main` or publish to roynetsolutions.com until reviewed and approved.

## Updated contact details
The phone number **+1 368 838 7989** is shown in the shared footer on every page and prominently on the Contact / Partnerships page. All phone numbers use clickable `tel:+13688387989` links for mobile users.

## Pages
- index.html
- services.html
- coverage.html
- about.html
- contact.html

## Technology
Plain HTML, shared CSS, minimal JavaScript, SVG logo/favicon and optimized local WebP photo. Compatible with Vercel static hosting; no framework or build dependencies.

## Review locally
Serve this folder with `python -m http.server 8000` then open `http://localhost:8000/`.

## Deployment safety
Vercel production is connected to `main`. Create a separate branch (`roynet-v2-preview`), upload these files on that branch, and review the automatic preview deployment. Never upload direct to `main` before approval. Production custom-domain mapping still requires verification.

## Pre-launch checklist
- Confirm business registration-related legal display and service geography.
- Confirm who can actually provide Canada/EU assignments; availability text is conditional.
- Replace illustrative hero photography with a licensed/approved image if needed.
- Review the vector logo against the approved design reference; adjust before launch as necessary.
- Integrate and TEST real form delivery (the preview contact form currently opens a draft in visitor's email client).
- Remove `noindex, nofollow` meta tags and preview robots.txt when ready to be indexed.
- Add sitemap.xml, canonical tags and social metadata with real production URLs.
- Verify accessibility, contrast, performance, mobile layouts, privacy notice and contact details.
- Validate your Squarespace DNS, email MX records and Vercel custom-domain assignment; do not change email DNS inadvertently.

## Next staging step
1. Confirm that Vercel production tracks `main` (verified from your Vercel screenshot).
2. In GitHub, create a new branch named `roynet-v2-preview` from `main`.
3. Upload the contents of this ZIP to the ROOT of that new branch, replacing/adding the new site files there; never upload to `main` at this stage.
4. Wait for Vercel to create a preview deployment. Find it under the Vercel project > Deployments.
5. Verify pages, phone tap-to-call, favicon and mobile layout on that preview URL.
6. Do not merge until form delivery, business information, production SEO and domain mapping are reviewed.
