import type { StaticImageData } from "next/image";

export type Project = {
    id: string,
    title: string,
    subtitle: string,
    image: {
        src: string,
        alt: string
    }
}

export interface Skill {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
}

export type ProjectCategory = "Integration" | "RPA" | "Frontend" | "Data";

export interface PortfolioProject {
  id: string;
  iconUrl: StaticImageData;
  theme: string;
  name: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  link: string;
}
