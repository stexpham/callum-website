type HeroCardType = {
  icon?: string;
  title: string;
  image: string;
  video?: string;
  date: string;
  link: string;
};

// Bunny media URLs can use cfd-media.b-cdn.net OR cdn.callumflack.design

const heroCards = [
  {
    title: "Vana Portrait",
    video: "https://cdn.callumflack.design/vana-portrait-discover-01.mp4",
    image: "/images/video-poster-portrait.jpg",
    // image: "/images/post-prototype-iteration-mountain-2.jpg",
    date: "2018-09-24",
    link: "/vana",
  },
  {
    title: "Studio Round website",
    video: "https://cdn.callumflack.design/studio-round-01.mp4",
    image: "/images/video-poster-studio-round.jpg",
    // image: "/images/post-prototype-iteration-mountain-2.jpg",
    date: "2018-09-24",
    link: "/studio-round",
  },
  {
    title: "The Library of Economic Possibility",
    video:
      "https://cdn.callumflack.design/The_Library_of_Economic_Possibility_home_page_4_November_2022.mp4",
    image: "/images/lep-overview-poster-1600-1000.jpg",
    // image: "/images/post-prototype-iteration-mountain-2.jpg",
    date: "2018-09-24",
    link: "/the-library-of-economic-possibility",
  },
  {
    title: "Kalaurie",
    video: "https://cdn.callumflack.design/Kalaurie-2023-05-01.mp4",
    image: "/images/video-poster-kalaurie.jpg",
    // image: "/images/post-prototype-iteration-mountain-2.jpg",
    date: "2019-12-18",
    link: "/kalaurie",
  },
  {
    title: "The difference between iteration and prototyping",
    image: "/images/post-prototype-iteration-mountain-2.jpg",
    date: "2023-02-06",
    link: "/iteration-and-prototyping",
  },
];

export type { HeroCardType };
export { heroCards };
