export const NAV_MENU = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    blurb: "Coordinated structural engineering and temporary works.",
    defaultImg: "/real-images/power-transmission-grid.jfif",
    defaultLabel: "Service groups",
    children: [
      { label: "Bridge Overhang Brackets", to: "/bridge-brackets", img: "/brackets/steel-bridge-overhang-bracket-bbs54.jpg", caption: "Cantilever deck brackets & PE submittals" },
      { label: "Material Resourcing", to: "/procurement", img: "/real-images/aluminum-steel-post-shores.jfif", caption: "Vendor-neutral equipment & formwork supply" },
      { label: "Transmission & Power Structures", to: "/expertise?tab=transmission", img: "/real-images/power-transmission-grid.jfif", caption: "Towers, lattice structures & conductor arms" },
      { label: "Temporary & Construction Structures", to: "/expertise?tab=temporary-works", img: "/real-images/aluminum-shoring-frames.jfif", caption: "Deep shoring, excavation & falsework" },
      { label: "Heavy Civil & Infrastructure", to: "/expertise?tab=heavy-civil", img: "/real-images/aluminum-gang-wall-forms.jfif", caption: "Bridge decks, LRT & civil works" },
      { label: "Supporting Engineering Services", to: "/expertise?tab=heavy-civil", img: "/real-images/structural-engineering-office.jfif", caption: "Drawings, review & site inspection" },
    ],
  },
  {
    label: "Expertise",
    to: "/expertise",
    blurb: "Specialized areas of engineering practice.",
    defaultImg: "/real-images/structural-engineering-office.jfif",
    defaultLabel: "Practice areas",
    children: [
      { label: "Bridge Overhang Brackets", to: "/bridge-brackets", img: "/brackets/steel-bridge-overhang-bracket-bbs54.jpg", caption: "Cantilever deck brackets & PE submittals" },
      { label: "Transmission Structures", to: "/expertise?tab=transmission", img: "/real-images/power-transmission-grid.jfif", caption: "Towers & lattice girders" },
      { label: "Temporary Works", to: "/expertise?tab=temporary-works", img: "/real-images/aluminum-steel-post-shores.jfif", caption: "Overhang brackets, shoring & excavation" },
      { label: "Heavy Civil", to: "/expertise?tab=heavy-civil", img: "/brackets/aluminum-bridge-overhang-bracket-bba96.jpg", caption: "Bridges, viaducts & LRT" },
      { label: "Water / Wastewater", to: "/expertise?tab=water-wastewater", img: "/real-images/water-treatment-concrete-tanks.jfif", caption: "ACI 350 tanks & filtration basins" },
      { label: "Material Resourcing", to: "/procurement", img: "/real-images/aluminum-steel-post-shores.jfif", caption: "Equipment supply & formwork" },
    ],
  },
  { label: "Bridge Brackets", to: "/bridge-brackets" },
  { label: "Material Resourcing", to: "/procurement" },
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
  { label: "Bridge Brackets", to: "/bridge-brackets" },
  { label: "Material Procurement", to: "/procurement" },
  { label: "Projects", to: "/projects" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Bridge Overhang Brackets", to: "/bridge-brackets" },
  { label: "Material Resourcing", to: "/procurement" },
  { label: "Transmission", to: "/expertise?tab=transmission" },
  { label: "Temporary Works", to: "/expertise?tab=temporary-works" },
  { label: "Heavy Civil", to: "/expertise?tab=heavy-civil" },
  { label: "Water / Wastewater", to: "/expertise?tab=water-wastewater" },
  { label: "Technical Review", to: "/expertise?tab=heavy-civil" },
  { label: "Construction Engineering", to: "/expertise?tab=temporary-works" },
];

export const SECTORS = [
  "General Contractors", "EPC Companies", "Utilities", "Engineering Firms",
  "Infrastructure Owners", "Public Sector", "Fabricators", "Developers",
];