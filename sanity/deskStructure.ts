import type { StructureResolver } from "sanity/structure";

const singleton = (S: Parameters<StructureResolver>[0], typeName: string, title: string) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title));

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("BURN Indianapolis CMS")
    .items([
      singleton(S, "editorGuide", "CMS Guide"),
      S.divider(),
      singleton(S, "siteSettings", "Site Settings"),
      singleton(S, "homepage", "Homepage"),
      S.divider(),
      S.documentTypeListItem("menuCategory").title("Menu Categories"),
      S.documentTypeListItem("menuItem").title("Menu Items"),
      S.documentTypeListItem("special").title("Weekly Specials"),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("cigar").title("Cigars"),
      S.documentTypeListItem("pairing").title("Featured Pairings"),
      S.documentTypeListItem("galleryImage").title("Gallery Images"),
      S.documentTypeListItem("article").title("The BURN Journal"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("vipOffering").title("VIP Offerings"),
      S.documentTypeListItem("career").title("Careers")
    ]);
