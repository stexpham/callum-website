import type { AspectRatio } from "./media-aspect";

export type MediaTheme =
  | "inset"
  | "mobileInset"
  | "outset"
  | "superOutset"
  | "default";

export interface MediaWrapperProps {
  aspect: AspectRatio;
  theme?: MediaTheme;

  showBorder?: boolean;
  showBackground?: boolean;
  showRounded?: boolean;
  darkSchemeInvert?: boolean;

  className?: string;
  children?: React.ReactNode;
}

export type MediaFigureProps = MediaWrapperProps & {
  id?: string;
  caption?: string | React.ReactNode;
};
