export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProofStripItem = {
  label: string;
  body: string;
};

export type FlagshipProject = {
  slug: string;
  eyebrow: string;
  title: string;
  blurb: string;
  meta: string;
  chips: Chip[];
  href: string;
};

export type Pillar = {
  lead: string;
  body: string;
};

export type ArchiveProject = {
  slug: string;
  title: string;
  eyebrow: string;
  meta: string;
  summary: string;
  chips: Chip[];
  repo?: string;
  href?: string;
};

export type Project = {
  slug: string;
  title: string;
  kind: "personal" | "work";
  eyebrow: string;
  year: string;
  status: string;
  summary: string;
  notes: string;
  stack: string[];
  href?: string;
  repo?: string;
  chips?: Chip[];
  detailHref?: string;
};

export type ResumeEntry = {
  role: string;
  organization: string;
  period: string;
  previousRoles?: string;
  bullets: string[];
  chips: Chip[];
};

export type EducationEntry = {
  institution: string;
  credential: string;
  period: string;
  details: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Chip = string;

export type Subsystem = {
  title: string;
  description: string;
  chips: Chip[];
};

export type GlanceRow = {
  label: string;
  value: string;
};

export type ProjectDetail = {
  slug: string;
  detailTitle: string;
  lead: string;
  topChips: Chip[];
  glance: GlanceRow[];
  whyThisMattered: string;
  roleAndOwnership: string;
  coreConstraints: string[];
  architecture: Subsystem[];
  execution: string[];
  currentState: string;
  whatThisDemonstrates: string;
  publicSafeNote?: string;
};

export const site = {
  name: "Zack Meacham",
  title: "Zack Meacham | Software Engineer",
  description:
    "Personal site for Zack Meacham, software engineer in Findlay, Ohio. Test infrastructure at Boeing, CTO of Ledger (civic-tech), and frontier-AI adoption lead across two organizations.",
  siteUrl: "https://zackmeacham.com",
  email: "mailto:zdmeacham@gmail.com",
  emailDisplay: "zdmeacham@gmail.com",
  location: "Findlay, Ohio",
  aboutParagraphs: [
    "I came up through computer science at Kent State, then moved into systems and software engineering at Boeing. The through-line is the same one that attracted me to computer science in the first place: take difficult, high-stakes systems seriously, and make careful technical decisions under real constraints.",
    "I gravitate toward work at the seam between engineering depth and practical delivery: hardening brittle hardware-software systems, designing safer operator workflows, and building products that feel considered rather than overbuilt. The part of engineering that holds my attention most is the point where architecture, ownership, and judgment all matter at once.",
    "Outside of Boeing, I spend most of my time building. Ledger is my clearest public software story today as CTO of a civic-tech startup, and my personal projects tend to cluster around truthful systems, strong tooling, and products that solve a very specific problem end to end.",
  ],
  shortPersonal:
    "Outside of work, I'm usually building side projects, cooking dinner, following Pittsburgh and Cleveland sports, or spending time in Ohio with my wife Sarah and our golden retriever Milo.",
  resumeSummary:
    "Software engineer with experience spanning critical test-infrastructure systems, frontier-AI adoption, and modern product software. Strongest when the work demands architecture, judgment, and the ability to move between deep technical work and clear communication.",
  publicSafeRule:
    "Professional work is intentionally written at a public-safe level: enough to show scope, ownership, and technical depth without exposing internal or sensitive program detail.",
  contactIntro:
    "Email is the quickest way to reach me. Happy to talk about systems work, product engineering, agentic-AI tooling, or something interesting you think I should be building.",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export const links: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/zackmeach", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zachary-meacham/", external: true },
];

export const hero = {
  eyebrow: "Zack Meacham",
  headline: "Software Engineer focused on Applied AI and LLM-powered products.",
  thesis:
    "I combine systems engineering, software engineering, and AI fluency to build high-leverage products.",
  paragraph:
    "Systems-minded by background, product-driven by instinct, and deeply interested in how LLMs can be used both as features and as force multipliers for engineering itself.",
  primaryCta: { label: "View selected work", href: "/work" },
  secondaryCta: { label: "Resume", href: "/resume" },
};

export const proofStrip: ProofStripItem[] = [
  {
    label: "Systems engineering",
    body: "Mission-critical test infrastructure at Boeing: public-safe scope, ownership, and modernization work.",
  },
  {
    label: "LLM-powered products",
    body: "Ledger / Vera: a civic AI assistant with source-aware tool use and provenance as a first-class concern.",
  },
  {
    label: "Agentic AI workflows",
    body: "Custom skills, MCP servers, RAG pipelines, and tool-using agents built and run day-to-day.",
  },
  {
    label: "Full-stack delivery",
    body: "Web, desktop, and CLI products taken from zero to real usage.",
  },
];

