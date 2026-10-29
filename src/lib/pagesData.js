export const PILLARS = [
  { title: "Our Approach", text: "We work from the constraints outward — loads, geometry, sequence and site conditions — so the engineering responds to the project rather than to a template." },
  { title: "Our Expertise", text: "Structural engineering, temporary works, transmission structures and heavy civil infrastructure, delivered as one coordinated technical scope." },
  { title: "Our Markets", text: "Prem Technology Inc. supports projects across Canada and the United States, working alongside contractors, utilities, engineering teams and infrastructure owners." },
  { title: "Our Commitment", text: "Clear engineering information, issued in a form that can be reviewed, fabricated, coordinated and built from." },
];

export const SERVICE_GROUPS = [
  {
    id: "bridge-brackets",
    n: "01", 
    title: "Bridge Overhang Brackets & Deck Systems",
    scope: "AASHTO-compliant cantilever bridge brackets, screed rail load distribution, torsional girder analysis, safe spacing charts, PE certified stamped submittals.",
    applications: "Prestressed concrete I-girders, deep steel plate girders, tub girders, bridge deck widening projects.",
    deliverables: "PE-stamped calculation packages, overhang bracket layout drawings, screed load verification, DOT submittals.",
    interfaces: "Bridge general contractors, state DOT / provincial MOT authorities, and formwork engineers.",
    link: "/bridge-brackets",
  },
  {
    id: "transmission",
    n: "02", 
    title: "Transmission & Power Structures",
    scope: "High-voltage lattice towers, monopoles, substation gantries, conductor tension & sag analysis, wind/ice combination calculations, broken-wire simulation.",
    applications: "Transmission lines (69kV to 500kV), river and highway crossing spans, utility substations, switchyards.",
    deliverables: "Nonlinear PLS-CADD/TOWER analysis reports, foundation reaction loads, member capacity verification, PE certification.",
    interfaces: "Power utilities, EPC contractors, steel fabricators, and transmission line operators.",
    link: "/services#transmission",
  },
  {
    id: "temporary-works",
    n: "03", 
    title: "Temporary Works & Shoring Engineering",
    scope: "Deep excavation support (soldier pile & lagging, secant/tangent piles, sheet piling), multi-tier tieback anchors, falsework, heavy access scaffolding.",
    applications: "Deep urban basements, multi-level underground parking, bridge falsework, heavy civil excavation pits.",
    deliverables: "Geotechnical interface reviews, structural shoring drawings, deflection monitoring plans, stamped submittals.",
    interfaces: "General contractors, shoring specialty trade contractors, and geotechnical consultants.",
    link: "/services#temporary-works",
  },
  {
    id: "heavy-civil",
    n: "04", 
    title: "Heavy Civil & Metro Transit Infrastructure",
    scope: "LRT guideways, transit viaducts, cut-and-cover underground stations, deep utility shafts, highway overpasses, and heavy civil structures.",
    applications: "Metro rail systems, grade separation overpasses, precast concrete segmental bridges, municipal infrastructure.",
    deliverables: "Structural analysis reports, constructability assessments, erection staging calculations, peer reviews.",
    interfaces: "Transit authorities, public infrastructure owners, design-build joint ventures.",
    link: "/services#heavy-civil",
  },
  {
    id: "material-resourcing",
    n: "05", 
    title: "Material & Equipment Resourcing",
    scope: "Vendor-neutral supply and rental coordination for heavy telescopic post shores, modular gang wall forms, aluminum stringers, trench shoring.",
    applications: "Commercial multi-story slab reshoring, mass concrete core walls, deep trench safety, bridge construction.",
    deliverables: "Certified load capacity charts, equipment procurement specifications, staging and logistics coordination.",
    interfaces: "Equipment rental fleets, formwork suppliers, and project procurement teams.",
    link: "/procurement",
  },
  {
    id: "water-wastewater",
    n: "06", 
    title: "Water & Wastewater Infrastructure (ACI 350)",
    scope: "Sanitary concrete structures, primary/secondary clarifiers, aeration basins, deep pump wet wells, waterstop joint layouts, flotation buoyancy.",
    applications: "Municipal water treatment plants (WTP), industrial wastewater facilities (WWTP), intake structures.",
    deliverables: "ACI 350 environmental durability calculations, crack-width control verification, mass pour thermal control plans.",
    interfaces: "Municipal environmental authorities, water treatment EPCs, and civil contractors.",
    link: "/services#water-wastewater",
  },
];

