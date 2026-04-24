export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProofPoint = {
  value: string;
  label: string;
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

export type Takeaway = {
  lead: string;
  body: string;
};

export type GlanceRow = {
  label: string;
  value: string;
};

export type ProjectDetail = {
  slug: string;
  lead: string;
  topChips: Chip[];
  takeaways: Takeaway[];
  glance: GlanceRow[];
  subsystems: Subsystem[];
  closing: { heading: string; body: string };
  publicSafeNote?: string;
};

export const site = {
  name: "Zack Meacham",
  title: "Zack Meacham | Software Engineer",
  description:
    "Software engineer working across deep systems, agentic-AI tooling, and modern product software that holds up under real constraints.",
  siteUrl: "https://zackmeacham.com",
  email: "mailto:zdmeacham@gmail.com",
  emailDisplay: "zdmeacham@gmail.com",
  location: "Findlay, Ohio",
  roleLabel: "Software engineer",
  identitySentence:
    "Software engineer working across deep systems, agentic-AI tooling, and modern product software that holds up under real constraints.",
  aboutParagraphs: [
    "I came up through computer science at Kent State, then moved into systems and software engineering at Boeing, where I now work across several of my organization's most important engineering efforts. The through-line is the same one that attracted me to computer science in the first place: take difficult, high-stakes systems seriously, and make careful technical decisions under real constraints.",
    "I gravitate toward work at the seam between engineering depth and practical delivery — hardening brittle hardware-software systems, designing safer operator workflows, and building products that feel considered rather than overbuilt. The part of engineering that holds my attention most is the point where architecture, ownership, and judgment all matter at once.",
    "Outside of Boeing, I spend most of my time building. Ledger is my clearest public software story today as CTO of a civic-tech startup, and my personal projects tend to cluster around truthful systems, strong tooling, and products that solve a very specific problem end to end.",
  ],
  workingStyle: [
    "Depth before noise — understand the system, then make the smallest high-leverage move.",
    "Architecture with a purpose — design for maintainability, operator trust, and real usage.",
    "Calm ownership — communicate clearly, mentor where helpful, keep momentum up.",
  ],
  shortPersonal:
    "I'm married and based in Ohio with my wife Sarah and our golden retriever Milo. I cook most dinners, follow Pittsburgh and Cleveland sports, and have always been the kind of person who falls asleep listening to explainers about things I did not need to know.",
  resumeSummary:
    "Software engineer with experience spanning critical test-infrastructure systems, frontier-AI adoption, and modern product software. Strongest when the work demands architecture, judgment, and the ability to move between deep technical work and clear communication.",
  publicSafeRule:
    "Professional work is intentionally written at a public-safe level: enough to show scope, ownership, and technical depth without exposing internal or sensitive program detail.",
  contactIntro:
    "Email is the quickest way to reach me. Happy to talk about systems work, product engineering, agentic-AI tooling, or something interesting you think I should be building.",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export const links: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/zackmeach", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zachary-meacham/", external: true },
];

export const proofPoints: ProofPoint[] = [
  { value: "3", label: "major Boeing engineering efforts shaped or led" },
  { value: "2", label: "Boeing recognition awards" },
  { value: "CTO", label: "role on a civic-tech startup" },
  { value: "2", label: "organizations where I've led frontier-AI adoption" },
];

export const personalProjects: Project[] = [
  {
    slug: "milodex",
    title: "Milodex",
    kind: "personal",
    eyebrow: "Personal project",
    year: "2026",
    status: "Active build",
    summary:
      "A research-first autonomous trading platform built around broker abstraction, risk-gated execution, and operator-safe workflows.",
    notes:
      "Infrastructure first, automation second. Vendors sit behind internal models, the risk layer has veto power, and autonomy has to be earned instead of assumed.",
    stack: ["Python", "pytest", "Parquet", "CLI", "Risk controls", "Alpaca"],
    chips: ["Python", "Alpaca", "Parquet", "pytest", "CLI"],
    repo: "https://github.com/zackmeach/Milodex",
    detailHref: "/projects/milodex",
  },
  {
    slug: "ledger",
    title: "Ledger",
    kind: "personal",
    eyebrow: "Personal project · CTO",
    year: "2026",
    status: "Launch-stage",
    summary:
      "A civic-tech product focused on making politics more transparent, legible, and approachable across local, state, and federal contexts.",
    notes:
      "My strongest public software story right now: architecture, data contracts, provenance and citation flows, testing, rate limiting, auth-aware behavior, CI, and frontend polish.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Upstash", "Vitest", "Playwright"],
    chips: ["Next.js", "TypeScript", "Supabase", "Upstash", "Vitest", "Playwright"],
    detailHref: "/projects/ledger",
  },
  {
    slug: "msm-awakening-tracker",
    title: "MSM Awakening Tracker",
    kind: "personal",
    eyebrow: "Personal project",
    year: "2026",
    status: "Built from scratch",
    summary:
      "A Windows desktop companion app for My Singing Monsters that makes awakening progress easier to track across multiple active targets.",
    notes:
      "Full-stack product ownership in a different form factor: PySide6 UI architecture, SQLite persistence, reversible user actions, updater tooling, and release automation.",
    stack: ["Python", "PySide6", "SQLite", "pytest", "PyInstaller", "GitHub Actions"],
    chips: ["Python", "PySide6", "SQLite", "PyInstaller", "GitHub Actions"],
  },
];

