export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gemDetails: string;
  category: 'cocktail' | 'daily' | 'wedding';
  image: string;
  tag: string;
}

export interface TimelineStage {
  id: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlightText: string;
}

export interface CraftStage {
  id: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  description: string;
  macroImage: string;
  craftDetail: string;
  technique: string;
}

export interface ShowroomConfig {
  brandTitle: string;
  city: string;
  tagline: string;
  address: {
    line1: string;
    line2: string;
    cityState: string;
    pincode: string;
    country: string;
  };
  contact: {
    phone: string;
    altPhone: string;
    email: string;
    vipConcierge: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
    appointmentsOnly: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  image: string;
}

export const SHOWROOM_DATA: ShowroomConfig = {
  brandTitle: "VASUNDHARA",
  city: "HYDERABAD",
  tagline: "Experience the Pinnacle of High Jewellery Architecture",
  address: {
    line1: "Plot No. 820, Road No. 36",
    line2: "Jubilee Hills",
    cityState: "Hyderabad, Telangana",
    pincode: "500033",
    country: "India",
  },
  contact: {
    phone: "+91 40 2355 8888",
    altPhone: "+91 98490 12345",
    email: "concierge@vasundharajewels.com",
    vipConcierge: "private@vasundharajewels.com",
  },
  hours: {
    weekdays: "10:30 AM – 7:30 PM",
    weekends: "11:00 AM – 7:00 PM",
    appointmentsOnly: "Private Suite Appointments Available Upon Request",
  },
  googleMapsUrl: "https://maps.google.com/?q=Vasundhara+Diamond+Roof+Jubilee+Hills+Hyderabad",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.495204895886!2d78.404285!3d17.436021!2m3!1f0!0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915000000001%3A0x7d6a5e1e1e1e1e1e!2sVasundhara%20Diamond%20Roof!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin",
  image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1600&auto=format&fit=crop",
};

export const COCKTAIL_COLLECTION_DATA: CollectionItem[] = [
  {
    id: "cocktail-01",
    title: "EMERALD NOCTURNE",
    subtitle: "Zambian Emerald & Marquise Solitaires",
    description: "Architectural cocktail statement necklace crafted with intense deep green Zambian emeralds, set amidst a constellation of flawless marquise diamonds.",
    gemDetails: "24.8 ct Emeralds • 14.2 ct VVS1 Diamonds • 18K White Gold",
    category: "cocktail",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    tag: "COCKTAIL SOIRÉE",
  },
  {
    id: "cocktail-02",
    title: "MIDNIGHT ECLIPSE",
    subtitle: "Black Diamond & Brilliant Cut Ring",
    description: "A dramatic evening cocktail ring featuring a rare 8-carat midnight diamond enveloped by micro-paved radiant-cut halo stones.",
    gemDetails: "8.1 ct Black Diamond • 2.4 ct Accent Solitaires • Platinum",
    category: "cocktail",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    tag: "HIGH JEWELLERY",
  },
];

export const DAILY_COLLECTION_DATA: CollectionItem[] = [
  {
    id: "daily-01",
    title: "SOLARIS ESSENCE",
    subtitle: "Minimalist Diamond Line Bracelet",
    description: "Pure light captured in fluid 18k rose gold. Designed for effortless daily elegance, moving seamlessly from daylight meetings to intimate dinners.",
    gemDetails: "4.5 ct Round Brilliant Diamonds • 18K Rose Gold",
    category: "daily",
    image: "https://images.unsplash.com/photo-1611591475179-62cd347a1576?q=80&w=1200&auto=format&fit=crop",
    tag: "EVERYDAY LUXURY",
  },
  {
    id: "daily-02",
    title: "AURA PENDANT",
    subtitle: "Solitaire Floating Diamond Drops",
    description: "An understated floating diamond pendant suspended on a gossamer silk gold chain. The epitome of modern refined simplicity.",
    gemDetails: "1.8 ct Ideal Cut Diamond • 18K Yellow Gold",
    category: "daily",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    tag: "ESSENTIAL REFLECTION",
  },
];

export const CRAFTSMANSHIP_STAGES: CraftStage[] = [
  {
    id: "stone",
    stageNumber: "01",
    title: "THE STONE",
    subtitle: "Geological Perfection & Selection",
    description: "Fewer than 0.1% of global rough diamonds meet Vasundhara standards. Each gem undergoes rigorous spectral analysis for refractive purity and inner fire.",
    macroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    craftDetail: "Refractive Index Analysis & Flawless Inclusion Grading",
    technique: "Spectrographic Selection",
  },
  {
    id: "design",
    stageNumber: "02",
    title: "THE DESIGN",
    subtitle: "Architectural Blueprinting",
    description: "Every jewel begins as a hand-rendered Gouache painting, calculating exact balance, weight distribution, and how light refracts across each facet.",
    macroImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    craftDetail: "Gouache Renderings & 3D Volumetric Proportions",
    technique: "Architectural Draughtsmanship",
  },
  {
    id: "craft",
    stageNumber: "03",
    title: "THE CRAFT",
    subtitle: "Master Metallurgy & Micro-Setting",
    description: "Generational Hyderabad goldsmiths hand-forge platinum and 18K gold backings, individually setting every pave diamond under 40x magnification.",
    macroImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    craftDetail: "Hand-Carved Prongs & Invisible Micro-Pave",
    technique: "Heritage Metallurgy",
  },
  {
    id: "jewel",
    stageNumber: "04",
    title: "THE JEWEL",
    subtitle: "The Living Masterpiece",
    description: "Hand-finished over 300 meticulous hours. A living heirloom of brilliance that captures light and emotion across generations.",
    macroImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    craftDetail: "Mirror-Polished Platinum & Final Brilliance Certification",
    technique: "Heirloom Mastery",
  },
];

export const BRAND_STORY_TIMELINE: TimelineStage[] = [
  {
    id: "beginning",
    stageNumber: "I",
    title: "THE BEGINNING",
    subtitle: "A Vision of Pure Brilliance",
    description: "Vasundhara was founded on a commitment to elevate Indian fine jewellery into architectural art, merging Royal Nizami heritage with contemporary gemological precision.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop",
    highlightText: "Founded on the philosophy of architectural gemology.",
  },
  {
    id: "craft",
    stageNumber: "II",
    title: "THE CRAFT",
    subtitle: "Preserving Hyderabad's Master Goldsmiths",
    description: "Establishing our private atelier in Hyderabad, assembling master artisans proficient in rare Kundan, Jadau, and unheated gemstone settings.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    highlightText: "Mastery handed down through generations of artisans.",
  },
  {
    id: "collection",
    stageNumber: "III",
    title: "THE COLLECTION",
    subtitle: "The Signature Solitaire & Bridal Eras",
    description: "Launching iconic bridal suites and high-jewellery masterpieces featuring rare D-flawless diamonds and certified Zambian emeralds.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    highlightText: "Recognized across India for extraordinary solitaire perfection.",
  },
  {
    id: "legacy",
    stageNumber: "IV",
    title: "THE LEGACY",
    subtitle: "Heirlooms Entrusted to Royal Families",
    description: "Creating bespoke royal wedding trousseaus and red-carpet showpieces cherished as timeless family heirlooms.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1200&auto=format&fit=crop",
    highlightText: "Crafting jewels meant to transcend generations.",
  },
  {
    id: "today",
    stageNumber: "V",
    title: "TODAY",
    subtitle: "The Flagship Jubilee Hills Sanctuary",
    description: "Our world-class Hyderabad showroom stands as an oasis of quiet luxury, featuring private viewing suites and custom design lounges.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    highlightText: "A physical sanctuary of luxury in the heart of Hyderabad.",
  },
  {
    id: "next-chapter",
    stageNumber: "VI",
    title: "THE NEXT CHAPTER",
    subtitle: "Digital High Jewellery Architecture",
    description: "Integrating real-time 3D visualization and global concierge services, ensuring clients worldwide can commission bespoke masterpieces.",
    image: "https://images.unsplash.com/photo-1611591475179-62cd347a1576?q=80&w=1200&auto=format&fit=crop",
    highlightText: "Pioneering the future of high jewellery design.",
  },
];

export const BESPOKE_JEWELLERY_TYPES = [
  "Ring",
  "Necklace",
  "Earrings",
  "Bracelet",
  "Custom",
] as const;
