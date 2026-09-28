export const SECTION_IDS = ["about", "projects", "contact"] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export type SectionEntry = {
  label: string;
  detail?: string;
  href?: string;
  link?: "label" | "detail";
};

type SectionLine = { text: string } | SectionEntry;

type Section = {
  label: string;
  lines: SectionLine[];
};

export const SECTIONS: Record<SectionId, Section> = {
  about: {
    label: "About",
    lines: [
      { text: "Hello my name is Carter, I am a full-stack software developer." },
      {
        text: "I currently work at StarPlus Energy, a joint venture between Samsung SDI and Stellantis, where I analyze and debug issues within their MES platform and support the deployment and validation of software changes in a production manufacturing ecosystem.",
      },
      {
        text: "I build web apps, machine-learning projects, and video games in my free time. I particularly enjoy designing backend systems and APIs.",
      },
      {
        text: "Outside of development, I enjoy traveling, longboarding, and hiking.",
      },
      {
        text: "I'm always open to new opportunities, feel free to reach out to me via email or LinkedIn if you would like to connect.",
      },
    ],
  },
  projects: {
    label: "Projects",
    lines: [
      {
        label: "carterwildenradt.dev",
        detail: "Next.js, Typescript, Tailwind",
        href: "https://carterwildenradt.dev",
      },
      {
        label: "Hotel Listing API",
        detail: "C#, ASP.NET, SQL, EF CORE",
        href: "https://github.com/cartersw/hotel-listing-api",
      },
      {
        label: "Neural Chickens",
        detail: "C#, ASP.NET, SQL, EF CORE, Next.js, TypeScript, Tailwind",
        href: "https://github.com/cartersw/neural-chickens",
      },
      {
        label: "Gameplay Imitation Learning System",
        detail: "Python, Go, C++",
        href: "https://github.com/cartersw/gameplay-imitation-learner",
      },
      {
        label: "Bloxdle",
        detail: "Lua",
        href: "https://github.com/cartersw/bloxdle",
      },
      {
        label: "Amazondle",
        detail: "Vite, TypeScript, Tailwind",
        href: "https://github.com/cartersw/Amazondle",
      },
    ],
  },
  contact: {
    label: "Contact",
    lines: [
      {
        label: "Email:",
        detail: "carterwildenradt@gmail.com",
        href: "mailto:carterwildenradt@gmail.com",
        link: "detail",
      },
      {
        label: "GitHub:",
        detail: "github.com/cartersw",
        href: "https://github.com/cartersw",
        link: "detail",
      },
      {
        label: "LinkedIn:",
        detail: "linkedin.com/in/carterwildenradt",
        href: "https://linkedin.com/in/carterwildenradt",
        link: "detail",
      },
    ],
  },
};
