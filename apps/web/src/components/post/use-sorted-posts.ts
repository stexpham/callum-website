import { useMemo } from "react";
import { allPosts } from "contentlayer/generated";
import {
  everyPost,
  featuredProjectPosts,
  featuredWritingPosts,
  groupPostsByTag,
  groupPostsByYear,
  postsAZ,
  postsByCategory,
} from "@/utils";

const posts = everyPost(allPosts).filter((post) => post.libraryType === "post");
const writing = postsByCategory("writing", posts);
const projects = postsByCategory("projects", posts);

export type PostsKind = "projects" | "writing";

export const useSortedPosts = (kind: PostsKind) => {
  return useMemo(
    () => ({
      [kind]: kind === "projects" ? projects : writing,
      projects: featuredProjectPosts(kind === "projects" ? projects : writing),
      writing: featuredWritingPosts(kind === "projects" ? projects : writing),
      year: groupPostsByYear(kind === "projects" ? projects : writing),
      topic: groupPostsByTag(kind === "projects" ? projects : writing),
      "a-to-z": postsAZ(kind === "projects" ? projects : writing),
      // chrono: kind === "projects" ? projects : writing,
    }),
    [kind]
  );
};
