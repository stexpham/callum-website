"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import {
  DialogClose,
  SnapCarousel,
  SnapCarouselItem,
  snapCarouselStyles,
} from "@repo/ui/composites";
import type { AspectRatio } from "@repo/ui/media";
import { MediaWrapper } from "@repo/ui/media";
import { cx } from "cva";
import { useEffect } from "react";
import type { Asset } from "contentlayer/generated";
import { CardImage } from "@/components/card/card-image";
import {
  dialogCarouselStyles,
  homeCarouselStyles,
} from "./home-carousel-styles";

interface SnapCarouselInDialogProps {
  assets: Asset[];
}

export const SnapCarouselInDialog = ({ assets }: SnapCarouselInDialogProps) => {
  useEffect(() => {
    // programmatically trigger a resize event to ensure the carousel's layout is properly computed
    const triggerResize = () => {
      window.dispatchEvent(new Event("resize"));
    };

    // Trigger resize immediately doesn't work…
    // triggerResize();
    // Trigger resize after a short delay
    const timer = setTimeout(triggerResize, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SnapCarousel
      classes={{
        rootClassName: cx(dialogCarouselStyles.root),
        scrollClassName: cx(dialogCarouselStyles.scroll),
        controlsClassName: cx(
          homeCarouselStyles.control,
          dialogCarouselStyles.control
        ),
      }}
      controlNode={<HomeSnapDialogClose />}
      items={assets}
      renderItem={({ item, index, isSnapPoint, isActive }) => (
        <SnapCarouselItem
          isActive={isActive}
          isSnapPoint={isSnapPoint}
          key={item.src}
        >
          <MediaWrapper
            aspect={item.aspect as AspectRatio}
            className={cx(
              "h-full w-full rounded-[9px]",
              "max-w-hero",
              "[@media(max-width:1000px)]:max-w-inset-full"
            )}
            showBorder={item.showBorder}
            showRounded={false}
          >
            <CardImage asset={item} priority={index === 0} />
          </MediaWrapper>
        </SnapCarouselItem>
      )}
    />
  );
};

export const HomeSnapDialogClose = () => (
  <DialogClose className={cx(snapCarouselStyles.nextPrevButton)}>
    <div className={cx(snapCarouselStyles.caret)}>
      <Cross2Icon className="size-[1.25em]" />
      <span className="sr-only">Close</span>
    </div>
  </DialogClose>
);
