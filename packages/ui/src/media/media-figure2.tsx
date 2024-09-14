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
      inDialogTrigger: "hover:cursor-zoom-in",
      inMdx: "py-w8 first:pt-0",
    },
  },
});

const mediaFigure = compose(mediaWrapperVariants, mediaFigureVariants);

type MediaFigureVariantProps = VariantProps<typeof mediaFigure>;

interface MediaFigureProps
  extends ComponentProps<"figure">,
    MediaFigureVariantProps {
  caption?: string | React.ReactNode;
  wrapperProps?: Omit<MediaWrapperProps, keyof MediaFigureVariantProps> & {
    isPortrait?: boolean;
  };
}

const MediaFigure = ({
  caption,
  intent,
  wrapperProps,
  children,
  ...props
}: MediaFigureProps) => (
  <figure className={cx(mediaFigureVariants(props))}>
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
