/**
 * Renders a JSON-LD graph.
 * Serialised once per page so conflicting duplicate blocks cannot occur.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Schema.org payload — escaped so a "</script>" in content cannot break out.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
