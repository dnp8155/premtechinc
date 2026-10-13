export const NAV_MENU = [
  { label: "Home", to: "/" },
  {
    label: "Company",
    to: "/about",
    blurb: "Built for complex work, organized around clarity.",
    children: [
      { label: "About ARCVOLT", to: "/about" },
      { label: "Our process", to: "/process" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Careers", to: "/careers" },
      { label: "Insights", to: "/insights" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    blurb: "One partner. Every layer.",
    children: [
      { label: "Construction", to: "/services/construction" },
      { label: "Architecture & Design", to: "/services/architecture" },
      { label: "Civil & Structural", to: "/services/civil-structural" },
      { label: "Smart Building Systems", to: "/services/smart-buildings" },
      { label: "Preconstruction", to: "/services/preconstruction" },
      { label: "Fit-Out & Refurbishment", to: "/services/fit-out" },
    ],
  },
  {
    label: "Projects",
    to: "/projects",
    blurb: "Work that performs after the photo.",
    children: [
      { label: "All projects", to: "/projects" },
      { label: "Urban Core", to: "/projects/urban-core" },
      { label: "Northline Forum", to: "/projects/northline-forum" },
      { label: "Axis Works", to: "/projects/axis-works" },
      { label: "Golden Horizon", to: "/projects/golden-horizon" },
    ],
  },
  {
    label: "Technology",
    to: "/technology",
    blurb: "The building starts as data.",
    children: [
      { label: "Digital construction", to: "/technology" },
      { label: "Concrete calculator", to: "/calculator" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_COMPANY = [
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Careers", to: "/careers" },
];

export const FOOTER_EXPERTISE = [
  { label: "Construction", to: "/services/construction" },
  { label: "Architecture", to: "/services/architecture" },
  { label: "Civil & Structural", to: "/services/civil-structural" },
  { label: "Smart Buildings", to: "/services/smart-buildings" },
  { label: "Preconstruction", to: "/services/preconstruction" },
  { label: "Fit-Out", to: "/services/fit-out" },
  { label: "Concrete Calculator", to: "/calculator" },
];