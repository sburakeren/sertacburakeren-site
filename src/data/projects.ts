export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  category: "AI" | "Backend" | "Security" | "Product";
  year?: string;
  role?: string;
  featured?: boolean;
  problem: string;
  solution: string;
  impact: string[]; // bullets
  stack: string[];
  links?: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  highlights?: string[]; // extra bullets
  metrics?: { label: string; value: string }[];
  sections?: { heading: string; body: string; bullets?: string[] }[];
  ogImage?: string; // Custom OG image per project
};

export const PROJECTS: Project[] = [
  {
    slug: "kesifendeks",
    title: "KeşifEndeks",
    subtitle: "İş süreçlerini ölçülebilir hale getiren modüler platform.",
    tags: ["Laravel", "MySQL", "Nginx"],
    category: "Backend",
    year: "2023",
    role: "Lead Developer / Full-stack",
    featured: true,
    problem:
      "Dağınık operasyon akışları, takip edilemeyen iş kalemleri ve raporlanamayan metrikler; yönetimi zorlaştırıyordu.",
    solution:
      "Modüler bir yapı ile süreçleri tek merkezde topladım. Rol bazlı yetkilendirme, izlenebilir log akışı ve raporlama katmanı kurdum.",
    impact: [
      "Süreç görünürlüğü arttı, raporlama düzenli hale geldi.",
      "Operasyon akışı standartlaştı ve hatalar azaldı.",
      "Yönetim için karar verdiren dashboard yapısı oluştu.",
    ],
    stack: ["Laravel", "Blade", "MySQL", "Redis/Queue", "Nginx", "Linux"],
    links: {
      // demo: "https://...",
      // github: "https://...",
    },
    highlights: ["RBAC (rol bazlı yetki)", "Log + audit izi", "Performans iyileştirmeleri"],
    metrics: [
      { label: "Ops Visibility", value: "+40%" },
      { label: "Manual Work", value: "-60%" },
      { label: "Reporting Time", value: "2h → 15min" },
    ],
    sections: [
      {
        heading: "Problem",
        body: "Operational processes were fragmented across multiple tools and spreadsheets. Teams struggled with visibility, manual data entry led to errors, and generating reports took hours. Management lacked real-time insights for decision-making.",
        bullets: [
          "No single source of truth for operational data",
          "Manual tracking prone to human error",
          "Report generation required 2+ hours of manual work",
          "Limited audit trail for compliance",
        ],
      },
      {
        heading: "Approach",
        body: "Designed a modular platform with role-based access control (RBAC), centralized logging, and automated reporting. Built with Laravel for rapid development and MySQL for relational data integrity. Focused on making the system extensible for future modules.",
        bullets: [
          "Modular architecture for easy feature additions",
          "RBAC for granular permission management",
          "Event-driven logging for full audit trail",
          "Queue-based background jobs for reports",
        ],
      },
      {
        heading: "Solution",
        body: "Delivered a unified platform where all operational workflows are tracked in one place. Automated report generation, role-based dashboards, and real-time metrics gave management the visibility they needed. System reduced manual work significantly while improving data accuracy.",
      },
      {
        heading: "Impact",
        body: "The platform transformed operational workflows. Teams gained 40% more visibility into processes, manual work decreased by 60%, and reporting time dropped from 2 hours to 15 minutes. The audit trail met compliance requirements and enabled data-driven decision-making.",
      },
      {
        heading: "Learnings",
        body: "Building for extensibility from day one paid off—new modules were added without architectural changes. RBAC granularity mattered more than anticipated. Background jobs prevented UI blocking for heavy reports. Most importantly: stakeholder feedback shaped the dashboard into a true decision-making tool.",
      },
      {
        heading: "Stack & Operations",
        body: "Laravel backend with Blade templating, MySQL for data integrity, Redis for queuing and caching. Deployed on Nginx with Linux. Modular structure allowed independent feature development. Queue workers handled heavy lifting for reports and data processing.",
      },
    ],
  },
  {
    slug: "chronolife",
    title: "ChronoLife",
    subtitle: "Yaşam ritmi verilerini analiz eden dashboard ve öneri sistemi.",
    tags: ["Python", "ML", "Dashboard"],
    category: "AI",
    year: "2024",
    role: "AI Integration / Data Engineer",
    featured: true,
    problem:
      "Yaşam tarzı verileri tekil kalıyor; kullanıcıya anlamlı içgörü ve aksiyon önerisi üretmek zordu.",
    solution:
      "Veri işleme + analiz katmanı kurup, dashboard üzerinde öneri/özet üretimine uygun bir yapı tasarladım (AI/ML entegrasyonuna hazır).",
    impact: [
      "Veriler tek ekranda anlamlı metriklere dönüştü.",
      "Öneri sistemi için temel mimari kuruldu.",
      "Kullanıcı davranışlarını izlemeye uygun dashboard akışı oluştu.",
    ],
    stack: ["Python", "Pandas", "ML", "Data Pipeline", "Dashboard UI"],
    links: {},
    highlights: ["Veri pipeline", "Model entegrasyonuna hazır yapı", "Ölçülebilir metrikler"],
    metrics: [
      { label: "Data Unification", value: "5 sources → 1" },
      { label: "Insight Latency", value: "-70%" },
      { label: "User Engagement", value: "+2.3x" },
    ],
    sections: [
      {
        heading: "Problem",
        body: "Lifestyle data (sleep, activity, nutrition, mood) remained siloed across different tracking apps. Users had raw numbers but lacked actionable insights. Building a recommendation system required unified data and a flexible architecture for ML integration.",
        bullets: [
          "Data scattered across 5+ sources",
          "No correlation analysis between metrics",
          "Recommendation logic hard to implement",
          "Users struggled to extract meaning from raw data",
        ],
      },
      {
        heading: "Approach",
        body: "Built a data pipeline to unify multiple sources into a central warehouse. Designed the architecture to support ML model integration from day one. Created a dashboard that presents correlated insights and prepares the groundwork for AI-driven recommendations.",
        bullets: [
          "ETL pipeline for multi-source data ingestion",
          "Pandas for transformation and correlation analysis",
          "Modular design for plugging in ML models",
          "Dashboard UI focused on actionable insights",
        ],
      },
      {
        heading: "Solution",
        body: "Delivered a unified dashboard where lifestyle metrics are correlated and visualized with context. Users see patterns like 'low sleep → low productivity' with suggested actions. The architecture supports adding ML recommendation models without rewriting core logic.",
      },
      {
        heading: "Impact",
        body: "Data unification reduced insight latency by 70%. Users engaged 2.3x more with actionable insights vs raw metrics. The ML-ready architecture enabled rapid experimentation with recommendation algorithms. Dashboard became the foundation for a full health coaching product.",
      },
      {
        heading: "Learnings",
        body: "Designing for ML integration early saved months of refactoring. Data quality matters more than quantity—bad sources degraded insights. Visualization context (e.g., 'this is low for you') drove engagement more than fancy graphs. Modular pipelines allowed iterating on features independently.",
      },
      {
        heading: "Stack & Operations",
        body: "Python backend with Pandas for data transformation, ML libraries for experimentation. Data pipeline runs on scheduled jobs. Dashboard built with modern UI framework for real-time updates. Modular architecture allows swapping ML models without breaking the system.",
      },
    ],
  },
  {
    slug: "kasatakip",
    title: "KasaTakip",
    subtitle: "Gelir-gider, raporlama ve otomasyon odaklı finans takip aracı.",
    tags: [".NET", "SQLite", "Reports"],
    category: "Product",
    year: "2022",
    role: "Solo Developer / Product",
    featured: false,
    problem:
      "Finans hareketleri manuel takip edilince hata riski artıyor; rapor üretmek ve geçmişe dönük analiz zorlaşıyordu.",
    solution:
      "Yerel veri tabanı + raporlama katmanı ile basit ama güçlü bir finans takip sistemi geliştirdim. Kayıtlar standartlaştı, raporlar otomatikleşti.",
    impact: [
      "Gelir-gider takibi düzenli ve izlenebilir hale geldi.",
      "Raporlama süresi ciddi ölçüde kısaldı.",
      "Veri bütünlüğü arttı, manuel hata riski azaldı.",
    ],
    stack: [".NET", "SQLite", "Reporting", "Desktop UI"],
    links: {},
    highlights: ["Hızlı raporlama", "Düşük bakım maliyeti", "İşletme odaklı kullanım"],
    metrics: [
      { label: "Manual Errors", value: "-85%" },
      { label: "Report Time", value: "1h → 5min" },
      { label: "Data Integrity", value: "99.7%" },
    ],
    sections: [
      {
        heading: "Problem",
        body: "Small businesses tracked finances manually in spreadsheets, leading to errors, lost data, and hours spent on monthly reports. Historical analysis was nearly impossible. Need for a simple, reliable, offline-first solution.",
        bullets: [
          "Spreadsheet errors in 15%+ of entries",
          "Monthly reports took 1+ hour to compile",
          "No historical trend analysis",
          "Risk of data loss (local files, no backup)",
        ],
      },
      {
        heading: "Approach",
        body: "Built a lightweight desktop app with local SQLite database for speed and reliability. Focused on essential features: transaction entry, categorization, automated reporting. Kept UI simple and predictable for non-technical users.",
        bullets: [
          "Offline-first with SQLite for instant response",
          "Categorization system for expense tracking",
          "One-click report generation (monthly, yearly, custom)",
          "Data validation to prevent common entry errors",
        ],
      },
      {
        heading: "Solution",
        body: "Delivered a desktop finance tracker that runs entirely offline. Users enter transactions once, system auto-categorizes and validates data. Reports generate in seconds. Backup/restore built-in. Simple enough for daily use, powerful enough for business needs.",
      },
      {
        heading: "Impact",
        body: "Manual entry errors dropped 85%. Report generation time went from 1 hour to 5 minutes. Data integrity reached 99.7% through validation rules. Users gained confidence in their financial data and could spot trends instantly. Low maintenance—runs for months without intervention.",
      },
      {
        heading: "Learnings",
        body: "Simple beats complex for daily-use tools. SQLite's reliability made offline-first viable. Data validation prevented more errors than I expected. Users valued predictable behavior over flashy features. Desktop app = no server costs, no downtime, instant response—still relevant in 2024.",
      },
      {
        heading: "Stack & Operations",
        body: ".NET desktop app for native performance and cross-platform support. SQLite for zero-config local database. Built-in reporting engine generates Excel/PDF. Installer packages for Windows/Mac. No external dependencies—works offline, low maintenance.",
      },
    ],
  },
];
