export const SECTIONS = ["about", "projects", "contact"] as const;

export type Section = (typeof SECTIONS)[number];

export type SectionEntry = {
  label: string;
  detail?: string;
  href?: string;
  link?: "label" | "detail";
};

type SectionLine = { text: string } | SectionEntry;

export const SECTION_CONTENT: Record<Section, SectionLine[]> = {
  about: [
    { text: "Hello my name is Carter, I am a full-stack software developer." },
    {
      text: "I currently work at StarPlus Energy, a joint venture by Samsung SDI and Stellantis. I'm responsible for analyzing, debugging, and assisting with deploying changes for their MES application.",
    },
    {
      text: "I enjoy building web apps, video games, and machine-learning projects in my free time. I particularly enjoy designing backend systems and APIs",
    },
    {
      text: "Outside of development, I enjoy traveling, collecting, skateboarding, and hiking. ",
    },
  ],
  projects: [
    {
      label: "carterwildenradt.dev",
      detail: "Next.js, Typescript, Tailwind",
      href: "https://carterwildenradt.dev",
    },
    { label: "Hotel Listing API", 
      detail: "C#, ASP.NET, SQL, EF CORE",
      href: "https://github.com/cartersw/hotel-listing-api" },
    { label: "Neural Chickens", 
      detail: "C#, ASP.NET, SQL, EF CORE, Next.js, TypeScript, Tailwind",
      href: "https://github.com/cartersw/neural-chickens" },
    { label: "Gameplay Imitation Learning System", 
      detail: "Python, Go, C++",
      href: "https://github.com/cartersw/gameplay-imitation-learner" },
    { label: "Bloxdle", 
      detail: "Lua",
      href: "https://github.com/cartersw/bloxdle" },
    { label: "Amazondle", 
      detail: "Vite, TypeScript, Tailwind",
      href: "https://github.com/cartersw/Amazondle" },
    
  ],
  contact: [
    {
      label: "email:",
      detail: "carterwildenradt@gmail.com",
      href: "mailto:carterwildenradt@gmail.com",
      link: "detail",
    },
    {
      label: "github:",
      detail: "github.com/cartersw",
      href: "https://github.com/cartersw",
      link: "detail",
    },
    {
      label: "linkedin:",
      detail: "linkedin.com/in/carterwildenradt",
      href: "https://linkedin.com/in/carterwildenradt",
      link: "detail",
    },
  ],
};
