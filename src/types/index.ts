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


