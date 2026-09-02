import { groq } from "next-sanity";
import { articles, cigars, events, imageSet, menuCategories, venue, venueImages, weeklySpecials } from "@/lib/constants";
import { sanityClient, urlFor } from "@/lib/sanity";

const isSanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

type SanityImage = {
  asset?: unknown;
  alt?: string;
};

type MenuItem = {
  name: string;
  description: string;
  price: string;
  featured?: boolean;
  new?: boolean;
  available?: boolean;
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
};

function imageToUrl(image?: SanityImage, fallback = imageSet.lounge) {
  if (!image?.asset) return fallback;
  try {
    return urlFor(image).width(1800).height(1200).fit("crop").auto("format").url();
  } catch {
    return fallback;
  }
}

async function fetchCms<T>(query: string, params: Record<string, string> = {}): Promise<T | null> {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch<T>(query, params, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

function normalizeMenuTitle(title: string) {
  const normalized = title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
  return normalized === "small plates" ? "food small plates" : normalized;
}

function mergeMenuWithFallback(cmsCategories: MenuCategory[] | null) {
  if (!cmsCategories?.length) return menuCategories;

  const categoriesWithItems = cmsCategories.filter((category) => category.items?.length);
  const usedFallbackTitles = new Set<string>();
  const merged = categoriesWithItems.map((category) => {
    const fallback = menuCategories.find((item) => normalizeMenuTitle(item.title) === normalizeMenuTitle(category.title));
    if (fallback) usedFallbackTitles.add(normalizeMenuTitle(fallback.title));

    return {
      ...category,
      items: fallback ? [...category.items, ...fallback.items.filter((item) => !category.items.some((cmsItem) => cmsItem.name === item.name))] : category.items
    };
  });

  const missingFallbackCategories: MenuCategory[] = menuCategories.filter((category) => !usedFallbackTitles.has(normalizeMenuTitle(category.title)));
  return [...merged, ...missingFallbackCategories];
}

export async function getSiteSettings() {
  const data = await fetchCms<{
    siteTitle?: string;
    address?: string;
    phone?: string;
    email?: string;
    reservationUrl?: string;
    instagram?: string;
    facebook?: string;
    announcement?: string;
    hours?: { label?: string; value?: string }[];
  }>(groq`*[_type == "siteSettings"][0]{
    siteTitle, address, phone, email, reservationUrl, instagram, facebook, announcement, hours
  }`);

  return {
    ...venue,
    locationName: data?.siteTitle || venue.locationName,
    address: data?.address || venue.address,
    phone: data?.phone || venue.phone,
    email: data?.email || venue.email,
    reservationUrl: data?.reservationUrl || venue.reservationUrl,
    instagram: data?.instagram || venue.instagram,
    facebook: data?.facebook || venue.facebook,
    announcement: data?.announcement,
    hours: data?.hours?.filter((hour) => hour.label && hour.value).map((hour) => ({ label: hour.label!, value: hour.value! })) || venue.hours
  };
}

export async function getHomepage() {
  const data = await fetchCms<{
    heroHeadline?: string;
    heroSubheadline?: string;
    featuredExperience?: string;
    heroMedia?: SanityImage;
    featuredSpecial?: { title?: string; description?: string };
    featuredEvent?: { title?: string; category?: string };
    featuredCigar?: { brand?: string; name?: string };
    featuredPairing?: { title?: string; drink?: string };
  }>(groq`*[_type == "homepage"][0]{
    heroHeadline,
    heroSubheadline,
    featuredExperience,
    heroMedia,
    featuredSpecial->{title, description},
    featuredEvent->{title, category},
    featuredCigar->{brand, name},
    featuredPairing->{title, drink}
  }`);

  return {
    heroHeadline: data?.heroHeadline || "Indianapolis\nAfter Dark.",
    heroSubheadline: data?.heroSubheadline || "Premium cigars. Crafted cocktails. Elevated nights.",
    featuredExperience:
      data?.featuredExperience ||
      "A destination built around conversation, cocktails, cigars, music, private rooms, and the kind of service that lets the night unfold naturally.",
    heroImage: imageToUrl(data?.heroMedia, imageSet.hero),
    tonight: {
      special: data?.featuredSpecial?.title || "Whiskey Wednesday",
      featured: data?.featuredPairing?.title || "Old Fashioned + Rocky Patel Pairing",
      event: data?.featuredEvent?.title || "Late lounge sound",
      cigar: data?.featuredCigar ? `${data.featuredCigar.brand || ""} ${data.featuredCigar.name || ""}`.trim() : "Rocky Patel Emerald"
    }
  };
}

export async function getMenu() {
  const data = await fetchCms<
    {
      title: string;
      items: { name: string; description?: string; price?: string; featured?: boolean; new?: boolean; available?: boolean }[];
    }[]
  >(groq`*[_type == "menuCategory" && active != false] | order(order asc, title asc) {
    title,
    "items": *[_type == "menuItem" && references(^._id) && available != false] | order(order asc, name asc) {
      name, description, price, featured, new, available
    }
  }`);

  const normalizedData = data?.map((category) => ({
    title: category.title,
    items:
      category.items?.map((item) => ({
        name: item.name,
        description: item.description || "",
        price: item.price || "",
        featured: Boolean(item.featured),
        new: Boolean(item.new),
        available: item.available
      })) || []
  }));

  return mergeMenuWithFallback(normalizedData || null);
}

export async function getSpecials() {
  const data = await fetchCms<{ day?: string; title?: string; description?: string }[]>(
    groq`*[_type == "special" && active != false] | order(day asc, title asc) { day, title, description }`
  );

  return data?.length
    ? data.map((special) => ({
        day: (special.day || "").slice(0, 3) || "Day",
        title: special.title || "Special",
        description: special.description || ""
      }))
    : weeklySpecials;
}

export async function getEvents() {
  const data = await fetchCms<
    {
      title?: string;
      "slug"?: string;
      date?: string;
      startTime?: string;
      endTime?: string;
      category?: string;
      description?: string;
      image?: SanityImage;
      featured?: boolean;
      soldOut?: boolean;
      reservationUrl?: string;
      ticketUrl?: string;
    }[]
  >(groq`*[_type == "event" && active != false] | order(date asc, startTime asc) {
    title,
    "slug": slug.current,
    date,
    startTime,
    endTime,
    category,
    description,
    image,
    featured,
    soldOut,
    reservationUrl,
    ticketUrl
  }`);

  return data?.length
    ? data.map((event) => ({
        title: event.title || "BURN Event",
        slug: event.slug || "event",
        date: event.date || "",
        time: [event.startTime, event.endTime].filter(Boolean).join(" - ") || "Time TBA",
        category: event.category || "Events",
        description: event.description || "",
        image: imageToUrl(event.image, imageSet.table),
        featured: Boolean(event.featured),
        soldOut: Boolean(event.soldOut),
        reservationUrl: event.reservationUrl,
        ticketUrl: event.ticketUrl
      }))
    : events;
}

export async function getCigars() {
  const data = await fetchCms<
    { brand?: string; name?: string; origin?: string; wrapper?: string; strength?: string; tastingNotes?: string; image?: SanityImage; featured?: boolean }[]
  >(groq`*[_type == "cigar" && available != false] | order(featured desc, brand asc, name asc) {
    brand, name, origin, wrapper, strength, tastingNotes, image, featured
  }`);

  return data?.length
    ? data.map((cigar) => ({
        brand: cigar.brand || "BURN",
        name: cigar.name || "Cigar",
        origin: cigar.origin || "Ask the humidor team",
        wrapper: cigar.wrapper || "Varies",
        strength: cigar.strength || "Medium",
        notes: cigar.tastingNotes || "",
        image: imageToUrl(cigar.image, imageSet.cigar),
        featured: Boolean(cigar.featured)
      }))
    : cigars.map((cigar, index) => ({ ...cigar, image: imageSet.cigar, featured: index === 1 }));
}

export async function getGallery() {
  const data = await fetchCms<{ image?: SanityImage; caption?: string; category?: string }[]>(
    groq`*[_type == "galleryImage" && active != false] | order(order asc) { image, caption, category }`
  );

  return data?.length
    ? data.map((item) => ({
        src: imageToUrl(item.image, imageSet.detail),
        caption: item.caption || item.category || "BURN Indianapolis",
        category: item.category || "Lounge"
      }))
    : venueImages;
}

export async function getArticles() {
  const data = await fetchCms<
    { title?: string; slug?: string; excerpt?: string; category?: string; publishedAt?: string; heroImage?: SanityImage }[]
  >(groq`*[_type == "article" && active != false] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    heroImage
  }`);

  return data?.length
    ? data.map((article) => ({
        title: article.title || "BURN Journal",
        slug: article.slug || "article",
        category: article.category || "Culture",
        excerpt: article.excerpt || "",
        date: article.publishedAt?.slice(0, 10) || "",
        image: imageToUrl(article.heroImage, imageSet.whiskey)
      }))
    : articles.map((article) => ({ ...article, image: imageSet.whiskey }));
}

export async function getArticle(slug: string) {
  const data = await fetchCms<{
    title?: string;
    slug?: string;
    excerpt?: string;
    category?: string;
    publishedAt?: string;
    heroImage?: SanityImage;
    content?: unknown[];
  }>(
    groq`*[_type == "article" && active != false && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      excerpt,
      category,
      publishedAt,
      heroImage,
      content
    }`,
    { slug }
  );

  if (data?.title) {
    return {
      title: data.title,
      slug,
      category: data.category || "Culture",
      excerpt: data.excerpt || "",
      date: data.publishedAt?.slice(0, 10) || "",
      image: imageToUrl(data.heroImage, imageSet.cigar),
      content: data.content
    };
  }

  const fallback = articles.find((article) => article.slug === slug);
  return fallback ? { ...fallback, image: imageSet.cigar, content: null } : null;
}
