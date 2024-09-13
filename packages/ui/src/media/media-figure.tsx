import { cx } from "cva";
import { Caption } from "./caption";
import { MediaWrapper } from "./media-wrapper";
import type { AspectRatio } from "./media-aspect";
import type { MediaFigureProps } from "./media.type";

export const figureStyle =
  "Figure py-w4 first:pb-w4 first:pt-0 relative space-y-w4";

export const MediaFigure = ({
  children,
  id,
  caption,
  theme,
  aspect,
  showBorder,
  showBackground = true,
  showRounded = true,
  darkSchemeInvert,
  className,
}: MediaFigureProps) => (
  <figure className={cx(figureStyle, className)} id={id}>
    <MediaWrapper
      aspect={aspect as AspectRatio}
      className={cx(darkSchemeInvert && "dark-scheme-invert")}
      showBackground={showBackground}
      showBorder={showBorder}
      showRounded={showRounded}
      theme={theme}
    >
      {children}
    </MediaWrapper>
    {caption ? <Caption>{caption}</Caption> : null}
  </figure>
);
