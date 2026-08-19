import pawguardMockup from "../../../../../assets/Projects/pawguard/pawguard-project.png";

import luminaDb from "../../../../../assets/Projects/pawguard/image.png";

export interface ProjectSlide {
  label: string;
  caption: string;
  imgUrl: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  scope: string;
  techTags: string[];
  desc: string;
  liveUrl: string;
  githubUrl: string;
  slides: ProjectSlide[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "pawguard",
    name: "PawGuard",
    scope: "Persistent State Modeling",
    techTags: ["React 18", "TypeScript", "Supabase", "Zustand", "PostgreSQL"],
    desc: "A modern pet insurance web application customized for the Peruvian market. Implements a multi-step smart onboarding flow with Zustand persistent state tracking, interactive maps via React Leaflet, and automatic session token authentication using Supabase PostgreSQL RLS policies.",
    liveUrl: "https://pawguard-pet-insurance.vercel.app/",
    githubUrl: "https://github.com/elynzx/pawguard-pet-insurance",
    slides: [
      {
        label: "01 USER RESPONSIVE CANVAS",
        caption:
          "Mobile-first onboarding multidevice architecture customized with custom curves and highly readable accessibility typography lines.",
        imgUrl: pawguardMockup,
      },
      {
        label: "02 STATE MACHINES & ONBOARDING LIFECYCLE",
        caption:
          "Zustand global persistence sequence tracker mapping data flows across fields: Owner Details → Pet Registry → Plan Filters → Supabase Authentication Checkout.",
        imgUrl: luminaDb,
      },
    ],
  },
];
