import { useMDXComponent } from "next-contentlayer2/hooks";
import { Link } from "@repo/ui/next-link";
import { Prose } from "@repo/ui/prose";
import { TitleHeader } from "@repo/ui/title-header";
import { formatPostDate } from "@repo/ui/post-utils";
import { components } from "@repo/ui/mdx-components";
import type { Post } from "contentlayer/generated";

interface PostExcerptProps {
  post: Post;
}

export function PostExcerpt({ post }: PostExcerptProps) {
  // Slice the MDX content
  const excerptCode = post.body.code.slice(0, 500);
  // const MDXContent = useMDXComponent(excerptCode);

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
