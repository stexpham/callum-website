import { cva, cx, compose, type VariantProps } from "cva";
import type { ComponentProps } from "react";
import { Caption } from "./caption";
import {
  MediaWrapper,
  mediaWrapperVariants,
  type MediaWrapperProps,
} from "./media-wrapper2";

const mediaFigureVariants = cva({
  base: "MediaFigure relative space-y-w4",
  variants: {
    figureIntent: {
      inDialog: "hover:cursor-zoom-in",
      inMdx: "py-w8 first:pt-0",
    },
    showHoverCursor: {
      true: "hover:cursor-zoom-in",
    },
  },
});

const mediaFigure = compose(mediaWrapperVariants, mediaFigureVariants);

type MediaFigureVariantProps = VariantProps<typeof mediaFigure>;

interface MediaFigureProps
  extends ComponentProps<"figure">,
    MediaFigureVariantProps {
  caption?: string | React.ReactNode;
  mediaFigureClassName?: string;
  wrapperProps?: Omit<MediaWrapperProps, keyof MediaFigureVariantProps> & {
    isPortrait?: boolean;
  };
}

const MediaFigure = ({
  caption,
  mediaFigureClassName,
  intent,
  wrapperProps,
  children,
  ...props
}: MediaFigureProps) => (
  <figure className={cx(mediaFigureVariants(props), mediaFigureClassName)}>
    <MediaWrapper intent={intent} {...wrapperProps}>
      {children}
    </MediaWrapper>
    {caption ? (
      <Caption
        className={cx(
          mediaWrapperVariants({
            intent,
            border: false,
            background: false,
            rounded: false,
          })
        )}
      >
        {caption}
      </Caption>
    ) : null}
  </figure>
);

export { MediaFigure, mediaFigureVariants, type MediaFigureProps };
