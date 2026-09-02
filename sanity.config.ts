import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./sanity/schemas";
import { deskStructure } from "./sanity/deskStructure";

export default defineConfig({
  name: "burn-indianapolis",
  title: "BURN Indianapolis",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool({ structure: deskStructure }), visionTool()],
  schema: { types: schemas }
});
