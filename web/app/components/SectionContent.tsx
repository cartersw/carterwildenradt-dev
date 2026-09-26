import {
  SECTIONS,
  type SectionEntry,
  type SectionId,
} from "../content/sections";

export function SectionContent({ section }: { section: SectionId }) {
  return (
    <div className={`section-content section-content-${section}`}>
      {SECTIONS[section].lines.map((line) =>
        "text" in line ? (
          <p key={line.text}>{line.text}</p>
        ) : (
          <div key={line.label} className="section-entry">
            <Entry {...line} />
          </div>
        )
      )}
    </div>
  );
}

function Entry({ label, detail, href, link = "label" }: SectionEntry) {
  const linkedText = link === "detail" ? detail : label;
  const content = href ? (
    <a
      href={href}
      {...(!href.startsWith("mailto:") && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {linkedText}
    </a>
  ) : (
    <span>{linkedText}</span>
  );

  return link === "detail" ? (
    <>
      <span className="entry-label">{label}</span>
      {content}
    </>
  ) : (
    <>
      {content}
      {detail && <span className="entry-detail">{detail}</span>}
    </>
  );
}
