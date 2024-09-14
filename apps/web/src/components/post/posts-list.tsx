import { Link } from "../../../../../packages/ui/src/atoms/next-link";
import { cx } from "cva";
import type { PostsKind } from "@/components/post";
import type { GroupedPosts } from "@/utils";
import { type Post } from "contentlayer/generated";
import { CardImage, HeroCardWrapper } from "../card";
import { PostLinkBlock } from "./post-link-block";
import { PostLinkContent } from "./post-link-content";
import { PostsListGrouped, PostsSquaresGrouped } from "./posts-list-grouped";

interface PostsListProps {
  kind: PostsKind;
  sortBy?: string | null;
  sortedPostsMap: Record<string, Post[] | GroupedPosts>;
  wrapperClassName?: string;
}

export const PostsList = ({
  kind,
  sortBy,
  sortedPostsMap,
  wrapperClassName,
}: PostsListProps) => {
  const sorted = sortedPostsMap[sortBy ?? kind];

  return (
    <div className={wrapperClassName}>
      {["year", "topic"].includes(sortBy ?? "") ? (
        <PostsListGrouped groupedPosts={sorted as GroupedPosts} />
      ) : (
        (sorted as Post[]).map((post: Post) => (
          <Link
            href={post.thumbnailLink ? post.thumbnailLink : post.slug}
            key={post._id}
          >
            <PostLinkContent
              isFeatured={post.tags?.includes("featured")}
              post={post}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export const PostsBlockList = ({
  kind,
  sortBy,
  sortedPostsMap,
  wrapperClassName,
}: PostsListProps) => {
  const sorted = sortedPostsMap[sortBy ?? kind];

  return (
    <div className={wrapperClassName}>
      {["year", "topic"].includes(sortBy ?? "") ? (
        <PostsListGrouped groupedPosts={sorted as GroupedPosts} />
      ) : (
        (sorted as Post[]).map((post: Post) => (
          <Link
            href={post.thumbnailLink ? post.thumbnailLink : post.slug}
            key={post._id}
          >
            <PostLinkBlock post={post} />
          </Link>
        ))
      )}
    </div>
  );
};

export const PostsSquares = ({
  kind,
  sortBy,
  sortedPostsMap,
  wrapperClassName,
}: PostsListProps) => {
  const sorted = sortedPostsMap[sortBy ?? kind];

  return (
    <div className={cx("pt-w8", wrapperClassName)}>
      {["year", "topic"].includes(sortBy ?? "") ? (
        <PostsSquaresGrouped groupedPosts={sorted as GroupedPosts} />
      ) : (
        (sorted as Post[]).map((post: Post) => (
          <HeroCardWrapper
            captionClassName="absolute bottom-[-2em] translate-y-[0.6em] pt-1.5"
            className="rounded-[9px] bg-background lg:p-[7em]"
            key={post.title}
            post={post}
          >
            {post.assets && post.assets.length > 0 ? (
              <CardImage asset={post.assets[0]} />
            ) : null}
          </HeroCardWrapper>
        ))
      )}
    </div>
  );
};
