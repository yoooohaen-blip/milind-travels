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
  tenure: string;
  highlight?: string;
  isVerifiedHistoricalRecord: boolean;
  needsNdaVerificationBeforeAdCampaign: boolean;
}

export interface CompanyDirector {
  id: string;
  name: string;
  role: string;
  title: string;
  experience: string;
  bio: string;
  focus: string;
  keyContributions: string[];
  quote?: string;
  imageSrc?: string;
}

export const SITE_METADATA = {
  name: "Milind Travels Private Limited",
  brandName: "Milind Travels",
  legalName: "Milind Travels Private Limited",
  cin: "U49223MH2025PTC446195",
  tagline: "Enterprise Corporate Transportation & Fleet Logistics",
  foundedYear: 2000,
  yearsOfExperience: 24,
  location: "Mumbai, Maharashtra, India",
  siteUrl: "https://www.milindtravels.com",
};

export const DIRECTORS: CompanyDirector[] = [
  {
    id: "milind-phodkar",
    name: "Milind Prabhakar Phodkar",
    role: "Founder & Managing Director",
    title: "Director",
    imageSrc: "/images/directors/milind-phodkar.jpg",
    experience: "24+ Years of Industry Leadership",
    bio: "Founded Milind Travels in 2000, building enduring passenger mobility partnerships with leading multinationals, IT enterprises, and financial institutions across Mumbai. Oversees corporate governance, strategic fleet partnerships, and our commitment to operational integrity.",
    focus: "Strategic Corporate MSAs, Governance & Enterprise Partnerships",
    keyContributions: [
      "Founded the organization in 2000 based on punctual and safe corporate mobility",
      "Pioneered long-term corporate mobility contracts with Fortune 500 & BFSI leaders",
      "Steered continuous business growth and the corporate incorporation into Milind Travels Private Limited",
    ],
    quote: "Our founding principle remains unaltered: delivering more than what is promised with absolute dependability and passenger safety.",
  },
  {
    id: "sarvesh-phodkar",
    name: "Sarvesh Milind Phodkar",
    role: "Director — Operations & Fleet Technology",
    title: "Director",
    experience: "Corporate Fleet Operations & Client Logistics",
    bio: "Directs operational route execution, driver compliance frameworks, ad-hoc fleet dispatch, and connected client service management across the Mumbai Metropolitan Region.",
    focus: "Fleet Operations, Rapid Ad-Hoc Deployment & Connected Client Experience",
    keyContributions: [
      "Architected dedicated response desk for ad-hoc connected client requirements",
      "Engineered automated shift roster dispatch and night-shift safety verification",
      "Standardized corporate fleet modernization with BS-VI compliance and executive tiers",
    ],
    quote: "Modern corporate transit requires technological precision and human dedication. Every connected client deserves flawless, on-time execution.",
  },
];

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
    title: "Registered Office (Pvt. Ltd. Entity)",
    line1: "A-808, Kailas Business Park",
    line2: "Veer Savarkar Marg, Parksite",
    area: "Vikhroli West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400079",
    statusNote: "Official Registered Office under ROC Mumbai | CIN: U49223MH2025PTC446195",
    fullAddress: "A-808, Kailas Business Park, Veer Savarkar Marg, Parksite, Vikhroli West, Mumbai - 400079, Maharashtra",
  },
  operatingHours: {
    contractedOperations: "24/7/365 Dedicated Route Dispatch for Corporate Clients",
    corporateOffice: "Monday – Saturday: 9:00 AM – 8:00 PM IST",
  },
};

export const OUR_COMMITMENT =
  "We strive to deliver safe, punctual, and comfortable transportation services, backed by a diverse fleet ranging from hatchbacks and sedans to SUVs and premium vehicles.";

