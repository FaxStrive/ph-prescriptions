export const BUSINESS = {
  name: "PH Prescriptions",
  tagline: "Water That Works for Your Health",
  phone: "772-220-8789",
  phoneTollFree: "888-728-2783",
  phoneEmergency: "772-201-2929",
  email: "info@phprescription.com",
  emailAquapellis: "info@aquapellis.com",
  address: {
    street: "3210 SW 42nd Ave",
    city: "Palm City",
    state: "FL",
    zip: "34990",
    full: "3210 SW 42nd Ave, Palm City, FL 34990",
  },
  url: "https://phprescription.com",
  founded: "2005",
  founderName: "Leo Szymborski",
  warehouseSqFt: "10,000",
  yearsExperience: "40+",
  certifications: ["WQA Certified", "Made in USA"],
  social: {
    facebook: "",
    youtube: "",
  },
} as const;

export const PRODUCTS = [
  {
    name: "Ultimate Purified Drinking System",
    sku: "pH-RO-1100",
    price: "$1,747",
    badge: "#1 Doctor Recommended",
    description: "Our flagship under-sink reverse osmosis drinking system. Removes up to 99% of toxins, re-mineralizes, and infuses molecular hydrogen.",
    slug: "ultimate-purified-drinking-system",
  },
  {
    name: "Finely Filtered Compact Drinking System",
    sku: "pH-UC-700",
    price: "$985",
    badge: "Most Popular",
    description: "Compact, high-performance under-counter filtration system. Non-electric, fits existing plumbing.",
    slug: "compact-drinking-system",
  },
  {
    name: "Total Home Premier Restructured Water System",
    sku: "pH-WH-3500-CO",
    price: "$9,244.25",
    badge: "Whole Home",
    description: "Complete whole-home water restructuring. Every tap, every shower, every glass of water — transformed.",
    slug: "total-home-system",
  },
  {
    name: "Total Business Water Cooler (Paddle-Touch)",
    sku: "WC-PP",
    price: "From $2,613.60",
    badge: "Commercial",
    description: "High-capacity hot/cold water cooler with paddle-touch dispensing for offices, restaurants, and facilities.",
    slug: "business-water-cooler",
  },
] as const;

export const DOCTORS = [
  {
    name: "Dr. Mark A. Breiner, DDS",
    credential: "Author of Whole Body Dentistry",
    specialty: "Holistic Dentistry",
  },
  {
    name: "Dr. Debra DeMarta, MD, FACS",
    credential: "Board-Certified Colorectal Surgeon",
    specialty: "Colorectal Surgery",
  },
  {
    name: "Dr. Jerry Tennant, MD",
    credential: "Author of Healing is Voltage",
    specialty: "Integrative Medicine",
  },
  {
    name: "Steve Evans, DDS",
    credential: "Dental Practitioner",
    specialty: "Dentistry",
  },
  {
    name: "Dr. Nathan Bryan, PhD",
    credential: "Molecular Medicine Researcher",
    specialty: "Molecular Hydrogen Research",
  },
  {
    name: "Dr. Josh Axe, DC, DNM, CNS",
    credential: "Clinical Nutritionist",
    specialty: "Natural Medicine",
  },
  {
    name: "Dr. Walter Gil, M.D.",
    credential: "Medical Doctor",
    specialty: "Medicine",
  },
] as const;
