export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type Highlight = {
  title: string;
  text: string;
};

export type Project = {
  title: string;
  status: string;
  summary: string;
  problem: string;
  build: string;
  impact: string;
  stack: string[];
  href?: string;
  repo?: string;
};

export type ResumeEntry = {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
};

export const site = {
  name: "Zack Meacham",
  title: "Zack Meacham | Software Engineer",
  description: "Personal website, resume, and portfolio for Zack Meacham.",
  siteUrl: "https://zackmeacham.com",
  eyebrow: "Resume / Portfolio / Personal Website",
  role: "Experienced programmer building useful software, thoughtful automation, and polished web experiences.",
  summary:
    "This first version of the site is intentionally lean: a clear introduction, a few strong project stories, an easy-to-scan resume page, and a direct way to reach out.",
  location: "Based in the United States",
  email: "mailto:hello@zackmeacham.com",
  resumePdfHref: "",
  aboutParagraphs: [
    "I am using this site as a clean public home for the work I want people to remember. The goal is not to say everything at once. The goal is to say the right things clearly.",
    "This Astro setup keeps the editing surface small so the next pass is mostly storytelling: tighten the intro, swap in real projects, add resume details, and publish.",
  ],
  principles: [
    {
      title: "Clear thinking over noise",
      text: "I prefer software that feels deliberate, understandable, and sturdy under real use.",
    },
    {
      title: "Fast iteration with solid fundamentals",
      text: "The stack here is chosen to get a clean site online quickly without painting us into a corner later.",
    },
    {
      title: "Useful, concrete storytelling",
      text: "Every portfolio entry should explain the problem, the build, and the result instead of listing tools without context.",
    },
  ],
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const heroActions: LinkItem[] = [
  { label: "View projects", href: "/projects" },
  { label: "Read resume", href: "/resume" },
  { label: "Say hello", href: "/contact" },
];

export const profileLinks: LinkItem[] = [
  { label: "GitHub", href: "", external: true },
  { label: "LinkedIn", href: "", external: true },
];

export const highlights: Highlight[] = [
  {
    title: "One place for your story",
    text: "Most of the site content lives in this file so future edits stay simple and visible.",
  },
  {
    title: "Static by default",
    text: "Astro keeps the site fast and low-maintenance, which is perfect for a personal portfolio.",
  },
  {
    title: "Ready for Vercel",
    text: "The project is configured for a straightforward build and can move to deployment whenever the content is ready.",
  },
];

export const projects: Project[] = [
  {
    title: "Featured project one",
    status: "Case study template",
    summary: "Replace this with your strongest one-line project outcome so the page immediately communicates why the work mattered.",
    problem: "Describe the real problem, audience, or business need the project solved.",
    build: "Explain what you personally designed, implemented, owned, or improved.",
    impact: "Add the result here: a shipped feature, saved time, better reliability, growth, or a measurable win.",
    stack: ["TypeScript", "Astro", "Tailwind"],
  },
  {
    title: "Featured project two",
    status: "Case study template",
    summary: "Use this entry for a project that shows range: product thinking, backend depth, data work, or systems reliability.",
    problem: "Frame the before-state clearly so the reader understands the challenge without extra context.",
    build: "Highlight the technical decisions that make you proud: architecture, UX choices, integrations, or automation.",
    impact: "Close with what changed after launch and how you know it worked.",
    stack: ["Node.js", "APIs", "Automation"],
  },
  {
    title: "Featured project three",
    status: "Case study template",
    summary: "Reserve one slot for the project you most want to talk about in interviews or networking conversations.",
    problem: "Focus on the tension: scale, ambiguity, user friction, performance, or a workflow bottleneck.",
    build: "Say what you built and why those choices were the right fit.",
    impact: "Use one sentence that makes the project memorable and concrete.",
    stack: ["Frontend", "Backend", "UX"],
  },
];

export const focusAreas = [
  "Product-minded engineering",
  "Web applications and developer tooling",
  "Automation and workflow design",
  "Readable, maintainable code",
  "Practical system design",
  "Clear technical communication",
];

export const resumeEntries: ResumeEntry[] = [
  {
    role: "Most recent role",
    organization: "Company or client name",
    period: "Year - Year",
    bullets: [
      "Lead with one strong accomplishment and include a metric or scope when possible.",
      "Add one bullet about architecture, ownership, or technical depth.",
      "Add one bullet about collaboration, product impact, or quality improvements.",
    ],
  },
  {
    role: "Previous role",
    organization: "Company or client name",
    period: "Year - Year",
    bullets: [
      "Keep the bullets compact and outcome-focused.",
      "Use specific verbs that show what you actually changed or shipped.",
      "Cut anything that does not help someone understand your range quickly.",
    ],
  },
  {
    role: "Earlier role or standout contract",
    organization: "Company or client name",
    period: "Year - Year",
    bullets: [
      "Use this slot to show progression, breadth, or a memorable project.",
      "Prefer concrete achievements over long lists of responsibilities.",
      "If the role is older, keep it brief and let the strongest recent work do the heavy lifting.",
    ],
  },
];
