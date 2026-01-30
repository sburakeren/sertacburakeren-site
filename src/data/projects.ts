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
  summary?: string;
  impact: string[]; // bullets
  stack?: string[];
  highlights?: string[]; // 3-5 bullets, short
  decisions?: string[]; // 2-4 bullets, metric-agnostic
  outcomes?: string[]; // 2-4 bullets, metric-agnostic, no %
  links?: { label: string; href: string; external?: boolean; caseStudy?: string }[];
  gallery?: { src: string; alt: string }[];
  status?: "case-study" | "shipped" | "in-progress";
  sections?: { heading: string; body: string; bullets?: string[] }[];
  ogImage?: string; // Custom OG image per project
};

export const PROJECTS: Project[] = [
  {
    slug: "ankaralifeportal",
    title: "AnkaraLifePortal",
    subtitle: "Ankara odaklı yayın platformu için içerik ve kullanıcı yönetim sistemi.",
    tags: ["Laravel", "PHP", "SQLite", "Ubuntu"],
    category: "Backend",
    year: "2025",
    role: "Full-Stack Developer / Sistem Kurucu",
    featured: true,
    status: "case-study",
    problem:
      "Ankara odaklı bir yayın/portal yapısında içerik ve kullanıcı yönetimi dağınıktı; operasyonel süreçler tek yerde yönetilemiyordu.",
    solution:
      "Rol bazlı yetkilendirme, içerik yönetimi (CRUD), form doğrulama ve güvenlik katmanları ile operasyonel süreçleri tek panelde birleştirdim. Canlı ortam hazırlığı ile stabil çalışacak şekilde yapılandırdım.",
    summary:
      "Ankara odaklı yayın platformu için içerik ve kullanıcı yönetimini tek merkezde toplayan, güvenli ve sürdürülebilir panel sistemi.",
    impact: [
      "Yayın/operasyon süreçleri tek panelde toplandı.",
      "Yönetim yükü azaldı; süreçler daha düzenli hale geldi.",
      "NDA nedeniyle ekran görüntüsü yerine rol + yaklaşım + etki paylaşılır.",
    ],
    stack: ["Laravel", "PHP", "SQLite", "HTML/CSS/JS", "Ubuntu", "Nginx"],
    highlights: [
      "Giriş/rol bazlı yetkilendirme ve panel akışları",
      "İçerik yönetimi (yazı/kategori vb.) için CRUD akışları",
      "Form/iletişim akışlarında doğrulama ve UX iyileştirmeleri",
      "Canlıya hazırlık: sunucu ortamı, konfig, temel güvenlik ayarları (NDA-safe)",
    ],
    decisions: [
      "Panel ve yetkilendirme akışlarını rol bazlı kurgulama (RBAC yaklaşımı)",
      "CRUD ekranlarını modüler ve sürdürülebilir yapıda tasarlama",
      "Input validasyonu ve güvenli varsayılanlarla güvenlik katmanını ilk günden düşünme",
      "Prod-first yaklaşım: sunucu ortamında stabil çalışacak şekilde yapılandırma",
    ],
    outcomes: [
      "Yayın/operasyon süreçleri tek panelde toplandı",
      "Yönetim yükü azaldı; süreçler daha düzenli hale geldi",
    ],
    links: [{ label: "Case Study", href: "/projects/ankaralifeportal", external: false }],
    gallery: [],
    sections: [],
  },
  {
    slug: "kesifendeks",
    title: "KeşifEndeks",
    subtitle: "İş/operasyon verilerini tek noktada takip ve raporlama platformu.",
    tags: ["Laravel", "PHP", "Ubuntu", "Nginx"],
    category: "Backend",
    year: "2025",
    role: "Kurucu / IT Yöneticisi + Full-Stack Developer",
    featured: true,
    status: "case-study",
    problem:
      "İş/operasyon verileri dağınıktı; ekip için tek noktadan takip edilebilir bir sistem ihtiyacı vardı.",
    solution:
      "Modüler panel yaklaşımı ile kimlik doğrulama, kullanıcı yönetimi ve iş süreçlerini takip/raporlama mantığına dönüştüren yapı kurdum. RBAC ile erişim kuralları net ve yönetilebilir hale geldi.",
    summary:
      "İş/operasyon verilerini tek merkezde birleştiren, izlenebilir ve genişletilebilir panel sistemi.",
    impact: [
      "Operasyon verisi tek yerde konsolide edildi.",
      "Takip ve görünürlük arttı; süreçler disipline oldu.",
      "NDA nedeniyle müşteri/alan detayları yerine rol + yaklaşım paylaşılır.",
    ],
    stack: ["Laravel", "PHP", "Ubuntu", "Nginx", "SQL (Relational)"],
    highlights: [
      "Kimlik doğrulama ve temel kullanıcı yönetimi",
      "İş süreçlerini takip/raporlama mantığına dönüştüren panel akışları (NDA-safe)",
      "Modüler ekran planı ve genişleyebilir yapı",
      "Canlı ortam rutini ve temel bakım süreçleri (Ubuntu + Nginx)",
    ],
    decisions: [
      "Modüler panel yaklaşımı ile büyüme sırasında kırılmayan yapı",
      "RBAC ile erişim kurallarını net ve yönetilebilir tutma",
      "İzlenebilirlik düşüncesi (log/audit yaklaşımı) — NDA-safe düzeyde",
      "Prod-first: sunucu üzerinde stabilite ve bakım kolaylığı",
    ],
    outcomes: [
      "Operasyon verisi tek yerde konsolide edildi",
      "Takip ve görünürlük arttı; süreçler disipline oldu",
    ],
    links: [{ label: "Case Study", href: "/projects/kesifendeks", external: false }],
    gallery: [],
    sections: [],
  },
  {
    slug: "chronolife",
    title: "ChronoLife",
    subtitle: "Yaşam ritmi verilerini analiz eden dashboard ve öneri sistemi.",
    tags: ["Python", "ML", "Dashboard", "Data Pipeline"],
    category: "AI",
    year: "2025",
    role: "AI Integration / Data Engineer",
    featured: true,
    status: "in-progress",
    problem:
      "Yaşam tarzı verileri tekil kalıyor; kullanıcıya anlamlı içgörü ve aksiyon önerisi üretmek zordu.",
    solution:
      "Veri işleme + analiz katmanı kurup, dashboard üzerinde öneri/özet üretimine uygun bir yapı tasarladım (AI/ML entegrasyonuna hazır).",
    summary:
      "Çoklu yaşam ritmi verisini birleştirip anlamlı içgörü ve öneri üreten dashboard sistemi.",
    impact: [
      "Veriler tek ekranda anlamlı metriklere dönüştü.",
      "Öneri sistemi için temel mimari kuruldu.",
      "Kullanıcı davranışlarını izlemeye uygun dashboard akışı oluştu.",
    ],
    stack: ["Python", "Pandas", "ML", "Data Pipeline", "Dashboard UI"],
    highlights: [
      "Çoklu veri kaynağını birleştiren ETL pipeline",
      "Korelasyon analizi ve içgörü üretimi",
      "ML model entegrasyonuna hazır modüler yapı",
      "Actionable insight'lara odaklı kullanıcı arayüzü",
    ],
    decisions: [
      "ML entegrasyonu için baştan modüler tasarım, aylar sürecek refactoring'i önledi",
      "Veri kalitesi, veri miktarından daha kritik çıktı—kötü kaynaklar insight'ları bozdu",
      "Görselleştirme bağlamı (örn: 'bu senin için düşük') fancy grafiklerden daha fazla engagement sağladı",
      "Modüler pipeline'lar özellikleri bağımsız olarak geliştirmeye olanak tanıdı",
    ],
    outcomes: [
      "Çoklu veri kaynağını tek merkezde birleştiren ETL pipeline",
      "İçgörü erişim süresini hızlandıran korelasyon analiz sistemi",
      "Actionable insight'lara odaklanan kullanıcı arayüzü kuruldu",
      "ML model entegrasyonuna hazır, ölçeklenebilir mimari",
    ],
    links: [{ label: "Case Study", href: "/projects/chronolife", external: false }],
    gallery: [],
    sections: [
      {
        heading: "Problem",
        body: "Yaşam tarzı verileri (uyku, aktivite, beslenme, ruh hali) farklı uygulamalarda dağınıktı. Kullanıcılar ham sayılara sahipti ama işe yarar içgörülere ulaşamıyordu. Bir öneri sistemi kurmak, birleşik veri ve ML entegrasyonuna uygun esnek bir mimari gerektiriyordu.",
        bullets: [
          "Veri 5+ kaynakta dağınık durumda",
          "Metrikler arası korelasyon analizi yoktu",
          "Öneri mantığı uygulamak zordu",
          "Kullanıcılar ham veriden anlam çıkarmakta zorlanıyordu",
        ],
      },
      {
        heading: "Yaklaşım",
        body: "Çoklu kaynağı merkezi bir veri deposunda birleştiren bir veri pipeline'ı kurdum. Mimaride ilk günden ML model entegrasyonunu destekleyecek şekilde tasarladım. Korelasyon içgörüleri sunan ve AI destekli öneri sistemine zemin hazırlayan bir dashboard oluşturdum.",
        bullets: [
          "Çoklu kaynak verisi için ETL pipeline",
          "Pandas ile dönüşüm ve korelasyon analizi",
          "ML modelleri için modüler tasarım",
          "Actionable insight'lara odaklı Dashboard UI",
        ],
      },
      {
        heading: "Çözüm",
        body: "Yaşam metriklerinin korelasyon içinde ve bağlamla görselleştirildiği birleşik bir dashboard sundum. Kullanıcılar 'düşük uyku → düşük verimlilik' gibi kalıpları önerilerle görebiliyor. Mimari, ML öneri modellerini eklemeyi çekirdek mantığı yeniden yazmadan destekliyor.",
      },
      {
        heading: "Etki",
        body: "Veri birleştirme, içgörü üretimini hızlandırdı. Kullanıcılar ham metriklere göre actionable insight'larla daha fazla etkileşim kurdu. ML-ready mimari, öneri algoritmaları ile hızlı denemeler yapılmasını sağladı. Dashboard, eksiksiz bir health coaching ürününün temeli oldu.",
      },
      {
        heading: "Öğrenilenler",
        body: "ML entegrasyonu için erken tasarım aylarca refactoring'ten kurtardı. Veri kalitesi, veri miktarından daha önemliydi—kötü kaynaklar insight'ları bozdu. Görselleştirme bağlamı (örn: 'bu senin için düşük') fancy grafiklerden daha fazla bağlılık sağladı. Modüler pipeline'lar, özellikleri bağımsız olarak geliştirmeye olanak tanıdı.",
      },
      {
        heading: "Stack & Operasyonlar",
        body: "Veri dönüşümü için Pandas, deneysel çalışmalar için ML kütüphaneleriyle Python backend. Veri pipeline'ı zamanlanmış job'lar üzerinde çalışır. Dashboard, gerçek zamanlı güncellemeler için modern UI framework ile kuruldu. Modüler mimari, ML modellerini sistemi kırmadan değiştirmeye olanak sağlar.",
      },
    ],
  },
  {
    slug: "kasatakip",
    title: "KasaTakip",
    subtitle: "Gelir-gider takibi ve raporlama odaklı offline-first finans aracı.",
    tags: [".NET", "WinForms", "Electron", "SQLite"],
    category: "Product",
    year: "2025",
    role: "Ürün Sahibi + Geliştirici",
    featured: false,
    status: "shipped",
    problem:
      "Gelir-gider/işlem takibi manuel ilerliyordu; hata riski ve raporlama zayıftı.",
    solution:
      "Offline-first yaklaşım ile yerel SQLite tabanlı bir finans takip sistemi geliştirdim. Gelir/gider kayıtları, kategorizasyon, dönemsel raporlama ve veri doğrulama ile süreçler disipline oldu.",
    summary:
      "Gelir-gider takibini düzenli ve hızlı hale getiren, offline çalışan desktop finans aracı.",
    impact: [
      "Takip düzeni oturdu; kayıtlar daha tutarlı hale geldi.",
      "Raporlama daha hızlı ve düzenli ilerlemeye başladı.",
    ],
    stack: [".NET", "WinForms", "Electron", "SQLite"],
    highlights: [
      "Gelir/gider ve işlem kayıt mantığı",
      "Kategori/etiketleme ve dönemsel raporlama kurgusu",
      "Basit ama disiplinli kullanım akışı",
      "Veri bütünlüğü için temel doğrulamalar ve kayıt kuralları",
    ],
    decisions: [
      "Offline-first yaklaşım: veriyi yerel SQLite üzerinde tutma",
      "Raporlama ekranlarını dönemsel karşılaştırmaya uygun kurgulama",
      "Kullanım sürtüşmesini azaltan sade arayüz",
    ],
    outcomes: [
      "Takip düzeni oturdu; kayıtlar daha tutarlı hale geldi",
      "Raporlama daha hızlı ve düzenli ilerlemeye başladı",
    ],
    links: [{ label: "Case Study", href: "/projects/kasatakip", external: false }],
    gallery: [],
    sections: [],
  },
  {
    slug: "noisecoach",
    title: "NoiseCoach",
    subtitle: "Kişisel gürültü dozimetresi: maruziyeti takip eden ve farkındalık oluşturan sistem.",
    tags: ["Android", "Kotlin", "Mobil", "Sensör"],
    category: "Product",
    year: "2025",
    role: "Ürün Sahibi + Geliştirici",
    featured: false,
    status: "shipped",
    problem:
      "Günlük gürültü maruziyetini takip edecek pratik bir araç yoktu; farkındalık oluşturmak ve eşik bazlı uyarı sunmak gerekiyordu.",
    solution:
      "Ses seviyesi ölçümü ve günlük/haftalık maruziyet takibi yapan Android uygulaması geliştirdim. Offline-first veri kayıt mantığı ve eşik bazlı uyarılarla kullanıcı farkındalığını destekledim.",
    summary:
      "Gürültü seviyesini ölçen ve maruziyet takibi yapan kişisel dozimetre uygulaması.",
    impact: [
      "Kişisel maruziyet takibi düzenli hale geldi.",
      "Raporlama ve farkındalık akışı netleşti.",
      "Pratik ve sürdürülebilir takip deneyimi sunuldu.",
    ],
    stack: ["Android", "Kotlin", "SQLite", "Sensör API"],
    highlights: [
      "Ses seviyesi ölçümü ve maruziyet takibi akışı",
      "Günlük/haftalık özet ve raporlama ekranları",
      "Eşik bazlı uyarı ve farkındalık odaklı UX",
      "Offline-first veri kaydı (cihaz üzerinde)",
    ],
    decisions: [
      "Basit ve hızlı etkileşim: tek ekranda net durum",
      "Offline-first veri kaydı (cihaz üzerinde)",
      "Uyarıları gürültüye duyarlı ama gereksiz alarm üretmeyecek şekilde tasarlama",
      "Raporlama ekranlarını haftalık trend odağında kurgulama",
    ],
    outcomes: [
      "Kişisel maruziyet takibi düzenli hale geldi",
      "Raporlama ve farkındalık akışı netleşti",
    ],
    links: [{ label: "Case Study", href: "/projects/noisecoach", external: false }],
    gallery: [],
    sections: [],
  },
  {
    slug: "cybercoach",
    title: "CyberCoach",
    subtitle: "AI destekli siber güvenlik asistanı: öğrenme + pratik + yönlendirme tek yerde.",
    tags: ["AI", "LLM", "Security", "Web"],
    category: "AI",
    year: "2025",
    role: "Ürün Sahibi + Geliştirici",
    featured: false,
    status: "in-progress",
    problem:
      "Siber güvenlik öğreniminde parçalı kaynak ve pratik eksikliği vardı; tek bir yerde roadmap, yönlendirme ve pratik sunacak bir asistan sistemi gerekiyordu.",
    solution:
      "AI destekli güvenlik asistanı kurgusu oluşturdum. Soru-cevap, yönlendirme ve modüler içerik yapısı (checklist + mini ders + quiz) ile öğrenme çıktılarını ölçülebilir hale getirdim. NDA-safe/etik sınırlara uygun tasarım yaptım.",
    summary:
      "Güvenlik öğreniminde roadmap, pratik ve AI asistan deneyimini birleştiren platform.",
    impact: [
      "Tek yerde roadmap + pratik + asistan deneyimi hedeflendi.",
      "Modüler içerik yapısı ve öğrenme çıktıları netleşti.",
      "NDA-safe ve etik yaklaşım korundu.",
    ],
    stack: ["AI", "LLM", "Web", "Security"],
    highlights: [
      "AI destekli güvenlik asistanı kurgusu (soru-cevap, yönlendirme, pratik)",
      "Roadmap/modül yapısı: başlangıç→ileri seviye",
      "İlerleme takibi ve görev mantığı tasarımı",
      "NDA-safe/etik: tehlikeli içerik üretmeyecek yardım yaklaşımı",
    ],
    decisions: [
      "NDA-safe/etik: tehlikeli içerik üretmeyecek yardım yaklaşımı",
      "Modüler içerik modeli: checklist + mini ders + quiz",
      "Ürün akışında ölçülebilir öğrenme çıktıları hedefi",
      "İlerleme takibi ve görev mantığını baştan kurgulama",
    ],
    outcomes: [
      "MVP kapsamı ve ürün mimarisi netleşti",
      "İçerik formatı ve kullanıcı akışları olgunlaştı",
    ],
    links: [{ label: "Case Study", href: "/projects/cybercoach", external: false }],
    gallery: [],
    sections: [],
  },
];

// Dev-only validation: ensure all projects meet minimum content requirements
if (process.env.NODE_ENV !== "production") {
  const { validateProjects } = require("@/lib/projects/validateProjects");
  validateProjects(PROJECTS);
}
