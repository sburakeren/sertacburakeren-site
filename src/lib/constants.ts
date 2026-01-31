/**
 * Site-wide constants
 * Update contact information here to reflect across the entire site
 */

export const CONTACT = {
  // WhatsApp: Format should be country code + number (no + or spaces)
  // Example: "905551234567" for Turkey
  WHATSAPP_NUMBER: "905019325955",
  
  // Email
  EMAIL: "sertacburakeren@gmail.com",
  
  // Social Links
  GITHUB: "https://github.com/sertacburakeren",
  
  // WhatsApp default message
  WHATSAPP_DEFAULT_MESSAGE: "Merhaba, web projesi hakkında görüşmek istiyorum. Müsait olduğunuzda dönüş yapabilir misiniz?",
} as const;

/**
 * GNR Studio & Partners
 */
export const PARTNERS = {
  GNR_STUDIO: {
    NAME: "GNR Studio",
    WEBSITE: "https://gnrstudio.com",
    EMAIL: "contact@gnrstudio.com",
    BIO_TR: "Sosyal medya içerik üretimi ve yönetimi • AI destekli yaratıcı prodüksiyon • proje geliştirme ve strateji",
    BIO_EN: "social media content creation & management • AI-driven creative production • project development & strategy",
  },
  MITRAS_LAW_BLOG: {
    NAME: "MitrasLawBlog",
    WEBSITE: "https://mitraslawblog.com",
    DESC: "MitrasLawBlog — GNR Studio bünyesinde geliştirilen, içerik/SEO ve yönetim paneli odaklı yayın platformu. Hukuk içeriğini modern, erişilebilir ve sürdürülebilir bir yapıda sunmayı hedefler.",
  },
} as const;

/**
 * Helper to generate WhatsApp link with custom message
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || CONTACT.WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
