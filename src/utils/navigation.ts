// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  // { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  // { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      // { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Our Products", url: "#" },
      { name: "Our Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "#" },
      // { name: "Careers", url: "#" },
      // { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://x.com/blzitsolutions",
  instagram: "https://www.instagram.com/blzitsolutions/",
  // discord: "https://discord.gg/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};