export const EXPERTISE = [
  { 
    id: "temporary-works",
    n: "01", 
    title: "Substructure & Deep Shoring", 
    category: "temporary-works",
    text: "Engineered excavation support systems, secant piles, soldier pile & lagging, multi-tier tieback anchors, and structural monitoring protecting adjacent utilities.",
    img: "/real-images/substructure-deep-shoring.png",
    tag: "Excavation · ERSS"
  },
  { 
    id: "bridge-brackets",
    n: "02", 
    title: "Bridge Decks & Overhang Systems", 
    category: "bridge-brackets",
    text: "Steel and aluminum bridge overhang cantilever bracket systems, composite deck carriage formwork, and erection staging for highway spans.",
    img: "/real-images/bridge-overhang-civil-infrastructure.jpg",
    tag: "Bridges · Overhang"
  },
  { 
    id: "transmission",
    n: "03", 
    title: "Power Transmission Corridors", 
    category: "transmission",
    text: "High-voltage lattice towers, monopoles, conductor load analysis, broken-wire simulations, and foundation interface engineering across Canada & USA.",
    img: "/real-images/power-transmission-grid.jfif",
    tag: "Energy · 500kV Grid"
  },
  { 
    id: "temporary-works",
    n: "04", 
    title: "Temporary Works & Shoring", 
    category: "temporary-works",
    text: "Heavy-duty falsework, scaffolding towers, hydraulic trench shoring, and multi-tier reshoring engineered around the live construction sequence.",
    img: "/real-images/temporary-works-construction.jpg",
    tag: "Falsework · Shoring"
  },
  { 
    id: "water-wastewater",
    n: "05", 
    title: "Water & Wastewater Concrete", 
    category: "water-wastewater",
    text: "Liquid-retaining sanitary tanks, clarifiers, aeration basins, pump wet wells, waterstop joint detailing, and ACI 350 crack-width control.",
    img: "/real-images/water-treatment-concrete-tanks.jfif",
    tag: "ACI 350 · WTP/WWTP"
  },
  { 
    id: "heavy-civil",
    n: "06", 
    title: "LRT Corridors & Guideways", 
    category: "heavy-civil",
    text: "Elevated guideways, transit viaducts, cut-and-cover underground stations, shafts, and precast segmental erection staging.",
    img: "/real-images/lrt-corridors-guideways-tunnels.jpg",
    tag: "Transit · Metro LRT"
  },
  { 
    id: "heavy-civil",
    n: "07", 
    title: "Structural PE Stamping & Review", 
    category: "heavy-civil",
    text: "Comprehensive engineering calculations, independent design checking, peer reviews, and certified PE stamped drawings across Canada and all 50 US States.",
    img: "/real-images/structural-pe-stamping-review.png",
    tag: "PE Certified · Review"
  },
  { 
    id: "material-resourcing",
    n: "08", 
    title: "Formwork & Concrete Structures", 
    category: "material-resourcing",
    text: "Modular gang wall formwork, steel-faced column forms, self-cleaning aluminum props, and multi-pour thermal mass-concrete control plans.",
    img: "/real-images/aluminum-gang-wall-forms.jfif",
    tag: "Formwork · Wall Panels"
  },
  { 
    id: "temporary-works",
    n: "09", 
    title: "Crane Rigging & Staging", 
    category: "temporary-works",
    text: "Heavy tandem pick lifting plans, outrigger mat pressure calculations, crane positioning, and site constructability coordination.",
    img: "/real-images/crane-rigging-staging-industrial.jpg",
    tag: "Heavy Lift · Rigging"
  },
];

