// MDX won't render classes dynamically, so set video aspects with a type
// NB. NextImage handles aspect ratio, we only need to do this for video
// PS. cleared-demo & cleared-square are ugly but required legacy…

export type AspectRatio =
  | "square"
  | "video"
  | "2-1"
  | "25-10"
  | "430-932"
  | "1080-667" // almost 16:10
  | "1224-1080"
  | "1440-860"
  | "1440-880"
  | "1440-900"
  | "1440-1000" // same as 1920-1333
  | "1440-1200"
  | "1552-1080"
  | "1600-900" // 16:9
  | "1600-1000" // 16:10
  | "1728-1080" // 16:10
  | "1920-1080" // 16:9
  | "1920-1260"
  | "1920-1333" // same as 1440-1000
  | "1944-1080" // same as 1440-1000
  | "2000-1334"
  | "2074-1440"
  | "cleared-demo"
  | "cleared-square"
  | "cleared-commits";

const aspectMap: Record<AspectRatio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  "2-1": "aspect-[2/1]",
  "25-10": "aspect-[25/10]",
  "430-932": "aspect-[430/932]",
  "1080-667": "aspect-[1080/667]",
  "1224-1080": "aspect-[1224/1080]",
  "1440-860": "aspect-[1440/860]",
  "1440-880": "aspect-[1440/880]",
  "1440-900": "aspect-[1440/900]",
  "1440-1000": "aspect-[1440/1000]",
  "1440-1200": "aspect-[1440/1200]",
  "1552-1080": "aspect-[1552/1080]",
  "1600-900": "aspect-video",
  "1600-1000": "aspect-[1600/1000]",
  "1728-1080": "aspect-[1728/1080]",
  "1920-1080": "aspect-[1920/1080]",
  "1920-1260": "aspect-[1920/1260]",
  "1920-1333": "aspect-[1920/1333]",
  "1944-1080": "aspect-[1944/1080]",
  "2000-1334": "aspect-[2000/1334]",
  "2074-1440": "aspect-[2074/1440]",
  "cleared-demo": "aspect-[804/555]",
  "cleared-square": "aspect-[1996/1592]",
  "cleared-commits": "aspect-[804/211]",
};

export const mediaAspect = (aspect: string): string => {
  if (typeof aspect !== "string" || aspect.trim() === "") {
    return "aspect-auto";
  }
  return aspectMap[aspect as AspectRatio] || "aspect-video";
};
