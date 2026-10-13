import { IMG } from "@/lib/siteData";

export const SERVICE_DETAILS = {
  construction: {
    title: "Construction",
    kicker: "Services / Construction",
    headline: "Disciplined delivery on every site.",
    intro: "General contracting, construction management, quality, safety and site delivery for commercial, residential and mixed-use projects.",
    img: IMG.hero,
    points: ["Site logistics and sequencing", "Safety-first field leadership", "Quality gates at every handover", "Live cost and programme reporting"],
    stat: { value: "164", label: "Completed developments" },
  },
  architecture: {
    title: "Architecture & Design",
    kicker: "Services / Architecture",
    headline: "Bold design that can actually be built.",
    intro: "Concept, technical design, coordination and documentation grounded in buildability, lifecycle value and human experience.",
    img: IMG.glass,
    points: ["Concept to technical design", "Constructability reviews", "Façade and envelope strategy", "Design-stage energy modeling"],
    stat: { value: "94%", label: "Design-stage energy modeling" },
  },
  "civil-structural": {
    title: "Civil & Structural",
    kicker: "Services / Civil & Structural",
    headline: "Engineering for demanding structures.",
    intro: "Structural systems, civils, site infrastructure and enabling works for complex and adaptive sites.",
    img: IMG.steel,
    points: ["Structural frames and foundations", "Site infrastructure and enabling works", "Temporary works design", "Material efficiency optimization"],
    stat: { value: "11", label: "Countries operated in" },
  },
  "smart-buildings": {
    title: "Smart Building Systems",
    kicker: "Services / Smart Buildings",
    headline: "Buildings that report on themselves.",
    intro: "Connected building intelligence, energy analytics, commissioning and asset data that stays useful after handover.",
    img: IMG.facade,
    points: ["BMS and IoT integration", "Energy analytics dashboards", "Digital twin handover", "Commissioning data capture"],
    stat: { value: "8%", label: "Average operational energy reduction" },
  },
  preconstruction: {
    title: "Preconstruction",
    kicker: "Services / Preconstruction",
    headline: "Solve it before site pressure begins.",
    intro: "Feasibility, estimating, logistics, sequencing and procurement strategy before a single pour.",
    img: IMG.team,
    points: ["Feasibility and cost planning", "4D sequencing", "Procurement intelligence", "Risk and logistics modeling"],
    stat: { value: "15%", label: "Fewer coordination issues" },
  },
  "fit-out": {
    title: "Fit-Out & Refurbishment",
    kicker: "Services / Fit-Out",
    headline: "Sharp finishes in live environments.",
    intro: "Interiors, finishes, MEP integration and high-control upgrades for occupied and operational spaces.",
    img: IMG.atrium,
    points: ["Occupied-space delivery", "MEP integration", "Premium finish standards", "Phased handovers"],
    stat: { value: "0", label: "Compromise on site safety" },
  },
};

export const PROJECT_DETAILS = {
  "urban-core": { title: "Urban Core", meta: "Commercial / 2026", place: "Chicago, USA", area: "480,000 sq.ft", img: IMG.hero, cat: "Commercial", text: "A mixed-use vertical district coordinated end-to-end through BIM, 4D sequencing and live site intelligence." },
  "northline-forum": { title: "Northline Forum", meta: "Civic / 2026", place: "Toronto, CA", area: "294,000 sq.ft", img: IMG.concrete, cat: "Civic", text: "A civic gathering space in raw concrete, delivered with a tight programme and a long-life performance brief." },
  "axis-works": { title: "Axis Works", meta: "Industrial / 2026", place: "Rotterdam, NL", area: "910,000 sq.ft", img: IMG.steel, cat: "Industrial", text: "A high-performance industrial campus with a steel primary structure and integrated energy systems." },
  "golden-horizon": { title: "Golden Horizon", meta: "Commercial / 2026", place: "Lisbon, PT", area: "420,000 sq.ft", img: IMG.facade, cat: "Commercial", text: "A waterfront commercial landmark with a glazed façade tuned for daylight and operational energy." },
};

export const OFFICES = [
  { n: "01 / USA", city: "Chicago", addr: "330 N Wabash Ave", sub: "Chicago, IL" },
  { n: "02 / Canada", city: "Toronto", addr: "100 King St W", sub: "Toronto, ON" },
  { n: "03 / Europe", city: "London", addr: "20 Fenchurch St", sub: "London, UK" },
];

export const PRINCIPLES = [
  { title: "Make it visible", text: "Rules, decisions and risks are connected to a visible record." },
  { title: "Connect the work", text: "Design, engineering, commercial and site teams work as one." },
  { title: "Own the outcome", text: "Accountability stays with one team from brief to operation." },
  { title: "Build for longer", text: "Performance, adaptability and maintainability matter as much as day one." },
];

export const OPERATING = [
  { n: "01", title: "Discover", text: "Brief, risk, feasibility, cost logic and performance criteria." },
  { n: "02", title: "Engineer", text: "Design development, BIM coordination and procurement strategy." },
  { n: "03", title: "Construct", text: "Site management, quality, safety and live project intelligence." },
  { n: "04", title: "Activate", text: "Commissioning, handover, training and asset data." },
  { n: "05", title: "Evolve", text: "Operational learning and lifecycle performance feedback." },
];

export const CAREERS = [
  { role: "Senior Project Manager", team: "Construction", place: "Chicago, USA", type: "Full-time" },
  { role: "BIM Coordinator", team: "Digital Delivery", place: "Toronto, CA", type: "Full-time" },
  { role: "Structural Engineer", team: "Civil & Structural", place: "London, UK", type: "Full-time" },
  { role: "Preconstruction Estimator", team: "Preconstruction", place: "Remote / Hybrid", type: "Full-time" },
];

export const CHAIN = ["Brief", "Design", "Coordinate", "Build", "Operate"];

export const DIGITAL = [
  { title: "Federated BIM", text: "Architecture, structure and MEP coordinated in a single issue workflow." },
  { title: "Connected field", text: "Site observations, quality and progress linked back to current information." },
  { title: "Asset data", text: "Structured information that remains useful through commissioning and operation." },
];