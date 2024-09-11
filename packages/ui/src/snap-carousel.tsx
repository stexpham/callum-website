"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cx } from "cva";
import React, { useCallback } from "react";
import { useSnapCarousel } from "react-snap-carousel";

type CustomClasses = Partial<{
  rootClassName?: string;
  scrollClassName?: string;
  controlsClassName?: string;
  nextPrevButtonClassName?: string;
}>;

interface SnapCarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (
    props: SnapCarouselRenderItemProps<T>
  ) => React.ReactElement<SnapCarouselItemProps>;
  controlNode?: React.ReactNode;
  classes?: CustomClasses;
}

interface SnapCarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
  readonly isActive: boolean;
  readonly index: number;
}

export const SnapCarousel = <T extends Record<string, unknown>>({
  items,
  renderItem,
  controlNode,
  classes = {},
}: SnapCarouselProps<T>) => {
  const { scrollRef, pages, activePageIndex, prev, next, snapPointIndexes } =
    useSnapCarousel();
  const carouselClasses = useCarouselClasses(classes);

  const renderControls = useCallback(
    () => (
      <div
        aria-hidden
        aria-label="Carousel controls"
        className={carouselClasses.controls}
      >
        <button
          className={cx(
            carouselClasses.nextPrevButton,
            carouselClasses.prevButton,
            activePageIndex <= 0 && carouselClasses.nextPrevButtonDisabled
          )}
          disabled={activePageIndex <= 0}
          // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -- be simple!
          onClick={() => prev()}
          type="button"
        >
          <div className={cx(carouselClasses.caret, carouselClasses.caretPrev)}>
            <ChevronLeftIcon className="size-[1.25em]" />
          </div>
        </button>
        {/* {pages.map((_, i) => (
        <button
          key={i}
          className={cx(
            snapCarouselStyles.paginationButton,
            activePageIndex === i ? snapCarouselStyles.paginationButtonActive : "",
            activePageIndex === 0 && "!opacity-0"
          )}
          onClick={() => goTo(i)}
        >
          {i + 1}
        </button>
      ))} */}
        <button
          className={cx(
            carouselClasses.nextPrevButton,
            carouselClasses.nextButton,
            activePageIndex === pages.length - 1 &&
              carouselClasses.nextPrevButtonDisabled
          )}
          disabled={activePageIndex === pages.length - 1}
          // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -- be simple!
          onClick={() => next()}
          type="button"
        >
          <div className={cx(carouselClasses.caret, carouselClasses.caretNext)}>
            <ChevronRightIcon className="size-[1.25em]" />
          </div>
        </button>
        {controlNode}
      </div>
    ),
    [activePageIndex, controlNode, pages.length, prev, next, carouselClasses]
  );

  return (
    <div className={carouselClasses.root}>
      <ul
        className={cx(snapCarouselStyles.scroll, carouselClasses.scroll)}
        ref={scrollRef}
      >
        {items.map((item, i) =>
          renderItem({
            item,
            index: i,
            isSnapPoint: snapPointIndexes.has(i),
            isActive: i === activePageIndex,
          })
        )}
      </ul>

      {/* CONTROLS */}
      {renderControls()}
    </div>
  );
};

export interface SnapCarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly isActive: boolean;
  readonly children?: React.ReactNode;
  itemClassName?: string;
  activeClassName?: string;
}

export const SnapCarouselItem = ({
  isSnapPoint,
  isActive,
  children,
  itemClassName,
  activeClassName,
}: SnapCarouselItemProps) => (
  <li
    className={cx(
      snapCarouselStyles.item,
      itemClassName,
      isSnapPoint ? snapCarouselStyles.itemSnapPoint : "",
      isActive ? activeClassName : ""
    )}
  >
    {children}
  </li>
);

export const snapCarouselStyles = {
  // overflow-hidden
  root: "relative flex",
  // overscroll-contain will prevent y-scrolling when cursor is over carousel
  // overflow-x-auto overflow-y-hidden
  // use grid to assert item size!
  scroll: [
    "overflow-scroll snap-x snap-mandatory will-change-scroll hide-scrollbar",
    "grid grid-rows-1 grid-cols-[max-content] grid-flow-col gap-inset",
    "w-fit",
  ],
  // w-64 h-64 h-auto w-auto
  item: "shrink-0 snap-start",
  // unsure why snap alignment has to be conditional?
  // itemSnapPoint: ["snap-start"],
  itemSnapPoint: "",
  controls: [
    // no default co-ords! inset-0
    "absolute pointer-events-none flex justify-between items-center",
  ],
  // Next/prev buttons are 50% of the width of the carousel
  // set with a z-index above the card button
  // absolute w-1/5 h-full opacity-50 hover:opacity-100
  nextPrevButton: [
    "group",
    // "absolute inset-y-0 h-full w-[calc((100vw-840px)/2)]",
    "flex items-center justify-center z-10 pointer-events-auto",
  ],
  prevButton: "group/prev",
  nextButton: "group/next right-0",
  nextPrevButtonDisabled: ["opacity-30"],
  caret: [
    "flex items-center justify-center",
    "size-[2em] rounded-full bg-border text-fill hover:bg-border-hover",
    "transition-transform duration-150 ease-in-out transform",
  ],
  caretPrev: "", // group-hover/prev:-translate-x-1
  caretNext: "justify-end", // group-hover/next:translate-x-1
};

// Custom hook for managing classes
const useCarouselClasses = (customClasses: CustomClasses) => {
  return {
    root: cx(snapCarouselStyles.root, customClasses.rootClassName),
    scroll: cx(snapCarouselStyles.scroll, customClasses.scrollClassName),
    controls: cx(snapCarouselStyles.controls, customClasses.controlsClassName),
    nextPrevButton: cx(
      snapCarouselStyles.nextPrevButton,
      customClasses.nextPrevButtonClassName
    ),
    prevButton: snapCarouselStyles.prevButton,
    nextButton: snapCarouselStyles.nextButton,
    nextPrevButtonDisabled: snapCarouselStyles.nextPrevButtonDisabled,
    caret: snapCarouselStyles.caret,
    caretPrev: snapCarouselStyles.caretPrev,
    caretNext: snapCarouselStyles.caretNext,
  };
};
