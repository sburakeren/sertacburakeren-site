export type Collaboration = {
  label: string;
  domain: string;
  focus: string[];
  note?: string;
};

export const COLLABORATIONS: Collaboration[] = [
  {
    label: "E-ticaret",
    domain: "Online Perakende",
    focus: ["Otomasyon", "Entegrasyon", "Performans"],
    note: "İsimler talep halinde.",
  },
  {
    label: "Hukuk",
    domain: "Hukuk Bürosu",
    focus: ["Raporlama", "Doküman Yönetimi", "Güvenlik"],
    note: "İsimler talep halinde.",
  },
  {
    label: "Finans",
    domain: "Finansal Hizmetler",
    focus: ["Veri Analizi", "Compliance", "Otomasyon"],
    note: "İsimler talep halinde.",
  },
  {
    label: "İç Sistem",
    domain: "Kurumsal Yazılım",
    focus: ["RBAC", "Audit Trail", "Modüler Mimari"],
    note: "İsimler talep halinde.",
  },
  {
    label: "Medya",
    domain: "Dijital Medya",
    focus: ["İçerik Yönetimi", "Ölçekleme", "CDN"],
    note: "İsimler talep halinde.",
  },
  {
    label: "Danışmanlık",
    domain: "Teknik Danışmanlık",
    focus: ["Mimari Tasarım", "Kod İncelemesi", "Best Practices"],
    note: "İsimler talep halinde.",
  },
];
