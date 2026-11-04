import { siteConfig } from "./site";

export const contactConfig = {
  phone: siteConfig.phone,
  phoneClean: siteConfig.phoneClean,
  whatsappNumber: siteConfig.whatsapp,
  email: siteConfig.email,
  address: siteConfig.address,
  mapsUrl: siteConfig.mapsUrl,

  getWhatsAppUrl: (customMessage?: string) => {
    const message = customMessage || siteConfig.defaultWhatsAppMessage;
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  },

  getPhoneUrl: () => {
    return `tel:${siteConfig.phoneClean}`;
  },

  getEmailUrl: (subject?: string) => {
    const sub = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    return `mailto:${siteConfig.email}${sub}`;
  },
};

