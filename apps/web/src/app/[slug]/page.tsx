import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { PagePost } from "src/components/page";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default function PostPage({ params }: { params: Params }) {
  const slugPost = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );

  if (!slugPost) {
    notFound();
  }

  return <PagePost post={slugPost} />;
}
