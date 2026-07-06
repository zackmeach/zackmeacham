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
      "A civic AI assistant where every claim cites its official source: Vera answers only from a closed set of grounded tools, and an un-sourced fact cannot be constructed in the type system. A federal data foundation built, with state-level coverage activating behind a fail-closed bar.",
    meta: "2026 · Pre-Alpha · Cofounder & CTO",
    chips: ["Next.js", "TypeScript", "Supabase", "Anthropic API", "Vitest", "Playwright"],
    href: "/work/ledger",
  },
  {
    slug: "milodex",
    eyebrow: "Flagship · independent systems",
    title: "Milodex",
    blurb:
      "A solo-built autonomous trading system where every order clears a fail-closed risk chokepoint no code path can bypass: exactly-once execution drain, append-only event store, a 17-check veto layer, and CLI plus Qt desktop operator surfaces. Paper-only, enforced in code; governed by 57 ADRs and a custom Opus risk-reviewer.",
    meta: "2026 · Active build · Solo",
    chips: ["Python", "Alpaca", "SQLite", "Parquet", "PySide6 / Qt", "pytest"],
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
    meta: "2026 · Shipped · six releases",
    summary:
      "A Windows desktop companion app for My Singing Monsters, built solo from greenfield to six tagged releases. Production-grade reliability for a solo project: an atomic, threat-modeled auto-updater with SHA-256 verification and rollback, a two-database SQLite design whose user progress survives full content rebuilds, a self-publishing GitHub Actions pipeline, and a 472-test suite.",
    chips: ["Python", "PySide6", "SQLite", "PyInstaller", "GitHub Actions"],
    href: "/work/msm-awakening-tracker",
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
      body: "Autonomy is earned, not assumed. Milodex refuses orders by default and won't move live capital without an explicit, human-approved promotion; in Ledger an un-sourced fact cannot be constructed.",
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
      "Cofounder and technical lead of an incorporated civic-tech startup (Delaware C-corp, three-cofounder team); authored roughly half of all commits and lead the AI, data, and security engineering for an assistant that answers civic questions with a citation behind every claim.",
      "Built Vera, a production multi-turn LLM agent on Anthropic Claude with a closed 5-class grounded tool registry and hand-rolled SSE streaming, engineered so no user PII can reach the model by construction (the prompt carries only message text; the jurisdiction tool takes zero parameters).",
      "Added governance-as-code around the model: a prompt-hash CI gate that fails closed on any neutrality-prompt edit, an 85-fixture LLM-as-judge validation harness replaying the real production loop, and multi-tier abuse enforcement unified across both LLM routes.",
      "Own a 65-migration Postgres/Supabase data layer with mandatory row-level security (56 policies across 26 tables) and a multi-source ingestion layer where provenance is enforced in the type system; a pre-launch security audit found and fixed real auth-bypass, data-destruction, and privilege-escalation defects.",
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
      "A solo-built autonomous equities trading system where autonomy is earned, not assumed: every order routes through a fail-closed risk chokepoint no code path can bypass. Phase One is deliberately bounded (US equities, paper-only, sub-$1,000 capital) so the engineering goes into correctness and governance, not breadth.",
    topChips: ["Python", "Alpaca", "SQLite", "Parquet", "PySide6 / Qt Quick", "pytest"],
    glance: [
      { label: "Role", value: "Solo build; owner of architecture, code, tests, and governance" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Active build · paper-only, no live capital (enforced in code)" },
      { label: "Stack", value: "Python 3.11 · Alpaca · SQLite event store · Parquet · PySide6 / Qt Quick · pytest" },
      { label: "Scale", value: "14-module package · ~52K LOC source / ~90K LOC tests · ~890 commits (solo)" },
      { label: "Tests", value: "~241 test files · coverage ratcheted at 89% · mutation-tested" },
      { label: "Governance", value: "57 ADRs · a custom Opus risk-invariant-reviewer gating every risk and execution diff" },
      { label: "Proof", value: "17-check fail-closed risk layer · exactly-once order drain · ~20 config-driven strategies" },
      {
        label: "Links",
        value:
          '<a class="link" href="https://github.com/zackmeach/Milodex" target="_blank" rel="noreferrer">GitHub</a>',
      },
    ],
    whyThisMattered:
      "Trading software is unusual in that its blast radius can be financial. Most hobby-grade systems collapse vendor logic, strategy, and execution into one tangle. Milodex inverts that: vendors sit behind internal models, the risk layer holds an unconditional veto, and autonomy has to be earned instead of assumed. The genuinely hard problems turned out to be distributed-systems and financial-correctness problems: exactly-once execution, crash recovery, and cross-process serialization over a shared brokerage account.",
    roleAndOwnership:
      "Solo. I own the architecture, the code, the tests, the operator surfaces, and the governance. Every consequential decision is captured in a 57-record ADR corpus, and a custom Opus-backed reviewer subagent I built gates every diff that touches risk, execution, or promotion against named safety invariants.",
    coreConstraints: [
      "Financial blast radius. Defaults have to be refuse, not execute.",
      "Exactly-once execution under failure: an overnight double-launch or a mid-submit crash must never place a duplicate order.",
      "Cross-process safety: many strategy runners share one brokerage account and must never act on a stale snapshot.",
      "Broker-vendor risk: trading-API behavior is the kind of dependency that shouldn't leak into strategy code.",
      "Single-developer operability. The CLI, the tests, and the audit trail have to be the operator's source of truth.",
    ],
    architecture: [
      {
        title: "Append-only event store as the single source of truth",
        description:
          "An append-only SQLite (WAL) event store holds all trade, explanation, kill-switch, strategy-run, and backtest history. Explanation and trade rows write atomically in one transaction, and the schema evolves only through ordered, additive, version-pinned migrations. Event sourcing buys full decision-level auditability: every outcome is reconstructable from the log.",
        chips: ["SQLite", "Event sourcing", "Schema migrations"],
      },
      {
        title: "Exactly-once execution drain",
        description:
          "A single ExecutionService is the only path to the broker: it assembles context, invokes risk, records the explanation, then submits. An idempotent consume-CAS plus pre-submit outbox makes the drain crash-recoverable: a pending row commits before the broker call, and a single-transaction compare-and-swap flips an intent from queued to consumed only if it is still queued, so an overnight double-launch or a crash-retry can never place a duplicate order.",
        chips: ["Idempotency", "Consume-CAS + outbox", "Crash recovery"],
      },
      {
        title: "Fail-closed risk layer and kill switch",
        description:
          "A risk evaluator runs 17 veto checks (kill switch, staleness, daily-loss, fat-finger, exposure, duplicate- and opposite-side-order) with an unconditional veto and no skip flag, sitting above backtest so it cannot be bypassed for convenience. A daily-loss breach trips a manual-reset-only kill switch where auto-resume is structurally impossible. Cross-process advisory locks (PID plus heartbeat liveness, stale auto-reclaim) serialize the snapshot-to-submit path and fail closed on acquire timeout.",
        chips: ["Fail-closed", "Veto gate", "Advisory locks"],
      },
      {
        title: "Promotion pipeline and walk-forward backtest",
        description:
          "A backtest, paper, micro-live, live state machine with no stage-skipping, a two-tier statistical gate (a permissive paper-readiness tier and a stricter capital-readiness tier with a 30-trade floor), hash-pinned frozen strategy manifests, and human approval for capital-bearing stages. The walk-forward engine indexes out-of-sample trading days and dispatches on a Timeframe enum between a daily path and an intraday advance-evaluate-drain path with guaranteed T+1 fills, so the same engine runs identically in backtest and live and even replays 24/7 crypto bars. Roughly 20 strategies are defined entirely in YAML.",
        chips: ["State machine", "Walk-forward", "YAML config"],
      },
      {
        title: "Operator surfaces: CLI and Qt desktop GUI",
        description:
          "An argparse CLI is the primary, source-of-truth operator surface, with paired human and JSON formatters. Alongside it, a PySide6 / Qt Quick (QML) desktop GUI (~11K LOC of QML across ~45 files) sits over thin command facades and ~30 event-store-backed read models, with a promotion-pipeline kanban and a design-system and theme architecture.",
        chips: ["argparse", "PySide6", "Qt Quick / QML"],
      },
    ],
    execution: [
      "Every order routes through a single ExecutionService chokepoint that assembles context, invokes risk, records an explanation, then submits, so a paper-stage strategy is structurally incapable of submitting live.",
      "Exactly-once, crash-recoverable order drain: a pending outbox row commits before the broker call and a single-transaction consume-CAS suppresses duplicate orders across overnight double-launch and crash-retry.",
      "Fail-closed risk evaluator with 17 veto checks that no code path can bypass (no skip flag), plus a manual-reset-only kill switch where auto-resume is structurally impossible.",
      "Cross-process serialization via lock-file advisory mutexes (PID plus heartbeat liveness, stale auto-reclaim) so many runners sharing one Alpaca account never evaluate against a stale snapshot; lock-acquire timeout fails closed.",
      "Append-only SQLite event store as the single source of truth, with atomic explanation-plus-trade writes and ordered version-pinned migrations; every decision (submit, veto, expired, idempotency-suppressed, dropped) emits a durable explanation record.",
      "~241 test files (~90K LOC) with coverage ratcheted at 89%, including AST-level invariant tests that lock the existence of safety guards, golden regression tests, and mutation testing; 57 ADRs and a custom Opus risk-invariant-reviewer gate every risk-touching diff against 8 named safety invariants.",
    ],
    currentState:
      "Active build, solo. The correctness core (event store, exactly-once execution drain, 17-check risk layer, promotion gates) and the operator surfaces are settled; Phase One stays deliberately bounded (US equities, paper-only, sub-$1,000 capital) so the work goes into correctness and governance. Strategy research and the null-baseline evidence lane are the next focus.",
    whatThisDemonstrates:
      "Distributed-systems correctness under financial blast radius (exactly-once execution, crash recovery, cross-process safety), fail-closed risk-first design, and governance built in (an ADR corpus and a custom reviewer agent), delivered solo.",
  },
  {
    slug: "ledger",
    detailTitle: "Building a Civic AI Assistant with Source-Aware Tool Use",
    lead:
      "A civic-tech product focused on making politics more legible at the local, state, and federal level, built so every claim cites its source. Ledger is the broader civic product; Vera is the AI assistant surface inside it. I lead the AI, data, and security engineering on a three-cofounder team.",
    topChips: ["Next.js", "React", "TypeScript", "Supabase", "Anthropic API", "Vitest", "Playwright"],
    glance: [
      { label: "Role", value: "Cofounder & CTO; lead full-stack, AI, and data engineer" },
      { label: "Team", value: "Three cofounders · Ledger App, Inc. (Delaware C-corp)" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Pre-Alpha · federal data foundation built, state-level activating" },
      {
        label: "Stack",
        value: "Next.js 16 · React 19 · TypeScript · Supabase · Upstash · Anthropic Claude · Vitest · Playwright",
      },
      { label: "Contribution", value: "1,000+ commits (about half of all authored); owner of the AI, data, and security layers" },
      { label: "Proof", value: "5-class grounded tool agent · 65 Postgres migrations · 56 RLS policies · 47 zod-validated APIs · 7 data sources" },
      { label: "Links", value: '<a class="link" href="https://ledger.vote" target="_blank" rel="noreferrer">ledger.vote</a>' },
    ],
    whyThisMattered:
      "Civic information is hard to navigate at scale, and most consumer-grade summaries strip out the provenance that makes a claim defensible. Ledger / Vera is built around source-aware tool use: every assertion in the product is grounded in a citable source, and the UI surfaces that grounding instead of hiding it. The thesis is that a civic AI assistant only earns trust if it can show its work.",
    roleAndOwnership:
      "Cofounder and CTO on a three-person founding team. I authored roughly half of all commits and own the parts that make the product defensible end-to-end: Vera (the LLM agent), the Supabase data model and row-level-security posture, the civic-data ingestion layer and FEC adapter, the values-quiz scoring engine, and the pre-launch security program. The user-facing surfaces and the design system are a shared effort; the AI, data, and security engineering are mine.",
    coreConstraints: [
      "Every claim in the product has to cite its source. Provenance is a UX requirement and a type-system invariant, not a debug feature.",
      "LLM behavior is the primary risk surface: a hallucinated fact, or a leaked address, costs user trust faster than features earn it.",
      "Public civic-tech invites abuse and cost vectors: jailbreaks, prompt-leak attempts, and cross-user data extraction all have to be handled, not ignored.",
      "A three-cofounder team and a public shipping cadence that has to stay defensible as the codebase grows.",
    ],
    architecture: [
      {
        title: "Vera: a grounded multi-turn LLM agent",
        description:
          "Vera answers only from a closed 5-class grounded tool registry (federal candidates and finance, officeholders, jurisdiction, federal ballot, election calendar). An iteration-capped tool-use loop streams answers over a hand-rolled SSE protocol with inline citations and an explicit information-unavailable contract. No user PII can reach the model by construction: the prompt carries only message text, and the jurisdiction tool exposes an empty input schema, so an address has no channel into model-visible context.",
        chips: ["Anthropic Claude", "TypeScript", "SSE streaming", "Tool use"],
      },
      {
        title: "Governance-as-code for the model",
        description:
          "The part most teams never build. A SHA-256 hash gate fails the build closed on any edit to the neutrality prompt surface, forcing a fresh validation log. An 85-fixture LLM-as-judge harness (a Claude Opus judge) replays the real production loop before release. Multi-tier abuse enforcement (tiers 1 to 4) runs regex input and output classifiers and shares one abuse budget across both LLM routes, with per-message prompt-version provenance on every persisted turn.",
        chips: ["CI gates", "LLM-as-judge", "Abuse enforcement"],
      },
      {
        title: "Postgres data model and security",
        description:
          "A 65-migration Supabase data layer with mandatory row-level security on every user-linked table (56 policies across 26 tables) and security-definer RPCs for privacy-safe aggregation. Jurisdiction lookups use HMAC-keyed caching so raw addresses never persist. A multi-phase pre-launch audit found and fixed real defects: an RLS auth-bypass, an unauthenticated data-destruction RPC, and an admin privilege-escalation, each closed by a forward-only migration with regression tests.",
        chips: ["Supabase", "Postgres", "Row-level security", "Security audit"],
      },
      {
        title: "Civic-data ingestion with provenance",
        description:
          "Multiple government and civic sources (FEC, US Census, OpenStates, MEDSL / Harvard Dataverse, and more) unified under a generic Sourced<T> envelope: a value cannot be constructed without its source label, URL, and as-of date, so an un-cited fact fails the type check. Scheduled pipelines re-ingest rosters and auto-open a drift PR, while a separate liveness watchdog catches the silent failure where the cron itself stops firing.",
        chips: ["FEC", "Census", "Provenance envelope", "GitHub Actions"],
      },
    ],
    execution: [
      "Vera answers only from a closed 5-class grounded tool registry; an iteration-capped tool-use loop streams answers over a hand-rolled SSE protocol with inline citations and an explicit information-unavailable contract.",
      "No PII reaches the model by construction: the prompt carries only message text, and the jurisdiction tool takes zero parameters, so a user's address has no channel into model context. A merge-blocking contract test locks the guarantee against regression.",
      "Governance-as-code: a SHA-256 hash gate fails the build on any edit to the neutrality prompt surface, and an 85-fixture LLM-as-judge harness replays the real production loop before release.",
      "65 Postgres migrations with mandatory row-level security on every user-linked table (56 policies, 26 tables); a pre-launch audit found and fixed an RLS auth-bypass, an unauthenticated data-destruction RPC, and an admin privilege-escalation.",
      "Multi-source ingestion under a generic Sourced<T> provenance envelope, so an un-cited value fails to compile; self-monitoring pipelines auto-open drift PRs and a watchdog catches the cron silently ceasing to fire.",
      "400+ co-located test files, 12 real-Supabase RLS round-trip suites, and 27 Playwright specs (9 accessibility); an OpenAPI 3.1 contract derived from zod schemas with a CI drift gate; 16 GitHub Actions workflows including CodeQL and secret-scanning.",
    ],
    currentState:
      "Pre-Alpha: the federal data foundation is built and ledger.vote is reachable, with state-level coverage activating behind a fail-closed bar. The AI, data, and security layers are settled; broader state surfacing and operator tooling are the next milestones.",
    whatThisDemonstrates:
      "Applied-AI engineering under public-trust constraints: an LLM agent that earns trust by showing its work, governance-as-code around model behavior, and the database and data-pipeline rigor to keep a civic product defensible as it grows.",
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
  {
    slug: "msm-awakening-tracker",
    detailTitle: "Shipping a Production-Grade Desktop App Solo, End to End",
    lead:
      "A Windows desktop companion app for My Singing Monsters, built solo from greenfield to six tagged releases. The interesting part isn't the feature set; it's the reliability engineering underneath: atomic database swaps with rollback, a threat-modeled auto-updater, a two-database design whose user progress survives full content rebuilds, and a self-publishing CI/CD pipeline.",
    topChips: ["Python", "PySide6 / Qt 6", "SQLite", "PyInstaller", "Inno Setup", "GitHub Actions"],
    glance: [
      { label: "Role", value: "Solo author, end to end (greenfield to six releases)" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Shipped · v1.0.2 · six tagged releases" },
      { label: "Stack", value: "Python 3.10 · PySide6 / Qt 6 · SQLite · PyInstaller · Inno Setup · GitHub Actions" },
      { label: "Scope", value: "Windows desktop app · 64 monsters / 76 egg types of content" },
      { label: "Tests", value: "472 tests across 34 modules (31 unit, 3 integration) · real in-memory SQLite · pytest-qt" },
      { label: "Process", value: "103 commits · 15 single-concern PRs · Conventional Commits" },
      { label: "Proof", value: "Atomic SHA-256-verified updater with rollback · two-database stable-identity design · self-publishing CI/CD" },
    ],
    whyThisMattered:
      "A desktop app that auto-updates its own content is deceptively risky: a botched update can corrupt a user's saved progress or brick startup, and there is no server-side rollback to save you. Most hobby apps either skip auto-update or do it unsafely. This one treats the update path as the highest-risk surface: the content database swaps atomically with automatic rollback, the channel is hardened against a concrete poisoned-manifest threat model, and user progress is decoupled from the content's primary keys so it survives a full rebuild. The bar was production-grade reliability for a solo project, not just feature delivery.",
    roleAndOwnership:
      "Solo, end to end. I own the domain logic, the Qt UI, the two-database SQLite design, the in-app updater, the maintainer content pipeline, the installer, and the CI/CD. Every release shipped through a feature-branch and pull-request workflow (15 merged single-concern PRs across 103 commits), including a deliberate over-engineering audit that removed dead code as first-class reviewed work.",
    coreConstraints: [
      "Auto-updating content with no server-side safety net: a bad update can corrupt saved progress or brick startup, so the update path has to be atomic and self-healing.",
      "User progress must survive full content-database rebuilds, even when numeric primary keys are reassigned.",
      "The update channel is an attack surface: a poisoned manifest could force an HTTP downgrade, a local-file read, or an attacker-controlled host.",
      "Solo maintenance: the build, the tests, and the release gates have to make a broken artifact structurally unable to ship.",
    ],
    architecture: [
      {
        title: "Strictly-layered Qt application core",
        description:
          "A pure-Python domain core free of Qt and SQLite, function-style repositories with dependency-injected connections, an AppService(QObject) orchestrator, and a passive UI that reads only frozen ViewModel dataclasses, all on a unidirectional dependency arrow. A Command pattern drives disciplined undo/redo: each command snapshots its own reversal state, and the service re-pushes a command on a failed undo so the in-memory history can never desync from the database.",
        chips: ["PySide6", "Command pattern", "Layered architecture"],
      },
      {
        title: "Two-database design with stable identity",
        description:
          "A read-only content.db (reopened through a SQLite URI in mode=ro, so a stray write raises OperationalError) paired with a read-write userstate.db. A slug-based stable-identity system (content_key) decouples user progress from numeric AUTOINCREMENT ids; partial unique indexes enforce uniqueness of populated keys while tolerating pre-backfill placeholders. Post-update reconciliation rebuilds progress by stable key (delete-then-insert) so saved state survives a full content rebuild without orphaning.",
        chips: ["SQLite", "Stable identity", "Atomic migrations"],
      },
      {
        title: "Atomic, threat-modeled auto-updater",
        description:
          "The updater streams a new SQLite database in 64 KB chunks under a 64 MB ceiling and trusts it only after a mandatory SHA-256 check plus a PRAGMA integrity_check and an orphan-row schema audit, then swaps it atomically with os.replace() and automatic rollback so content and user state are never left mismatched. The channel is hardened against a poisoned-manifest threat model: HTTPS-only with a host allowlist (blocking HTTP-downgrade, file:// reads, and attacker-host redirects) behind a numeric, non-lexical min-version gate.",
        chips: ["SHA-256", "Atomic swap", "Threat modeling"],
      },
      {
        title: "Maintainer ETL content pipeline",
        description:
          "An offline ingest, normalize, semantic-diff, deterministic-build, validate, publish pipeline kept strictly out of the app runtime. A semantic diff classifies content changes into a typed taxonomy, and a 9-gate publish-validation system (integrity, orphan-FK scans, unique-key, JSON-Schema conformance, and a blocking review gate) stops a bad release. It emits a versioned, checksum-stamped artifact contract, the exact manifest the in-app updater verifies before applying.",
        chips: ["ETL", "JSON Schema", "Deterministic builds"],
      },
      {
        title: "Build, release, and CI/CD",
        description:
          "A fail-fast build script chains version injection, pytest, content-DB seed, asset and icon generation, bundle verification, PyInstaller, and Inno Setup as checked subprocesses, aborting on the first non-zero exit. A bundle-verification gate cross-validates the seeded content DB against on-disk assets and must exit 0 before any release tag. Three least-privilege GitHub Actions workflows handle PR test gating, tag-driven release builds, and a self-publishing content workflow that wires CI directly into the app's update channel.",
        chips: ["PyInstaller", "Inno Setup", "GitHub Actions"],
      },
    ],
    execution: [
      "Atomic content updater: streams a new SQLite database in 64 KB chunks under a 64 MB ceiling, validates it with SHA-256 plus a PRAGMA integrity_check and an orphan-row audit, then swaps via os.replace() with automatic rollback, so a failed swap or reconciliation restores the backup and never leaves content and user state mismatched.",
      "Hardened the update channel against a poisoned-manifest threat model: HTTPS-only with a host allowlist that blocks HTTP-downgrade, file:// local reads, and attacker-host redirects, behind a numeric (non-lexical) min-version gate.",
      "Two-database SQLite design enforcing content immutability at runtime (the content DB reopens read-only, so stray writes raise OperationalError), with a slug-based stable-identity system so user progress survives full content rebuilds and primary-key reassignment without orphaning.",
      "Made SQLite schema migrations atomic (each wrapped in BEGIN/COMMIT with rollback), eliminating a startup-bricking class of partial-apply failures, with the fix landing alongside a dedicated regression test.",
      "472-test suite across 34 modules against real in-memory SQLite, including adversarial updater tests (SHA-256 mismatch, scheme and host allowlist rejection) and a live-HTTP end-to-end harness exercising the full fetch, validate, swap, rollback loop; acceptance tests map traceably to formal SRS criteria.",
      "Self-publishing CI/CD: three least-privilege GitHub Actions workflows (PR test gating, a tag-driven release build with PyInstaller and Inno Setup, and an on-demand content publisher that validates, builds, and commits artifacts back into the app's update channel).",
    ],
    currentState:
      "Shipped and maintained: six tagged releases from three betas through v1.0.0 to two hardening and maintenance point releases (v1.0.2), each a real git tag with a matching GitHub Release. A dedicated v1.0.1 security-hardening pass made SHA-256 mandatory, enforced the HTTPS host allowlist, capped streaming downloads, and opened the runtime database read-only.",
    whatThisDemonstrates:
      "End-to-end ownership of a shipped desktop product, reliability engineering as a first-class concern (atomic swaps, rollback, read-only enforcement), threat-model-driven security, and the discipline to treat deletion and gated releases as real engineering, delivered solo.",
  },
];
