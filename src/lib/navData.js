export const NAV_MENU = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    blurb: "Four coordinated service groups.",
    defaultImg: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=1600&q=80",
    defaultLabel: "Service groups",
    children: [
      { label: "Transmission & Power Structures", to: "/services", img: "https://images.unsplash.com/photo-1606901900840-f3dba75bcd47?auto=format&fit=crop&w=1600&q=80", caption: "Towers, lattice structures & conductor arms" },
      { label: "Temporary & Construction Structures", to: "/services", img: "/brackets/steel-bridge-overhang-bracket-bbs54.jpg", caption: "Bridge overhang brackets, shoring & formwork" },
      { label: "Heavy Civil & Infrastructure", to: "/services", img: "/brackets/aluminum-bridge-overhang-bracket-bba96.jpg", caption: "Bridge decks, LRT & civil works" },
      { label: "Supporting Engineering Services", to: "/services", img: "https://images.unsplash.com/photo-1721244654394-36a7bc2da288?auto=format&fit=crop&w=1600&q=80", caption: "Drawings, review & site inspection" },
    ],
  },
  {
    label: "Expertise",
    to: "/expertise",
    blurb: "Nine specialized areas of practice.",
    defaultImg: "https://images.unsplash.com/photo-1523477593243-78bbf626fd3b?auto=format&fit=crop&w=1600&q=80",
    defaultLabel: "Practice areas",
    children: [
      { label: "Structural Engineering", to: "/expertise", img: "https://images.unsplash.com/photo-1523477593243-78bbf626fd3b?auto=format&fit=crop&w=1600&q=80", caption: "Analysis & member review" },
      { label: "Temporary Works", to: "/expertise", img: "/brackets/steel-bridge-overhang-bracket-bbs54.jpg", caption: "Overhang brackets, shoring & excavation" },
      { label: "Transmission Structures", to: "/expertise", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80", caption: "Towers & lattice girders" },
      { label: "Heavy Civil", to: "/expertise", img: "/brackets/aluminum-bridge-overhang-bracket-bba96.jpg", caption: "Bridges, viaducts & LRT" },
      { label: "Technical Review", to: "/expertise", img: "https://images.unsplash.com/photo-1772442198624-4fc4d7281e89?auto=format&fit=crop&w=1600&q=80", caption: "Independent design review" },
    ],
  },
  { label: "Bridge Brackets", to: "/#bridge-brackets" },
  { label: "Procurement", to: "/#material-procurement" },
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
  { label: "Bridge Brackets", to: "/#bridge-brackets" },
  { label: "Material Procurement", to: "/#material-procurement" },
  { label: "Projects", to: "/projects" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Bridge Overhang Brackets", to: "/#bridge-brackets" },
  { label: "Material Resourcing", to: "/#material-procurement" },
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