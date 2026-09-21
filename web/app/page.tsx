"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionNav } from "./components/SectionNav";
import { SectionContent } from "./components/SectionContent";
import { NAME } from "./constants/site";
import { SECTIONS, type Section } from "./content/sections";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("about");

  return (
    <main className="portfolio">
      <header className="profile">
        <div className="portrait-frame">
          <div className="portrait-image">
            <Image
              src="/portrait.jpg"
              alt="Carter Wildenradt"
              fill
              sizes="(min-width: 768px) 318px, 270px"
              loading="eager"
              className="scale-150 object-cover object-[50%_65%]"
            />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl">{NAME}</h1>
      </header>

      <section className="section-view">
        <SectionNav
          activeSection={activeSection}
          onSelect={setActiveSection}
        />
        <div className="section-panels">
          {SECTIONS.map((section) => (
            <div
              key={section}
              id={`panel-${section}`}
              role="tabpanel"
              aria-labelledby={`tab-${section}`}
              aria-hidden={activeSection !== section}
              inert={activeSection !== section}
              tabIndex={activeSection === section ? 0 : -1}
              className="section-panel"
            >
              <SectionContent section={section} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
