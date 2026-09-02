import { ImageResponse } from "next/og";

export const alt = "BURN Indianapolis Ember After Dark";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#EAE2D5",
          background: "linear-gradient(135deg, #100D0B 0%, #211713 48%, #123B2E 100%)"
        }}
      >
        <div style={{ color: "#B48A52", fontSize: 28, letterSpacing: 8 }}>BURN BY ROCKY PATEL</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 112, lineHeight: 0.84, fontWeight: 800 }}>
          <span>INDIANAPOLIS</span>
          <span>AFTER DARK.</span>
        </div>
        <div style={{ fontSize: 32, color: "#A79E94" }}>Premium cigars. Crafted cocktails. Elevated nights.</div>
      </div>
    ),
    size
  );
}
