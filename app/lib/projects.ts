export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  impact: string;
  stack: string[];
  domain: "Finance" | "HR" | "Marketing" | "Operations" | "Career";
  liveUrl?: string;
  repoUrl?: string;
  status: "Production" | "Live demo" | "Internal";
};

export const projects: Project[] = [
  {
    slug: "onboarding-os",
    name: "Onboarding OS",
    tagline: "End-to-end new-hire automation",
    description:
      "Self-serve portal that auto-provisions new hires, chases required documents, and surfaces settle-in info on demand. Collapses HR's per-hire admin from days to minutes.",
    impact: "Per-hire HR admin: days → minutes",
    stack: ["n8n", "Supabase", "Next.js", "OpenAI"],
    domain: "HR",
    liveUrl: "https://onboarding-portal-ecru.vercel.app",
    status: "Live demo",
  },
  {
    slug: "talent-sourcer",
    name: "Talent Sourcer",
    tagline: "Role brief → AI-vetted shortlist",
    description:
      "Converts a one-line role brief into a vetted candidate shortlist with AI-evaluated fit scoring and a formatted HTML dashboard. Cuts recruiter cost-per-hire by ~70%.",
    impact: "~70% reduction in recruiter cost-per-hire",
    stack: ["n8n", "Render", "OpenAI", "Next.js"],
    domain: "HR",
    liveUrl: "https://talent-sourcer.vercel.app",
    status: "Live demo",
  },
  {
    slug: "sales-reconciliation",
    name: "Sales Reconciliation Bot",
    tagline: "Multi-branch financial reconciliation",
    description:
      "Autonomous reconciliation across branches with AI-driven variance detection and daily executive HTML briefings. Eliminated silent transaction losses that slipped through manual checks.",
    impact: "Hours of manual reconciliation → minutes",
    stack: ["Power Automate", "Python", "OpenAI", "SharePoint"],
    domain: "Finance",
    status: "Production",
  },
  {
    slug: "market-radar",
    name: "Autonomous Market Radar",
    tagline: "Daily competitor intelligence brief",
    description:
      "Strategic-intelligence agent using strict negative-Boolean precision discovery, batched enrichment for token efficiency, and a custom non-deterministic-to-schema parser.",
    impact: "15 hrs/week of senior research time saved",
    stack: ["n8n", "Claude", "Web Scraping", "Custom Parser"],
    domain: "Marketing",
    status: "Production",
  },
  {
    slug: "inventory-chatbot",
    name: "AI Inventory ChatBot",
    tagline: "RAG-backed procurement assistant",
    description:
      "Natural-language interface to live stock, supplier, and procurement data. Reasoning-model agent produces procurement forecasts with high logical precision.",
    impact: "80% deflection of procurement queries",
    stack: ["LangChain", "RAG", "OpenAI", "Vector DB"],
    domain: "Operations",
    status: "Production",
  },
  {
    slug: "media-buying-audit",
    name: "Media Buying Audit Agent",
    tagline: "Daily AI audit of paid-media spend",
    description:
      "Daily AI-interpreted audit of spend, CTR, CPC, ROAS, and quality score across platforms. Surfaces wasted spend, misattributed conversions, and creative fatigue with plain-English recommendations.",
    impact: "Surfaces wasted spend in <1 min/day",
    stack: ["n8n", "Meta Ads API", "Google Ads API", "OpenAI"],
    domain: "Marketing",
    status: "Production",
  },
];
