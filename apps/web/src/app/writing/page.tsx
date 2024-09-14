import { Text } from "@repo/ui/atoms";
import { TitleHeader } from "../../../../../packages/ui/src/elements";
import config from "@repo/ui/config";
import type { SearchParams } from "@/types/search-params";
import { PageWrapper } from "@/components/page";
import { PagePostsIndexClient } from "@/components/page/page-posts-index-client";
import type { PostsKind } from "@/components/post";

export default function WritingIndexPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const kind: PostsKind = "writing";
  const currentSort = (searchParams.sort as string) || kind;

  const heading = (
    <div className="space-y-2 text-balance lg:w-11/12">
      <Text as="h1" intent="title">
        If you have the words, you’ll find the way.
      </Text>
      <Text dim>
        Writing about creativity, design and complexity through the lens of
        attention, interfaces and systems composition. Signup for new posts{" "}
        <a className="link" href={config.SUBSTACK_URL}>
          here
        </a>
        .
      </Text>
    </div>
  );

  return (
    <PageWrapper>
      <TitleHeader>{heading}</TitleHeader>
      <PagePostsIndexClient initialSort={currentSort} kind={kind} />
    </PageWrapper>
  );
}
