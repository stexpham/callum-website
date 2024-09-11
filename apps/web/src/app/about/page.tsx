import { useMDXComponent } from "next-contentlayer/hooks";
import { Prose } from "@repo/ui/prose";
import { PageWrapper } from "src/components/page";
import { Avatar } from "~/src/components/elements/avatar";
import { allPosts } from "contentlayer/generated";
import { components } from "src/components/mdx";

const file = allPosts.filter(
  (p) => p.category === "home" && p.title.includes("gist")
);

export default function AboutPage() {
  const About = useMDXComponent(file[0]?.body.code ?? "");

  return (
    <PageWrapper>
      <div className="container pb-w20 pt-w12">
        <div className="pb-4">
          <Avatar />
        </div>
        <Prose>
          <About components={components} />
        </Prose>

        {/* Render `no-bullets` for Tailwind to see */}
        <div className="no-bullets sr-only" />
      </div>
    </PageWrapper>
  );
}
