"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  DialogBasic,
  SnapCarousel,
  SnapCarouselItem,
} from "@repo/ui/composites";
import { mediaWrapperVariants } from "@repo/ui/media";
import { cx } from "cva";
import { Fragment, Suspense } from "react";
import { CardImage, SnapCard } from "@/components/card";
import { DialogCardCaption } from "./dialog-card-caption";
import type { CustomPost } from "./extra-card";
import { homeCarouselStyles } from "./home-carousel-styles";
import {
  HomeSnapDialogClose,
  SnapCarouselInDialog,
} from "./snap-carousel-in-dialog";

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
                className={cx(snapCardStyle)}
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
            <DialogBasic
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
              contentClassName={cx(
                "!px-0",
                showDialogCarousel
                  ? "!left-0 !block !max-w-[unset] !translate-x-0"
                  : "max-w-hero [@media(max-width:1000px)]:max-w-inset-full"
              )}
              title={item.title}
            >
              <Fragment key={item.title}>
                {item.assets && item.assets.length > 1 ? (
                  <SnapCarouselInDialog assets={item.assets} />
                ) : (
                  <>
                    {item.assets && item.assets.length === 1 ? (
                      <CardImage
                        asset={item.assets[0]}
                        className={cx(
                          mediaWrapperVariants({
                            border: item.assets[0].border as boolean,
                            rounded: false,
                          }),
                          "rounded-card",
                          "max-w-hero",
                          "[@media(max-width:1000px)]:max-w-inset-full"
                        )}
                        priority
                        sizes="(min-width: 960px) 960px, 100vw"
                      />
                    ) : null}
                  </>
                )}
              </Fragment>
              <DialogCardCaption
                className={cx(
                  // do NOT use container here as we do NOT want w-full!
                  "mx-auto px-inset max-w-hero-px pt-inset"
                )}
                closeNode={
                  !showDialogCarousel && (
                    <div className="absolute right-0 top-0">
                      <HomeSnapDialogClose />
                    </div>
                  )
                }
                innerClassName={cx(!showDialogCarousel && "-mx-inset")}
                post={item}
              />
            </DialogBasic>
          </SnapCarouselItem>
        );
      }}
    />
  </Suspense>
);
