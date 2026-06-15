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
  repo?: string;
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
    "Zack Meacham is a software engineer who builds applied-AI and LLM-powered products (cofounder and CTO of civic-tech startup Ledger App, Inc.) and uses agentic engineering to build them, on a foundation of mission-critical systems work at Boeing.",
  siteUrl: "https://zackmeacham.com",
  email: "mailto:zdmeacham@gmail.com",
  emailDisplay: "zdmeacham@gmail.com",
  location: "Findlay, Ohio",
  aboutParagraphs: [
    "I'm a software engineer who builds applied-AI products and uses agentic tooling to build them. I'm cofounder and CTO of <a class='link' href='/work/ledger'>Ledger App, Inc.</a>, a civic-tech startup whose AI assistant, <a class='link' href='/work/ledger'>Vera</a>, answers questions about politics with a citation behind every claim; alongside it I build LLM-powered and agentic tooling end to end. The engineering rigor under all of it comes from mission-critical test-infrastructure work at Boeing.",
    "I came up through computer science at Kent State, then moved into systems and software engineering at Boeing. The through-line is the one that drew me to the field in the first place: take difficult, high-stakes systems seriously, and make careful technical decisions under real constraints. That instinct is exactly what applied AI demands: autonomy is earned, provenance is a requirement, and the interesting work lives where architecture, ownership, and judgment all matter at once.",
    "Outside of Boeing, I spend most of my time building. My projects cluster around the same themes (truthful systems, strong tooling, and products that solve a specific problem end to end), built with frontier models, not just opinions about them.",
  ],
  shortPersonal:
    "Outside of work, I'm usually building side projects, cooking dinner, following Pittsburgh and Cleveland sports, or spending time in Ohio with my wife Sarah and our golden retriever Milo.",
  resumeSummary:
    "Software engineer focused on applied AI: LLM-powered products, agentic engineering workflows, and frontier-model adoption, built on a foundation of mission-critical test-infrastructure work. Strongest when the work demands architecture, judgment, and the ability to move between deep technical work and clear communication.",
  publicSafeRule:
    "Professional work is intentionally written at a public-safe level: enough to show scope, ownership, and technical depth without exposing internal or sensitive program detail.",
  contactIntro:
    "Email is the quickest way to reach me. Happy to talk about applied AI, agentic engineering, product and systems work, or something interesting you think I should be building.",
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
  eyebrow: "Software engineer · Applied AI",
  headline: "I build AI-powered products, and use agentic tooling to build them well.",
  thesis:
    "Applied AI is the throughline: LLM-powered features people actually use, and the agentic workflows (MCP servers, custom skills, RAG) that change how the engineering gets done. The discipline underneath comes from mission-critical systems work at Boeing.",
  paragraph:
    "Two of those products: Ledger, a civic AI assistant where I'm cofounder and CTO and provenance is a first-class concern; and Milodex, a risk-gated trading system I built solo. Both are the same instinct: earn trust before you hand over autonomy.",
  primaryCta: { label: "View selected work", href: "/work" },
  secondaryCta: { label: "Resume", href: "/resume" },
};

