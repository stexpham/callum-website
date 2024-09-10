import { useMDXComponent } from "next-contentlayer/hooks";
import { Prose } from "@repo/ui/prose";
import { Avatar } from "@/components/avatar";
import { Available, components } from "@/components/mdx";
import { PageWrapper } from "@/components/page";
import { ContactIcons } from "@/components/site/contact-icons";
import { allPosts, type Post } from "contentlayer/generated";
import { sortByCustomSlugOrder } from "@/utils";
import { featuredSlugs } from "@/data";
import { HomeSnapCarousel } from "@/app/(home)/home-snap-carousel";
import type { CustomPost } from "@/app/(home)/extra-card";
import { extraCard } from "@/app/(home)/extra-card";

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
  const Intro = useMDXComponent(copyPosts[0]?.body.code ?? "");

  return (
    <PageWrapper>
      {/* make this div fill the screen on mobile */}
      <div className="min-h-screen sm:min-h-fit">
        <header className="container pb-w12 pt-w12">
          <div className="pb-4">
            <Avatar />
          </div>
          <div className="space-y-2 lg:w-10/12">
            <h1 className="text-title font-medium">
              Hi, I&lsquo;m Callum. I make beautiful hypertext products.
            </h1>
            <Prose>
              <Intro components={components} />
              <Available />
              <ContactIcons className="pt-0.5" />
            </Prose>
          </div>
        </header>

        <main className="relative pb-w20" id="work">
          <HomeSnapCarousel posts={allFeaturedPosts} />
        </main>
      </div>
    </PageWrapper>
  );
}
