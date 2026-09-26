"use client";

import { useRef, type KeyboardEvent } from "react";
import { SECTION_IDS, SECTIONS, type SectionId } from "../content/sections";

type SectionNavProps = {
  activeSection: SectionId;
  onSelect: (section: SectionId) => void;
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
        nextIndex = (index + 1) % SECTION_IDS.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + SECTION_IDS.length) % SECTION_IDS.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = SECTION_IDS.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    onSelect(SECTION_IDS[nextIndex]);
    tabs.current[nextIndex]?.focus();
  };

  return (
    <div role="tablist" aria-label="Portfolio" className="section-tabs">
      {SECTION_IDS.map((section, index) => (
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
          {SECTIONS[section].label}
        </button>
      ))}
    </div>
  );
}