export const flagshipProjects: FlagshipProject[] = [
  {
    slug: "ledger",
    eyebrow: "Flagship · applied AI product",
    title: "Ledger / Vera",
    blurb:
      "Building a civic AI assistant with source-aware tool use. Provenance and citation are first-class; the stack is shaped to ship and stay shipped.",
    meta: "2026 · Launch-stage · CTO",
    chips: ["Next.js", "TypeScript", "Supabase", "Upstash", "Vitest", "Playwright"],
    href: "/work/ledger",
  },
  {
    slug: "boeing",
    eyebrow: "Flagship · professional engineering",
    title: "Modernization at Boeing",
    blurb:
      "Modernizing mission-critical test infrastructure inside a constrained enterprise, written public-safe. Three concurrent efforts spanning Ada, LabVIEW, and stakeholder-level systems work.",
    meta: "2022 – present · public-safe",
    chips: ["Ada", "C++", "LabVIEW", "Hardware integration", "Requirements engineering"],
    href: "/work/boeing",
  },
  {
    slug: "milodex",
    eyebrow: "Flagship · independent systems",
    title: "Milodex",
    blurb:
      "Architecting an autonomous trading platform with research-first risk controls. Broker abstraction, risk-gated execution, operator-safe CLI workflows.",
    meta: "2026 · Active build",
    chips: ["Python", "Alpaca", "Parquet", "pytest", "CLI"],
    href: "/work/milodex",
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    slug: "msm-awakening-tracker",
    title: "MSM Awakening Tracker",
    eyebrow: "Personal project · desktop",
    meta: "2026 · Built from scratch",
    summary:
      "A Windows desktop companion app for My Singing Monsters that makes awakening progress easier to track across multiple active targets. Full-stack ownership in a desktop form factor: PySide6 UI architecture, SQLite persistence, reversible user actions, updater tooling, and release automation.",
    chips: ["Python", "PySide6", "SQLite", "PyInstaller", "GitHub Actions"],
  },
];

export const howIWork: { heading: string; pillars: Pillar[] } = {
  heading: "How I work.",
  pillars: [
    {
      lead: "Systems thinking",
      body: "Depth before noise: understand the system, then make the smallest high-leverage move.",
    },
    {
      lead: "Agentic workflows",
      body: "Custom skills, MCP servers, RAG pipelines, and tool-using agents, built and run day-to-day.",
    },
    {
      lead: "Practical AI implementation",
      body: "Engineer-first. Autonomy is earned, not assumed; clear interfaces, small blast radius, honest failure modes.",
    },
    {
      lead: "Restrained product judgment",
      body: "Architecture with a purpose: design for maintainability, operator trust, and real usage.",
    },
    {
      lead: "Architectural discipline",
      body: "Calm ownership and clean boundaries: communicate clearly, contain risk, keep momentum up.",
    },
  ],
};

export const aboutPage = {
  currentFocus: {
    body:
      "Most of my work right now sits at the intersection of applied AI and software engineering. The day-to-day looks like building agentic workflows, shipping LLM-powered features, and helping organizations adopt frontier tools without getting burned by them.",
    items: [
      "Applied AI and LLM-powered products.",
      "Agentic engineering workflows: custom skills, MCP servers, RAG pipelines, tool-using agents.",
      "Frontier model patterns and how they change what's worth building.",
      "High-leverage systems where small, careful moves compound.",
    ],
  },
  howIWorkPillars: [
    {
      lead: "Systems thinking",
      body: "Depth before noise: understand the system, then make the smallest high-leverage move.",
    },
    {
      lead: "Restrained product judgment",
      body: "Architecture with a purpose: design for maintainability, operator trust, and real usage.",
    },
    {
      lead: "Deep ownership",
      body: "Stay with the work through the messy middle: design, build, ship, support, and the conversations that hold it all together.",
    },
    {
      lead: "Practical experimentation",
      body: "Hands on the tools, not just opinions about them. Claim less, demonstrate more.",
    },
    {
      lead: "Architectural discipline",
      body: "Clear interfaces, small blast radius, honest failure modes: the discipline that keeps hard systems livable.",
    },
  ],
  whereHeaded: {
    body:
      "I'm looking for the next chapter of work where applied AI and product engineering meet under real constraints.",
    items: [
      "AI-native companies building frontier-model-shaped products.",
      "Frontier-model applications across product and tooling.",
      "Software roles where AI fluency is an edge, not a separate job title.",
    ],
  },
};

