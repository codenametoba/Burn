import { defineField, defineType } from "sanity";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const menuCategoryOptions = ["Signature Cocktails", "Whiskey & Bourbon", "Scotch", "Cognac", "Tequila", "Wine", "Beer", "Non-Alcoholic", "Food / Small Plates", "Cigars"];
const eventCategories = ["Live Music", "Cigar Events", "Sports", "DJ Nights", "Tastings", "Industry Events", "Private Events"];
const galleryCategories = ["Lounge", "Cocktails", "Cigars", "Events", "Guests", "Humidor", "Details"];
const articleCategories = ["Cigars", "Cocktails", "Events", "Indianapolis", "Culture", "Rocky Patel"];
const cigarStrengths = ["Mild", "Mild-Medium", "Medium", "Medium-Full", "Full"];

const imageField = (name = "image", description = "Upload a clear, high-quality image. Use the hotspot tool to choose the important focal point.") =>
  defineField({
    name,
    title: name.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()),
    description,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alt text",
        description: "A short plain-language description for accessibility, like \"BURN Indianapolis main bar\".",
        type: "string"
      })
    ]
  });

export const schemas = [
  defineType({
    name: "editorGuide",
    title: "CMS Guide",
    type: "document",
    fields: [
      defineField({
        name: "quickStart",
        title: "Quick Start",
        type: "array",
        of: [{ type: "block" }],
        initialValue: [{ _type: "block", children: [{ _type: "span", text: "Start with Site Settings, Homepage, Menu Categories, Menu Items, Weekly Specials, Events, Cigars, and Gallery Images. Use Active/Available switches to hide content instead of deleting it." }] }]
      }),
      defineField({
        name: "menuTips",
        title: "Menu Editing Tips",
        description: "Guidance for staff who update cocktails, cigars, food, and specials.",
        type: "array",
        of: [{ type: "block" }],
        initialValue: [{ _type: "block", children: [{ _type: "span", text: "Create a Menu Category first, then create Menu Items and choose that category. Use Display Order numbers like 10, 20, 30 so new items can be inserted later." }] }]
      }),
      defineField({
        name: "imageTips",
        title: "Image Tips",
        type: "array",
        of: [{ type: "block" }],
        initialValue: [{ _type: "block", children: [{ _type: "span", text: "Use real BURN Indianapolis photography when possible. Always set alt text and adjust the hotspot so faces, bars, cigars, or key room details stay visible on mobile." }] }]
      })
    ],
    preview: { prepare: () => ({ title: "CMS Guide", subtitle: "How to edit the BURN Indianapolis website" }) }
  }),
  defineType({
    name: "siteSettings",
    title: "Site Settings",
    description: "Global business details used across the header, footer, contact page, SEO, and structured data.",
    type: "document",
    fields: [
      defineField({ name: "siteTitle", title: "Site title", description: "The full business name shown in metadata and admin areas.", type: "string", initialValue: "BURN by Rocky Patel - Indianapolis", validation: (Rule) => Rule.required() }),
      defineField({ name: "address", title: "Street address", type: "string", initialValue: "110 S Meridian St", validation: (Rule) => Rule.required() }),
      defineField({ name: "cityState", title: "City, state, ZIP", type: "string", initialValue: "Indianapolis, IN 46204" }),
      defineField({ name: "phone", title: "Phone number", type: "string", initialValue: "(317) 602-2260", validation: (Rule) => Rule.required() }),
      defineField({ name: "email", title: "Contact email", type: "string" }),
      defineField({
        name: "hours",
        title: "Opening hours",
        description: "Add one row per displayed hours line. Example: Monday-Saturday / 4 PM - 2 AM.",
        type: "array",
        of: [{
          type: "object",
          fields: [
            defineField({ name: "label", title: "Day or situation", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "value", title: "Hours", type: "string", validation: (Rule) => Rule.required() })
          ],
          preview: { select: { title: "label", subtitle: "value" } }
        }],
        initialValue: [
          { _type: "object", label: "Monday-Saturday", value: "4 PM - 2 AM" },
          { _type: "object", label: "Sunday", value: "4 PM - 12 AM" },
          { _type: "object", label: "Colts Home Games", value: "3 PM - Close" }
        ]
      }),
      defineField({ name: "reservationUrl", title: "Reservation link", description: "Use /contact for the built-in inquiry page or paste an external booking URL.", type: "string", initialValue: "/contact" }),
      defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
      defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
      defineField({ name: "announcement", title: "Announcement", description: "Short optional notice for current specials, closures, events, or holiday hours.", type: "text", rows: 3 }),
      imageField("heroMedia", "Optional default image for social/admin use.")
    ],
    preview: { select: { title: "siteTitle", subtitle: "phone" } }
  }),
  defineType({
    name: "homepage",
    title: "Homepage",
    description: "Controls the homepage hero and featured Tonight at BURN selections.",
    type: "document",
    fields: [
      defineField({ name: "heroHeadline", title: "Hero headline", description: "Use a line break if desired. Example: Indianapolis / After Dark.", type: "string", initialValue: "Indianapolis\nAfter Dark." }),
      defineField({ name: "heroSubheadline", title: "Hero subheadline", type: "string", initialValue: "Premium cigars. Crafted cocktails. Elevated nights." }),
      defineField({ name: "featuredExperience", title: "Intro statement", description: "Short editorial copy immediately after the hero.", type: "text", rows: 4 }),
      defineField({ name: "featuredEvent", title: "Tonight's event", description: "Choose one event to feature on the homepage.", type: "reference", to: [{ type: "event" }] }),
      defineField({ name: "featuredSpecial", title: "Tonight's special", type: "reference", to: [{ type: "special" }] }),
      defineField({ name: "featuredCigar", title: "Featured cigar", type: "reference", to: [{ type: "cigar" }] }),
      defineField({ name: "featuredPairing", title: "Featured pairing", type: "reference", to: [{ type: "pairing" }] }),
      imageField("heroMedia", "Main homepage hero image. Use a wide atmospheric photo of the room, bar, or cigar moment.")
    ],
    preview: { prepare: () => ({ title: "Homepage", subtitle: "Hero and featured homepage content" }) }
  }),
  defineType({
    name: "menuCategory",
    title: "Menu Category",
    description: "Create categories first, then assign menu items to them. Staff can add new categories any time.",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Category name", description: "Choose a common category or type a custom one.", type: "string", options: { list: menuCategoryOptions }, validation: (Rule) => Rule.required() }),
      defineField({ name: "slug", title: "URL-friendly ID", description: "Click Generate after entering the category name.", type: "slug", options: { source: "title" } }),
      defineField({ name: "description", title: "Short description", type: "text", rows: 2 }),
      defineField({ name: "order", title: "Display order", description: "Lower numbers appear first. Use 10, 20, 30 so you can insert categories later.", type: "number", initialValue: 10 }),
      defineField({ name: "active", title: "Show this category", description: "Turn off to hide the category without deleting it.", type: "boolean", initialValue: true })
    ],
    orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
    preview: { select: { title: "title", subtitle: "description" } }
  }),
  defineType({
    name: "menuItem",
    title: "Menu Item",
    description: "Cocktails, whiskey, food, cigars, and other menu listings.",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Item name", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "description", title: "Menu description", description: "One short line of ingredients or tasting notes.", type: "text", rows: 3 }),
      defineField({ name: "price", title: "Price", description: "Examples: $18, MP, Ask server.", type: "string" }),
      defineField({ name: "category", title: "Menu category", description: "Choose where this item appears. Add a Menu Category first if it is missing.", type: "reference", to: [{ type: "menuCategory" }], validation: (Rule) => Rule.required() }),
      defineField({ name: "subcategory", title: "Optional subcategory", description: "Example: Bourbon, Scotch, Tequila, Robusto, Small Plates.", type: "string" }),
      imageField("image", "Optional item image. Most menu items can stay text-only."),
      defineField({ name: "featured", title: "Feature this item", description: "Highlights the item in previews.", type: "boolean", initialValue: false }),
      defineField({ name: "available", title: "Available now", description: "Turn off to temporarily hide without deleting.", type: "boolean", initialValue: true }),
      defineField({ name: "new", title: "Mark as new", type: "boolean", initialValue: false }),
      defineField({ name: "order", title: "Display order", description: "Lower numbers appear first within the category.", type: "number", initialValue: 10 })
    ],
    preview: {
      select: { title: "name", subtitle: "price", media: "image" },
      prepare: ({ title, subtitle, media }) => ({ title, subtitle: subtitle ? `Price: ${subtitle}` : "No price set", media })
    }
  }),
  defineType({
    name: "special",
    title: "Weekly Special",
    description: "Recurring weekly specials such as industry night, whiskey night, live music, and Sunday social.",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Special name", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "day", title: "Day of week", type: "string", options: { list: days }, validation: (Rule) => Rule.required() }),
      defineField({ name: "description", title: "Short description", description: "Used on homepage and weekly specials preview.", type: "text", rows: 3 }),
      defineField({ name: "fullDescription", title: "Full description", description: "Optional longer explanation for future dedicated special pages.", type: "text", rows: 5 }),
      imageField(),
      defineField({ name: "startTime", title: "Start time", description: "Example: 4 PM", type: "string" }),
      defineField({ name: "endTime", title: "End time", description: "Example: 2 AM", type: "string" }),
      defineField({ name: "discount", title: "Offer or discount", description: "Example: $10 Old Fashioneds or 10% off.", type: "string" }),
      defineField({ name: "featured", title: "Feature this special", type: "boolean", initialValue: false }),
      defineField({ name: "active", title: "Active", description: "Turn off to hide the special without deleting it.", type: "boolean", initialValue: true })
    ],
    preview: { select: { title: "title", subtitle: "day", media: "image" } }
  }),
  defineType({
    name: "event",
    title: "Event",
    description: "One-time or recurring events shown on the Events page and homepage preview.",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Event title", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "slug", title: "Page/link slug", description: "Click Generate after entering the event title.", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
      defineField({ name: "date", title: "Event date", type: "date", validation: (Rule) => Rule.required() }),
      defineField({ name: "startTime", title: "Start time", type: "string" }),
      defineField({ name: "endTime", title: "End time", type: "string" }),
      defineField({ name: "description", title: "Event description", type: "text", rows: 5 }),
      imageField("image", "Use a wide event, lounge, crowd, bar, or pairing image."),
      defineField({ name: "category", title: "Event category", type: "string", options: { list: eventCategories }, validation: (Rule) => Rule.required() }),
      defineField({ name: "reservationUrl", title: "Reservation URL", description: "Optional. Leave blank to use the site contact page.", type: "url" }),
      defineField({ name: "ticketUrl", title: "Ticket URL", description: "Optional link for ticketed events.", type: "url" }),
      defineField({ name: "featured", title: "Feature on homepage", type: "boolean", initialValue: false }),
      defineField({ name: "soldOut", title: "Sold out", description: "Marks the event as sold out without deleting it.", type: "boolean", initialValue: false }),
      defineField({ name: "active", title: "Show this event", type: "boolean", initialValue: true })
    ],
    preview: { select: { title: "title", subtitle: "date", media: "image" } }
  }),
  defineType({
    name: "cigar",
    title: "Cigar",
    description: "Humidor catalog entries for in-person discovery. This is not an online checkout.",
    type: "document",
    fields: [
      defineField({ name: "brand", title: "Brand", description: "Example: Rocky Patel, Padron, Arturo Fuente.", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "name", title: "Cigar name", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "origin", title: "Origin", description: "Country or region.", type: "string" }),
      defineField({ name: "wrapper", title: "Wrapper", description: "Example: Ecuadorian Sumatra, Habano, Cameroon.", type: "string" }),
      defineField({ name: "strength", title: "Strength", type: "string", options: { list: cigarStrengths }, initialValue: "Medium" }),
      defineField({ name: "format", title: "Format / size", description: "Example: Robusto, Toro, Churchill.", type: "string" }),
      defineField({ name: "tastingNotes", title: "Tasting notes", description: "Comma-separated notes like cocoa, cedar, leather, espresso.", type: "text", rows: 3 }),
      defineField({ name: "recommendedDrink", title: "Recommended drink pairing", type: "string" }),
      imageField(),
      defineField({ name: "featured", title: "Cigar of the month / featured", type: "boolean", initialValue: false }),
      defineField({ name: "available", title: "Currently available", type: "boolean", initialValue: true })
    ],
    preview: {
      select: { title: "name", brand: "brand", subtitle: "strength", media: "image" },
      prepare: ({ title, brand, subtitle, media }) => ({ title: `${brand || "Cigar"} ${title || ""}`.trim(), subtitle, media })
    }
  }),
  defineType({
    name: "pairing",
    title: "Featured Pairing",
    description: "Pairs one cigar with a whiskey, cocktail, or spirit.",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Pairing title", description: "Example: Rocky Patel Decade + Woodford Double Oaked.", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "cigar", title: "Cigar", type: "reference", to: [{ type: "cigar" }] }),
      defineField({ name: "drink", title: "Drink", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "tastingNotes", title: "Why it works", type: "text", rows: 4 }),
      defineField({ name: "featured", title: "Feature on homepage", type: "boolean", initialValue: false }),
      imageField()
    ],
    preview: { select: { title: "title", subtitle: "drink", media: "image" } }
  }),
  defineType({
    name: "galleryImage",
    title: "Gallery Image",
    description: "Images for the editorial masonry gallery and Instagram-style sections.",
    type: "document",
    fields: [
      imageField("image", "Required gallery image. Use real venue photography when possible."),
      defineField({ name: "caption", title: "Caption", description: "Short human-friendly caption.", type: "string" }),
      defineField({ name: "category", title: "Photo category", type: "string", options: { list: galleryCategories }, validation: (Rule) => Rule.required() }),
      defineField({ name: "order", title: "Display order", type: "number", initialValue: 10 }),
      defineField({ name: "active", title: "Show in gallery", type: "boolean", initialValue: true })
    ],
    preview: { select: { title: "caption", subtitle: "category", media: "image" } }
  }),
  defineType({
    name: "article",
    title: "Journal Article",
    description: "Magazine-style stories for cigars, cocktails, events, Indianapolis, culture, and Rocky Patel.",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Article title", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "slug", title: "Article URL slug", description: "Click Generate after entering the title.", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
      defineField({ name: "excerpt", title: "Short excerpt", description: "One or two sentences used on article cards and SEO.", type: "text", rows: 3 }),
      imageField("heroImage", "Wide hero image for the article."),
      defineField({ name: "content", title: "Article body", type: "array", of: [{ type: "block" }] }),
      defineField({ name: "author", title: "Author", type: "string", initialValue: "BURN Indianapolis" }),
      defineField({ name: "publishedAt", title: "Publish date", type: "datetime" }),
      defineField({ name: "category", title: "Article category", type: "string", options: { list: articleCategories }, validation: (Rule) => Rule.required() }),
      defineField({ name: "active", title: "Published", description: "Turn off to hide the article.", type: "boolean", initialValue: true })
    ],
    preview: { select: { title: "title", subtitle: "category", media: "heroImage" } }
  }),
  defineType({
    name: "faq",
    title: "FAQ",
    description: "Frequently asked questions for visit, VIP, membership, dress code, and general policies.",
    type: "document",
    fields: [
      defineField({ name: "question", title: "Question", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
      defineField({ name: "category", title: "FAQ category", type: "string", options: { list: ["Visit", "VIP", "Membership", "Dress Code", "Age Requirements", "Accessibility", "General"] } }),
      defineField({ name: "order", title: "Display order", type: "number", initialValue: 10 }),
      defineField({ name: "active", title: "Show this FAQ", type: "boolean", initialValue: true })
    ],
    preview: { select: { title: "question", subtitle: "category" } }
  }),
  defineType({
    name: "vipOffering",
    title: "VIP Offering",
    description: "VIP/private-event packages, benefits, and booking prompts.",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Offering title", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
      defineField({ name: "eventTypes", title: "Good for these event types", description: "Add options such as Birthday, Corporate, Bachelor Party, Celebration, Networking Event, Private Party.", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
      defineField({ name: "active", title: "Show this offering", type: "boolean", initialValue: true }),
      imageField()
    ],
    preview: { select: { title: "title", subtitle: "description", media: "image" } }
  }),
  defineType({
    name: "career",
    title: "Career Opening",
    description: "Job postings staff can publish or hide.",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Role title", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "department", title: "Department", type: "string", options: { list: ["Management", "Bar Staff", "Hospitality", "Security", "Marketing", "Operations"] } }),
      defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
      defineField({ name: "active", title: "Show this opening", type: "boolean", initialValue: true })
    ],
    preview: { select: { title: "title", subtitle: "department" } }
  })
];
