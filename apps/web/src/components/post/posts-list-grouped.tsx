import { Link } from "@repo/ui/next-link";
import { useMemo } from "react";
import { cx } from "cva";
import type { AspectRatio } from "@repo/ui/media-aspect";
import { MediaWrapper } from "@repo/ui/media-wrapper";
import { sortButtonStyle } from "@/components/page/sort-button";
import type { GroupedPosts } from "@/utils";
import type { Post } from "contentlayer/generated";
import { CardImage, HeroCardWrapper } from "@/components/card";
import { PostLinkContent } from "./post-link-content";
import { hideFeaturedDotStyle } from "./post.styles";

interface PostsListGroupedProps {
  groupedPosts: GroupedPosts;
  sortOrder?: string[];
}

export const PostsListGrouped = ({
  groupedPosts,
  sortOrder,
}: PostsListGroupedProps) => {
  const sortedGroups = useMemo(() => {
    if (sortOrder) {
      return sortOrder
        .map((group) => [group, groupedPosts[group]])
        .filter(([, posts]) => Array.isArray(posts)) as [string, Post[]][];
    }
    return Object.entries(groupedPosts).sort(
      (a, b) => parseInt(b[0]) - parseInt(a[0])
    );
  }, [groupedPosts, sortOrder]);

  return (
    <>
      {sortedGroups.map(([group, posts]) => (
        <div
          className={cx(
            "relative space-y-2"
            // "scroll-pt-[calc(theme(spacing.nav)+theme(spacing.tab))]"
          )}
          key={group}
        >
          <div
            className={cx(
              "PostsListGrouped sticky z-[9] bg-canvas",
              "top-[calc(theme(spacing.nav)+theme(spacing.tab))]",
              hideFeaturedDotStyle
            )}
          >
            <div
              className={cx(
                sortButtonStyle,
                "h-[calc(theme(spacing.tab)-9px)]",
                // 42px is the height of the featured dot + padding
                // No idea why scroll-mt works here but no on the parent div…
                "scroll-mt-[calc(theme(spacing.nav)+theme(spacing.tab)+42px)]"
              )}
              id={group}
            >
              {group}
            </div>
            <hr className="-mt-px" />
          </div>
          <div className="pb-1.5">
            {Array.isArray(posts) &&
              posts.map((post: Post) => (
                <Link href={post.thumbnailLink ?? post.slug} key={post._id}>
                  <PostLinkContent
                    isComingSoon={false}
                    isFeatured={post.tags?.includes("featured")}
                    isLibrary={post.category === "library"}
                    post={post}
                  />
                </Link>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const PostsSquaresGrouped = ({
  groupedPosts,
  sortOrder,
}: PostsListGroupedProps) => {
  const sortedGroups = useMemo(() => {
    if (sortOrder) {
      return sortOrder
        .map((group) => [group, groupedPosts[group]])
        .filter(([, posts]) => Array.isArray(posts)) as [string, Post[]][];
    }
    return Object.entries(groupedPosts).sort(
      (a, b) => parseInt(b[0]) - parseInt(a[0])
    );
  }, [groupedPosts, sortOrder]);

  return (
    <>
      {sortedGroups.map(([group, posts]) => (
        <div className="relative space-y-w4" key={group}>
          <div className="sticky top-[calc(theme(spacing.nav)+theme(spacing.tab))] z-[9] bg-canvas">
            <div className={cx(sortButtonStyle)}>{group}</div>
            <hr className="-mt-px" />
          </div>
          <div className="space-y-w24 pb-2.5">
            {Array.isArray(posts) &&
              posts.map((post: Post) => (
                // <HomeCard
                //   key={post.title}
                //   post={post}
                //   className=""
                //   captionClassName="pt-w4"
                // >
                //   <HeroCard
                //     post={post}
                //     theme="default"
                //     aspectClassName="aspect-[1440/880]"
                //   ></HeroCard>
                // </HomeCard>
                <HeroCardWrapper
                  captionClassName="absolute bottom-[-2em] translate-y-[0.6em] pt-1.5"
                  className="rounded-[9px] bg-background lg:p-[7em]"
                  key={post.title}
                  post={post}
                >
                  <MediaWrapper aspect={"video" as AspectRatio}>
                    {post.assets && post.assets.length > 0 ? (
                      <CardImage asset={post.assets[0]} />
                    ) : null}
                  </MediaWrapper>
                </HeroCardWrapper>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};
