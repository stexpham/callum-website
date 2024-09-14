import { Link } from "@repo/ui/atoms";
import { Prose, TitleHeader } from "@repo/ui/elements";
import { formatPostDate } from "@repo/ui/utils";
import type { Post } from "contentlayer/generated";

interface PostExcerptProps {
  post: Post;
}

export function PostExcerpt({ post }: PostExcerptProps) {
  return (
    <div>
      <Link href={post.slug}>
        <TitleHeader
          className="pb-w4"
          isContained
          subheading={formatPostDate(post.date)}
        >
          {post.title}
        </TitleHeader>
      </Link>
      <Prose>
        <div className="excerpt">
          {/* <MDXContent components={components} /> */}
          {/* {post.body.code.length > 500 ? "..." : ""} */}
          {post.excerpt}
        </div>
      </Prose>
    </div>
  );
}
