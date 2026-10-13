export const NAV_MENU = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    blurb: "Four coordinated service groups.",
    children: [
      { label: "Transmission & Power Structures", to: "/services" },
      { label: "Temporary & Construction Structures", to: "/services" },
      { label: "Heavy Civil & Infrastructure", to: "/services" },
      { label: "Supporting Engineering Services", to: "/services" },
    ],
  },
  {
    label: "Expertise",
    to: "/expertise",
    blurb: "Nine specialized areas of practice.",
    children: [
      { label: "Structural Engineering", to: "/expertise" },
      { label: "Temporary Works", to: "/expertise" },
      { label: "Transmission Structures", to: "/expertise" },
      { label: "Heavy Civil", to: "/expertise" },
      { label: "Technical Review", to: "/expertise" },
    ],
  },
  { label: "Projects", to: "/projects" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Expertise", to: "/expertise" },
  { label: "Projects", to: "/projects" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Transmission", to: "/expertise" },
  { label: "Temporary Works", to: "/expertise" },
  { label: "Heavy Civil", to: "/expertise" },
  { label: "Water / Wastewater", to: "/expertise" },
  { label: "Technical Review", to: "/expertise" },
  { label: "Construction Engineering", to: "/expertise" },
];

export const SECTORS = [
  "General Contractors", "EPC Companies", "Utilities", "Engineering Firms",
  "Infrastructure Owners", "Public Sector", "Fabricators", "Developers",
];