import { compareDesc } from "date-fns";
import { PageWrapper } from "@/components/page-wrapper";
import { PostExcerpt } from "@/components/post-excerpt";
import { allPosts } from "contentlayer/generated";

export default function HomePage(): JSX.Element {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <PageWrapper>
      <div className="min-h-screen sm:min-h-fit pt-w12">
        <main className="relative pb-w20 space-y-w20 container" id="posts">
          {posts.map((post) => (
            <PostExcerpt key={post._id} post={post} />
          ))}
        </main>
      </div>
    </PageWrapper>
  );
}
