export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

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
  images?: ProjectImage[];
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
    images: [
      {
        src: "/projects/onboarding-os/hr-manager-dashboard.png",
        alt: "HR Manager dashboard listing active candidates with progress, drive folders, and view-portal links",
        caption: "HR Manager · load-balanced candidate queue",
      },
      {
        src: "/projects/onboarding-os/welcome-email.png",
        alt: "Welcome email branded for the new hire with portal link, Telegram onboarding bot, drive folder, and manager + buddy contacts",
        caption: "Day-zero welcome email",
      },
      {
        src: "/projects/onboarding-os/portal-with-assistant.png",
        alt: "New-hire portal with checklist and the AI onboarding assistant open answering payroll and office questions",
        caption: "New-hire portal + AI assistant",
      },
    ],
  },
  {
    slug: "ai-exec-dashboard",
    name: "AI Executive Dashboard",
    tagline: "CEO's AI Chief of Staff — daily brief, alerts, weekly intel",
    description:
      "Four-engine intelligence layer that turns CRM noise into morning clarity. Claude Haiku reads HubSpot deals overnight and writes a 200-word pipeline briefing, fires Slack alerts when deals slip past close dates, and synthesises Serper-scraped industry signals into a weekly competitor digest. The AI doesn't just summarise — it notices patterns and flags them unprompted.",
    impact: "Replaces 80% of a £60k analyst for ~£100/month",
    stack: ["HubSpot", "Make.com", "Claude Haiku", "Google Sheets", "Slack", "Serper.dev"],
    domain: "Operations",
    status: "Live demo",
    images: [
      {
        src: "/projects/ai-exec-dashboard/dashboard-mock.png",
        alt: "Live KPI dashboard showing total active pipeline £418,500, active deals 25, closed won this week £38,000, pipeline by stage bar chart, deals by source donut, and at-risk overdue deals table",
        caption: "Live KPI dashboard · refreshes every 15 min",
      },
      {
        src: "/projects/ai-exec-dashboard/morning-briefing-email.png",
        alt: "7am morning briefing email with pipeline pulse £531,500 across 24 active deals, recent wins, recent losses, at-risk overdue deals, and closing-this-week sections — signed Your AI Chief of Staff",
        caption: "7am morning briefing · Gmail",
      },
      {
        src: "/projects/ai-exec-dashboard/slack-pipeline-alert.png",
        alt: "Slack #pipeline-alerts channel showing 🚨 5 deals past close date £46,000 at risk with most overdue list (Lumen FinTech 31 days, Aurora Energy 25 days, Quill Publishing 23 days) and concrete action recommendation",
        caption: "Hourly pipeline alert · Slack",
      },
      {
        src: "/projects/ai-exec-dashboard/competitor-pulse-email.png",
        alt: "Weekly competitor pulse email with three industry stories that matter (B2B buying in AI search, Google Preferred Sources, RevOps shops doubling down), the emerging pattern, what it means for the business, and this week's action",
        caption: "Weekly competitor pulse · Gmail",
      },
      {
        src: "/projects/ai-exec-dashboard/slack-daily-brief.png",
        alt: "Slack #daily-brief channel showing the morning briefing translated from HTML to Slack mrkdwn with bold deal names, win/loss summaries, and overdue deal callouts",
        caption: "Same briefing · Slack mrkdwn",
      },
      {
        src: "/projects/ai-exec-dashboard/make-briefing-scenario.png",
        alt: "Make.com scenario Phase 3 — AI Morning Briefing canvas showing the polished pipeline: Read all deals → Flatten deals to text → Write HTML briefing → Branch to Email + Slack → Send HTML email to CEO and Convert HTML to Slack mrkdwn → Post to #daily-brief",
        caption: "Briefing pipeline · Make.com canvas",
      },
    ],
  },
  {
    slug: "competitor-death-star",
    name: "Competitor Death Star",
    tagline: "Daily competitor intel with recommended plays",
    description:
      "Daily pipeline that ingests competitor signals — pricing-page diffs, ATS job postings, news, and Hacker News — synthesizes them with Claude Haiku into a severity-scored brief, and delivers it to Slack plus a public dashboard. Each brief ends with 5 specific recommended plays tied back to source signal UUIDs.",
    impact: "Daily intel that's already a play, not a data dump",
    stack: ["n8n", "Supabase", "Claude Haiku", "Next.js", "Slack"],
    domain: "Marketing",
    liveUrl: "https://dashboard-beryl-two.vercel.app",
    repoUrl: "https://github.com/yungdarniel/competitor-death-star",
    status: "Live demo",
    images: [
      {
        src: "/projects/competitor-death-star/slack-daily-brief.png",
        alt: "Slack #daily-brief channel showing the synthesized competitor brief with ClickUp layoffs lede, competitor landscape, and recommended plays",
        caption: "Daily brief delivered to Slack",
      },
      {
        src: "/projects/competitor-death-star/dashboard-landscape.png",
        alt: "Dashboard severity-scored competitor landscape cards for ClickUp, Asana, Notion, Linear with recommended plays section",
        caption: "Dashboard · severity-scored landscape",
      },
      {
        src: "/projects/competitor-death-star/n8n-collect-hn.png",
        alt: "n8n collector workflow fetching Hacker News and Google News results, mapping them to signals, and tolerant-inserting into Supabase",
        caption: "Collector pipeline · HN + News → signals",
      },
      {
        src: "/projects/competitor-death-star/n8n-collect-pricing.png",
        alt: "n8n pricing-page collector using Firecrawl scrape and hash-diff against prior snapshot to emit a price_change signal only on flip",
        caption: "Pricing-page diff · Firecrawl + hash flip",
      },
      {
        src: "/projects/competitor-death-star/n8n-deliver-slack.png",
        alt: "n8n delivery workflow reading the latest brief, formatting Slack Block Kit, and posting to the Incoming Webhook",
        caption: "Slack delivery · Block Kit formatter",
      },
    ],
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
    images: [
      {
        src: "/projects/talent-sourcer/n8n-workflow.jpeg",
        alt: "n8n workflow showing webhook, data sourcing, AI analysis, and email delivery stages",
        caption: "n8n workflow behind the scenes",
      },
      {
        src: "/projects/talent-sourcer/sourcing-report-ai-automation.jpeg",
        alt: "Emailed sourcing report for an AI Automation Specialist role in Lagos, Nigeria",
        caption: "Sourcing report · AI Automation Specialist",
      },
      {
        src: "/projects/talent-sourcer/sourcing-report-rpa.jpeg",
        alt: "Emailed sourcing report for an RPA Developer role in Lagos, Nigeria",
        caption: "Sourcing report · RPA Developer",
      },
    ],
  },
  {
    slug: "sales-reconciliation",
    name: "Sales Reconciliation Bot",
    tagline: "Multi-branch financial reconciliation",
    description:
      "Web portal accepts each branch's sales export plus the consolidated bank statement; an n8n agent extracts, merges, and reconciles, then emails an executive HTML briefing flagging unmatched transactions by location.",
    impact: "Hours of manual reconciliation → minutes",
    stack: ["n8n", "OpenAI", "Gemini", "Next.js"],
    domain: "Finance",
    status: "Production",
    images: [
      {
        src: "/projects/sales-reconciliation/n8n-workflow.jpeg",
        alt: "n8n reconciliation workflow with extract, merge, AI agent, and report generator stages",
        caption: "Reconciliation orchestration workflow",
      },
      {
        src: "/projects/sales-reconciliation/upload-portal.jpeg",
        alt: "Web portal for uploading branch Excel files and bank statement PDF for reconciliation",
        caption: "Branch upload portal · Abuja / Ibadan / Akure",
      },
      {
        src: "/projects/sales-reconciliation/reconciliation-summary.jpeg",
        alt: "Executive reconciliation summary showing matched and unmatched transaction counts and amounts",
        caption: "Executive reconciliation summary",
      },
    ],
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
    images: [
      {
        src: "/projects/market-radar/n8n-workflow.jpeg",
        alt: "n8n workflow with configuration, discovery, AI enrichment, and storage stages",
        caption: "Daily intelligence pipeline",
      },
      {
        src: "/projects/market-radar/intelligence-report.jpeg",
        alt: "Emailed competitive intelligence report with strategic analysis per competitor",
        caption: "Competitive intelligence report",
      },
      {
        src: "/projects/market-radar/competitor-sheet.jpeg",
        alt: "Google Sheet of discovered competitors with website and detailed analysis columns",
        caption: "Enriched competitor database",
      },
    ],
  },
  {
    slug: "inventory-pulse",
    name: "Inventory Pulse Agent",
    tagline: "Daily sales & low-stock brief",
    description:
      "Scheduled Power Automate flow pulls daily sales and stock, runs an AI prompt to read the numbers in business terms, and emails a dashboard-style brief with totals, profit margin, and a low-stock action prompt to contact suppliers.",
    impact: "Zero-touch daily ops visibility for owners",
    stack: ["Power Automate", "OpenAI", "Excel", "Gmail"],
    domain: "Operations",
    status: "Production",
    images: [
      {
        src: "/projects/inventory-pulse/power-automate-flow.jpeg",
        alt: "Power Automate flow with recurrence, data fetch, prompt, format, and email steps",
        caption: "Power Automate orchestration",
      },
      {
        src: "/projects/inventory-pulse/daily-sales-report.jpeg",
        alt: "Daily sales and inventory dashboard email with totals and profit margin",
        caption: "Daily sales & inventory report",
      },
      {
        src: "/projects/inventory-pulse/low-stock-alert.jpeg",
        alt: "Email alert listing low-stock items with action prompt to contact suppliers",
        caption: "Low-stock alert · supplier action prompt",
      },
    ],
  },
  {
    slug: "media-buying-audit",
    name: "Media Buying Audit Agent",
    tagline: "Daily AI audit of paid-media spend",
    description:
      "Reconciles Meta + Google spend against Shopify orders, computes True ROAS on margin, flags tracking discrepancies with z-score significance, and emails a severity-tagged audit with root-cause hypotheses and P0 owner-assigned actions.",
    impact: "Catches CAPI dedup failures the morning they happen",
    stack: ["n8n", "Meta Ads API", "Google Ads API", "Shopify API", "OpenAI"],
    domain: "Marketing",
    status: "Production",
    images: [
      {
        src: "/projects/media-buying-audit/n8n-workflow.jpeg",
        alt: "n8n media audit workflow with trigger, parallel data ingestion, audit computation, AI analysis, and distribution stages",
        caption: "5-stage audit pipeline",
      },
      {
        src: "/projects/media-buying-audit/audit-report-header.jpeg",
        alt: "Daily Media Buying Audit email with severity-high banner, executive summary, and headline KPIs",
        caption: "Severity-tagged executive brief",
      },
      {
        src: "/projects/media-buying-audit/campaign-breakdown.jpeg",
        alt: "Per-campaign audit table across Meta and Google with spend, CPA, and status flags",
        caption: "Per-campaign spend & CPA breakdown",
      },
    ],
  },
];
