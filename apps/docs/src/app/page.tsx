// import { useMDXComponent } from "next-contentlayer2/hooks";
// import { Prose } from "@repo/ui/prose";
// import { Avatar, Available, ContactIcons } from "~/src/components/elements";
import { Text } from "@repo/ui/text";
import { Link } from "@repo/ui/next-link";
import { compareDesc } from "date-fns";
import { TitleHeader } from "@repo/ui/title-header";
// import { getYear, isVideoFile, splitAspect } from "@repo/ui/post-utils";
import { allPosts, type Post } from "contentlayer/generated";
import { PageWrapper } from "@/components/page-wrapper";

// import { components } from "@/components/mdx";
// import { sortByCustomSlugOrder } from "@/utils";
// import { featuredSlugs } from "@/data";

// const filteredPosts = featuredSlugs.map((slug) =>
//   allPosts.find((post) => post.slug === slug)
// );

// const featuredPosts = sortByCustomSlugOrder(
//   filteredPosts.filter((post): post is Post => post !== undefined),
//   featuredSlugs
// );

// const allFeaturedPosts: CustomPost[] = [...featuredPosts, extraCard];

// const copyPosts = allPosts.filter(
//   (p) => p.category === "home" && p.title.includes("intro")
// );

export default function HomePage(): JSX.Element {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  console.log(posts);

  return (
    <PageWrapper>
      <div className="min-h-screen sm:min-h-fit">
        <header className="container pb-w12 pt-w12">
          <div className="space-y-2 lg:w-10/12">
            <Text as="h1" intent="title">
              Hi, I&rsquo;m Callum. I make beautiful hypertext products.
            </Text>
          </div>
        </header>

        <main className="relative pb-w20 container" id="posts">
          {/* <HomeSnapCarousel posts={allFeaturedPosts} /> */}
          {posts.map((post) => (
            <Link href={post.slug} key={post._id}>
              <TitleHeader isContained subheading={post.date}>
                {post.title}
              </TitleHeader>
            </Link>
          ))}
        </main>
      </div>
    </PageWrapper>
  );
}
