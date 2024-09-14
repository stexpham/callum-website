import { cx } from "cva";
import { Caption } from "./caption";
// import type { AspectRatio } from "./media-aspect";
// import { mediaAspect } from "./media-aspect";
// import type { MediaWrapperProps, MediaFigureProps } from "./media-types";
import type { MediaTheme } from "./media-types";

export interface MediaWrapperProps {
  theme?: MediaTheme;

  showBorder?: boolean;
  showBackground?: boolean;
  showRounded?: boolean;
  darkSchemeInvert?: boolean;

  className?: string;
  aspectRatioStyle?: string;

  children?: React.ReactNode;
}

export interface MediaFigureProps extends MediaWrapperProps {
  id?: string;
  caption?: string | React.ReactNode;
  mediaFigureClassName?: string;
}

const MediaWrapper = ({
  theme = "default",
  showBorder = true,
  showBackground = true,
  showRounded = true,
  className,
  aspectRatioStyle,
  children,
}: MediaWrapperProps) => (
  <div
    className={cx(
      "MediaWrapper",
      mediaWrapperStyle.base,
      showRounded && mediaWrapperStyle.rounded,
      showBackground && mediaWrapperStyle.background,
      showBorder && mediaWrapperStyle.border,
      theme === "mobileInset" ? mediaWrapperStyle.mobileInset : "",
      theme === "outset" ? mediaWrapperStyle.outset : "",
      theme === "superOutset" ? mediaWrapperStyle.superOutset : "",
      className
    )}
    style={{
      aspectRatio: aspectRatioStyle,
    }}
  >
    {children}
  </div>
);

// MediaFigure adds a caption to MediaWrapper for ease of use in MDX
const MediaFigure = ({
  id,
  theme,
  caption,
  showBorder,
  showBackground = true,
  showRounded = true,
  darkSchemeInvert,
  mediaFigureClassName,
  className,
  aspectRatioStyle,
  children,
}: MediaFigureProps) => (
  <figure className={cx(figureStyle, mediaFigureClassName)} id={id}>
    <MediaWrapper
      aspectRatioStyle={aspectRatioStyle}
      className={cx(darkSchemeInvert && "dark-scheme-invert", className)}
      showBackground={showBackground}
      showBorder={showBorder}
      showRounded={showRounded}
      theme={theme}
    >
      {children}
    </MediaWrapper>
    {caption ? (
      <Caption
        className={cx(
          theme === "mobileInset" ? mediaWrapperStyle.mobileInset : "",
          theme === "outset" ? mediaWrapperStyle.outset : "",
          theme === "superOutset" ? mediaWrapperStyle.superOutset : ""
        )}
      >
        {caption}
      </Caption>
    ) : null}
  </figure>
);

const figureStyle = "Figure py-w4 first:pb-w4 first:pt-0 relative space-y-w4";

const mediaWrapperStyle = {
  base: "relative overflow-hidden",
  border: "border",
  background: "bg-background-active",
  rounded: "sm:rounded-button",
  // outsets
  // [@media(min-width:620px)]:!w-[380px]
  // mobileInset: "mx-[calc(var(--container-text)-430px)/2))]",
  // mobileInset: "mx-[calc((620px-430px) / 2))]",
  mobileInset: "mx-auto max-w-[280px]",
  outset: "-mx-inset md:mx-[-3vw]",
  superOutset:
    "-mx-inset lg:mx-[calc((theme(maxWidth.hero)-theme(maxWidth.text)-theme(spacing.inset))/2*-1)]",
  // caption: escape outsets
  counterOutset: "px-inset md:px-[3vw]",
  counterSuperOutset:
    "px-inset lg:px-[calc((100vw-theme(maxWidth.hero)-theme(spacing.inset))/2)]",
};

export { MediaWrapper, MediaFigure, mediaWrapperStyle, figureStyle };
