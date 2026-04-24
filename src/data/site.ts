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
    "Software engineer focused on legacy modernization, agentic-AI tooling, and product-minded systems that hold up under real constraints.",
  siteUrl: "https://zackmeacham.com",
  email: "mailto:zdmeacham@gmail.com",
  emailDisplay: "zdmeacham@gmail.com",
  location: "Findlay, Ohio",
  roleLabel: "Software engineer",
  identitySentence:
    "Software engineer focused on legacy modernization, agentic-AI tooling, and product-minded systems that hold up under real constraints.",
  aboutParagraphs: [
    "I came up through computer science at Kent State, then moved into systems and software engineering at Boeing, where I now work across some of my organization's most important modernization efforts. The through-line is the same one that attracted me to computer science in the first place: take difficult, legacy-heavy systems seriously, and make careful technical decisions under real constraints.",
    "I gravitate toward work at the seam between engineering depth and practical delivery — modernizing brittle hardware-software systems, designing safer operator workflows, and building products that feel considered rather than overbuilt. The part of engineering that holds my attention most is the point where architecture, ownership, and judgment all matter at once.",
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
    "Software engineer with experience spanning legacy test-infrastructure modernization, frontier-AI adoption, and modern product software. Strongest when the work demands architecture, judgment, and the ability to move between deep technical work and clear communication.",
  publicSafeRule:
    "Professional work is intentionally written at a public-safe level: enough to show scope, ownership, and technical depth without exposing internal or sensitive program detail.",
  contactIntro:
    "Email is the quickest way to reach me. Happy to talk about modernization work, product engineering, agentic-AI tooling, or something interesting you think I should be building.",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const links: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/zackmeach", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zachary-meacham/", external: true },
];

export const proofPoints: ProofPoint[] = [
  { value: "3", label: "major Boeing modernization efforts shaped or led" },
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
      "The interesting part of this work was not just the technical depth. It was the combination of systems understanding, disciplined analysis, and stakeholder communication needed to move a fragmented effort into a credible program-level modernization story.",
    stack: ["Ada", "Requirements engineering", "Stakeholder communication", "Cross-discipline systems"],
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
  },
];

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
  },
  {
    role: "Software Engineer 2 -> Systems Engineer 2 -> Systems Engineer 1",
    organization: "The Boeing Company · Boeing Guidance Repair Center · Heath, Ohio",
    period: "Sep 2022 - Present",
    bullets: [
      "Lead or shape three major modernization efforts tied to high-stakes test infrastructure, spanning software, systems, instrumentation, and public-safe technical communication.",
      "Helped originate the largest active modernization effort in my organization by framing system risk, building the modernization case, and presenting the path forward to senior stakeholders.",
      "Built a new production-facing calibration-equipment software suite from scratch and led the software strategy for legacy LabVIEW modernization under real constraints.",
      "Serve as a primary internal resource for frontier-AI adoption across two organizations, and have mentored both an intern and an early-career software engineer.",
      "Received Boeing recognition awards for modernization impact and production-level acceptance success.",
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
    label: "Systems",
    items: ["Legacy modernization", "Instrumentation", "Requirements engineering", "Cross-discipline systems"],
  },
  {
    label: "Product",
    items: ["Architecture", "Testing strategy", "Operator tooling", "Technical writing"],
  },
  {
    label: "AI / tooling",
    items: ["Agentic workflows", "Prompt engineering", "RAG", "Custom AI skills"],
  },
];
