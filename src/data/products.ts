export interface Product {
  id: string;
  name: string;
  category: 'agarbatti' | 'colored' | 'premium' | 'masala' | 'dhoop' | 'cookware';
  subcategory?: string;
  scentProfile?: 'Floral' | 'Woody' | 'Devotional' | 'Resin' | 'Herbal' | 'Fruity' | 'Aquatic' | 'Cookware';
  description: string;
  stickColor?: string;
  colorHex?: string;
  format?: string; // 'Sticks', 'Sticks & Cones', 'Pan / Bowl'
  sizes?: { size: string; price: number; usage: string }[];
  burnTime?: string;
  isPopular?: boolean;
}

export const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'agarbatti', name: 'Standard Agarbatti (25 Scents)' },
  { id: 'colored', name: 'Colored Agarbatti' },
  { id: 'premium', name: 'Premium Collection' },
  { id: 'masala', name: 'Masala Agarbatti' },
  { id: 'dhoop', name: 'Dry Dhoop (Sticks & Cones)' },
  { id: 'cookware', name: 'Frying Bowls & Cookware' },
] as const;

export const STANDARD_AGARBATTI: Product[] = [
  {
    id: 'std-1',
    name: 'Mogra',
    category: 'agarbatti',
    scentProfile: 'Floral',
    description: 'Enchanting sacred jasmine fragrance created to uplift spiritual energy and bring tranquility to home rituals.',
    stickColor: 'Natural Charcoal',
    burnTime: '45-50 Mins',
    isPopular: true
  },
  {
    id: 'std-2',
    name: 'Rudraraksh',
    category: 'agarbatti',
    scentProfile: 'Woody',
    description: 'Deep earthy and sacred woodsy aroma designed for deep meditation, yoga, and prayer concentration.',
    stickColor: 'Natural Charcoal',
    burnTime: '45-50 Mins',
  },
  {
    id: 'std-3',
    name: 'Pandadi',
    category: 'agarbatti',
    scentProfile: 'Herbal',
    description: 'Refreshing herbal leaves infusion with natural cooling notes that purify ambient air.',
    stickColor: 'Natural Charcoal',
    burnTime: '40-45 Mins',
  },
  {
    id: 'std-4',
    name: 'Kasturi',
    category: 'agarbatti',
    scentProfile: 'Devotional',
    description: 'Exotic musk scented incense with rich traditional accords for temple rituals and festive occasions.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
    isPopular: true
  },
  {
    id: 'std-5',
    name: 'Lavender',
    category: 'agarbatti',
    scentProfile: 'Floral',
    description: 'Calming lavender blossom fragrance ideal for stress relief, evening relaxation, and serene atmosphere.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-6',
    name: 'Gulab',
    category: 'agarbatti',
    scentProfile: 'Floral',
    description: 'Timeless Indian rose essence delivering sweet, elegant floral notes for daily puja.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
    isPopular: true
  },
  {
    id: 'std-7',
    name: 'Bharatvasi',
    category: 'agarbatti',
    scentProfile: 'Devotional',
    description: 'Traditional heritage incense blend honoring authentic Indian aromatic craftsmanship.',
    stickColor: 'Natural Charcoal',
    burnTime: '50 Mins',
  },
  {
    id: 'std-8',
    name: 'Wood',
    category: 'agarbatti',
    scentProfile: 'Woody',
    description: 'Rich cedar and teak wood tones creating a warm, grounding ambience.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-9',
    name: 'Darshan',
    category: 'agarbatti',
    scentProfile: 'Devotional',
    description: 'Divine temple blend evoking the sacred presence and serenity of morning prayers.',
    stickColor: 'Natural Charcoal',
    burnTime: '45-50 Mins',
    isPopular: true
  },
  {
    id: 'std-10',
    name: 'Namo',
    category: 'agarbatti',
    scentProfile: 'Devotional',
    description: 'Reverent spiritual formulation crafted for chanting and devotional offering.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-11',
    name: 'Chandan',
    category: 'agarbatti',
    scentProfile: 'Woody',
    description: 'Pure Mysore sandalwood scent bringing timeless peace and divine purity to your space.',
    stickColor: 'Natural Charcoal',
    burnTime: '50 Mins',
    isPopular: true
  },
  {
    id: 'std-12',
    name: 'Gugad',
    category: 'agarbatti',
    scentProfile: 'Resin',
    description: 'Sacred Guggul resin incense with natural antibacterial and air-purifying properties.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-13',
    name: 'Pavitra',
    category: 'agarbatti',
    scentProfile: 'Devotional',
    description: 'Ultra-pure incense formulation crafted to dispel negative vibes and invite positive energy.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-14',
    name: 'Ponds',
    category: 'agarbatti',
    scentProfile: 'Aquatic',
    description: 'Crisp, clean aquatic scent reminiscent of fresh morning water lilies and breeze.',
    stickColor: 'Natural Charcoal',
    burnTime: '40 Mins',
  },
  {
    id: 'std-15',
    name: 'Garden',
    category: 'agarbatti',
    scentProfile: 'Floral',
    description: 'Vibrant bouquet of multi-flower garden blossoms for a cheerful home environment.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-16',
    name: 'Kewda',
    category: 'agarbatti',
    scentProfile: 'Floral',
    description: 'Exotic screwpine (pandanus) floral scent cherished for spiritual ceremonies and grand events.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-17',
    name: 'Loban',
    category: 'agarbatti',
    scentProfile: 'Resin',
    description: 'Natural Frankincense benzoin resin aroma known to clear heavy energies and soothe minds.',
    stickColor: 'Natural Charcoal',
    burnTime: '50 Mins',
    isPopular: true
  },
  {
    id: 'std-18',
    name: 'Charlie',
    category: 'agarbatti',
    scentProfile: 'Floral',
    description: 'Modern fine perfume fragrance blend combining subtle spices and elegant florals.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-19',
    name: 'Firdosh',
    category: 'agarbatti',
    scentProfile: 'Devotional',
    description: 'Heavenly oriental aroma carrying sweet, royal, and rich fragrance notes.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-20',
    name: 'Rangili',
    category: 'agarbatti',
    scentProfile: 'Floral',
    description: 'Vibrant festive scent crafted to enhance celebration moods and family gatherings.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-21',
    name: 'Ratrani',
    category: 'agarbatti',
    scentProfile: 'Floral',
    description: 'Night-blooming jasmine essence with intoxicating sweet fragrance notes.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-22',
    name: 'Jasmine',
    category: 'agarbatti',
    scentProfile: 'Floral',
    description: 'Classic pure jasmine flower extracts for a fresh, uplifting sensory experience.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-23',
    name: 'Deshvasi',
    category: 'agarbatti',
    scentProfile: 'Devotional',
    description: 'Authentic Indian blend infused with indigenous herbs and traditional spices.',
    stickColor: 'Natural Charcoal',
    burnTime: '45 Mins',
  },
  {
    id: 'std-24',
    name: 'Dollar',
    category: 'agarbatti',
    scentProfile: 'Devotional',
    description: 'Rich, luxurious perfume formulation designed for lasting fragrance diffusion.',
    stickColor: 'Natural Charcoal',
    burnTime: '50 Mins',
  },
  {
    id: 'std-25',
    name: 'Pineapple',
    category: 'agarbatti',
    scentProfile: 'Fruity',
    description: 'Zesty tropical pineapple fragrance for a sweet, energetic room freshening effect.',
    stickColor: 'Natural Charcoal',
    burnTime: '40 Mins',
  },
];

