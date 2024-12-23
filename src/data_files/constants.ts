import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Blz IT Solutions",
  tagline: "Blaze all your IT needs",
  description: "An one stop solution for all your modern IT needs",
  description_short: "",
  url: "https://blzit.in",
  // author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: ${SITE.tagline}`,
  description: SITE.description,
  image: ogImageSrc,
};
