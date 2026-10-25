# Portfolio redesign — design

Date: 2026-10-25
Owner: Writwik Sati

## Why

Writwik is job hunting for **Shopify developer** and **frontend (React) developer** roles. The current site
([src/App.jsx](../../../src/App.jsx)) is a generic dark one-pager: it shows no Shopify work at all, lists a
booking app with no link, and doesn't make it quick for a recruiter to find proof for the role they're hiring for.

The new site's one job: a recruiter who lands from a resume, LinkedIn or job application sees, within
seconds, live work relevant to *their* role, and can download the resume or get in touch.

## Goals

- Show live, clickable proof of work, grouped by role (Shopify / React).
- Let a recruiter filter to their role with one click, and let Writwik send a pre-filtered link
  (`?role=shopify`, `?role=react`) with each application.
- Make contacting and getting the resume one click away from anywhere.
- Look unique, bright and polished; work well on a phone.

## Non-goals (for now)

- MERN / backend positioning. The HRMS internal tool and API work are left out; may be added later as a case study.
- Blog, CMS, contact form, analytics, multiple pages/routing.

## Anti-goals (would make it a failure even if it works)

- Looks like a stock template or the old dark-gradient look.
- Animation that slows the page or gets in the way of reading.
- Any project shown without a working live link.
- The booking app appearing anywhere.

## Content (all decided by Writwik unless marked)

**Identity:** Writwik Sati, Lucknow, India. Frontend Developer at **Ingversions Digital**, Sept 2024 – present, remote.
Role there: React developer, Shopify developer, QA. BCA, Lucknow Public College of Professional Studies, 2021–2024.

**Contact:** email `writwiksati674@gmail.com`, LinkedIn `https://www.linkedin.com/in/writwik-sati-9aa0a0146/`,
GitHub `https://github.com/Writwik-work`. Phone `+91-9044273170` is on the resume and old site; *my call*: show it
in the contact section only.

**Resume:** copy `D:\Desktop\WS Resume.pdf` to `public/Writwik-Sati-Resume.pdf`; "Download resume" button links there.

**Projects:**

| Project | Type | Link | What Writwik did |
|---|---|---|---|
| Ingversions Digital | React | https://ingversionsdigital.com/ | Built the company site from scratch: reusable components, performance, SEO, responsive, cross-browser (BrowserStack) |
| Coteamspace | React | https://coteamspace.com/ | Built the whole site from scratch in React |
| Match With Nature | Shopify | https://matchwithnature.com/ | Built custom pages and product pages (Liquid) |
| The Bloomi | Shopify | https://thebloomi.com/ | Built custom pages and product pages (Liquid) |
| Ruff Greens | Shopify | https://ruffgreens.com/ | Built custom pages and product pages (Liquid) |
| Grooved Learning | Shopify | https://groovedlearning.com/ | Built custom pages and product pages (Liquid) |

Rapid Radios, Buildd and the booking app are removed.

**Detail panel content:** only what Writwik stated, never invented. React sites: "Built the whole site from scratch"
plus the Ingversions resume bullets for that site. Shopify stores: "Built custom pages and product pages" + tech
(Shopify, Liquid, HTML/CSS/JS). Keep the data shape so Writwik can add per-site bullets later.

**Site URL:** `https://writwiks-portfolio.com` (Writwik added it in Vercel). Use it for `og:url`, `og:image` and canonical.
As of 2026-10-25 the domain does not resolve (not registered yet), so keep it in one constant that's easy to change.
*My call*: social preview image = a simple 1200×630 PNG made from the hero tile (name, title, colours).

**Skills** (*my call*, from the resume, grouped): React, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap ·
Shopify, Liquid, theme customisation · Git & GitHub, Figma, BrowserStack, QA / A/B testing.

## Look and layout (chosen: "C · Bento + role switch")

Mockup: `.superpowers/brainstorm/*/content/visual-direction.html`, option C.

- Bright, near-white background; content laid out as rounded tiles of mixed sizes in a grid ("bento").
  Each tile has its own soft colour (lime, periwinkle, peach, etc.); one dark hero tile carries name + title.
- On phones the grid collapses to a single column; tiles keep their colours.
- **Role switch** at the top: `All` · `Shopify` · `React`.
  - Picking a role reorders the project tiles so that role's work comes first (others stay visible, dimmed or after),
    and swaps the hero headline/subline to match, e.g. Shopify: "Shopify developer building custom Liquid sections and product pages";
    React: "React developer shipping fast, production websites". All: "Frontend & Shopify developer".
  - Reads/writes `?role=shopify|react` in the URL (no reload) so the link is shareable.
- **Project tile:** name, React/Shopify badge, one line on what was built, "Visit live site ↗" (new tab).
  Clicking the tile opens a detail panel (modal/drawer) with a screenshot, the bullet list of work, tech used and the live link.
- **Sections, top to bottom:** sticky slim header (name, role switch, Resume button) → bento hero + project tiles →
  experience tile (Ingversions Digital) → skills tile → contact tile (email, LinkedIn, GitHub, phone, resume) → small footer.
- Hero tile shows availability ("Open to Shopify & frontend roles") and quick stats ("4 Shopify stores · 2 React sites").

## How it gets made

- Build on what the repo already uses: **Vite + React 19 + Tailwind 3 + framer-motion**. No new dependencies needed.
- Single page. Project data in one array in code; the role switch is plain React state + `URLSearchParams`.
- Remove leftover Vite template files (`App.css`, `src/assets/react.svg`, `public/vite.svg`) and the template README.
- `index.html`: real `<title>`, meta description, Open Graph tags so the link previews well on LinkedIn/WhatsApp.
- Screenshots: one static image per project in `public/projects/`, captured once from the live sites
  (any headless browser). If a capture isn't possible, the tile uses its colour block with the site name instead.
- Respect `prefers-reduced-motion`; keyboard-accessible switch, tiles and panel; visible focus; alt text on screenshots.

## Left to the builder

Exact colours, fonts (one Google Font is fine), spacing, animation details, tile sizes per breakpoint,
how non-matching tiles are shown under a role filter, panel style (modal vs drawer), favicon.
Hosting/deploy is out of scope.