export const resumeEntries: ResumeEntry[] = [
  {
    role: "CTO",
    organization: "Ledger",
    period: "2026 - Present",
    bullets: [
      "Leading technical direction for a civic-tech product focused on transparency, literacy, and usability across political data and workflows.",
      "Own architecture and implementation across frontend UX, data contracts, provenance and citation behavior, testing infrastructure, rate limiting, CI, and product-definition work.",
      "Use the project as a modern public proving ground for product judgment, maintainability, and shipping speed.",
    ],
    chips: ["Next.js", "TypeScript", "Supabase", "Vitest", "Playwright", "CI"],
  },
  {
    role: "Software Engineer 2",
    organization: "The Boeing Company · Boeing Guidance Repair Center · Heath, Ohio",
    period: "Sep 2022 - Present",
    previousRoles: "Previously Systems Engineer 2 and Systems Engineer 1.",
    bullets: [
      "Lead or shape three major engineering efforts across high-stakes test infrastructure, spanning software, systems, instrumentation, and public-safe technical communication.",
      "Helped originate the largest active modernization effort in my organization by framing system risk, building the case, and presenting the path forward to senior stakeholders.",
      "Built a new production-facing calibration-equipment software suite from scratch and led the software strategy for a legacy LabVIEW instrumentation overhaul under real constraints.",
      "Serve as a primary internal resource for frontier-AI adoption across two organizations, and have mentored both an intern and an early-career software engineer.",
      "Received Boeing recognition awards for engineering impact and production-level acceptance success.",
    ],
    chips: [
      "Ada",
      "C++",
      "LabVIEW",
      "Requirements engineering",
      "Hardware integration",
      "Stakeholder communication",
    ],
  },
  {
    role: "Volunteer contributor, ML / Data Science",
    organization: "Pillar.gg",
    period: "Dec 2021 - Mar 2022",
    bullets: [
      "Contributed to a startup's automated editing product while finishing my computer science degree.",
      "Worked on feature engineering, structured-data analysis, and research into deeper ML and audio-processing capabilities.",
    ],
    chips: ["Python", "Feature engineering", "ML research"],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    institution: "Kent State University",
    credential: "B.S. Computer Science · Cum Laude",
    period: "Aug 2018 - May 2022",
    details: [
      "Coursework included machine learning, deep learning, AI, big data analytics, linear algebra, software engineering, and requirements engineering.",
      "Senior capstone focused on recommendation-pipeline and database design work for a social-media aggregation web app.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "LabVIEW", "Ada", "C++"],
  },
  {
    label: "AI / tooling",
    items: [
      "Claude API",
      "Agentic workflows",
      "MCP",
      "Prompt engineering",
      "RAG",
      "Custom skills",
    ],
  },
  {
    label: "Systems",
    items: [
      "Legacy modernization",
      "Instrumentation",
      "Requirements engineering",
      "Cross-discipline systems",
    ],
  },
  {
    label: "Product",
    items: ["Architecture", "Testing strategy", "Operator tooling", "Technical writing"],
  },
];

export const projectDetails: ProjectDetail[] = [
  {
    slug: "milodex",
    detailTitle: "Architecting an Autonomous Trading Platform with Research-First Risk Controls",
    lead:
      "A research-first autonomous trading platform where autonomy is earned, not assumed.",
    topChips: ["Python", "Alpaca", "Parquet", "pytest", "CLI"],
    glance: [
      { label: "Role", value: "Solo build; owner of architecture, code, and tests" },
      { label: "Year", value: "2026 · active build" },
      { label: "Stack", value: "Python · pytest · Parquet · Alpaca" },
      { label: "Scope", value: "Personal project covering research, infrastructure, risk gating, and operator CLI" },
      {
        label: "Links",
        value:
          '<a class="link" href="https://github.com/zackmeach/Milodex" target="_blank" rel="noreferrer">GitHub</a>',
      },
    ],
    whyThisMattered:
      "Trading software is unusual in that its blast radius can be financial. Most hobby-grade systems collapse vendor logic, strategy, and execution into one tangle. Milodex inverts that: vendors sit behind internal models, the risk layer has veto power, and autonomy has to be earned instead of assumed. The interesting design question is how to keep the system researchable while making it operationally safe.",
    roleAndOwnership:
      "Solo. I own the architecture, the code, the tests, and the operator surface. The discipline of the project is mine.",
    coreConstraints: [
      "Financial blast radius. Defaults have to be refuse, not execute.",
      "Broker-vendor risk: trading-API behavior is the kind of dependency that shouldn't leak into strategy code.",
      "Market-data quality and consistency across paths the system can take.",
      "Single-developer operability. The CLI and tests have to be the operator's source of truth.",
    ],
    architecture: [
      {
        title: "Broker abstraction & market-data pipeline",
        description:
          "Broker vendors are hidden behind an internal model so the rest of the system reasons in one vocabulary. Market data lands in Parquet with a consistent shape; execution paths share the same contract the data uses.",
        chips: ["Python", "Alpaca", "Parquet"],
      },
      {
        title: "Risk-gated execution layer",
        description:
          "A layer between strategy and broker that enforces risk rules per order. Every path an automated system can take runs through the gate. The default outcome is refuse, not execute.",
        chips: ["Python", "Gating rules", "Reversibility"],
      },
      {
        title: "Operator CLI & test harness",
        description:
          "A deliberate CLI-first operator surface: inspect state, replay sessions, run with simulated brokers. Tests cover the same paths the operator drives.",
        chips: ["Python", "CLI", "pytest"],
      },
    ],
    execution: [
      "Broker abstraction in place; vendor swaps stay at the boundary.",
      "Risk-gated execution layer with refuse-by-default semantics.",
      "CLI-first operator surface; tests cover the same paths the operator drives.",
      "Parquet-based market-data pipeline with shared contracts across paths.",
    ],
    currentState:
      "Active build. The risk layer and broker abstraction are settled; strategy research and operator-feedback hardening are the next focus.",
    whatThisDemonstrates:
      "Architectural discipline under high blast radius, risk-first system thinking, and operator-centered design.",
  },
  {
    slug: "ledger",
    detailTitle: "Building a Civic AI Assistant with Source-Aware Tool Use",
    lead:
      "A civic-tech product focused on making politics more legible at the local, state, and federal level, built so every claim cites its source. Ledger is the broader civic product; Vera is the AI assistant surface inside it.",
    topChips: ["Next.js", "TypeScript", "Supabase", "Upstash", "Vitest", "Playwright"],
    glance: [
      { label: "Role", value: "CTO" },
      { label: "Year", value: "2026 · launch-stage" },
      { label: "Team", value: "Small founding team" },
      {
        label: "Stack",
        value: "Next.js · React · TypeScript · Supabase · Upstash · Vitest · Playwright",
      },
      { label: "Scope", value: "Civic AI assistant covering local, state, and federal political data" },
      { label: "Links", value: "Live URL coming soon" },
    ],
    whyThisMattered:
      "Civic information is hard to navigate at scale, and most consumer-grade summaries strip out the provenance that makes a claim defensible. Ledger / Vera is built around source-aware tool use: every assertion in the product is grounded in a citable source, and the UI surfaces that grounding instead of hiding it. The thesis is that a civic AI assistant only earns trust if it can show its work.",
    roleAndOwnership:
      "CTO. I own architecture and implementation across frontend UX, data contracts, provenance and citation behavior, testing infrastructure, rate limiting, CI, and product-definition work. The project doubles as a modern public proving ground for product judgment, maintainability, and shipping speed.",
    coreConstraints: [
      "Every claim in the product has to cite its source. Provenance is a UX requirement, not a debug feature.",
      "LLM behavior is the primary risk surface: hallucinated facts cost user trust faster than they earn it.",
      "Auth-aware behavior and rate limiting protect against cost and abuse vectors a public civic-tech product can't ignore.",
      "Small team and a public-facing shipping cadence that has to stay defensible as the codebase evolves.",
    ],
    architecture: [
      {
        title: "Frontend UX & provenance flows",
        description:
          "Product surfaces that let citation and context ride with every claim. The UI is shaped around trust: what did we assert, where did it come from, and how can a reader verify it themselves. Provenance is a first-class UX concern, not a hidden affordance.",
        chips: ["Next.js", "React", "TypeScript", "Tailwind"],
      },
      {
        title: "Data contracts & backend",
        description:
          "Supabase for structured data, Upstash for rate-limiting and ephemeral state, with typed contracts at every crossing. The goal is to make the honest path the easy path as the schema evolves, and to keep surface-area changes local when boundaries are tight.",
        chips: ["Supabase", "Upstash", "TypeScript"],
      },
    ],
    execution: [
      "Provenance-first UI shipped: every assertion surfaces its citation.",
      "Auth-aware behavior and rate limiting wired through Upstash.",
      "Vitest for units; Playwright for end-to-end flows; GitHub Actions for CI.",
      "Typed contracts across data, server, and client layers.",
    ],
    currentState:
      "Launch-stage. The provenance-first UI shape is settled; CI, auth-aware behavior, and rate limiting are in place. Public launch and operator tooling are the next milestones.",
    whatThisDemonstrates:
      "Applied-AI product judgment under public-trust constraints, full-stack ownership end-to-end, and the systems-level discipline to keep a civic-tech product shippable as it grows.",
  },
  {
    slug: "boeing",
    detailTitle: "Modernizing Mission-Critical Test Infrastructure in a Constrained Enterprise",
    lead:
      "Three concurrent modernization efforts across high-stakes test infrastructure: one originated, one led, one built from scratch. Written public-safe.",
    topChips: [
      "Ada",
      "C++",
      "LabVIEW",
      "Hardware integration",
      "Requirements engineering",
      "Stakeholder communication",
    ],
    glance: [
      { label: "Role", value: "Software Engineer 2; also held Systems Engineer roles earlier in tenure" },
      { label: "Period", value: "Sep 2022 – present" },
      { label: "Scope", value: "Three concurrent modernization efforts across test infrastructure" },
      {
        label: "Stack",
        value: "Ada · C++ · LabVIEW · Hardware integration · Requirements engineering",
      },
      { label: "Status", value: "Active across all three efforts; calibration suite in production-facing use" },
      { label: "Recognition", value: "Two Boeing recognition awards tied to modernization impact" },
    ],
    whyThisMattered:
      "Test infrastructure is what the rest of an engineering organization depends on. When the test bench is wrong, every downstream judgment about the system under test is wrong. Modernization here is about supportability and confidence in the data the bench produces, not aesthetics.",
    roleAndOwnership:
      "Across the three efforts: helped originate the largest active modernization initiative in my organization by framing system risk and taking the path forward to senior stakeholders; led the software strategy on a legacy instrumentation overhaul as the lead software engineer; built a new calibration-equipment software suite from scratch and carried it through acceptance into production-facing daily use. Also mentored an intern and an early-career software engineer along the way.",
    coreConstraints: [
      "Brittle legacy systems with real production usage: modernization can't disrupt active operations.",
      "Hardware-software interfaces where the legacy behavior carries meaning that has to be preserved.",
      "Sensitive program context: some implementation details are intentionally omitted or generalized.",
      "Cross-discipline stakeholders: modernization has to be defensible across software, systems, and engineering leadership.",
    ],
    architecture: [
      {
        title: "Flagship test-suite overhaul (originator)",
        description:
          "Helped turn a station-level assignment into a program-level modernization. The interesting part wasn't the technical depth alone. It was pairing system understanding with disciplined analysis and stakeholder communication until a credible modernization story existed.",
        chips: ["Ada", "Requirements engineering", "Stakeholder communication"],
      },
      {
        title: "Legacy instrumentation overhaul (lead software engineer)",
        description:
          "Inherited a brittle legacy environment with real constraints and missing pieces. The work has been about careful tradeoffs: preserving the legacy behavior that matters, integrating new hardware safely, and creating a supportable path forward without pretending the system is greenfield.",
        chips: ["LabVIEW", "C++", "Hardware integration", "Modernization strategy"],
      },
      {
        title: "Calibration-equipment software suite (from scratch)",
        description:
          "Built a new software suite for calibration equipment that supports broader testing operations. Zero software to production-facing daily use. The kind of work where defining the interface between old and new, and staying with it through acceptance, is most of the job.",
        chips: ["LabVIEW", "Real-time behavior", "Instrumentation", "Production validation"],
      },
    ],
    execution: [
      "Calibration-equipment software suite delivered from zero to production-facing use.",
      "Legacy instrumentation modernization advanced with new hardware integrated alongside preserved legacy behaviors.",
      "Program-level modernization framing built and presented to senior stakeholders.",
      "Internal AI-adoption work led across two organizations alongside the modernization efforts.",
    ],
    currentState:
      "All three efforts active; calibration suite is in production-facing daily use. Recognized with two Boeing awards tied to modernization impact. Internal AI-adoption work continues alongside the modernization efforts.",
    whatThisDemonstrates:
      "Ownership of mission-critical systems under real constraints, stakeholder trust earned through clear analysis and communication, and the discipline to modernize without pretending the system is greenfield.",
    publicSafeNote:
      "This page is written public-safe: program names, specific station counts, and sensitive internal detail are intentionally omitted or generalized.",
  },
];
