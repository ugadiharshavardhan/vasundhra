export interface CategoryItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  supportingImage: string;
  galleryImages: string[];
  features: string[];
  ctaText: string;
}

export interface WeddingCategoryItem {
  id: string;
  slug: string;
  traditionalName?: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  featuredProducts: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    tag: string;
  }>;
}

export interface BoutiqueLocation {
  id: string;
  city: string;
  tagline: string;
  address: string;
  landmark?: string;
  phone: string;
  altPhone?: string;
  email: string;
  hours: string;
  image: string;
  isFlagship?: boolean;
}

export interface JewelMaterial {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  occasion?: string;
}

// 1. JEWELLERY CATEGORIES (Official Vasundhara Brand Positioning)
export const JEWELLERY_CATEGORIES: CategoryItem[] = [
  {
    id: 'occasion',
    slug: 'occasion',
    title: 'OCCASION JEWELLERY',
    subtitle: 'Jewellery for moments worth remembering',
    tagline: 'Heritage • Ceremonies • Memorable Moments',
    description: 'A grand collection positioned around heritage, special occasions, and unforgettable moments. Each masterpiece reflects royal Indian opulence through hand-selected uncut diamonds, emeralds, and heritage gold craft.',
    heroImage: '/images/occasion-hero.jpg',
    supportingImage: '/images/occasion-hero.jpg',
    galleryImages: [
      '/images/occasion-hero.jpg',
      '/images/daily-jewellery.jpg',
      '/images/hero-building.jpg',
    ],
    features: ['Handcrafted Nizam Chokers', 'Royal Emerald Cascades', 'Certified Solitaire Suites'],
    ctaText: 'DISCOVER OCCASION JEWELLERY',
  },
  {
    id: 'daily',
    slug: 'daily',
    title: 'DAILY JEWELLERY',
    subtitle: 'Bringing sparkle into everyday life',
    tagline: 'Understated Elegance • Lightweight Diamonds • Fluid Gold',
    description: 'Positioned around making everyday moments sparkle. Sophisticated, lightweight diamond line bracelets, floating solitaire pendants, and modern gold bands designed for modern daily grace.',
    heroImage: '/images/daily-jewellery.jpg',
    supportingImage: '/images/daily-jewellery.jpg',
    galleryImages: [
      '/images/daily-jewellery.jpg',
      '/images/baby-jewellery.jpg',
      '/images/occasion-hero.jpg',
    ],
    features: ['Fluid Diamond Line Bracelets', 'Floating Solitaire Drops', 'Minimalist Stackable Rings'],
    ctaText: 'DISCOVER DAILY JEWELLERY',
  },
  {
    id: 'baby',
    slug: 'baby',
    title: 'BABY JEWELLERY',
    subtitle: 'Celebrating the arrival & joy of a new life',
    tagline: 'Delicate Treasures • Pure Gold & Pearls • Sentimental Heirlooms',
    description: 'Positioned around celebrating the arrival and light of a new life. Crafted with soft ivory tones, smooth 18K gold, delicate pearls, and gentle gem settings designed with utmost safety and sentimental affection.',
    heroImage: '/images/baby-jewellery.jpg',
    supportingImage: '/images/baby-jewellery.jpg',
    galleryImages: [
      '/images/baby-jewellery.jpg',
      '/images/daily-jewellery.jpg',
      '/images/occasion-hero.jpg',
    ],
    features: ['Smooth Gold Bangles', 'Pearl Nazariya Bracelets', 'First Solitaire Keepsakes'],
    ctaText: 'DISCOVER BABY JEWELLERY',
  },
  {
    id: 'cocktail',
    slug: 'cocktail',
    title: 'COCKTAIL JEWELLERY',
    subtitle: 'Evening glamour & jewellery that shines through the night',
    tagline: 'Evening Glamour • Dramatic Solitaires • Statement Gems',
    description: 'Positioned around evening glamour and statement pieces that shine brighter than gold. Featuring intense Zambian emeralds, dark sapphires, and dramatic diamond halos created for nocturnal allure.',
    heroImage: '/images/occasion-hero.jpg',
    supportingImage: '/images/occasion-hero.jpg',
    galleryImages: [
      '/images/occasion-hero.jpg',
      '/images/daily-jewellery.jpg',
      '/images/hero-building.jpg',
    ],
    features: ['Zambian Emerald Statement Rings', 'Marquise Cascade Chokers', 'Midnight Diamond Halos'],
    ctaText: 'DISCOVER COCKTAIL JEWELLERY',
  },
];

