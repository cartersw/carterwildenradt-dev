"use client";

import { useRef, type KeyboardEvent } from "react";
import { SECTIONS, type Section } from "../content/sections";

type SectionNavProps = {
  activeSection: Section;
  onSelect: (section: Section) => void;
};

export function SectionNav({
  activeSection,
  onSelect,
}: SectionNavProps) {
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % SECTIONS.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + SECTIONS.length) % SECTIONS.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = SECTIONS.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    onSelect(SECTIONS[nextIndex]);
    tabs.current[nextIndex]?.focus();
  };

  return (
    <div role="tablist" aria-label="Portfolio" className="section-tabs">
      {SECTIONS.map((section, index) => (
        <button
          key={section}
          ref={(element) => {
            tabs.current[index] = element;
          }}
          id={`tab-${section}`}
          type="button"
          role="tab"
          aria-controls={`panel-${section}`}
          aria-selected={activeSection === section}
          tabIndex={activeSection === section ? 0 : -1}
          onClick={() => onSelect(section)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          className="section-tab"
        >
          [{section}]
        </button>
      ))}
    </div>
  );
}
