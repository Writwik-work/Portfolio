import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars -- used as <motion.x>, which this lint config doesn't detect
import { motion, MotionConfig } from "framer-motion";

const EMAIL = "writwiksati674@gmail.com";
const PHONE = "+91-9044273170";
const LINKEDIN = "https://www.linkedin.com/in/writwik-sati-9aa0a0146/";
const GITHUB = "https://github.com/Writwik-work";
const RESUME = "/Writwik-Sati-Resume.pdf";

const PROJECTS = [
  {
    slug: "ingversions-digital",
    name: "Ingversions Digital",
    url: "https://ingversionsdigital.com/",
    type: "react",
    color: "bg-indigo-100",
    summary: "Company website built from scratch in React.",
    points: [
      "Built the whole site from scratch in React",
      "Reusable components and a scalable UI structure",
      "Performance and SEO work for faster loads and better visibility",
      "Cross-browser testing with BrowserStack, A/B tests with the QA team",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "BrowserStack"],
  },
  {
    slug: "coteamspace",
    name: "Coteamspace",
    url: "https://coteamspace.com/",
    type: "react",
    color: "bg-sky-100",
    summary: "HRMS & payroll product website built from scratch in React.",
    points: ["Built the whole site from scratch in React", "Responsive across devices and browsers"],
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    slug: "match-with-nature",
    name: "Match With Nature",
    url: "https://matchwithnature.com/",
    type: "shopify",
    color: "bg-lime-200",
    summary: "Custom pages and product pages for an eco laundry brand.",
    points: ["Built custom pages and product pages", "Custom Liquid sections"],
    tech: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
  },
  {
    slug: "the-bloomi",
    name: "The Bloomi",
    url: "https://thebloomi.com/",
    type: "shopify",
    color: "bg-rose-100",
    summary: "Custom pages and product pages for a wellness brand.",
    points: ["Built custom pages and product pages", "Custom Liquid sections"],
    tech: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
  },
  {
    slug: "ruff-greens",
    name: "Ruff Greens",
    url: "https://ruffgreens.com/",
    type: "shopify",
    color: "bg-emerald-100",
    summary: "Custom pages and product pages for a pet nutrition brand.",
    points: ["Built custom pages and product pages", "Custom Liquid sections"],
    tech: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
  },
  {
    slug: "grooved-learning",
    name: "Grooved Learning",
    url: "https://groovedlearning.com/",
    type: "shopify",
    color: "bg-amber-100",
    summary: "Custom pages and product pages for a kids' learning store.",
    points: ["Built custom pages and product pages", "Custom Liquid sections"],
    tech: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
  },
];

const HERO = {
  all: {
    eyebrow: "Frontend & Shopify Developer",
    title: "I build fast React websites and custom Shopify stores.",
  },
  shopify: {
    eyebrow: "Shopify Developer",
    title: "I build custom Shopify pages and product pages that sell.",
  },
  react: {
    eyebrow: "React Developer",
    title: "I build production React websites from scratch.",
  },
};

const ROLES = [
  ["all", "All work"],
  ["shopify", "Shopify"],
  ["react", "React"],
];

const SKILLS = [
  ["Frontend", ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]],
  ["Shopify", ["Liquid", "Theme customisation", "Custom sections", "Product pages"]],
  ["Tools", ["Git & GitHub", "Figma", "BrowserStack", "A/B testing", "QA"]],
];

function roleFromUrl() {
  const r = new URLSearchParams(window.location.search).get("role");
  return r in HERO ? r : "all";
}

