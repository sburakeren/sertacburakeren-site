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
  LINKEDIN: "https://linkedin.com/in/sertacburakeren",
  GITHUB: "https://github.com/sertacburakeren",
  
  // WhatsApp default message
  WHATSAPP_DEFAULT_MESSAGE: "Merhaba Sertaç, portfolyo üzerinden ulaşıyorum.",
} as const;

/**
 * Helper to generate WhatsApp link with custom message
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || CONTACT.WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
