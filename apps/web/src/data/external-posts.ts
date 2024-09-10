interface ExternalPost {
  title: string;
  category: string;
  tags: string[];
  link: string;
  external: boolean;
}

export const externalPosts: ExternalPost[] = [
  {
    title: "Avari Capital Partners",
    category: "Project",
    tags: ["Design", "Frontend", "Backend"],
    link: "https://www.seachangecairns.com/",
    external: true,
  },
  {
    title: "Seachange Cairns",
    category: "Project",
    tags: ["Design", "Frontend", "Backend"],
    link: "https://www.seachangecairns.com/",
    external: true,
  },
];