export const FLEET_STRENGTH = {
  ownedVehicles: "80+",
  attachedVehicles: "Approximately 500",
  totalFleet: "580+",
  vehicleTypes: ["Hatchbacks", "Sedans", "SUVs", "Premium Vehicles", "Corporate Shuttles & Minibuses"],
  summary:
    "Today, we operate a diverse fleet comprising 80+ owned vehicles and approximately 500 attached vehicles, enabling us to cater to a wide range of corporate transportation requirements. Our fleet includes hatchbacks, sedans, SUVs, and premium vehicles to meet the varied needs of our clients.",
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "staff-transportation",
    slug: "employee-staff-transportation",
    title: "Employee / Staff Transportation",
    shortTagline: "Reliable employee transportation services for IT companies, BPOs, call centres, banking institutions, and other corporate organisations.",
    overview: "Milind Travels Private Limited offers reliable, flexible, and efficient transportation solutions tailored to the diverse requirements of corporate clients. Our 24×7 operational capabilities support employees working in general, rotational, and night shifts.",
    keyBenefits: [
      "24×7 operational capabilities supporting general, rotational, and night shifts",
      "Supervisors stationed on each client site to monitor schedules and live track",
      "Strict female employee safe-entry and night-shift escort compliance",
      "Comprehensive coverage across Mumbai's Western, Eastern, and Harbour Zones",
      "Disciplined, background-verified chauffeurs with zero-distraction mandate",
    ],
    vehicleTypes: ["Hatchbacks", "Sedans", "SUVs (Innova Class)", "13-26 Seater Corporate Shuttles"],
    idealFor: ["IT & Software Companies", "Banking & Financial Institutions", "Business Process Outsourcing (BPO)", "Call Centres & Corporate Campuses"],
    badge: "Primary Corporate Solution",
    iconName: "BusFront",
  },
  {
    id: "ad-hoc-duty",
    slug: "ad-hoc-transportation-services",
    title: "Ad Hoc Transportation Services",
    shortTagline: "Flexible, on-demand transportation solutions to meet clients' occasional and special travel requirements.",
    overview: "Flexible, on-demand transportation solutions to meet clients' occasional and special travel requirements, including Corporate Events, Corporate Visits, Outstation Business Travel, and Airport Transfers.",
    keyBenefits: [
      "Corporate Events: Transportation arrangements for corporate functions, conferences, seminars, and team outings",
      "Corporate Visits: Dedicated transportation for client meetings, business delegations, official visits, and corporate guests",
      "Outstation Business Travel: Comfortable and dependable cab services for business trips to destinations outside Mumbai",
      "Airport Transfers: Timely pickup and drop services for employees, executives, business guests, and corporate visitors travelling to and from airports",
      "Priority allocation backed by a diverse fleet of hatchbacks, sedans, SUVs, and premium vehicles",
    ],
    vehicleTypes: ["Sedans (Dzire, Aura)", "Premium MPVs & SUVs (Innova Crysta / Hycross)", "Executive Minibuses"],
    idealFor: ["Corporate Events & Seminars", "Client Meetings & Delegations", "Outstation Business Trips", "Airport Executive Transfers"],
    badge: "Flexible On-Demand",
    iconName: "CarFront",
  },
  {
    id: "airport-transfers",
    slug: "airport-transfers-corporate-visits",
    title: "Airport Transfers & Corporate Visits",
    shortTagline: "Timely pickup and drop services for employees, executives, business guests, and corporate visitors travelling to and from airports.",
    overview: "Dedicated airport transfers and executive corporate visit transportation connecting Chhatrapati Shivaji Maharaj International Airport (CSMIA) and key business destinations with reliable, comfortable cabs.",
    keyBenefits: [
      "Timely airport pickup and drop services for employees, executives, and corporate visitors",
      "Dedicated transportation for client meetings, business delegations, and corporate guests",
      "Pre-scheduled meet-and-assist with professional chauffeur decorum",
      "Spotless, climate-controlled cabins with ample luggage capacity",
      "Fixed corporate contract tariffs with zero surge pricing",
    ],
    vehicleTypes: ["Sedans (Dzire, Aura)", "Premium SUVs / MPVs (Innova Crysta / Hycross)", "Premium Vehicles"],
    idealFor: ["Visiting Leadership & Delegations", "Corporate Business Travelers", "Official Client Visits", "C-Suite & Key Guests"],
    badge: "Executive Airport Transit",
    iconName: "Plane",
  },
  {
    id: "custom-packages",
    slug: "corporate-events-outstation-travel",
    title: "Corporate Events & Outstation Travel",
    shortTagline: "Transportation arrangements for corporate functions, conferences, seminars, team outings, and outstation business trips.",
    overview: "Turnkey vehicular logistics for corporate events, annual general meetings, offsite seminars, and team outings, plus dependable outstation cab services for business trips to destinations outside Mumbai.",
    keyBenefits: [
      "End-to-end transport coordination for conferences, corporate summits, and team outings",
      "Comfortable and dependable cab services for business trips to destinations outside Mumbai",
      "Dedicated on-site supervisors managing multi-vehicle event dispatch",
      "Diverse fleet deployment from hatchbacks and sedans to SUVs and premium vehicles",
      "Consolidated monthly invoicing with transparent GST documentation",
    ],
    vehicleTypes: ["Full Fleet Range (Hatchbacks, Sedans, SUVs, Minibuses, Premium Vehicles)"],
    idealFor: ["Corporate Functions & Offsites", "Outstation Business Delegations", "Annual Company Seminars", "Project Team Deployments"],
    badge: "Events & Outstation",
    iconName: "Briefcase",
  },
];

