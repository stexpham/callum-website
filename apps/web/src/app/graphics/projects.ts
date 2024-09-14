import path from "node:path";
import sizeOf from "image-size";

export interface ProjectImage {
  image: string;
  height: number;
  width: number;
}

export interface Project extends ProjectImage {
  title: string;
  date: string;
  project: string;
  caseStudyLink?: string;
}

function getImageSize(imagePath: string) {
  const fullPath = path.join(process.cwd(), "public", imagePath);
  const dimensions = sizeOf(fullPath);
  return { width: dimensions.width || 0, height: dimensions.height || 0 };
}

const projectsData = [
  {
    title: "Project 1",
    date: "2023-01-01",
    project: "Web App",
    image: "/images/_sagatiba.jpg",
  },
  {
    title: "Project 2",
    date: "2023-01-01",
    project: "Web App",
    image: "/images/oceanblueliving-desktop-layouts.png",
  },
  {
    title: "Project 3",
    date: "2023-01-01",
    project: "Web App",
    image: "/images/phn-guide.png",
  },
  {
    title: "Project 4",
    date: "2023-01-01",
    project: "Web App",
    image: "/images/portt-home-1440.jpg",
  },
  {
    title: "Project 5",
    date: "2023-01-01",
    project: "Web App",
    image: "/images/video-poster-kalaurie.jpg",
    caseStudyLink: "/kalaurie",
  },
];

const projects: Project[] = projectsData.map((project) => {
  const { width, height } = getImageSize(project.image);
  return { ...project, width, height };
});

export default projects;
