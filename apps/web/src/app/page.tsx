import { Text } from "@repo/ui/atoms";
import type { CustomPost } from "@/app/(home)";
import { HomeSnapCarousel, extraCard } from "@/app/(home)";
import { Available, Avatar, ContactIcons } from "~/src/components/elements";
import { Mdx } from "@/components/mdx";
import { PageWrapper } from "@/components/page";
import { featuredSlugs } from "@/data";
import { sortByCustomSlugOrder } from "@/utils";
import { allPosts, type Post } from "contentlayer/generated";

const filteredPosts = featuredSlugs.map((slug) =>
  allPosts.find((post) => post.slug === slug)
);

const featuredPosts = sortByCustomSlugOrder(
  filteredPosts.filter((post): post is Post => post !== undefined),
  featuredSlugs
);

const allFeaturedPosts: CustomPost[] = [...featuredPosts, extraCard];

const copyPosts = allPosts.filter(
  (p) => p.category === "home" && p.title.includes("intro")
);

export default function HomePage(): JSX.Element {
  return (
    <PageWrapper>
      {/* make this div fill the screen on mobile */}
      <div className="min-h-screen sm:min-h-fit">
        <header className="container pb-w12 pt-w12">
          <div className="pb-w4">
            <Avatar />
          </div>
          <div className="space-y-2 lg:w-10/12">
            <Text as="h1" intent="title">
              Hi, I&rsquo;m Callum. I make beautiful hypertext products.
            </Text>
            <Mdx code={copyPosts[0]?.body.code ?? ""}>
              <div className="pb-1">
                <Available />
              </div>
              <ContactIcons className="pt-0.5" />
            </Mdx>
          </div>
        </header>

        <main className="relative pb-w20" id="work">
          <HomeSnapCarousel posts={allFeaturedPosts} />
        </main>
      </div>
    </PageWrapper>
  );
}