export const proofStrip: ProofStripItem[] = [
  {
    label: "LLM-powered products",
    body: "Ledger / Vera: a civic AI assistant where every claim cites its source; provenance is enforced in the type system, not bolted on. Cofounder & CTO.",
  },
  {
    label: "Agentic AI workflows",
    body: "Custom skills, MCP servers, RAG pipelines, and tool-using agents, built and run day-to-day, including as a primary internal resource for frontier-AI adoption at Boeing.",
  },
  {
    label: "Mission-critical systems",
    body: "Test infrastructure at Boeing across Ada, C++, LabVIEW, and hardware. The rigor that makes the AI work hold up under real constraints.",
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
      "A civic AI assistant with source-aware tool use, where provenance is enforced in the type system: every claim cites its official source. Nationwide federal coverage with a 21-state data foundation activating behind a fail-closed bar.",
    meta: "2026 · Launch-stage · Cofounder & CTO",
    chips: ["Next.js", "TypeScript", "Supabase", "Anthropic API", "Vitest", "Playwright"],
    href: "/work/ledger",
  },
  {
    slug: "milodex",
    eyebrow: "Flagship · independent systems",
    title: "Milodex",
    blurb:
      "A research-first, risk-gated trading harness built solo, where autonomy is earned, not assumed. Refuse-by-default risk layer, broker abstraction, operator CLI; paper-only, enforced in code. ~2,670 tests at 90% coverage.",
    meta: "2026 · Active build · Solo",
    chips: ["Python", "Alpaca", "Parquet", "pytest", "CLI"],
    href: "/work/milodex",
    repo: "https://github.com/zackmeach/Milodex",
  },
  {
    slug: "boeing",
    eyebrow: "Flagship · professional engineering",
    title: "Test Infrastructure at Boeing",
    blurb:
      "Mission-critical test infrastructure inside a constrained enterprise, written public-safe. Three concurrent efforts spanning Ada, LabVIEW, hardware integration, and stakeholder-level systems work (one originated, one led, one built from scratch), plus internal frontier-AI adoption across two organizations.",
    meta: "2022 – present · Shipped & ongoing · public-safe",
    chips: ["Ada", "C++", "LabVIEW", "Hardware integration", "Requirements engineering"],
    href: "/work/boeing",
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
      body: "I build with tool-using agents and frontier models day-to-day, not as a novelty but as how the engineering actually gets done.",
    },
    {
      lead: "Earned autonomy",
      body: "Autonomy is earned, not assumed. Milodex refuses orders by default and blocks live trading in code; in Ledger an un-sourced fact cannot be constructed.",
    },
    {
      lead: "Restrained product judgment",
      body: "Architecture with a purpose: clear interfaces, small blast radius, honest failure modes, built for maintainability and operator trust.",
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
      body: "I'd rather understand a system deeply and make one high-leverage move than churn at the surface.",
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
      body: "Preserve what matters, change what's brittle: the legacy instrumentation overhaul at Boeing integrated new hardware while keeping the behavior the system depends on.",
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
    role: "Cofounder & CTO",
    organization: "Ledger App, Inc.",
    period: "2026 – present",
    bullets: [
      "Cofounder and technical lead of an incorporated civic-tech startup (Delaware C-corp, three-cofounder team), building an AI assistant that answers civic questions with a citation behind every claim.",
      "Built provenance into the type system (an un-sourced fact cannot be constructed) across an 8-tool LLM agent, 9 government data sources, and 25 Supabase tables, with nationwide federal coverage and a 21-state data foundation activating behind a fail-closed bar.",
      "Own data contracts, citation behavior, auth-aware rate limiting, and CI; ~2,500 unit tests plus Playwright end-to-end and accessibility gates keep the product shippable and defensible as it grows.",
    ],
    chips: ["Next.js", "TypeScript", "Supabase", "Anthropic API", "Vitest", "Playwright"],
  },
  {
    role: "Software Engineer 2",
    organization: "The Boeing Company · Boeing Guidance Repair Center · Heath, Ohio",
    period: "Sep 2022 – present",
    previousRoles: "Previously Systems Engineer 2 and Systems Engineer 1.",
    bullets: [
      "Led and shaped three major engineering efforts across high-stakes test infrastructure, spanning software, systems, instrumentation, and public-safe technical communication.",
      "Serve as a primary internal resource for frontier-AI adoption across two organizations (bringing agentic and LLM tooling into a constrained enterprise), and mentored an intern and an early-career software engineer.",
      "Originated the largest active modernization effort in my organization: framed the system risk, built the case, and presented the path forward to senior stakeholders.",
      "Built a production-facing calibration-equipment software suite solo as lead engineer (zero software to production in ~6 months), replacing a purely mechanical reference at sub-arcsecond, real-time precision and owning the full formal artifact set (SRS, Software Test Plan, Software Test Procedure, VDD).",
      "Led the software strategy for a legacy LabVIEW instrumentation overhaul under real constraints, integrating new hardware while preserving the legacy behavior the system depends on.",
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
    period: "Dec 2021 – Mar 2022",
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
    period: "Aug 2018 – May 2022",
    details: [
      "Coursework included machine learning, deep learning, AI, big data analytics, linear algebra, software engineering, and requirements engineering.",
      "Senior capstone focused on recommendation-pipeline and database design work for a social-media aggregation web app.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "AI / tooling",
    items: [
      "Claude API",
      "Agentic workflows",
      "MCP servers",
      "Tool-using agents",
      "RAG",
      "Prompt engineering",
      "Custom skills",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "TypeScript", "LabVIEW", "Ada", "C++"],
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
    detailTitle: "Building a Research-First, Risk-Gated Trading Harness",
    lead:
      "A research-first, operator-governed trading harness where autonomy is earned, not assumed: paper-only, with a risk layer that refuses by default.",
    topChips: ["Python", "Alpaca", "Parquet", "pytest", "CLI"],
    glance: [
      { label: "Role", value: "Solo build; owner of architecture, code, and tests" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Active build · paper-only, no live capital (enforced in code)" },
      { label: "Stack", value: "Python · Alpaca · Parquet · pytest · CLI" },
      { label: "Tests", value: "~2,670 tests · 90% line coverage (89% floor) · 56 ADRs" },
      { label: "Scope", value: "Research, infrastructure, a refuse-by-default risk layer, and an operator CLI" },
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
      "16-check risk layer that fails closed: any error in any check blocks the order rather than letting it through.",
      "Paper-only enforced structurally: a dedicated test asserts live promotion is blocked, and orders route through a single execution chokepoint.",
      "Same strategy code runs in backtest and paper with no branches; the simulated broker implements the identical interface.",
      "~2,670 tests at 90% line coverage; 56 ADRs capture the reasoning behind each consequential decision.",
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
    topChips: ["Next.js", "TypeScript", "Supabase", "Anthropic API", "Vitest", "Playwright"],
    glance: [
      { label: "Role", value: "Cofounder & CTO" },
      { label: "Team", value: "Three cofounders · Ledger App, Inc. (Delaware C-corp)" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Launch-stage · federal coverage live, state foundation activating" },
      {
        label: "Stack",
        value: "Next.js · React · TypeScript · Supabase · Upstash · Anthropic API · Vitest · Playwright",
      },
      { label: "Proof", value: "8-tool LLM agent · 9 government data sources · 25 tables · ~2,500 tests" },
      { label: "Links", value: '<a class="link" href="https://ledger.vote" target="_blank" rel="noreferrer">ledger.vote</a>' },
    ],
    whyThisMattered:
      "Civic information is hard to navigate at scale, and most consumer-grade summaries strip out the provenance that makes a claim defensible. Ledger / Vera is built around source-aware tool use: every assertion in the product is grounded in a citable source, and the UI surfaces that grounding instead of hiding it. The thesis is that a civic AI assistant only earns trust if it can show its work.",
    roleAndOwnership:
      "Cofounder & CTO. I own architecture and implementation across frontend UX, data contracts, provenance and citation behavior, testing infrastructure, rate limiting, CI, and product-definition work. The project doubles as a modern public proving ground for product judgment, maintainability, and shipping speed.",
    coreConstraints: [
      "Every claim in the product has to cite its source. Provenance is a UX requirement, not a debug feature.",
      "LLM behavior is the primary risk surface: hallucinated facts cost user trust faster than they earn it.",
      "Auth-aware behavior and rate limiting protect against cost and abuse vectors a public civic-tech product can't ignore.",
      "A three-cofounder team and a public-facing shipping cadence that has to stay defensible as the codebase evolves.",
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
          "Supabase for structured data, Upstash for rate-limiting and ephemeral state, with typed contracts at every crossing. Provenance is enforced at the type level: a sourced value can't be constructed without its label, URL, and as-of date, so an un-cited fact fails the type check rather than shipping silently.",
        chips: ["Supabase", "Upstash", "TypeScript"],
      },
    ],
    execution: [
      "Provenance enforced in the type system: an un-sourced value fails to compile.",
      "8-tool Anthropic agent with citations accumulated across the tool loop and surfaced with every answer.",
      "Nationwide federal coverage; a 21-state data foundation built and validated behind a fail-closed activation bar.",
      "~2,500 unit tests, Playwright end-to-end + accessibility gates, and 16 CI workflows including CodeQL and secret-scanning.",
    ],
    currentState:
      "Launch-stage: federal coverage is live in production, with a 21-state data foundation activating state-by-state behind the activation bar. Provenance, auth-aware rate limiting, and CI are in place; broader state surfacing and operator tooling are the next milestones.",
    whatThisDemonstrates:
      "Applied-AI product judgment under public-trust constraints, full-stack ownership end-to-end, and the systems-level discipline to keep a civic-tech product shippable as it grows.",
  },
  {
    slug: "boeing",
    detailTitle: "Hardening Mission-Critical Test Infrastructure in a Constrained Enterprise",
    lead:
      "Three concurrent efforts across high-stakes test infrastructure: one originated, one led, one built from scratch. Written public-safe.",
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
      { label: "Scope", value: "Three concurrent efforts across test infrastructure, plus internal frontier-AI adoption" },
      {
        label: "Stack",
        value: "Ada · C++ · LabVIEW · Hardware integration · Requirements engineering",
      },
      { label: "Status", value: "Active across all three efforts; calibration suite in production-facing use" },
      { label: "Calibration suite", value: "Zero software to production in ~6 months (solo); sub-arcsecond real-time, matched 1:1 to a mechanical reference" },
      { label: "Recognition", value: "Two Boeing recognition awards for engineering impact and acceptance success" },
    ],
    whyThisMattered:
      "Test infrastructure is what the rest of an engineering organization depends on. When the test bench is wrong, every downstream judgment about the system under test is wrong. The work here is about supportability and confidence in the data the bench produces, not aesthetics.",
    roleAndOwnership:
      "Across the three efforts: originated the largest active modernization initiative in my organization by framing system risk and taking the path forward to senior stakeholders; led the software strategy on a legacy instrumentation overhaul as the lead software engineer; built a new calibration-equipment software suite from scratch and carried it through acceptance into production-facing daily use. Also mentored an intern and an early-career software engineer along the way.",
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
          "Turned a station-level assignment into a program-level effort. The interesting part wasn't the technical depth alone. It was pairing system understanding with disciplined analysis and stakeholder communication until a credible path forward existed.",
        chips: ["Ada", "Requirements engineering", "Stakeholder communication"],
      },
      {
        title: "Legacy instrumentation overhaul (lead software engineer)",
        description:
          "Inherited a brittle legacy environment with real constraints and missing pieces. The work has been about careful tradeoffs: preserving the legacy behavior that matters, integrating new hardware safely, and creating a supportable path forward without pretending the system is greenfield.",
        chips: ["LabVIEW", "C++", "Hardware integration", "Legacy migration"],
      },
      {
        title: "Calibration-equipment software suite (from scratch)",
        description:
          "Built solo as lead software engineer, zero software to production in ~6 months: a validation gate that precision-guidance hardware passes through before it ships. It replaced a purely mechanical reference and had to match it 1:1, at sub-arcsecond angular precision in real time, to slot into an ecosystem built around the legacy unit's exact behavior. Carried the full formal artifact set: SRS, Software Test Plan, Software Test Procedure, and VDD.",
        chips: ["LabVIEW", "Real-time", "Sub-arcsecond precision", "Formal V&V"],
      },
    ],
    execution: [
      "Calibration-equipment software suite delivered solo (zero software to production in ~6 months), replacing a purely mechanical reference, matched 1:1 at sub-arcsecond real-time precision.",
      "Legacy instrumentation overhaul advanced, with new hardware integrated alongside preserved legacy behaviors.",
      "Program-level risk framing built and presented to senior stakeholders.",
      "Internal frontier-AI adoption led across two organizations, bringing agentic and LLM tooling into a constrained enterprise.",
    ],
    currentState:
      "All three efforts active; calibration suite is in production-facing daily use. Recognized with two Boeing awards for engineering impact and acceptance success. Internal frontier-AI adoption continues across two organizations.",
    whatThisDemonstrates:
      "Ownership of mission-critical systems under real constraints, stakeholder trust earned through clear analysis and communication, and the discipline to modernize without pretending the system is greenfield.",
    publicSafeNote:
      "This page is written public-safe: program names, specific station counts, and sensitive internal detail are intentionally omitted or generalized.",
  },
];
