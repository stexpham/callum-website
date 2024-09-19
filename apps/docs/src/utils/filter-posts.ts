import { isSameYear, parseISO } from "date-fns";
import { type Post } from "contentlayer/generated";
import { sortByDate, sortByTitle } from "./sort-posts";

const publishedPosts = (posts: Post[]) => posts.filter((p) => !p.draft);

// every post
const everyPost = (posts: Post[]) => {
  const P = posts.filter((p) => !p.draft);
  return sortByDate(P);
};

// by title
const postsAZ = (posts: Post[]) => publishedPosts(sortByTitle(posts));
const postsZA = (posts: Post[]) => publishedPosts(sortByTitle(posts, "desc"));

// by category
const postsByCategory = (category: Post["category"], posts: Post[]) => {
  const FP = everyPost(posts);
  const P = FP.filter((p) => p.category === category);
  return sortByDate(P);
};

// by categories
const postsByCategories = (categories: Post["category"][], posts: Post[]) => {
  const FP = everyPost(posts);
  const P = FP.filter((p) => categories.includes(p.category));
  return sortByDate(P);
};

// by tags
const postsByTag = (posts: Post[], tag: string) => {
  const FP = everyPost(posts);
  const P = FP.filter((p) => p.tags && p.tags.includes(tag));
  return sortByDate(P);
};

// by year
const postsByYear = (posts: Post[], date: string) => {
  const FP = everyPost(posts);
  const P = FP.filter((p) => isSameYear(parseISO(p.date), parseISO(date)));
  return sortByDate(P);
};

export {
  everyPost,
  postsAZ,
  postsByCategories,
  postsByCategory,
  postsByTag,
  postsByYear,
  postsZA,
};