export const FLEET_TIERS: VehicleTier[] = [
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
      "Standard air-conditioned comfort across all routes",
      "High vehicle availability across Western, Eastern, and Harbour Zones",
    ],
    corporateUseCases: ["Single Pickup and Drop Staff Requirements", "Daily Operations Teams", "Field Support Personnel"],
    imageSrc: "/images/fleet/economy-sedan.jpg",
    imageAlt: "Compact corporate economy commute sedan for Mumbai daily office transportation",
  },
  {
    id: "premium-mpv",
    category: "Premium Multi-Utility Vehicles (MPVs & SUVs)",
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
      "Independent rear temperature regulation for passenger comfort",
      "Robust highway and city ride stability for executive transit",
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
    typicalModels: ["13 - 26 Seater Corporate Shuttles", "Executive Minibuses", "Corporate Tempo Travelers"],
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
];

export const OPERATIONAL_PILLARS: OperationalPillar[] = [
  {
    id: "compliance",
    title: "Complete Vehicle & Statutory Compliance",
    metric: "100%",
    description: "Full regulatory adherence protecting corporate clients from liability and ensuring passenger peace of mind.",
    points: [
      "Valid commercial permits (T-Permits), fitness certificates, and comprehensive passenger insurance",
      "Strict zero-tolerance policy on vehicle age and mechanical wear",
      "Routine mechanical audits covering braking, tires, and suspension systems",
    ],
  },
  {
    id: "chauffeurs",
    title: "Vetted & Professional Chauffeurs",
    metric: "5-Point",
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
    metric: "24/7",
    description: "Standardized protocols for enterprise BPO and 24/7 IT operations to protect every employee traveling during non-standard hours.",
    points: [
      "Dedicated supervisors on each client site to monitor schedules and live track",
      "Drop confirmation protocols: chauffeur remains stationary until female employee is safely indoors",
      "First-pickup / last-drop escort guidelines in compliance with corporate norms",
    ],
  },
];

export const MUMBAI_CORRIDORS: MumbaiCorridor[] = [
  {
    id: "western-zone",
    name: "Western Zone",
    region: "Western",
    majorHubs: ["Andheri East & SEEPZ", "Bandra Kurla Complex (BKC)", "Lower Parel & Worli", "Goregaon & Malad IT Parks", "Borivali to Bandra Belt", "CSMIA International Airport"],
    routeFocus: "High-density corporate employee transit, IT/BPO shift rosters, executive business delegations, and 24/7 airport transfers.",
  },
  {
    id: "eastern-zone",
    name: "Eastern Zone",
    region: "Central",
    majorHubs: ["Vikhroli West (Kailas Business Park)", "Powai & Hiranandani Business Park", "Kanjurmarg & Ghatkopar Hubs", "Mulund & LBS Marg Tech Campuses", "Thane (Wagle Estate & Ghodbunder)"],
    routeFocus: "24/7 corporate workforce transport, rotational shift rosters, and central dispatch across the Eastern Express Highway and JVLR.",
  },
  {
    id: "harbour-zone",
    name: "Harbour Zone",
    region: "Harbour / Trans-Thane",
    majorHubs: ["Mindspace Airoli", "Millennium Business Park (MBP) Mahape", "Turbhe & Vashi Commercial Nodes", "Belapur CBD & Nerul", "Navi Mumbai Tech Corridor"],
    routeFocus: "Enterprise shift transportation, high-volume BPO staff shuttles, and inter-city connectivity across Mumbai and Navi Mumbai.",
  },
];

