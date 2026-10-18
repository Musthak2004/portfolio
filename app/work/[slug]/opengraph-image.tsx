import { ImageResponse } from "next/og";
import { getProject, projects, projectTypeLabels } from "@/content/work";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/**
 * Per-project social preview, generated from the same project data the page
 * renders — so the card can never disagree with the page it links to.
 */
export default function CaseStudyOgImage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  const title = p?.title ?? "MS Bee case study";
  const industry = p?.industry ?? "Software";
  const kind = p ? projectTypeLabels[p.type] : "Client work";
  const categories = (p?.category ?? []).join(" · ");
  const status = p?.status ?? "Live";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 88px",
          backgroundColor: "#07070D",
          backgroundImage:
            "linear-gradient(135deg, rgba(124,124,255,0.20) 0%, rgba(7,7,13,0) 55%, rgba(232,179,75,0.09) 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 26, letterSpacing: "0.2em", color: "#9393FF", textTransform: "uppercase" }}>
            MS Bee
          </div>
          <div style={{ width: 1, height: 26, backgroundColor: "#282833", display: "flex" }} />
          <div style={{ fontSize: 26, letterSpacing: "0.14em", color: "#88889A", textTransform: "uppercase" }}>
            Case study
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              color: "#34D399",
              border: "1px solid rgba(52,211,153,0.28)",
              padding: "8px 16px",
              borderRadius: 4,
            }}
          >
            <div
              style={{ width: 12, height: 12, borderRadius: 9999, backgroundColor: "#34D399", display: "flex" }}
            />
            {status.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: title.length > 26 ? 60 : 76,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 26, fontSize: 30, color: "#9393FF" }}>{industry}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#88889A" }}>
          <div>{kind}</div>
          {categories && <div>{`· ${categories}`}</div>}
          <div style={{ marginLeft: "auto", color: "#555567" }}>msbee.dpdns.org</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
