import { Text } from "@repo/ui/atoms";
import { TitleHeader } from "@repo/ui/elements";
import type { SearchParams } from "@/types/search-params";
import { PageWrapper, PagePostsIndexClient } from "@/components/page";
import type { PostsKind } from "@/components/post";
export const runtime = "experimental-edge";
export default function WorkIndexPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const kind: PostsKind = "projects";
  const currentSort = (searchParams.sort as string) || kind;

  const heading = (
    <div className="space-y-2 text-balance lg:w-11/12">
      <Text as="h1" intent="title">
        {/* Design & programming services since 1998. */}
        Designing since 1998. Coding since 2010.
      </Text>
      <Text dim>
        The value of good design is only realised if you have an engineer
        capable of discerning the details in code (or if you&apos;re lucky,
        they&apos;re one and the same).
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