export const DELIVERABLES = [
  "Structural analysis", "Design calculations", "Structural drawings", "Review comments",
  "Technical reports", "Inspection records", "Construction-phase documentation", "Engineering coordination",
];

export const APPLICATIONS = [
  { n: "01", title: "Transmission Infrastructure", sector: "Transmission & Power Structures", challenge: "Tower and lattice structures where loading conditions, tower geometry and foundation interface govern the structural response.", scope: "Structural analysis, load calculations, member/connection review, engineering documentation, certification support.", where: "Transmission lines, lattice towers and girders, substation structures, power infrastructure." },
  { n: "02", title: "Temporary Works", sector: "Temporary & Construction Structures", challenge: "Temporary structures that must carry construction loads safely while allowing permanent work to proceed.", scope: "Shoring & excavation support design, formwork & falsework engineering, scaffold/access structures, site inspection.", where: "Excavations and deep basements, bridge erection, heavy construction access, temporary support systems." },
  { n: "03", title: "LRT & Transit", sector: "Heavy Civil & Infrastructure", challenge: "Transit infrastructure delivered within operating corridors, under strict geometry, staging and access constraints.", scope: "Structural design support, guideway & station structure review, constructability assessment, technical reporting.", where: "LRT and metro corridors, guideways and viaducts, station and platform structures, transit facilities." },
  { n: "04", title: "Bridges & Overpasses", sector: "Heavy Civil & Infrastructure", challenge: "Erection, staging and support conditions for bridge structures, where temporary conditions often govern the design.", scope: "Structural review, erection and temporary support engineering, falsework design, construction-phase documentation.", where: "Highway overpasses, river crossings, grade separations, structural rehabilitation." },
  { n: "05", title: "Tunnel & Underground", sector: "Heavy Civil & Infrastructure", challenge: "Underground construction where ground conditions, support systems and staged excavation control the sequence.", scope: "Temporary works engineering, excavation support review, structural interfaces, site engineering support.", where: "Transit tunnels, shafts and portals, underground stations, underground civil structures." },
  { n: "06", title: "Water & Wastewater Infrastructure (WTP / WWTP)", sector: "Heavy Civil & Environmental Facilities", challenge: "Liquid-retaining and process concrete structures governed by ACI 350 durability, crack control coefficients (z-factor), chemical resistance, and heavy hydraulic loading conditions.", scope: "ACI 350 environmental concrete design, deep wet-well shoring, clarifier & aeration basin formwork engineering, mass pour thermal control, AWWA compliance, technical calculations and PE certification.", where: "Municipal and industrial WTPs/WWTPs, primary/secondary clarifiers, aeration basins, pump wet wells, UV disinfection vaults, chemical feed structures." },
];