export const COLORED_AGARBATTI: Product[] = [
  {
    id: 'col-1',
    name: 'Gulab (Pink)',
    category: 'colored',
    scentProfile: 'Floral',
    description: 'Vibrant pink fragranced agarbatti infused with sweet rose essence.',
    stickColor: 'Pink',
    colorHex: '#ec4899',
    burnTime: '45 Mins',
    isPopular: true
  },
  {
    id: 'col-2',
    name: 'Rangili (Golden)',
    category: 'colored',
    scentProfile: 'Floral',
    description: 'Shimmering golden agarbatti carrying a celebratory floral bouquet.',
    stickColor: 'Golden',
    colorHex: '#eab308',
    burnTime: '45 Mins',
  },
  {
    id: 'col-3',
    name: 'Manthan (Blue)',
    category: 'colored',
    scentProfile: 'Devotional',
    description: 'Cool royal blue agarbatti with deep meditative herbal perfume notes.',
    stickColor: 'Blue',
    colorHex: '#3b82f6',
    burnTime: '45 Mins',
  },
  {
    id: 'col-4',
    name: 'Kasturi (Green)',
    category: 'colored',
    scentProfile: 'Devotional',
    description: 'Vibrant green colored stick infused with exotic musk aroma.',
    stickColor: 'Green',
    colorHex: '#22c55e',
    burnTime: '45 Mins',
  },
  {
    id: 'col-5',
    name: 'Vaishnavi (Silver)',
    category: 'colored',
    scentProfile: 'Devotional',
    description: 'Elegant silver coated incense stick carrying sacred temple fragrance.',
    stickColor: 'Silver',
    colorHex: '#94a3b8',
    burnTime: '50 Mins',
    isPopular: true
  },
  {
    id: 'col-6',
    name: 'Deshvasi (Purple)',
    category: 'colored',
    scentProfile: 'Devotional',
    description: 'Royal purple stick with rich oriental spice and floral accents.',
    stickColor: 'Purple',
    colorHex: '#a855f7',
    burnTime: '45 Mins',
  },
  {
    id: 'col-7',
    name: 'Kashi Dhoop (Parrot Green)',
    category: 'colored',
    scentProfile: 'Resin',
    description: 'Parrot green fragranced incense inspired by sacred Kashi ghat rituals.',
    stickColor: 'Parrot Green',
    colorHex: '#84cc16',
    burnTime: '50 Mins',
  },
];

