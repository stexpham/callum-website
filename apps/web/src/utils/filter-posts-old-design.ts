import { allPosts, type Post } from "contentlayer/generated";
import { format, isSameYear, parseISO } from "date-fns";
import { sortByCustomTitleOrder, sortByDate, sortByTitle } from "src/utils";
import { sortByCustomSlugOrder } from "src/utils";

const slugs = [
  "vana",
  "the-library-of-economic-possibility",
  "studio-round",
  "kalaurie",
  "replier",
  "anchor-ceramics",
  "the-instantaneous-language-of-beauty",
  "the-matter-of-taste",
];

const filteredPosts = slugs.map((slug) =>
  allPosts.find((post) => post.slug === slug),
);

const FP = sortByCustomSlugOrder(
  filteredPosts.filter((post): post is Post => post !== undefined),
  slugs,
);

export { FP };