export const workProjects: Project[] = [
  {
    slug: "flagship-test-suite-overhaul",
    title: "Flagship test-suite overhaul",
    kind: "work",
    eyebrow: "Boeing · public-safe",
    year: "2024 - present",
    status: "Originated and led",
    summary:
      "Helped turn a station-level assignment into the largest active modernization effort in my organization by framing the real system risk and building the case for a full-suite overhaul.",
    notes:
      "The interesting part of this work was not just the technical depth. It was the combination of systems understanding, disciplined analysis, and stakeholder communication needed to move a fragmented effort into a credible program-level story.",
    stack: ["Ada", "Requirements engineering", "Stakeholder communication", "Cross-discipline systems"],
    chips: ["Ada", "Requirements engineering", "Stakeholder communication", "Cross-discipline systems"],
  },
  {
    slug: "legacy-labview-instrumentation",
    title: "Legacy LabVIEW instrumentation overhaul",
    kind: "work",
    eyebrow: "Boeing · public-safe",
    year: "2024 - present",
    status: "Lead software engineer",
    summary:
      "Leading the software side of a legacy instrumentation overhaul where the safest path was not a full rewrite, but a careful architecture that preserved the right legacy behavior while integrating new hardware.",
    notes:
      "I inherited a brittle, old LabVIEW environment with real constraints and missing pieces. The work has been about making deliberate tradeoffs, keeping risk contained, and creating a supportable path forward without pretending the system was greenfield.",
    stack: ["LabVIEW", "C++", "Hardware integration", "Modernization strategy"],
    chips: ["LabVIEW", "C++", "Hardware integration", "Modernization strategy"],
  },
  {
    slug: "calibration-equipment-suite",
    title: "Calibration-equipment software suite",
    kind: "work",
    eyebrow: "Boeing · public-safe",
    year: "2023 - present",
    status: "In production use",
    summary:
      "Built a brand-new software suite for calibration equipment that supports broader testing operations, taking it from zero software to production-facing daily use.",
    notes:
      "This project is a good example of my comfort zone: define the interface between old and new systems, build the missing software layer from scratch, and stay with it through acceptance, real usage, and release-process friction.",
    stack: ["LabVIEW", "Real-time behavior", "Instrumentation", "Production validation"],
    chips: ["LabVIEW", "Real-time behavior", "Instrumentation", "Production validation"],
  },
];

export const professionalBlock = {
  eyebrow: "At Boeing",
  heading: "High-stakes engineering, done under real constraints.",
  body: [
    "I work across three very different efforts at Boeing spanning software, systems, and instrumentation for high-stakes test infrastructure. One I helped originate as the largest active modernization initiative in my organization; one I lead as the senior software engineer on a legacy instrumentation overhaul; one I built from scratch and took into daily production use.",
    "Professional work here is written public-safe — enough to show scope and ownership without exposing program specifics.",
  ],
  chips: [
    "Ada",
    "C++",
    "LabVIEW",
    "Hardware integration",
    "Requirements engineering",
    "Stakeholder communication",
  ],
  link: { label: "Read more", href: "/projects/boeing-modernization" },
};

