"use client";

import type { ReadonlyURLSearchParams } from "next/navigation";
import { Fragment, useState } from "react";
import type { PostsKind } from "@/components/post";
import { PostsBlockList, PostsList, hideFeaturedDot } from "@/components/post";
import { TitleHeader } from "@/components/title-header";
import { cx } from "~/cva.config";
import { useSortedPosts } from "../post/sorted-posts";
import { ListHeader } from "./list-header";
import { PageWrapper } from "./page-wrapper";
import { StyledSortButton } from "./sort-button";

export const PagePostsIndex = ({
  kind,
  searchParams,
  heading,
}: {
  kind: PostsKind;
  searchParams: ReadonlyURLSearchParams;
  heading: string | React.ReactNode;
}) => {
  const [showGrid, setShowGrid] = useState(
    !searchParams.get("sort") ||
      searchParams.get("sort") === kind ||
      searchParams.get("sort") === "projects" ||
      searchParams.get("sort") === "writing"
  );

  // Must match a string from sortedPosts.ts
  const sortedPostsMap = useSortedPosts(kind);

  // const sortBy = Object.keys(sortedPostsMap);
  const sortBy = [kind, "year", "topic", "a-to-z"];
  const currentSort = searchParams.get("sort") || kind;

  // console.log("PagePostsIndex posts", posts);
  // console.log("currentSort", currentSort);

  const handleSortButtonClick = (sortKind: string) => {
    if (sortKind === "projects" || sortKind === "writing") {
      setShowGrid((prev) => !prev);
    } else {
      setShowGrid(false);
    }
  };

  return (
    <PageWrapper>
      <TitleHeader>{heading}</TitleHeader>

      <main className="container relative pb-w24">
        <ListHeader
          className={cx(
            "top-navH translate-y-px transform",
            hideFeaturedDot
            // For PostsSquares only
            // (!currentSort ||
            //   currentSort === "projects" ||
            //   currentSort === "writing") && [
            //   mediaWrapperStyle.superOutset,
            //   "[&>div]:container",
            // ],
          )}
          // rhsElement={
          //   <div className="flex items-center gap-2.5">
          //     <button
          //       onClick={() => setShowGrid(false)}
          //       className={cx(
          //         buttonVariants({ variant: "icon", size: "icon" }),
          //         showGrid ? "text-solid" : "bg-background",
          //       )}
          //     >
          //       <CarbonTextAlignJustify className="size-em" />
          //     </button>
          //     <button
          //       onClick={() => setShowGrid(true)}
          //       className={cx(
          //         buttonVariants({ variant: "icon", size: "icon" }),
          //         !showGrid ? "text-solid" : "bg-background",
          //       )}
          //     >
          //       <CarbonCenterToFit className="size-em" />
          //     </button>
          //   </div>
          // }
          // rhsElement={
          //   currentSort !== kind && (
          //     // Show a start here" indicator for the featuredDots
          //     <div className={cx(sortButtonStyle, "pr-0")}>Start here</div>
          //   )
          // }
        >
          {sortBy.map((sort) => (
            <Fragment key={sort}>
              <StyledSortButton
                initialSortBy={kind}
                key={sort}
                onClick={() => handleSortButtonClick(sort)}
                searchParamsValue={currentSort}
                sortBy={sort}
              >
                {sort === "projects" || sort === "writing"
                  ? " Selected"
                  : sort.replace(/-/g, " ")}
              </StyledSortButton>
              {/* {index === 0 && (
                <hr className="hr-vertical h-[18px] translate-y-[-2px] transform" />
              )} */}
            </Fragment>
          ))}
        </ListHeader>

        {/* only kind of "projects" or "writing" will show grid */}
        {showGrid ? (
          // <MemoizedPostsSquares
          //   kind={kind}
          //   sortBy={currentSort}
          //   sortedPostsMap={sortedPostsMap}
          //   wrapperClassName={cx(
          //     "flex flex-col gap-w24 pt-w12",
          //     mediaWrapperStyle.superOutset,
          //   )}
          // />
          <PostsBlockList
            kind={kind}
            sortBy={currentSort}
            sortedPostsMap={sortedPostsMap}
            wrapperClassName={cx("flex flex-col gap-w8 pt-w8")}
          />
        ) : (
          <PostsList
            kind={kind}
            sortBy={currentSort}
            sortedPostsMap={sortedPostsMap}
            wrapperClassName="pt-3"
          />
        )}
      </main>
    </PageWrapper>
  );
};