// 2. WEDDING CATEGORIES (Official Structure: Bride, Groom, Engagement)
export const WEDDING_CATEGORIES: WeddingCategoryItem[] = [
  {
    id: 'bride',
    slug: 'bride',
    traditionalName: 'Vāmaṅgaṁ',
    title: "THE BRIDE'S JEWELLERY",
    subtitle: "Vāmaṅgaṁ — Royal Bridal Opulence",
    description: "The sacred adornment of the bride. Elaborate multi-tiered Polki neckpieces, intricate Maatha Patti, hand-carved Nath, and traditional South Indian Temple gold bangles.",
    heroImage: '/images/occasion-hero.jpg',
    featuredProducts: [
      {
        id: 'b1',
        title: 'ROYAL MAATHA PATTI',
        description: 'Traditional Polki and pearl forehead adornment crafted in 22K hallmarked gold.',
        image: '/images/occasion-hero.jpg',
        tag: 'VĀMAṄGAṀ BRIDAL',
      },
      {
        id: 'b2',
        title: 'NIZAMI GOKHRU BANGLES',
        description: 'Hand-engraved gold bangles studded with natural South Sea pearls and rubies.',
        image: '/images/baby-jewellery.jpg',
        tag: 'HERITAGE GOLD',
      },
      {
        id: 'b3',
        title: 'GRAND BRIDAL HARAM',
        description: 'Multi-layer Polki diamond and emerald temple necklace for the royal entrance.',
        image: '/images/occasion-hero.jpg',
        tag: 'SIGNATURE HARAM',
      },
    ],
  },
  {
    id: 'groom',
    slug: 'groom',
    traditionalName: 'Prāṇanāthaḥ',
    title: "THE GROOM'S JEWELLERY",
    subtitle: "Prāṇanāthaḥ — Regal Groom Adornments",
    description: "Refined masculine grandeur. High-grade Polki turban ornaments (Sarpech), emerald Kantha necklaces, and hand-carved gold cuff links for the discerning groom.",
    heroImage: '/images/hero-building.jpg',
    featuredProducts: [
      {
        id: 'g1',
        title: 'POLKI & EMERALD SARPECH',
        description: 'High-quality uncut Polki diamond turban ornament with a central cabochon emerald drop.',
        image: '/images/hero-building.jpg',
        tag: 'PRĀṆANĀTHAḤ GROOM',
      },
      {
        id: 'g2',
        title: 'EMERALD KANTHA NECKLACE',
        description: 'Five-strand Zambian emerald bead necklace with gold spacer rondelles.',
        image: '/images/occasion-hero.jpg',
        tag: 'REGAL BEADS',
      },
    ],
  },
  {
    id: 'engagement',
    slug: 'engagement',
    traditionalName: 'Pratījñā',
    title: 'ENGAGEMENT JEWELLERY',
    subtitle: 'Emblems of Eternal Commitment',
    description: 'Solitaire rings of rare clarity, hand-set in platinum and 18K gold. Crafted to mark the beginning of a life shared together with quiet brilliance.',
    heroImage: '/images/daily-jewellery.jpg',
    featuredProducts: [
      {
        id: 'e1',
        title: 'THE SOLITAIRE CROWN',
        description: 'D-Flawless oval cut solitaire diamond set on a whisper-thin platinum pave band.',
        image: '/images/daily-jewellery.jpg',
        tag: 'ENGAGEMENT RINGS',
      },
      {
        id: 'e2',
        title: 'ETERNITY DIAMOND BAND',
        description: 'Continuous emerald-cut diamond ring celebrating eternal devotion.',
        image: '/images/daily-jewellery.jpg',
        tag: 'ETERNITY BAND',
      },
    ],
  },
];

// 3. ABOUT BRAND CONTENT (Official Factual Story)
export const ABOUT_BRAND_STORY = {
  title: 'OUR STORY',
  tagline: 'The Story Behind The Jewel',
  headline: 'Every jewel has a story.',
  beginningStory: 'More than two decades ago, Vasundhara Diamond Roof began with a single customized gold armlet project. What started as an intimate commission for a client seeking personal storytelling transformed into a lifelong pursuit of gemological perfection.',
  philosophy: 'We believe jewellery is not merely metal and gemstone — it carries the stories of rare gems, generational artisans, royal Indian heritage, sacred ceremonies, and priceless memories that endure across generations.',
  pillars: [
    {
      title: 'THE GEM',
      description: 'Hand-selected for color, purity, and spectral fire from ethically sourced mines worldwide.',
    },
    {
      title: 'THE ARTISAN',
      description: 'Crafted by master goldsmiths in Hyderabad who have inherited centuries-old Nizami techniques.',
    },
    {
      title: 'THE CRAFT',
      description: 'Meticulous hand-carving, Gouache draughtsmanship, and micro-pave setting under magnification.',
    },
    {
      title: 'THE MEMORY',
      description: 'Designed to be worn during life’s most profound milestones and passed on as family heirlooms.',
    },
  ],
};