export const HISTORICAL_CLIENTS: HistoricalClient[] = [
  {
    name: "Radius",
    logoFilename: "radius.jpg",
    industry: "Global Corporate Services",
    tenure: "Since 2000 to till date",
    highlight: "Continuous enterprise mobility partnership since our inception in 2000.",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
  {
    name: "eClinicalWorks",
    logoFilename: "e-clinical-works.jpg",
    industry: "Healthcare IT & Enterprise Software",
    tenure: "Since 2006",
    highlight: "Fleet scaled from 5 vehicles to 200+ vehicles before lockdown. Single vendor operated the entire operation.",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
  {
    name: "Accenture",
    logoFilename: "accenture.jpg",
    industry: "Global Technology & Consulting",
    tenure: "Client from 10 years",
    highlight: "10+ years of dependable workforce transit and 24/7 rotational shift management.",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
  {
    name: "Integreon",
    logoFilename: "integreon.jpg",
    industry: "Legal Knowledge & Business Solutions",
    tenure: "Client from 10 years",
    highlight: "10+ years dedicated corporate mobility and employee night-shift escort services.",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
  {
    name: "Bizmatic",
    logoFilename: "bizmatics.png",
    industry: "Healthcare & Enterprise Software",
    tenure: "Client from 10 years",
    highlight: "10+ years trusted transportation partner supporting round-the-clock shift logistics.",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
  {
    name: "Kotak Mahindra Bank",
    logoFilename: "kotak-mahindra-bank.jpg",
    industry: "Banking & Financial Services",
    tenure: "Enterprise Client",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
  {
    name: "MUFG",
    logoFilename: "mufg.jpg",
    industry: "Global Financial Group & Banking",
    tenure: "Enterprise Client",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
  {
    name: "Duck Creek Technologies",
    logoFilename: "duck-creek.jpg",
    industry: "Enterprise Insurance Software",
    tenure: "Corporate Partner",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
  {
    name: "Harris",
    logoFilename: "harris.jpg",
    industry: "Enterprise Technology Solutions",
    tenure: "Corporate Partner",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
  {
    name: "Sembridge",
    logoFilename: "sembridge.jpg",
    industry: "Enterprise Advisory & Operations",
    tenure: "Corporate Partner",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
  {
    name: "Waystone",
    logoFilename: "waystone.jpg",
    industry: "Institutional Governance & Fund Services",
    tenure: "Corporate Partner",
    isVerifiedHistoricalRecord: true,
    needsNdaVerificationBeforeAdCampaign: true,
  },
];

export const COMPANY_HERITAGE = {
  foundingYear: 2000,
  headquarters: "A-808, Kailas Business Park, Vikhroli West, Mumbai",
  journey: {
    established: "April 2000",
    initialFleet: "1 vehicle",
    focus: "Providing cab services to call centres and BPO companies",
    transition: "August 2025",
    legalStatus: "Milind Travels Private Limited",
    summary:
      "Established in April 2000 as a proprietorship firm, Milind Travels began its journey with just one vehicle, providing cab services to call centres and BPO companies. Over the years, through our commitment to reliable service, operational excellence, and customer satisfaction, we have steadily expanded our business and client base. In August 2025, the business transitioned into Milind Travels Private Limited, marking a significant milestone in our growth and strengthening our foundation for future expansion.",
  },
  fleetStrength: {
    ownedVehicles: "80+ owned vehicles",
    attachedVehicles: "Approximately 500 attached vehicles",
    totalFleet: "580+ vehicles",
    composition: "Hatchbacks, sedans, SUVs, and premium vehicles",
    summary:
      "Today, we operate a diverse fleet comprising 80+ owned vehicles and approximately 500 attached vehicles, enabling us to cater to a wide range of corporate transportation requirements. Our fleet includes hatchbacks, sedans, SUVs, and premium vehicles to meet the varied needs of our clients.",
  },
  clientele: [
    "IT and software companies",
    "Banking and financial institutions",
    "Business Process Outsourcing (BPO) companies",
    "Call centres and other corporate organisations",
  ],
  operationalCoverage: [
    "Western Zone",
    "Eastern Zone",
    "Harbour Zone",
  ],
  serviceCommitment:
    "We operate 24 hours a day, 7 days a week, and 365 days a year, ensuring dependable and efficient transportation support for organisations with round-the-clock operational requirements.",
  vision:
    "To be a trusted corporate transportation partner, recognised for our reliability, safety, service quality, and long-standing client relationships.",
  mission:
    "To deliver safe, dependable, and efficient employee transportation solutions through a well-maintained fleet, experienced operational teams, and a customer-focused approach.",
  values:
    "We strive to deliver safe, punctual, and comfortable transportation services, backed by a diverse fleet ranging from hatchbacks and sedans to SUVs and premium vehicles.",
  story: [
    "Established in April 2000 as a proprietorship firm, Milind Travels began its journey with just one vehicle, providing cab services to call centres and BPO companies.",
    "Through our unwavering commitment to reliable service, operational excellence, and customer satisfaction, we steadily expanded our business and client base. By 2006, our partnership with eClinicalWorks scaled from 5 vehicles to over 200 vehicles before lockdown as a single vendor managing the entire operation.",
    "In August 2025, the business transitioned into Milind Travels Private Limited, marking a significant milestone in our growth and strengthening our foundation for future expansion across Mumbai's Western, Eastern, and Harbour Zones.",
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