export default function App() {
  const [role, setRole] = useState(roleFromUrl);
  const [open, setOpen] = useState(null);

  function pickRole(r) {
    setRole(r);
    const url = new URL(window.location.href);
    if (r === "all") url.searchParams.delete("role");
    else url.searchParams.set("role", r);
    window.history.replaceState(null, "", url);
  }

  // Selected role's work first; the rest keeps its order after.
  const projects =
    role === "all" ? PROJECTS : [...PROJECTS].sort((a, b) => (b.type === role) - (a.type === role));
  const count = (t) => PROJECTS.filter((p) => p.type === t).length;

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-stone-50 text-neutral-900">
        <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-stone-50/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <a href="#top" className="font-display text-lg font-bold tracking-tight">
              Writwik Sati
            </a>
            <div
              role="group"
              aria-label="Show work for role"
              className="order-last flex w-full rounded-full bg-neutral-200/70 p-1 text-sm sm:order-none sm:w-auto"
            >
              {ROLES.map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={role === key}
                  onClick={() => pickRole(key)}
                  className={`flex-1 rounded-full px-4 py-1.5 font-medium transition sm:flex-none ${
                    role === key ? "bg-neutral-900 text-white shadow" : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <a
              href={RESUME}
              download
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              Resume ↓
            </a>
          </div>
        </header>

        <main id="top" className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-6">
          {/* Hero */}
          <section className="flex flex-col justify-between gap-8 rounded-3xl bg-neutral-900 p-7 text-white sm:col-span-2 sm:p-10 lg:col-span-4">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-lime-300">{HERO[role].eyebrow}</p>
              <motion.h1
                key={role}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
              >
                {HERO[role].title}
              </motion.h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#work" className="rounded-full bg-lime-300 px-5 py-2.5 font-semibold text-neutral-900 transition hover:bg-lime-200">
                See my work
              </a>
              <a href="#contact" className="rounded-full border border-white/25 px-5 py-2.5 font-medium transition hover:border-white/60">
                Contact me
              </a>
            </div>
          </section>

          {/* Status + stats */}
          <section className="flex flex-col justify-between gap-6 rounded-3xl bg-lime-200 p-7 lg:col-span-2">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-600" aria-hidden="true" />
              Open to new roles
            </p>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-neutral-700">Shopify stores</dt>
                <dd className="font-display text-4xl font-bold">{count("shopify")}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-700">React sites</dt>
                <dd className="font-display text-4xl font-bold">{count("react")}</dd>
              </div>
            </dl>
            <p className="text-sm text-neutral-800">
              Frontend Developer at <strong>Ingversions Digital</strong> since Sept 2024 · Lucknow, India · Remote
            </p>
          </section>

          {/* Work */}
          <h2 id="work" className="scroll-mt-24 pt-6 font-display text-2xl font-bold sm:col-span-2 lg:col-span-6">
            Live work <span className="text-neutral-400">· click a project for details</span>
          </h2>
          {projects.map((p) => (
            <motion.article
              layout
              key={p.slug}
              transition={{ duration: 0.4 }}
              className={`group flex flex-col overflow-hidden rounded-3xl ${p.color} transition-opacity lg:col-span-2 ${
                role !== "all" && p.type !== role ? "opacity-50 hover:opacity-100" : ""
              }`}
            >
              <button type="button" onClick={() => setOpen(p)} className="flex flex-1 flex-col text-left">
                <Shot project={p} className="m-3 mb-0 rounded-2xl transition group-hover:-translate-y-1" />
                <div className="flex flex-1 flex-col gap-2 p-5 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-bold">{p.name}</h3>
                    <Badge type={p.type} />
                  </div>
                  <p className="text-sm text-neutral-700">{p.summary}</p>
                </div>
              </button>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mx-5 mb-5 w-fit text-sm font-semibold underline decoration-2 underline-offset-4 hover:decoration-neutral-900/40"
              >
                Visit live site ↗
              </a>
            </motion.article>
          ))}

          {/* Experience */}
          <section className="rounded-3xl bg-white p-7 ring-1 ring-neutral-200 sm:col-span-2 lg:col-span-3">
            <h2 className="mb-1 font-display text-2xl font-bold">Experience</h2>
            <p className="mb-5 text-sm text-neutral-500">Sept 2024 – Present · Remote</p>
            <h3 className="font-semibold">Frontend Developer · Ingversions Digital</h3>
            <p className="mb-4 text-sm text-neutral-600">React developer, Shopify developer and QA</p>
            <ul className="space-y-2 text-sm text-neutral-700">
              {[
                "Built the company website and Coteamspace from scratch in React",
                "Built custom pages, product pages and Liquid sections for Shopify stores",
                "Optimised components for speed, SEO and responsiveness",
                "Worked with QA on A/B tests and bug fixes; cross-browser testing on BrowserStack",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-lime-600" aria-hidden="true">●</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-neutral-100 pt-4 text-sm text-neutral-600">
              <strong className="text-neutral-900">Education:</strong> BCA, Lucknow Public College of Professional Studies, 2021–2024
            </p>
          </section>

          {/* Skills */}
          <section className="rounded-3xl bg-violet-100 p-7 sm:col-span-2 lg:col-span-3">
            <h2 className="mb-5 font-display text-2xl font-bold">Skills</h2>
            <div className="space-y-5">
              {SKILLS.map(([group, items]) => (
                <div key={group}>
                  <h3 className="mb-2 text-sm font-medium text-neutral-600">{group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <li key={s} className="rounded-full bg-white/80 px-3 py-1 text-sm font-medium">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24 rounded-3xl bg-orange-200 p-7 sm:col-span-2 sm:p-10 lg:col-span-6">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">Hiring for Shopify or React?</h2>
                <p className="mt-2 max-w-xl text-neutral-800">I reply within a day. Email is fastest.</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-5 inline-block break-all font-display text-xl font-bold underline decoration-2 underline-offset-4 sm:text-2xl"
                >
                  {EMAIL}
                </a>
              </div>
              <ul className="flex flex-wrap gap-3 text-sm font-medium">
                <li><a className="pill" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
                <li><a className="pill" href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a></li>
                <li><a className="pill" href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a></li>
                <li><a className="pill bg-neutral-900 text-white hover:bg-neutral-700" href={RESUME} download>Resume ↓</a></li>
              </ul>
            </div>
          </section>
        </main>

        <footer className="mx-auto max-w-6xl px-4 pb-10 pt-4 text-sm text-neutral-500 sm:px-6">
          © {new Date().getFullYear()} Writwik Sati
        </footer>

        <ProjectDialog project={open} onClose={() => setOpen(null)} />
      </div>
    </MotionConfig>
  );
}

function Badge({ type }) {
  return (
    <span className="shrink-0 rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-semibold">
      {type === "shopify" ? "Shopify" : "React"}
    </span>
  );
}

// Screenshot with a coloured name block underneath, shown if the image is missing.
function Shot({ project, className = "" }) {
  return (
    <div className={`relative aspect-[16/9] overflow-hidden bg-white/60 ${className}`}>
      <span className="absolute inset-0 grid place-items-center font-display text-2xl font-bold text-neutral-400">
        {project.name}
      </span>
      <img
        src={`/projects/${project.slug}.png`}
        alt={`${project.name} homepage`}
        loading="lazy"
        onError={(e) => (e.currentTarget.style.display = "none")}
        className="relative h-full w-full object-cover object-top"
      />
    </div>
  );
}

// Native <dialog>: Esc, focus handling and backdrop come for free.
function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (project) ref.current?.showModal();
  }, [project]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="w-[min(42rem,calc(100%-2rem))] rounded-3xl p-0 backdrop:bg-neutral-900/60 backdrop:backdrop-blur-sm"
    >
      {project && (
        <div className={`${project.color} p-4 sm:p-6`}>
          <Shot project={project} className="rounded-2xl" />
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold">{project.name}</h2>
              <p className="text-sm text-neutral-700">{project.summary}</p>
            </div>
            <Badge type={project.type} />
          </div>
          <ul className="mt-4 space-y-1.5 text-sm">
            {project.points.map((pt) => (
              <li key={pt} className="flex gap-2">
                <span aria-hidden="true">✓</span>
                {pt}
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium">{t}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={project.url} target="_blank" rel="noreferrer" className="pill bg-neutral-900 text-white hover:bg-neutral-700">
              Visit live site ↗
            </a>
            <button type="button" onClick={() => ref.current.close()} className="pill">
              Close
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
