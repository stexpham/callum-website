import { Text, spacingVariants } from "@repo/ui/atoms";
import { TitleHeader } from "@repo/ui/elements";
import { cx } from "cva";
import { PageWrapper } from "@/components/page";
// import type { PostsKind } from "@/components/post";
// import type { SearchParams } from "@/types/search-params";
import { GraphicsGrid } from "./graphics-grid";
import { getProjects } from "./actions";

export default async function GraphicsIndexPage() {
  const projects = await getProjects();

  // add filters?
  // searchParams: SearchParams;
  // const kind: PostsKind = "projects";
  // const currentSort = (searchParams.sort as string) || kind;

  const heading = (
    <div className="space-y-2 text-balance lg:w-11/12">
      <Text as="h1" intent="title">
        A history of graphics.
      </Text>
      <Text dim>Quote about taste & fun goes here…</Text>
    </div>
  );

  return (
    <PageWrapper>
      <TitleHeader>{heading}</TitleHeader>
      {/* <PagePostsIndexClient initialSort={currentSort} kind={kind} /> */}
      <main
        className={cx(
          "container max-w-hero-px pt-tab",
          spacingVariants({ intent: "b-xl" })
        )}
      >
        <GraphicsGrid projects={projects} />
      </main>
    </PageWrapper>
  );
}