export const PREMIUM_COLLECTION: Product[] = [
  {
    id: 'prem-1',
    name: 'Maruti Gold',
    category: 'premium',
    scentProfile: 'Woody',
    description: 'Handcrafted brown stick with slow-burning rare essential oils and amber notes.',
    stickColor: 'Brown',
    colorHex: '#8b4513',
    burnTime: '60 Mins',
    isPopular: true
  },
  {
    id: 'prem-2',
    name: 'Keshav',
    category: 'premium',
    scentProfile: 'Devotional',
    description: 'Divine brown stick formulation steeped in sacred saffron and sandal essences.',
    stickColor: 'Brown',
    colorHex: '#8b4513',
    burnTime: '60 Mins',
  },
  {
    id: 'prem-3',
    name: 'Mohini',
    category: 'premium',
    scentProfile: 'Floral',
    description: 'Captivating floral and resinous blend for a enchanting aromatic experience.',
    stickColor: 'Brown',
    colorHex: '#8b4513',
    burnTime: '60 Mins',
  },
  {
    id: 'prem-4',
    name: 'Vedant',
    category: 'premium',
    scentProfile: 'Woody',
    description: 'Deep meditative herbal wood aroma for quiet contemplation and yoga.',
    stickColor: 'Brown',
    colorHex: '#8b4513',
    burnTime: '60 Mins',
  },
  {
    id: 'prem-5',
    name: 'Navratna',
    category: 'premium',
    scentProfile: 'Devotional',
    description: 'Nine-scent royal masterwork bringing rich multi-dimensional fragrance notes.',
    stickColor: 'Brown',
    colorHex: '#8b4513',
    burnTime: '65 Mins',
    isPopular: true
  },
  {
    id: 'prem-6',
    name: 'Shikhar',
    category: 'premium',
    scentProfile: 'Woody',
    description: 'Peak elevation aromatic wood blend crafted for long-lasting sillage.',
    stickColor: 'Brown',
    colorHex: '#8b4513',
    burnTime: '60 Mins',
  },
  {
    id: 'prem-7',
    name: 'Sai Gold',
    category: 'premium',
    scentProfile: 'Devotional',
    description: 'Exquisite white/cream stick with soothing milky sandalwood & flower notes.',
    stickColor: 'White / Cream',
    colorHex: '#fef08a',
    burnTime: '60 Mins',
    isPopular: true
  },
];

export const MASALA_AGARBATTI: Product[] = [
  {
    id: 'mas-1',
    name: 'Gugad (White / Cream)',
    category: 'masala',
    scentProfile: 'Resin',
    description: 'Thick, slow-burning natural Guggul resin masala agarbatti crafted with pure binding gums.',
    stickColor: 'White / Cream',
    colorHex: '#fef08a',
    burnTime: '75 Mins',
    isPopular: true
  },
  {
    id: 'mas-2',
    name: 'Loban (Brown)',
    category: 'masala',
    scentProfile: 'Resin',
    description: 'Heavy masala Frankincense incense stick providing intense purifying resinous smoke.',
    stickColor: 'Brown',
    colorHex: '#78350f',
    burnTime: '75 Mins',
    isPopular: true
  },
];

