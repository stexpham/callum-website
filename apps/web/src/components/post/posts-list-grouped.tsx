import { Link } from "@repo/ui/next-link";
import { useMemo } from "react";
import { sortButtonStyle } from "@/components/page/sort-button";
import type { GroupedPosts } from "@/utils";
import type { Post } from "contentlayer/generated";
import { cx } from "~/cva.config";
import { CardImage, HeroCardWrapper } from "@/components/card";
import type { AspectRatio } from "@/components/media";
import { MediaWrapper } from "@/components/media";
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
      {sortedGroups.map(([group, posts], index) => (
        <div className="relative space-y-2" key={index}>
          <div
            className={cx(
              "sticky top-[calc(theme(spacing.navH)+theme(spacing.tabH))] z-[9] scroll-pt-[calc(theme(spacing.navH)+theme(spacing.tabH))] bg-canvas",
              hideFeaturedDotStyle
            )}
          >
            <div
              className={cx(
                sortButtonStyle,
                "h-[calc(theme(spacing.tabH)-9px)]"
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
      {sortedGroups.map(([group, posts], index) => (
        <div className="relative space-y-w4" key={index}>
          <div className="sticky top-[calc(theme(spacing.navH)+theme(spacing.tabH))] z-[9] bg-canvas">
            <div className={cx(sortButtonStyle, "X")}>{group}</div>
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