export const aiBlock = {
  eyebrow: "AI & agentic engineering",
  heading: "Shipping with frontier tools, not just using them.",
  body: [
    "I build and operate agentic workflows day-to-day — custom skills, MCP servers, RAG pipelines, tool-using agents — and I serve as the primary internal resource for frontier-AI adoption across two organizations.",
    "My posture is engineer-first: operator trust, verifiable behavior, clear failure modes. Autonomy gets earned, not assumed — the same discipline I apply in Milodex and in production test systems.",
  ],
  chips: ["Claude API", "MCP", "RAG", "Agentic workflows", "Prompt engineering", "Custom skills"],
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
    role: "Software Engineer 2 -> Systems Engineer 2 -> Systems Engineer 1",
    organization: "The Boeing Company · Boeing Guidance Repair Center · Heath, Ohio",
    period: "Sep 2022 - Present",
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
      "Cumulative GPA 3.6 with six Dean's List semesters.",
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

export const aboutPhilosophy = {
  heading: "How I think about AI & agentic work",
  body: [
    "The part of frontier AI that holds my attention is the same part that holds my attention in a legacy test system: can the operator trust what it's doing? I spend most of my time building agentic workflows, custom skills, MCP servers, and RAG pipelines — and I spend a lot of the rest helping two organizations adopt these tools without getting burned by them.",
    "My posture is engineer-first. Autonomy is earned, not assumed. A tool that can't explain itself, can't be verified, or can't be safely rolled back isn't ready for production — no matter how impressive the demo. The discipline that makes that real — clear interfaces, small blast radius, honest failure modes — is the same discipline I lean on in hard systems work.",
    "On the hands-on side: hands on Claude and the major frontier models; hands on MCP, RAG, custom skills, and tool-using agents I actually run day-to-day. On the conceptual side: I'm honest about what I've shipped versus what I've only read about, and I'd rather claim less and demonstrate more.",
  ],
  chips: ["Claude API", "MCP", "RAG", "Agentic workflows", "Prompt engineering", "Custom skills"],
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "milodex",
    lead:
      "A research-first autonomous trading platform where autonomy is earned, not assumed.",
    topChips: ["Python", "Alpaca", "Parquet", "pytest", "CLI"],
    takeaways: [
      {
        lead: "Architecture-first",
        body:
          "vendors are isolated behind internal models; market data and execution paths are standardized so swapping brokers is a boundary concern, not a rewrite.",
      },
      {
        lead: "Risk has veto power",
        body:
          "a gated execution layer sits between strategy and the broker — automation has to pass risk checks before any order leaves.",
      },
      {
        lead: "Operator-safe by design",
        body:
          "CLI-first, reversible actions, auditable decisions — built for the operator, not the algorithm.",
      },
    ],
    glance: [
      { label: "Scope", value: "Personal project, active build" },
      { label: "Stack", value: "Python · pytest · Parquet · Alpaca" },
      {
        label: "Links",
        value:
          '<a class="link" href="https://github.com/zackmeach/Milodex" target="_blank" rel="noreferrer">GitHub</a>',
      },
    ],
    subsystems: [
      {
        title: "Broker abstraction & market-data pipeline",
        description:
          "Broker vendors are hidden behind an internal model so the rest of the system reasons in one vocabulary. Market data lands in Parquet with a consistent shape; execution paths share the same contract the data uses.",
        chips: ["Python", "Alpaca", "Parquet"],
      },
      {
        title: "Risk-gated execution layer",
        description:
          "A layer between strategy and broker that enforces risk rules per order. Every path an automated system can take runs through the gate — the default outcome is refuse, not execute.",
        chips: ["Python", "Gating rules", "Reversibility"],
      },
      {
        title: "Operator CLI & test harness",
        description:
          "A deliberate CLI-first operator surface: inspect state, replay sessions, run with simulated brokers. Tests cover the same paths the operator drives.",
        chips: ["Python", "CLI", "pytest"],
      },
    ],
    closing: {
      heading: "What's next",
      body:
        "Continuing to harden the risk layer, add more strategy research, and tighten the operator feedback loop. The goal is a system whose behavior I can trust before I extend what it's allowed to do.",
    },
  },
  {
    slug: "ledger",
    lead:
      "A civic-tech product focused on making politics more legible at the local, state, and federal level.",
    topChips: ["Next.js", "TypeScript", "Supabase", "Upstash", "Vitest", "Playwright"],
    takeaways: [
      {
        lead: "Provenance-first",
        body:
          "every fact traces to a source; citation is a first-class UX concern, not an afterthought.",
      },
      {
        lead: "Modern stack, disciplined boundaries",
        body:
          "Next.js + Supabase + Upstash with clear data contracts between layers so surface-area changes stay local.",
      },
      {
        lead: "Built to ship and stay shipped",
        body:
          "CI, rate limiting, auth-aware behavior, Playwright and Vitest coverage — the kind of habits that let a small team keep moving.",
      },
    ],
    glance: [
      { label: "Scope", value: "Civic-tech startup, CTO, launch-stage" },
      {
        label: "Stack",
        value: "Next.js · React · TypeScript · Supabase · Upstash · Vitest · Playwright",
      },
      { label: "Links", value: "Live URL coming soon" },
    ],
    subsystems: [
      {
        title: "Frontend UX & provenance flows",
        description:
          "Product surfaces that let citation and context ride with every claim. The UI is shaped around trust: what did we assert, where did it come from, and how can a reader verify it themselves.",
        chips: ["Next.js", "React", "TypeScript", "Tailwind"],
      },
      {
        title: "Data contracts & backend",
        description:
          "Supabase for structured data, Upstash for rate-limiting and ephemeral state, with typed contracts at every crossing. The goal is to make the honest path the easy path as the schema evolves.",
        chips: ["Supabase", "Upstash", "TypeScript"],
      },
      {
        title: "Testing & CI",
        description:
          "Vitest for units, Playwright for end-to-end flows, GitHub Actions for CI — set up to catch the regressions a civic-tech product can least afford to ship.",
        chips: ["Vitest", "Playwright", "GitHub Actions"],
      },
    ],
    closing: {
      heading: "What's next",
      body:
        "Pushing toward public launch while hardening the parts that matter most — provenance, auth-aware behavior, and the operator tooling that makes the data defensible.",
    },
  },
  {
    slug: "boeing-modernization",
    lead:
      "Three modernization efforts across high-stakes test infrastructure — one originated, one led, one built from scratch.",
    topChips: [
      "Ada",
      "C++",
      "LabVIEW",
      "Hardware integration",
      "Requirements engineering",
      "Stakeholder communication",
    ],
    takeaways: [
      {
        lead: "Originated a program-level modernization effort",
        body:
          "turned a station-level assignment into the largest active modernization initiative in my organization by framing system risk and taking the story to senior stakeholders.",
      },
      {
        lead: "Led legacy instrumentation modernization",
        body:
          "deliberate tradeoffs over rewrites; risk-contained integration of new hardware alongside behaviors the legacy system still has to honor.",
      },
      {
        lead: "Shipped calibration software from zero to production",
        body:
          "built the missing software layer from scratch, owned it through acceptance, and carried it into daily production use.",
      },
    ],
    glance: [
      { label: "Scope", value: "Boeing · public-safe · 2022 – present" },
      {
        label: "Stack",
        value: "Ada · C++ · LabVIEW · Hardware integration · Requirements engineering",
      },
      { label: "Recognition", value: "Two Boeing recognition awards tied to modernization impact" },
    ],
    subsystems: [
      {
        title: "Flagship test-suite overhaul (originator)",
        description:
          "Helped turn a station-level assignment into a program-level modernization. The interesting part wasn't the technical depth alone — it was pairing system understanding with disciplined analysis and stakeholder communication until a credible modernization story existed.",
        chips: ["Ada", "Requirements engineering", "Stakeholder communication"],
      },
      {
        title: "Legacy instrumentation overhaul (lead software engineer)",
        description:
          "Inherited a brittle legacy environment with real constraints and missing pieces. The work has been about careful tradeoffs — preserving the legacy behavior that matters, integrating new hardware safely, and creating a supportable path forward without pretending the system is greenfield.",
        chips: ["LabVIEW", "C++", "Hardware integration", "Modernization strategy"],
      },
      {
        title: "Calibration-equipment software suite (from scratch)",
        description:
          "Built a new software suite for calibration equipment that supports broader testing operations. Zero software to production-facing daily use — the kind of work where defining the interface between old and new, and staying with it through acceptance, is most of the job.",
        chips: ["LabVIEW", "Real-time behavior", "Instrumentation", "Production validation"],
      },
    ],
    closing: {
      heading: "How I think about this work",
      body:
        "Modernization is rarely a rewrite. The discipline is finding the smallest high-leverage move that makes the system safer, clearer, and easier to live with — and then being the one who stays with it through the messy middle.",
    },
    publicSafeNote:
      "This page is written public-safe: program names, specific station counts, and sensitive internal detail are intentionally omitted.",
  },
];
