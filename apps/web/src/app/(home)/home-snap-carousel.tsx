"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";
import { cx } from "cva";
import { SnapCarousel, SnapCarouselItem } from "@repo/ui/composites";
import type { AspectRatio } from "@repo/ui/media";
import { MediaDialogBasic, MediaWrapper } from "@repo/ui/media";
import { SnapCard, CardImage } from "@/components/card";
import type { CustomPost } from "./extra-card";
import {
  SnapCarouselInDialog,
  HomeSnapDialogClose,
} from "./snap-carousel-in-dialog";
import { homeCarouselStyles } from "./home-carousel-styles";
import { CardInDialog } from "./card-in-dialog";

const snapCardStyle = "!w-inset-full [@media(min-width:620px)]:!w-[380px]";

export const HomeSnapCarousel = ({ posts }: { posts: CustomPost[] }) => (
  <Suspense fallback={<>Loading…</>}>
    <SnapCarousel<CustomPost>
      classes={{
        rootClassName: cx(homeCarouselStyles.root),
        scrollClassName: cx(homeCarouselStyles.scroll),
        controlsClassName: cx(homeCarouselStyles.control),
      }}
      items={posts}
      renderItem={({ item, isSnapPoint, isActive }) => {
        if (item.isCustom) {
          return (
            <SnapCarouselItem
              isActive={isActive}
              isSnapPoint={isSnapPoint}
              key={item.slug}
            >
              <SnapCard
                className={cx(snapCardStyle, "CUSTOM")}
                key={item.title}
                post={item}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-canvas">
                  <h2 className="flex items-center gap-1 text-left text-base font-medium">
                    {item.title}
                    <ArrowRightIcon className="size-em" />
                  </h2>
                </div>
              </SnapCard>
            </SnapCarouselItem>
          );
        }

        const showDialogCarousel = item.assets && item.assets.length > 1;

        return (
          <SnapCarouselItem
            isActive={isActive}
            isSnapPoint={isSnapPoint}
            key={item.slug}
          >
            {/* 
            NB! thumbnail aspect (1st asset) must always be 1.6 here
            aspect={(item.assets[0].aspect as AspectRatio) ?? "video"} 
          */}
            <MediaDialogBasic
              aspect={item.assets?.[0]?.aspect as AspectRatio}
              buttonNode={
                <SnapCard
                  className={cx(
                    snapCardStyle,
                    item.category === "projects" && "hover:cursor-zoom-in"
                  )}
                  key={item.title}
                  post={item}
                />
              }
              contentClassName={
                showDialogCarousel
                  ? "!left-0 !block !max-w-[unset] !translate-x-0 !px-0"
                  : undefined
              }
              title={item.title}
            >
              <CardInDialog
                captionClassName={
                  showDialogCarousel ? "container max-w-hero-px" : undefined
                }
                closeNode={
                  !showDialogCarousel && (
                    // translate-y-[0.25em] transform
                    <div className="absolute right-0 top-inset">
                      <HomeSnapDialogClose />
                    </div>
                  )
                }
                key={item.title}
                post={item}
              >
                {item.assets && item.assets.length > 1 ? (
                  <SnapCarouselInDialog assets={item.assets} />
                ) : (
                  <>
                    {item.assets && item.assets.length > 0 ? (
                      <MediaWrapper
                        aspect={item.assets[0].aspect as AspectRatio}
                        className={cx("rounded-[9px]")}
                        showRounded={false}
                      >
                        <CardImage
                          asset={item.assets[0]}
                          priority
                          sizes="(min-width: 960px) 960px, 100vw"
                        />
                      </MediaWrapper>
                    ) : null}
                  </>
                )}
              </CardInDialog>
            </MediaDialogBasic>
          </SnapCarouselItem>
        );
      }}
    />
  </Suspense>
);
