import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: "#07070D",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#7C7CFF",
            marginBottom: 24,
          }}
        >
          Founder &amp; Builder @ MS Bee
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: 24,
          }}
        >
          Musthak
        </div>
        <div style={{ fontSize: 30, lineHeight: 1.4, color: "#88889A" }}>
          Software, AI automations &amp; digital products.
        </div>
      </div>
    ),
    { ...size }
  );
}
