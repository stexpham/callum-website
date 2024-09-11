import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";

type SearchParams = Record<string, string | string[] | undefined>;

export const generateMetadata = ({
  params,
}: {
  params: SearchParams;
}): Metadata => {
  const slugPost = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );

  return {
    title: `${slugPost?.title} — Callum Flack Design & Development`,
    description: slugPost?.lede,
    twitter: {
      title: `${slugPost?.title} — Callum Flack Design & Development`,
      description: slugPost?.lede,
    },
  };
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
