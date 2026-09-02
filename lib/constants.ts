export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://burnbyrockypatel.com/indianapolis";

export const venue = {
  name: "BURN by Rocky Patel",
  locationName: "BURN by Rocky Patel - Indianapolis",
  address: "110 S Meridian St",
  cityState: "Indianapolis, IN 46204",
  phone: "(317) 602-2260",
  email: "indy@burnbyrockypatel.com",
  instagram: "https://www.instagram.com/burnbyrockypatelindianapolis/",
  facebook: "https://www.facebook.com/BurnByRockyPatelIndianapolis/",
  reservationUrl: "/contact",
  hours: [
    { label: "Monday-Saturday", value: "4 PM - 2 AM" },
    { label: "Sunday", value: "4 PM - 12 AM" },
    { label: "Colts Home Games", value: "3 PM - Close" }
  ]
};

export const navPrimary = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" }
];

export const navFull = [
  { href: "/experience", label: "Experience" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/humidor", label: "Humidor" },
  { href: "/vip", label: "VIP" },
  { href: "/locker-membership", label: "Membership" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit" },
  { href: "/news", label: "Journal" },
  { href: "/careers", label: "Careers" }
];

export const imageSet = {
  hero: "/images/burn-main-bar-front.png",
  lounge: "/images/burn-lounge-grand-stair.png",
  cocktail: "/images/burn-bar-emerald-room.png",
  whiskey: "/images/burn-cigar-whiskey-still.png",
  cigar: "/images/burn-cigar-whiskey-still.png",
  humidor: "/images/burn-humidor-wide.png",
  city: "/images/burn-room-wide.png",
  table: "/images/burn-emerald-lounge.png",
  detail: "/images/burn-guests-lanterns.png",
  stair: "/images/burn-stair-green-seating.png",
  loungeClose: "/images/burn-lounge-stair-close.png",
  humidorShelves: "/images/burn-humidor-shelves.png"
};

export const venueImages = [
  { src: "/images/burn-lounge-grand-stair.png", category: "Lounge", caption: "Lanterns, brass, leather, and the grand stair inside BURN Indianapolis." },
  { src: "/images/burn-main-bar-front.png", category: "Cocktails", caption: "The main bar with amber underlight and emerald lounge glow." },
  { src: "/images/burn-bar-emerald-room.png", category: "Cocktails", caption: "A wider look across the bar toward the emerald-lit mezzanine." },
  { src: "/images/burn-humidor-wide.png", category: "Humidor", caption: "The illuminated walk-in humidor and cigar collection." },
  { src: "/images/burn-emerald-lounge.png", category: "Lounge", caption: "Emerald seating, warm ceiling light, and relaxed private-club atmosphere." },
  { src: "/images/burn-lounge-stair-close.png", category: "Details", caption: "A closer architectural view of the stair, chandeliers, and lounge seating." },
  { src: "/images/burn-guests-lanterns.png", category: "Guests", caption: "Guests gathered under BURN's signature lantern lighting." },
  { src: "/images/burn-stair-green-seating.png", category: "Lounge", caption: "Green seating, warm fixtures, and layered downtown lounge energy." },
  { src: "/images/burn-room-wide.png", category: "Events", caption: "The room opened wide for social nights and private gatherings." },
  { src: "/images/burn-humidor-shelves.png", category: "Humidor", caption: "Cigar shelves and warm wood detail in the humidor." },
  { src: "/images/burn-cigar-whiskey-still.png", category: "Cigars", caption: "Rocky Patel cigar and whiskey pairing detail." }
];

export const weeklySpecials = [
  { day: "Mon", title: "Industry Night", description: "10% off for industry professionals plus the Monday Mule." },
  { day: "Tue", title: "Tuesday Margaritas", description: "$10 margaritas with a late-lounge tempo." },
  { day: "Wed", title: "Lux Wednesday", description: "$10 Old Fashioneds and featured Rocky Patel pairings." },
  { day: "Thu", title: "Live Music", description: "French 75 features and live music from 8 PM to 11 PM." },
  { day: "Fri", title: "BURN After Dark", description: "Weekend lounge energy with DJs from 10 PM until close." },
  { day: "Sat", title: "Saturday Sessions", description: "Bottle service, conversation, and late-night cocktails." },
  { day: "Sun", title: "Sunday Social", description: "All weekly specials available from open to midnight." }
];

export const menuCategories = [
  {
    title: "Signature Cocktails",
    items: [
      { name: "Smoked Old Fashioned", description: "Bourbon, demerara, bitters, orange oil, smoke", price: "$18", featured: true },
      { name: "Emerald Room", description: "Gin, basil, cucumber, lime, absinthe rinse", price: "$17" },
      { name: "Midnight Mule", description: "Vodka, ginger, lime, Angostura, copper chill", price: "$15" }
    ]
  },
  {
    title: "Whiskey & Bourbon",
    items: [
      { name: "Woodford Reserve Double Oaked", description: "Caramel, toasted oak, baking spice", price: "$16" },
      { name: "Eagle Rare", description: "Honeyed oak, orange peel, cocoa finish", price: "$19" },
      { name: "Blanton's", description: "Vanilla, clove, polished barrel spice", price: "$24" }
    ]
  },
  {
    title: "Scotch",
    items: [
      { name: "The Macallan 12", description: "Honey, dried fruit, sherry oak, soft spice", price: "$22" },
      { name: "Lagavulin 16", description: "Peat smoke, sea salt, dried fruit, long finish", price: "$28", featured: true }
    ]
  },
  {
    title: "Cognac",
    items: [
      { name: "Hennessy VSOP", description: "Vanilla, toasted oak, warm spice", price: "$18" },
      { name: "Remy Martin 1738", description: "Baked fruit, caramel, rounded oak", price: "$20" }
    ]
  },
  {
    title: "Tequila",
    items: [
      { name: "Clase Azul Reposado", description: "Cooked agave, vanilla, soft barrel spice", price: "$34", featured: true },
      { name: "Don Julio 1942", description: "Caramelized agave, oak, warm vanilla", price: "$32" }
    ]
  },
  {
    title: "Wine",
    items: [
      { name: "Prosecco", description: "Bright bubbles, green apple, citrus", price: "$12" },
      { name: "House Cabernet", description: "Black cherry, cocoa, smooth tannin", price: "$14" }
    ]
  },
  {
    title: "Beer",
    items: [
      { name: "Local IPA", description: "Rotating Indianapolis craft selection", price: "$8" },
      { name: "Imported Lager", description: "Crisp, clean, easy with a cigar", price: "$7" }
    ]
  },
  {
    title: "Non-Alcoholic",
    items: [
      { name: "Zero-Proof Mule", description: "Ginger, lime, mint, soda, bitters-style spice", price: "$10" },
      { name: "Espresso Tonic", description: "Cold espresso, tonic, orange peel", price: "$9" }
    ]
  },
  {
    title: "Food / Small Plates",
    items: [
      { name: "Charcuterie Board", description: "Cured meats, cheese, olives, crostini", price: "$24" },
      { name: "Burn Flatbread", description: "Roasted tomato, mozzarella, basil, chili oil", price: "$18" },
      { name: "Late Night Bites", description: "Rotating kitchen selection for the table", price: "MP" }
    ]
  },
  {
    title: "Cigars",
    items: [
      { name: "Rocky Patel Decade", description: "Medium-full, Ecuadorian Sumatra wrapper", price: "$18" },
      { name: "Rocky Patel Emerald", description: "Silky, aromatic, refined evening smoke", price: "$20", featured: true },
      { name: "Vintage 1990", description: "Medium-bodied, cocoa, cedar, long finish", price: "$17" }
    ]
  }
];

export const events = [
  {
    title: "Whiskey Wednesday Pairing",
    slug: "whiskey-wednesday-pairing",
    date: "2026-09-02",
    time: "7 PM - 10 PM",
    category: "Tastings",
    description: "Old Fashioned features paired with a rotating Rocky Patel cigar spotlight.",
    image: imageSet.whiskey,
    featured: true
  },
  {
    title: "Thursday Live Music",
    slug: "thursday-live-music",
    date: "2026-09-03",
    time: "8 PM - 11 PM",
    category: "Live Music",
    description: "Warm room sound, candlelit tables, and cocktails built for lingering.",
    image: imageSet.lounge
  },
  {
    title: "Saturday Sessions",
    slug: "saturday-sessions",
    date: "2026-09-05",
    time: "10 PM - 2 AM",
    category: "DJ Nights",
    description: "Late-night lounge energy without losing the ease of a private club.",
    image: imageSet.cocktail
  }
];

export const cigars = [
  { brand: "Rocky Patel", name: "Decade", origin: "Honduras", wrapper: "Ecuadorian Sumatra", strength: "Medium-Full", notes: "Cocoa, cedar, espresso, long spice" },
  { brand: "Rocky Patel", name: "Emerald", origin: "Nicaragua", wrapper: "Habano", strength: "Medium", notes: "Cream, toasted almond, citrus peel" },
  { brand: "Arturo Fuente", name: "Don Carlos", origin: "Dominican Republic", wrapper: "Cameroon", strength: "Medium", notes: "Baking spice, cedar, leather" },
  { brand: "Padrón", name: "1964 Anniversary", origin: "Nicaragua", wrapper: "Natural", strength: "Full", notes: "Coffee, earth, dark chocolate" }
];

export const articles = [
  {
    title: "How to Build the Perfect Pairing",
    slug: "perfect-cigar-cocktail-pairing",
    category: "Cocktails",
    excerpt: "A short field guide to matching proof, body, sweetness, smoke, and finish.",
    date: "2026-08-15"
  },
  {
    title: "A Night in the Emerald Room",
    slug: "night-in-the-emerald-room",
    category: "Indianapolis",
    excerpt: "Why downtown Indianapolis feels different from a leather chair at BURN.",
    date: "2026-08-02"
  },
  {
    title: "Rocky Patel Cigars to Know",
    slug: "rocky-patel-cigars-to-know",
    category: "Cigars",
    excerpt: "Five premium selections for the curious guest and seasoned collector.",
    date: "2026-07-18"
  }
];
