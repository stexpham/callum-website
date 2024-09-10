export const homeCarouselStyles = {
  root: "HomeSnapCarousel",
  scroll: [
    // "mask" ?
    "scroll-px-inset [@media(min-width:620px)]:scroll-px-inset-text",
    "px-inset [@media(min-width:620px)]:px-inset-text",
  ],
  control: [
    "gap-1.5 md:gap-3 !justify-end",
    "[@media(max-width:1000px)]:bottom-[calc((2.5em)*-1)] bottom-[calc((2em+var(--space-inset))*-1)]", // text is ~2em high
    "[@media(max-width:1000px)]:right-inset right-[var(--inset-hero)]",
    // "right-[minmax(20px,var(--inset-hero))]",
  ],
};

export const dialogCarouselStyles = {
  root: "SnapCarouselInDialog",
  scroll: [
    "scroll-px-inset [@media(min-width:1000px)]:scroll-px-inset-hero",
    "px-inset [@media(min-width:1000px)]:px-inset-hero",
  ],
  control: "!bottom-[calc((2em+var(--space-inset))*-1)]",
};