export const ARTICLES = [
  { n: "01", title: "The Engineering Case for Early Temporary Works Involvement", cat: "Temporary Works", read: "6 min read", summary: "When temporary works are treated as a construction-phase afterthought, the structural conditions that govern the permanent design are often discovered too late. Bringing temporary works into the conversation early keeps the design, the sequence and the site aligned.", takeaway: "Evaluating shoring, falsework and erection staging alongside the permanent design eliminates costly change orders and construction delays." },
  { n: "02", title: "Loading Conditions That Govern Lattice Tower Design", cat: "Transmission", read: "7 min read", summary: "Lattice towers are governed by a combination of wind, ice, wire tension and broken-wire conditions. Understanding which load case controls each member is the foundation of an efficient and reliable tower design.", takeaway: "Determining controlling load paths for leg members, diagonals, and cross-arms across wind, ice, and broken-wire contingencies." },
  { n: "03", title: "Why the Temporary Condition Often Governs Bridge Construction", cat: "Heavy Civil", read: "6 min read", summary: "In bridge construction, the structure passes through configurations that are more demanding than the finished state. The erection sequence, temporary supports and staged loading frequently control the design.", takeaway: "Lifting, falsework, and wet concrete placement create stresses that frequently exceed service traffic conditions." },
  { n: "04", title: "Constructability Review: Catching Problems Before They Reach Site", cat: "Construction", read: "5 min read", summary: "A constructability review is a structured pass through the design and construction plan to identify conflicts, sequencing issues, and access constraints before work begins on site.", takeaway: "Resolving interface mismatches on drawings before fabrication and mobilization saves tens of thousands in field delays." },
  { n: "05", title: "Shoring Design: The Structural Engineering Behind Excavation Support", cat: "Temporary Works", read: "8 min read", summary: "Shoring systems hold back soil and water during excavation. The engineering is a balance between soil-structure interaction, construction sequence and the protection of adjacent structures.", takeaway: "Engineering soldier piles, sheet piles, struts and tiebacks around progressive excavation stages to protect adjacent structures." },
  { n: "06", title: "Engineering Documentation That Can Actually Be Built From", cat: "Construction", read: "5 min read", summary: "Engineering drawings and calculations are instructions for construction. Clarity, completeness, and constructability are core engineering requirements, not afterthoughts.", takeaway: "Technical calculations and drawings must directly align with field fabrication and site erection workflows." },
];

export const VALUES = [
  { title: "Technical Rigour", text: "Engineering that holds up under review — defensible, constructable, and documented to a standard the industry expects." },
  { title: "Construction Awareness", text: "We work from the construction sequence outward. Understanding how things are built is where the engineering starts." },
  { title: "Direct Communication", text: "Clear engineering information, issued in a form that can be reviewed, fabricated, coordinated and built from." },
  { title: "Continued Development", text: "Exposure to demanding structures across transmission, temporary works and heavy civil infrastructure." },
];

export const DISCIPLINES = [
  "Structural Engineering", "Temporary Works Engineering", "Transmission Structures",
  "Construction Engineering", "Heavy Civil Structures", "Engineering Review & Technical Documentation",
];

export const INQUIRY_STEPS = [
  { n: "Step 01", title: "Scope Review", text: "We review your enquiry together with any drawings, specifications or brief provided." },
  { n: "Step 02", title: "Engineering Response", text: "An engineering team member responds directly to discuss technical approaches, constraints and sequence." },
  { n: "Step 03", title: "Next Stage", text: "Where there is mutual fit, we formalize the scope, deliverables, timeline, and fee schedule." },
];

export const LEGAL = {
  privacy: [
    { h: "Commercial confidentiality", p: "Client project documents, drawings, specifications, contact details and technical enquiries are handled with strict commercial confidentiality." },
    { h: "Information we collect", p: "When you contact Prem Technology Inc., we collect the details you provide — your name, email, company, phone number, project location, project information and any files you attach." },
    { h: "How we use it", p: "Information is used only to review your enquiry, respond to you and, where there is mutual fit, scope the engineering work. We do not sell your information." },
    { h: "Storage of attachments", p: "Files attached to an enquiry are stored privately and are accessible only to the engineering team reviewing your project." },
    { h: "Contact", p: "Questions about how your information is handled can be sent to info@pt.com (or transitional: premtechinc@yahoo.ca) or 942-880-4032." },
  ],
  terms: [
    { h: "Scope of engagement", p: "Engineering services are provided under a formal scope, deliverables, timeline and fee schedule agreed with the client for each project." },
    { h: "Technical disclaimers", p: "Information on this website is general in nature and is not engineering advice for any specific project. Engineering decisions rely on project-specific review by licensed engineering staff." },
    { h: "Intellectual property", p: "Calculations, drawings and technical documents prepared by Prem Technology Inc. remain protected intellectual property, and are issued for the project and purpose for which they were prepared." },
    { h: "Standard terms of service", p: "Standard engineering terms of service apply to all engagements and are confirmed in writing before work begins." },
    { h: "Contact", p: "For questions about these terms, contact info@pt.com (or transitional: premtechinc@yahoo.ca) or 942-880-4032." },
  ],
};