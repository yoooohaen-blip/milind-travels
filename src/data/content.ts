/**
 * Centralized Content Configuration — Milind Travels
 * Established 2000 | Mumbai, Maharashtra, India
 * 
 * All factual information is verified against official historical records.
 * Edit this file to update any business claims, addresses, contact numbers, or fleet offerings.
 */

export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  landline?: string;
  whatsappNumber: string;
  primaryEmail: string;
  secondaryEmail: string;
  executiveEmail?: string;
  communicationOffice: {
    title: string;
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    fullAddress: string;
    mapQuery: string;
    googleMapsEmbedUrl: string;
  };
  registeredOffice: {
    title: string;
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    statusNote: string;
    fullAddress: string;
  };
  operatingHours: {
    contractedOperations: string;
    corporateOffice: string;
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTagline: string;
  overview: string;
  keyBenefits: string[];
  vehicleTypes: string[];
  idealFor: string[];
  badge?: string;
  iconName: string;
}

export interface VehicleTier {
  id: string;
  category: string;
  tagline: string;
  typicalModels: string[];
  historicalPrecedents: string[];
  capacity: {
    passengers: string;
    luggage: string;
  };
  highlights: string[];
  corporateUseCases: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface MumbaiCorridor {
  id: string;
  name: string;
  region: "Central" | "Western" | "Harbour / Trans-Thane" | "South Mumbai";
  majorHubs: string[];
  routeFocus: string;
}

export interface OperationalPillar {
  id: string;
  title: string;
  metric?: string;
  description: string;
  points: string[];
}

export interface HistoricalClient {
  name: string;
  logoFilename: string;
  industry: string;
  isVerifiedHistoricalRecord: boolean;
  needsNdaVerificationBeforeAdCampaign: boolean;
}

export const SITE_METADATA = {
  name: "Milind Travels",
  tagline: "Enterprise Corporate Transportation & Fleet Logistics",
  foundedYear: 2000,
  yearsOfExperience: 24,
  location: "Mumbai, Maharashtra, India",
  siteUrl: "https://www.milindtravels.com",
};

export const CONTACT_INFO: ContactInfo = {
  phone: "+919223431020",
  phoneFormatted: "+91 92234 31020",
  landline: "022-25162620",
  whatsappNumber: "919223431020",
  primaryEmail: "mumbai@milindtravels.com",
  secondaryEmail: "milind_travels@yahoo.in",
  executiveEmail: "milindphodkar@milindtravels.com",
  communicationOffice: {
    title: "Corporate Communication & Operations Office",
    line1: "A-808, Kailas Business Park",
    line2: "Veer Savarkar Road, Park Site",
    area: "Vikhroli West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400079",
    landmark: "Near Vikhroli-Powai Link Road",
    fullAddress: "A-808, Kailas Business Park, Veer Savarkar Road, Park Site, Vikhroli West, Mumbai - 400079, Maharashtra",
    mapQuery: "Kailas+Business+Park+Vikhroli+West+Mumbai",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0215886673623!2d72.91976077583647!3d19.106677950993514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ce37719f97%3A0xe212683be8d1b117!2sKailas%20Business%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  registeredOffice: {
    title: "Registered Entity Address",
    line1: "1/3, Surju Yadav Niwas",
    line2: "Asalfa Village",
    area: "Ghatkopar West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400084",
    statusNote: "Historical statutory registered office address (separate from commercial communication office)",
    fullAddress: "1/3, Surju Yadav Niwas, Asalfa Village, Ghatkopar West, Mumbai - 400084, Maharashtra",
  },
  operatingHours: {
    contractedOperations: "24/7/365 Dedicated Route Dispatch for Corporate Clients",
    corporateOffice: "Monday – Saturday: 9:00 AM – 8:00 PM IST",
  },
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "staff-transportation",
    slug: "corporate-staff-transportation",
    title: "Corporate Staff Transportation",
    shortTagline: "Synchronized employee commute solutions for Mumbai's enterprise workforce.",
    overview: "End-to-end scheduled employee pickup and drop logistics tailored to your company's shift rotations, facility locations, and employee safety protocols. We eliminate commute friction so your teams arrive safely and punctually.",
    keyBenefits: [
      "Rigorous punctuality with pre-planned route optimization",
      "Shift-synchronized scheduling across 24x7 operational windows",
      "Full driver verification, background checks, and route orientation",
      "Escort & female employee safety protocols for night shifts",
      "Centralized route communication and backup vehicle readiness",
    ],
    vehicleTypes: ["Executive Sedans", "Multi-Passenger MPVs", "13-26 Seater Corporate Shuttles"],
    idealFor: ["IT & SaaS Hubs", "BPOs & Contact Centers", "Banking & Financial Services", "Corporate HQs"],
    badge: "Core Enterprise Solution",
    iconName: "Users",
  },
  {
    id: "fleet-management",
    slug: "dedicated-fleet-management",
    title: "Dedicated Fleet Management",
    shortTagline: "Comprehensive outsourced vehicular logistics and fleet administration.",
    overview: "Turnkey fleet management that transfers the overhead of vehicle acquisition, driver management, compliance, maintenance, and route scheduling from your administrative team to our experienced operations desk.",
    keyBenefits: [
      "Zero capital expenditure on vehicle asset ownership",
      "Comprehensive maintenance, insurance, and statutory compliance management",
      "Dedicated account supervisor assigned to coordinate daily fleet needs",
      "Predictable, structured monthly billing and transparent cost control",
      "Guaranteed operational continuity with standby vehicle replacements",
    ],
    vehicleTypes: ["Dedicated Corporate Sedans", "Premium Utility Vehicles", "Workforce Coaches"],
    idealFor: ["Multinational Corporations", "Manufacturing Conglomerates", "Consulting Firms"],
    badge: "Managed Operations",
    iconName: "ShieldCheck",
  },
  {
    id: "luxury-executive-rentals",
    slug: "luxury-executive-car-rentals",
    title: "Executive & VIP Car Rentals",
    shortTagline: "Discreet, immaculate chauffeur-driven mobility for leadership and global delegations.",
    overview: "High-touch, premium passenger transport for C-suite leadership, international board members, VIP clients, and high-stakes corporate summits. Spotless vehicles equipped with modern climate control, refined leather appointments, and seasoned chauffeurs.",
    keyBenefits: [
      "Pristine, late-model luxury and premium vehicles",
      "Elegantly attired, courteous chauffeurs trained in executive etiquette",
      "Seamless airport greetings (BOM Terminal 2 / Terminal 1 VIP meet-and-assist)",
      "Strict confidentiality and discreet operational conduct",
      "Flexible hourly, full-day, or multi-day itinerary execution",
    ],
    vehicleTypes: ["Mercedes E-Class / S-Class", "Toyota Camry Hybrid", "Toyota Innova Crysta / Hycross"],
    idealFor: ["C-Suite Executives", "Board Delegations", "High-Profile Visiting Dignitaries", "Investor Summits"],
    badge: "Executive Class",
    iconName: "Crown",
  },
  {
    id: "point-to-point-transfers",
    slug: "corporate-pickup-and-drop",
    title: "Point-to-Point & Airport Transfers",
    shortTagline: "Reliable single and on-demand corporate transit across Mumbai & MMR.",
    overview: "Reliable, pre-scheduled corporate transfers connecting corporate hubs (BKC, Lower Parel, Powai, Vikhroli, Andheri MIDC, Navi Mumbai) with Chhatrapati Shivaji Maharaj International Airport (CSMIA) and key business destinations.",
    keyBenefits: [
      "Dedicated flight tracking and buffer scheduling for airport arrivals",
      "Fixed corporate billing eliminating driver surge pricing and cash transactions",
      "Luggage assistance and direct terminal curb pickup",
      "Reliable inter-facility transit between Mumbai branch offices",
    ],
    vehicleTypes: ["Executive Sedans", "Premium MPVs"],
    idealFor: ["Business Travelers", "Visiting Consultants", "Client Office Commutes"],
    iconName: "PlaneTakeoff",
  },
  {
    id: "flexible-hiring-models",
    slug: "hourly-monthly-yearly-hiring",
    title: "Flexible Corporate Hiring Models",
    shortTagline: "Hourly, monthly, or annual vehicle retainers customized to your financial model.",
    overview: "Corporate mobility contracts structured around how your business operates: from 8-hour / 80-km day rentals to dedicated monthly vehicle retainers and multi-year corporate mobility partnerships.",
    keyBenefits: [
      "Hourly corporate packages for visiting executives and site inspections",
      "Dedicated monthly retainers with dedicated vehicle and assigned chauffeur",
      "Annual master service agreements (MSAs) with volume pricing benefits",
      "Seamless billing integration with GST-compliant corporate invoices",
    ],
    vehicleTypes: ["Full Fleet Range Available"],
    idealFor: ["Project-Based Teams", "Long-Term Executive Deployments", "Annual Facility Transport"],
    badge: "Contract Flexibility",
    iconName: "CalendarRange",
  },
];

export const FLEET_TIERS: VehicleTier[] = [
  {
    id: "executive-sedan",
    category: "Executive Sedans",
    tagline: "Distinguished comfort and quiet elegance for leadership mobility.",
    typicalModels: ["Mercedes-Benz E-Class", "Toyota Camry Hybrid", "Executive Class Sedans"],
    historicalPrecedents: ["Tata Indigo", "Premium Sedans"],
    capacity: {
      passengers: "3 - 4 Passengers",
      luggage: "2 Large + 2 Cabin Bags",
    },
    highlights: [
      "Plush leather seating with ergonomic legroom",
      "Whisper-quiet cabin acoustics for calls and mobile productivity",
      "Dual-zone climate control & rear AC vents",
      "Suit & laptop bag dedicated trunk space",
      "Mobile device charging docks & bottled water amenities",
    ],
    corporateUseCases: ["C-Suite & Managing Director Commute", "Client Meetings", "Airport VIP Transfers"],
    imageSrc: "/images/fleet/executive-sedan.jpg",
    imageAlt: "Executive corporate sedan with professional chauffeur outside Mumbai corporate tower",
  },
  {
    id: "premium-mpv",
    category: "Premium Multi-Utility Vehicles (MPVs)",
    tagline: "The benchmark for executive group mobility and corporate delegation travel.",
    typicalModels: ["Toyota Innova Crysta", "Toyota Innova Hycross", "Premium 6/7 Seater MPVs"],
    historicalPrecedents: ["Mahindra Xylo", "Chevrolet Tavera", "Toyota Innova (Original Generation)"],
    capacity: {
      passengers: "6 - 7 Passengers",
      luggage: "4 Large Suitcases + Hand Baggage",
    },
    highlights: [
      "Captain-seat configuration with armrests and ample recline",
      "High roofline and generous headroom for extended travel across Mumbai traffic",
      "Independent rear temperature regulation",
      "Robust highway and city ride stability",
      "Exceptional luggage flexibility for multi-passenger airport transits",
    ],
    corporateUseCases: ["Executive Delegations", "Inter-Office Team Transit", "Multi-Passenger Airport Shuttles"],
    imageSrc: "/images/fleet/premium-mpv.jpg",
    imageAlt: "Premium corporate MPV parked outside Mumbai technology park",
  },
  {
    id: "workforce-coach",
    category: "Corporate Shuttles & Minibuses",
    tagline: "High-efficiency, group employee transit engineered for enterprise routes.",
    typicalModels: ["Force Urbania Executive", "13 - 26 Seater Luxury Coaches", "Corporate Tempo Shuttles"],
    historicalPrecedents: ["Minibuses & High-Capacity Shuttles (Referenced since 2000)"],
    capacity: {
      passengers: "13 - 26 Passengers",
      luggage: "Overhead Racks + Dedicated Rear Storage",
    },
    highlights: [
      "High-back pushback push-cushion seats with individual seatbelts",
      "Panoramic tinted windows with heat-rejecting film",
      "Ducted roof air conditioning across all seating rows",
      "First aid kit, emergency exit doors, and fire safety equipment",
      "Broad central aisle for rapid, comfortable boarding and alighting",
    ],
    corporateUseCases: ["BPO & IT Campus Roster Routes", "Shift-Change Transport", "Corporate Offsites & Events"],
    imageSrc: "/images/fleet/corporate-shuttle.jpg",
    imageAlt: "Executive corporate shuttle minibus with luxury passenger seating in Mumbai",
  },
  {
    id: "economy-staff-cab",
    category: "Economy Corporate Commute Cabs",
    tagline: "Cost-effective, dependable daily transit for operations and field personnel.",
    typicalModels: ["Maruti Suzuki Dzire", "Hyundai Aura", "Compact Corporate Sedans"],
    historicalPrecedents: ["Tata Indica", "Tata Indigo CS (Historical fleet foundation)"],
    capacity: {
      passengers: "4 Passengers",
      luggage: "2 Medium Bags",
    },
    highlights: [
      "Optimized fuel efficiency providing attractive per-kilometer corporate tariffs",
      "Clean, spotless, well-maintained interiors with daily sanitation checks",
      "Chauffeurs thoroughly familiar with suburban Mumbai residential pick-up points",
      "Standard air-conditioned comfort",
      "High vehicle availability across suburban clusters",
    ],
    corporateUseCases: ["Single Pickup and Drop Staff Requirements", "Daily Operations Teams", "Field Support Personnel"],
    imageSrc: "/images/fleet/economy-sedan.jpg",
    imageAlt: "Compact corporate economy commute sedan for Mumbai daily office transportation",
  },
];

export const OPERATIONAL_PILLARS: OperationalPillar[] = [
  {
    id: "punctuality",
    title: "Route Governance & Punctuality",
    metric: "99.2%",
    description: "In corporate Mumbai, a 15-minute delay cascades through business operations. We enforce strict buffer scheduling and suburban corridor route planning.",
    points: [
      "Advance route scouting for ongoing metro construction and monsoon chokepoints",
      "Pre-shift chauffeur check-in protocols 45 minutes prior to scheduled pickup",
      "Standby replacement vehicles stationed near major business clusters",
    ],
  },
  {
    id: "compliance",
    title: "Complete Vehicle & Statutory Compliance",
    metric: "100%",
    description: "Full regulatory adherence protecting corporate clients from liability and ensuring passenger peace of mind.",
    points: [
      "Valid commercial permits (T-Permits), fitness certificates, and comprehensive insurance",
      "Strict zero-tolerance policy on vehicle age and mechanical wear",
      "Routine mechanical audits covering braking, tires, and suspension systems",
    ],
  },
  {
    id: "chauffeurs",
    title: "Vetted & Professional Chauffeurs",
    metric: "Verified",
    description: "Our chauffeurs represent your corporate standards. Every driver undergoes background scrutiny and defensive driving training.",
    points: [
      "Identity verification, address checks, and valid commercial licensing",
      "Etiquette, defensive driving, and courteous passenger conduct training",
      "Sobriety checks and strict adherence to zero-distraction driving rules",
    ],
  },
  {
    id: "safety-protocols",
    title: "Dedicated Women's Safety & Night Shift Care",
    metric: "Protected",
    description: "Standardized protocols for enterprise BPO and 24/7 IT operations to protect every employee traveling during non-standard hours.",
    points: [
      "Drop confirmation protocols for female employees until safely inside premises",
      "First-pickup / last-drop escort guidelines in compliance with corporate norms",
      "Direct 24/7 supervisor hotline for passengers and corporate facility managers",
    ],
  },
];

export const MUMBAI_CORRIDORS: MumbaiCorridor[] = [
  {
    id: "vikhroli-powai",
    name: "Vikhroli, Powai & Kanjurmarg Corridor",
    region: "Central",
    majorHubs: ["Kailas Business Park (Our Office)", "Hiranandani Business Park Powai", "LBS Marg Tech Hubs", "Godrej One"],
    routeFocus: "Central hub operations with immediate dispatch capabilities across the Eastern Express Highway and JVLR.",
  },
  {
    id: "bkc-central",
    name: "Bandra Kurla Complex (BKC) & Lower Parel",
    region: "Western",
    majorHubs: ["BKC Financial District", "One BKC", "Senapati Bapat Marg", "Kamala Mills & Peninsula Corporate Park"],
    routeFocus: "High-density executive transit, VIP delegation transfers, and financial sector leadership mobility.",
  },
  {
    id: "andheri-seepz",
    name: "Andheri East, SEEPZ & MIDC Corridor",
    region: "Western",
    majorHubs: ["SEEPZ Special Economic Zone", "MIDC Andheri East", "CSMIA International Airport (T2)", "Marol Tech Parks"],
    routeFocus: "Airport transit, 24/7 BPO and IT operations, and international corporate guest logistics.",
  },
  {
    id: "navi-mumbai",
    name: "Navi Mumbai Tech Corridor (Airoli & Mahape)",
    region: "Harbour / Trans-Thane",
    majorHubs: ["Mindspace Airoli", "Millennium Business Park Mahape", "Turbhe / Vashi Commercial Nodes", "Belapur CBD"],
    routeFocus: "High-capacity employee shuttle transit and shift roster logistics connecting Mumbai suburbs to Navi Mumbai tech parks.",
  },
  {
    id: "thane-suburbs",
    name: "Thane & Ghodbunder Road Corridor",
    region: "Central",
    majorHubs: ["Wagle Industrial Estate", "Ghodbunder Road IT Campuses", "Eastern Express Arteries"],
    routeFocus: "Daily workforce commuting solutions bridging Thane residential zones with Mumbai commercial centers.",
  },
  {
    id: "south-mumbai",
    name: "South Mumbai Historic CBD",
    region: "South Mumbai",
    majorHubs: ["Nariman Point", "Fort Commercial Hub", "Cuffe Parade / World Trade Centre"],
    routeFocus: "Executive chauffeur services, corporate legal delegation transit, and institutional transport.",
  },
];

export const HISTORICAL_CLIENTS: HistoricalClient[] = [
  { name: "Accenture", logoFilename: "accenture.png", industry: "Global Technology & Consulting", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "Bharti-AXA", logoFilename: "bharti-axa.png", industry: "Banking & Financial Services", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "eClinicalWorks", logoFilename: "e-clinical-works.png", industry: "Healthcare IT & Enterprise Software", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "Duck Creek", logoFilename: "duck-creek.png", industry: "Enterprise Insurance Software", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "JLT (Jardine Lloyd Thompson)", logoFilename: "jlt.png", industry: "Insurance & Risk Consultancy", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "Integreon", logoFilename: "integreon.png", industry: "Legal Knowledge & Business Solutions", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "Bizmatics", logoFilename: "bizmatics.png", industry: "Clinical Software & Practice Management", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "Total Talent Solutions", logoFilename: "total-talent-solutions.png", industry: "Human Capital Management", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "Secure Source Technologies", logoFilename: "secure-source-technologies.png", industry: "Information Security Solutions", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "Zenta", logoFilename: "Zenta.png", industry: "BPO & Mortgage Processing (Historical Client)", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "NCO", logoFilename: "NCO.png", industry: "Business Process Outsourcing (Historical Client)", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
  { name: "Vivid", logoFilename: "Vivid.png", industry: "Enterprise Digital Services (Historical Client)", isVerifiedHistoricalRecord: true, needsNdaVerificationBeforeAdCampaign: true },
];

export const COMPANY_HERITAGE = {
  foundingYear: 2000,
  headquarters: "Kailas Business Park, Vikhroli West, Mumbai",
  mission: "To establish a benchmark in corporate passenger logistics through cutting-edge route planning, an uncompromising professional outlook, and dependable, time-honored deliverables.",
  vision: "To be recognized as India's preferred passenger logistics and corporate fleet partner through safe, timely, and cost-effective travel solutions.",
  values: "Our constant endeavor is to keep our passenger employees smiling, our operational partners thriving, and our corporate clients confident in our dependable relationship experience.",
  story: [
    "Founded in 2000 in Mumbai, Milind Travels emerged during the historic expansion of India's corporate, IT, and BPO sectors. As multinational corporations set up 24/7 global operations across Mumbai, the need for disciplined, safe, and punctual employee transportation became critical to organizational success.",
    "Over 24+ years of continuous service, Milind Travels transitioned from individual passenger transport into an integrated corporate fleet logistics company. Headquartered in Kailas Business Park, Vikhroli West, our central location provides rapid access across Mumbai's commercial arteries—from BKC and Lower Parel to Powai, Andheri SEEPZ, and the Navi Mumbai tech corridors.",
    "Today, we manage customized transportation solutions for corporate organizations ranging from fast-growing startups to multinational enterprises, handling single pickup-and-drop requirements, scheduled shift rosters, dedicated fleet management, and executive luxury car rentals.",
  ],
};

export const FREQUENT_QUESTIONS = [
  {
    q: "How does Milind Travels structure corporate staff transportation contracts?",
    a: "We offer tailored Master Service Agreements (MSAs) based on your organization's specific shift timings, employee headcount, route density, and preferred vehicle tier. Contracts can be structured as monthly fixed retainers, per-trip roster billing, or hybrid arrangements with transparent fuel escalation indices.",
  },
  {
    q: "Can you accommodate 24/7 rotational shifts for BPOs and tech campuses?",
    a: "Yes. Our core operational capability is synchronized passenger logistics for round-the-clock shift rotations. We deploy pre-planned nodal routes and door-to-door pickups with dedicated supervisors monitoring late-night and early-morning employee movements.",
  },
  {
    q: "What safety protocols are maintained for night-shift female employees?",
    a: "We adhere strictly to corporate safety guidelines: female passengers are never picked up first or dropped off last unless accompanied by an authorized security guard or approved colleague. Drivers verify safe entry into premises before proceeding, and our operations desk tracks route completion.",
  },
  {
    q: "What areas across Mumbai and MMR do you cover?",
    a: "We cover the entire Mumbai Metropolitan Region (MMR): South Mumbai (Nariman Point, Fort), Western Suburbs (BKC, Lower Parel, Andheri MIDC, SEEPZ, Goregaon, Borivali), Central Suburbs (Vikhroli, Powai, Kanjurmarg, Ghatkopar, Mulund), Thane (Wagle Estate, Ghodbunder), and Navi Mumbai (Airoli, Mahape, Vashi, Belapur).",
  },
  {
    q: "How can a company request a corporate fleet proposal or tariff sheet?",
    a: "You can use our interactive proposal builder on this website, call our corporate desk directly at +91 92234 31020, or email your employee headcount and route locations to mumbai@milindtravels.com. Our operations team prepares customized proposals within 24 business hours.",
  },
];
