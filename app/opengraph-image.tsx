import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MS Bee — software, AI automations and digital products";

/** Brand social preview: the MS Bee identity, not a portrait. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#07070D",
          backgroundImage:
            "linear-gradient(135deg, rgba(124,124,255,0.20) 0%, rgba(7,7,13,0) 52%, rgba(232,179,75,0.09) 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* orbital motif */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -110,
            width: 560,
            height: 560,
            borderRadius: 9999,
            border: "1px solid rgba(147,147,255,0.22)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -40,
            top: -20,
            width: 340,
            height: 340,
            borderRadius: 9999,
            border: "1px solid rgba(147,147,255,0.16)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "84px 96px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
            <div style={{ width: 12, height: 12, borderRadius: 9999, backgroundColor: "#7C7CFF" }} />
            <div
              style={{
                fontSize: 22,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#9393FF",
              }}
            >
              MS Bee — Software + AI Systems
            </div>
          </div>

          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            We build software, automate workflows, turn problems into systems.
          </div>

          <div
            style={{
              marginTop: 34,
              display: "flex",
              gap: 12,
              fontSize: 24,
            }}
          >
            {["Web apps", "AI automation", "Custom software", "Products"].map((t) => (
              <div
                key={t}
                style={{
                  border: "1px solid rgba(147,147,255,0.28)",
                  color: "#C9C9FF",
                  padding: "10px 20px",
                  borderRadius: 4,
                }}
              >
                {t}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, fontSize: 24, color: "#88889A" }}>
            Founder-led · msbee.dpdns.org
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
