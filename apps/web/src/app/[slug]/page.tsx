import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { PagePost } from "src/components/page";
import config from "@/config";

interface Params {
  slug: string;
}

export default function PostPage({ params }: { params: Params }) {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <PagePost post={post} />;
}

export function generateStaticParams(): Params[] {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export function generateMetadata({ params }: { params: Params }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title: postTitle,
    date: publishedTime,
    lede: description,
    // assets,
  } = post;
  const title = `${postTitle} —— Callum Flack`;
  // const ogImage = assets?.[0]?.src
  //   ? `${config.PUBLIC_URL}${assets[0].src}`
  //   : `${config.PUBLIC_URL}/og?title=${encodeURIComponent(title)}`;
  const ogImage = `${config.PUBLIC_URL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${config.PUBLIC_URL}/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