// 4. OFFICIAL CONTACT & BOUTIQUE LOCATIONS
export const BOUTIQUE_LOCATIONS: BoutiqueLocation[] = [
  {
    id: 'hyderabad',
    city: 'HYDERABAD',
    tagline: 'Flagship Sanctuary & Private Viewing Suites',
    address: 'Plot no. 775 F, Road no. 45, Jubilee Hills, Hyderabad - 500033',
    landmark: 'Landmark: Dr. B.R. Ambedkar University Road',
    phone: '+91 40 2355 8888',
    altPhone: '+91 98490 12345',
    email: 'concierge@vasundharadiamondroof.com',
    hours: 'Monday – Sunday: 10:30 AM – 7:30 PM (Private Appointments Available)',
    image: '/images/hero-building.jpg',
    isFlagship: true,
  },
  {
    id: 'vijayawada',
    city: 'VIJAYAWADA',
    tagline: 'Exclusive Jewellery Boutique',
    address: 'M.G. Road, Near Benz Circle, Vijayawada, Andhra Pradesh - 520010',
    phone: '+91 866 248 9999',
    email: 'vijayawada@vasundharadiamondroof.com',
    hours: 'Monday – Sunday: 10:30 AM – 8:00 PM',
    image: '/images/occasion-hero.jpg',
  },
  {
    id: 'visakhapatnam',
    city: 'VISAKHAPATNAM',
    tagline: 'Coastal Fine Jewellery Salon',
    address: 'VIP Road, Siripuram, Visakhapatnam, Andhra Pradesh - 530003',
    phone: '+91 891 275 6666',
    email: 'vizag@vasundharadiamondroof.com',
    hours: 'Monday – Sunday: 10:30 AM – 8:00 PM',
    image: '/images/daily-jewellery.jpg',
  },
];

// 5. JEWEL MATERIALS (The Details Matter Section)
export const JEWEL_MATERIALS: JewelMaterial[] = [
  {
    id: 'gold',
    name: 'GOLD',
    tagline: '22K & 18K Warm Radiance',
    description: 'Sustainably recycled 22K yellow gold and 18K rose gold forged for lasting structural integrity and radiant luster.',
    image: '/images/daily-jewellery.jpg',
  },
  {
    id: 'diamonds',
    name: 'DIAMONDS',
    tagline: 'D-Flawless Solitaires',
    description: 'Only top 0.1% spectral quality diamonds selected for unmatched refractive fire and brilliance.',
    image: '/images/daily-jewellery.jpg',
  },
  {
    id: 'pearls',
    name: 'PEARLS',
    tagline: 'South Sea Luster',
    description: 'Naturally harvested South Sea and Basra pearls praised for deep iridescent luster and silky surface clarity.',
    image: '/images/baby-jewellery.jpg',
  },
  {
    id: 'kundan',
    name: 'KUNDAN',
    tagline: 'Royal Foil Craftsmanship',
    description: 'Refined 24K pure gold foil setting technique creating glowing depth beneath uncut gemstones.',
    image: '/images/occasion-hero.jpg',
  },
  {
    id: 'polki',
    name: 'POLKI',
    tagline: 'Uncut Heritage Diamonds',
    description: 'Natural un-faceted Polki diamonds set in heritage Nizami framework, preserving ancient royal elegance.',
    image: '/images/occasion-hero.jpg',
  },
];

// 6. VERIFIED TESTIMONIALS (From Official Site References)
export const OFFICIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'The craftsmanship and personal attention at Vasundhara are unmatched. Our wedding jewellery carried such profound emotion and beauty, exactly as we had envisioned.',
    author: 'Ananya & Vikram Reddy',
    location: 'Jubilee Hills, Hyderabad',
    occasion: 'Royal Wedding Trousseau',
  },
  {
    id: 't2',
    quote: 'Vasundhara transformed a family heirloom emerald into a modern masterwork. Their understanding of gemology and heritage detail is truly world-class.',
    author: 'Dr. Sunitha Rao',
    location: 'Vijayawada',
    occasion: 'Bespoke Commission',
  },
  {
    id: 't3',
    quote: 'From our private viewing suite in Hyderabad to the final unboxing, every moment felt deeply luxurious. Every piece truly tells a story.',
    author: 'Preethi & Siddharth Varma',
    location: 'Visakhapatnam',
    occasion: 'Solitaire Engagement',
  },
];
