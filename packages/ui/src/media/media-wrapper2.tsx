import { cva, cx, type VariantProps } from "cva";
import type { ComponentProps } from "react";

const mediaWrapperVariants = cva({
  base: [
    // do NOT add w-full! This would mean the outset styles don't work
    "MediaWrapper relative overflow-hidden",
    "flex flex-col justify-center",
  ],
  variants: {
    intent: {
      mobileInset: "mx-auto max-w-[280px]",
      outset: "-mx-inset md:mx-[-3vw]",
      superOutset: [
        "-mx-inset",
        "lg:mx-[calc((theme(maxWidth.hero)-theme(maxWidth.text)-theme(spacing.inset))/2*-1)] lg:w-hero",
      ],
    },
    border: {
      true: "border",
    },
    background: {
      true: "bg-background-active",
    },
    rounded: {
      true: "sm:rounded-button",
    },
    darkSchemeInvert: {
      true: "dark-scheme-invert",
    },
    isPortrait: {
      true: "max-h-[70vh]",
    },
  },
  compoundVariants: [
    {
      isPortrait: true,
      className:
        "[&_img]:max-w-fit [&_img]:h-[-webkit-fill-available] [&_img]:mx-auto !border-none",
    },
    {
      isPortrait: false,
      className: "[&_img]:w-full",
    },
  ],
  defaultVariants: {
    border: true,
    background: true,
    rounded: true,
  },
});

interface MediaWrapperProps
  extends ComponentProps<"div">,
    VariantProps<typeof mediaWrapperVariants> {
  aspectRatioStyle?: string;
}

const MediaWrapper = ({
  intent,
  border,
  background,
  rounded,
  darkSchemeInvert,
  isPortrait,
  className,
  aspectRatioStyle,
  children,
  ...props
}: MediaWrapperProps) => {
  return (
    <div
      {...props}
      className={cx(
        mediaWrapperVariants({
          intent,
          border,
          background,
          rounded,
          darkSchemeInvert,
          isPortrait,
          className,
        })
      )}
      style={{
        aspectRatio: aspectRatioStyle,
      }}
    >
      {children}
    </div>
  );
};

export { MediaWrapper, mediaWrapperVariants, type MediaWrapperProps };