export const DRY_DHOOP: Product[] = [
  {
    id: 'dhoop-1',
    name: 'Gugad Dhoop',
    category: 'dhoop',
    scentProfile: 'Resin',
    description: 'Pure dry Guggul resin formulation available in both Stick and Cone formats.',
    format: 'Sticks & Cones',
    burnTime: '35-40 Mins',
    isPopular: true
  },
  {
    id: 'dhoop-2',
    name: 'Mogra Dhoop',
    category: 'dhoop',
    scentProfile: 'Floral',
    description: 'Rich jasmine flower dry dhoop stick/cone delivering concentrated fragrance.',
    format: 'Sticks & Cones',
    burnTime: '35 Mins',
  },
  {
    id: 'dhoop-3',
    name: 'Chandan Dhoop',
    category: 'dhoop',
    scentProfile: 'Woody',
    description: 'Concentrated sandalwood dry dhoop for deep spiritual atmosphere.',
    format: 'Sticks & Cones',
    burnTime: '40 Mins',
    isPopular: true
  },
  {
    id: 'dhoop-4',
    name: 'Gulab Dhoop',
    category: 'dhoop',
    scentProfile: 'Floral',
    description: 'Sweet rose flower dry dhoop stick/cone for uplifting morning prayers.',
    format: 'Sticks & Cones',
    burnTime: '35 Mins',
  },
  {
    id: 'dhoop-5',
    name: 'Lavender Dhoop',
    category: 'dhoop',
    scentProfile: 'Floral',
    description: 'Relaxing dry lavender dhoop stick/cone ideal for evening purification.',
    format: 'Sticks & Cones',
    burnTime: '35 Mins',
  },
  {
    id: 'dhoop-6',
    name: 'Kapoor Dhoop',
    category: 'dhoop',
    scentProfile: 'Devotional',
    description: 'Camphor-infused dry dhoop formulation for traditional Aarti and havan rituals.',
    format: 'Sticks & Cones',
    burnTime: '35 Mins',
    isPopular: true
  },
  {
    id: 'dhoop-7',
    name: 'Loban Dhoop',
    category: 'dhoop',
    scentProfile: 'Resin',
    description: 'Authentic Frankincense dry dhoop stick/cone to dispel negativity.',
    format: 'Sticks & Cones',
    burnTime: '40 Mins',
  },
];

export const COOKWARE_PRODUCTS: Product[] = [
  {
    id: 'cook-1',
    name: 'Vagariya (Temper Pan)',
    category: 'cookware',
    scentProfile: 'Cookware',
    description: 'Traditional enamel-coated tempering / tadka pan with sturdy handle design.',
    format: 'Tempering Pan',
    sizes: [
      { size: '14 cm (Small)', price: 50, usage: 'Daily small tempering & spices' },
      { size: '16 cm (Large)', price: 60, usage: 'Medium tempering & oil frying' },
    ],
    isPopular: true
  },
  {
    id: 'cook-2',
    name: 'Vadka (Traditional Deep Bowl)',
    category: 'cookware',
    scentProfile: 'Cookware',
    description: 'High-grade porcelain-finish deep serving & cooking bowl available in 4 versatile sizes.',
    format: 'Deep Bowl',
    sizes: [
      { size: '20 cm (Small)', price: 100, usage: 'Personal serving & small dishes' },
      { size: '26 cm (Medium)', price: 150, usage: 'Family serving & mixing' },
      { size: '30 cm (Large)', price: 200, usage: 'Large family cooking & frying' },
      { size: '36 cm (Larger)', price: 250, usage: 'Bulk festival cooking & batch frying' },
    ],
    isPopular: true
  },
  {
    id: 'cook-3',
    name: 'Malpuda (Frying & Serving Bowl)',
    category: 'cookware',
    scentProfile: 'Cookware',
    description: 'Wide shallow traditional pan specially designed for frying sweets like Malpuda and serving.',
    format: 'Shallow Frying Bowl',
    sizes: [
      { size: '26 cm', price: 120, usage: 'Shallow frying sweets & snacks' }
    ],
  },
  {
    id: 'cook-4',
    name: 'Bowl with Lid (Covered Bowl)',
    category: 'cookware',
    scentProfile: 'Cookware',
    description: 'Floral pattern enameled bowl with red knob lid for hygienic food storage & heat retention.',
    format: 'Covered Bowl with Lid',
    sizes: [
      { size: '17 cm (Small)', price: 200, usage: 'Covered storage & compact serving' },
      { size: '26 cm (Large)', price: 250, usage: 'Large covered food container & serving' },
    ],
    isPopular: true
  },
];

export const ALL_PRODUCTS: Product[] = [
  ...STANDARD_AGARBATTI,
  ...COLORED_AGARBATTI,
  ...PREMIUM_COLLECTION,
  ...MASALA_AGARBATTI,
  ...DRY_DHOOP,
  ...COOKWARE_PRODUCTS
];
